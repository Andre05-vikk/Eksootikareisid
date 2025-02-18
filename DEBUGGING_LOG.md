## Eksootikareisid Development Log

### Database-Driven Translations Implementation

**Database Schema**:
```sql
-- Languages table
CREATE TABLE languages (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_default BOOLEAN DEFAULT false
);

-- Content table
CREATE TABLE content (
    id CHAR(36) PRIMARY KEY,
    key_name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Translations table
CREATE TABLE translations (
    id CHAR(36) PRIMARY KEY,
    content_id CHAR(36),
    language_id VARCHAR(10),
    value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (content_id) REFERENCES content(id),
    FOREIGN KEY (language_id) REFERENCES languages(id)
);
```

**Next Steps**:
1. Create API endpoints for translations:
   - GET /api/translations?lang=et
   - POST /api/translations (admin)
   - PUT /api/translations/:id (admin)

2. Build admin interface:
   - Translation management dashboard
   - Add/edit translations
   - Language switching

3. Frontend implementation:
   - Language selector component
   - Dynamic content loading
   - Fallback handling
Previous approaches using static JSON files and i18next were not suitable for a dynamic website where:
- Administrators need to add/modify content
- Content needs to be automatically available in all languages
- Changes should be reflected immediately without manual file editing

**New Solution Plan**:
1. Database Schema:
   - Content table: store base content
   - Translations table: store translations for each content item
   - Languages table: manage supported languages

2. Admin Features:
   - Add/edit content in any language
   - Automatic tracking of missing translations
   - Simple interface for managing translations

3. Frontend Features:
   - Dynamic content loading based on selected language
   - Fallback to default language if translation missing
   - Smooth language switching without page reload

### Previous Attempts (Archived)

The following approaches were tried but abandoned due to limitations with dynamic content:

### Issue 4: Persistent Hydration Issues
**Problem**: Still getting hydration mismatch even with client/server split
```
Hydration failed because the server rendered HTML didn't match the client
+  Tere tulemast Eksootikareisid
-  home.welcome
```

**Root Cause Analysis**:
- Even with client components, the initial server render doesn't have translations
- When client hydrates, it loads translations and causes a mismatch

**New Approach to Try**:
1. Pre-load translations on the server
2. Pass them as props to client components
3. Use static translation loading instead of dynamic
4. Consider using next-intl instead of i18next

**Learning**:
- Simply moving components to client-side isn't enough
- Need to ensure initial render matches hydration

### Issue 3: React Context in Server Components
**Problem**: Cannot create React context in server components
```
TypeError: (0 , {imported module}).createContext is not a function
```

**Root Cause**:
- Server components cannot use React hooks or context
- I18nextProvider tries to create context on the server

**Attempted Solution**:
- Split components into server and client parts
- Move I18nextProvider to client components

**Next Steps**:
- Need to restructure how we provide i18n context
- Keep all React context usage in client components only

### Issue 1: Hydration Mismatch
**Problem**: Server-rendered content doesn't match client-rendered content
```
Hydration failed because the server rendered HTML didn't match the client
+  Tere tulemast Eksootikareisid
-  home.welcome
```

**Failed Solutions**:
1. Using client-side only initialization with `'use client'` directive
   - Led to translation keys showing instead of translated content
   - Caused hydration mismatches

2. Using `mounted` state in components
   - Caused flash of untranslated content
   - Didn't solve the root hydration issue

3. Using async/await in client components
   ```
   Error: async/await is not yet supported in Client Components, only Server Components
   ```
   - Next.js doesn't support async operations in client components

4. Mixing client and server components in the same file
   - Caused hydration mismatches when using translations
   - Led to inconsistent rendering between server and client

**Current Working Solution**:
- Keep i18n initialization on the server side
- Use separate providers for server and client:
  1. Server-side `I18nProvider` for initial setup
  2. Client-side `TranslationsProvider` for language switching
- Split components into server and client parts:
  1. Server components (e.g., `page.tsx`) for layout and structure
  2. Client components (e.g., `HomeContent.tsx`) for interactive elements and translations
- Avoid mixing async operations in client components

### Issue 2: File System Access
**Problem**: Can't use `fs` module in client components
```
Module not found: Can't resolve 'fs'
```

**Failed Solutions**:
1. Direct file system access in client components
   - Next.js doesn't allow `fs` module in client-side code

**Working Solution**:
- Use HTTP requests to fetch translation files
- Store translations in `public/locales` directory
- Access via URL paths instead of file system

### Key Learnings:
1. Keep clear separation between server and client components
2. Don't mix async operations in client components
3. Use HTTP requests instead of file system access for client-side data
4. Handle hydration carefully by ensuring server and client render the same content initially
5. Split interactive components into separate client-side files
