# Eksootikareisid - Projekti Juhend

## Kiire Alustamine

```bash
# Projekti installimine
git clone https://github.com/Andre05-vikk/Eksootikareisid.git
cd eksootikareisid
npm install

# Arenduskeskkonna käivitamine
npm run dev

# Testi käivitamine
npm run test

# Produktsiooni build
npm run build
```

## Arenduskeskkonna Nõuded
- Node.js 18.0 või uuem
- npm 9.0 või uuem
- MariaDB 10.6 või uuem

## Node.js versiooni nõue ja nvm kasutamine

See projekt vajab Node.js versiooni 20.x (soovitavalt 20.12.2). Kui Sinu masinas on muu versioon, võivad tekkida buildi- või jooksutamise vead.

Kasuta [nvm](https://github.com/nvm-sh/nvm) (Node Version Manager), et tagada õige Node.js versioon:

```sh
nvm install       # Paigaldab versiooni .nvmrc faili põhjal
nvm use           # Lülitab õigesse Node.js versiooni
```

Kui nvm puudub, paigalda see esmalt [nvm juhiste](https://github.com/nvm-sh/nvm#installing-and-updating) järgi.

## Projekti Ülevaade

Eksootikareisid on modernne reisibüroo veebileht, mis keskendub eksootiliste reiside müügile. Projekt on ehitatud kasutades kaasaegseid tehnoloogiaid ja järgib parimaid arenduspraktikaid.

### Põhifunktsionaalsused
Eksootikareisid on reisibüroo veebileht, mis võimaldab klientidel:
- Sirvida ja otsida eksootilisi reisipakette
- Broneerida reise
- Vaadata reisiinfot erinevates keeltes
- Hallata oma broneeringuid

### Tehnoloogiad

#### Frontend
- **Next.js 15**: React raamistik serveripoolse renderdamise (SSR) jaoks
- **React 19**: Kasutajaliidese ehitamiseks
- **TailwindCSS**: Stiilide ja disaini jaoks
- **TypeScript**: Tüübitud kood parema arenduskogemuse jaoks
- **date-fns**: Kuupäevade haldamiseks
- **react-i18next**: Mitmekeelsuse tugi

#### Backend
- **Next.js API Routes**: RESTful API endpoints
- **MariaDB**: Põhiline andmebaas
- **bcrypt**: Paroolide krüpteerimine
- **jsonwebtoken**: JWT autentimine

#### Tööriistad
- **ESLint**: Koodi kvaliteedi kontroll
- **Prettier**: Koodi vormindamine
- **Jest**: Unit testid
- **Cypress**: E2E testid
- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Backend**: Next.js API Routes
- **Andmebaas**: MariaDB
- **Autentimine**: MariaDB + bcrypt
- **Keeled**: et, en, ru, lv, lt

## Tehtud Tööd

### 1. Projekti Seadistamine
- [x] Next.js projekti loomine
- [x] TailwindCSS seadistamine
- [x] Põhikomponentide loomine (Layout, Navbar)
- [x] MariaDB andmebaasi seadistamine

### 2. Tõlkesüsteemi Ümberkorraldamine
- [x] Staatiliste tõlkefailide eemaldamine
- [x] Andmebaasi skeemi loomine tõlgete jaoks
- [x] Keeletabelite seadistamine

## Käimasolevad Tööd

### 1. Tõlkesüsteemi Implementeerimine
- [x] API endpointide loomine tõlgete jaoks
  - GET /api/translations?lang=et - tõlgete pärimine
  - POST /api/translations - uue tõlke lisamine
  - PUT /api/translations - tõlke uuendamine
  - GET /api/languages - keelte nimekiri
- [ ] Admin liidese loomine tõlgete haldamiseks
- [ ] Keelevaliku komponendi lisamine
- [ ] Dünaamiline tõlgete laadimine

### 2. Avalehe Arendus
- [ ] Hero sektsiooni kujundamine
- [ ] Populaarsete sihtkohtade kuvamine
- [ ] Otsingu funktsionaalsus
- [ ] Uudiskirja vorm

## Planeeritud Funktsionaalsused

### 1. Autentimine ja Kasutajad
- [x] Registreerimine ja sisselogimine
  - Modaalne kasutajaliides
  - E-posti ja parooli valideerimine
  - Turvaline paroolide krüpteerimine
  - Telefoninumbri valideerimine
- [ ] Kasutajaprofiili haldamine
- [ ] Admin kasutajate õigused

### 2. Reisipaketid
- [ ] Pakettide CRUD operatsioonid (admin)
- [ ] Pakettide otsing ja filtreerimine
- [ ] Broneerimissüsteem
- [ ] Maksete integratsioon

### 3. Admin Funktsionaalsus
- [ ] Tõlgete haldamine
- [ ] Pakettide haldamine
- [ ] Broneeringute haldamine
- [ ] Kasutajate haldamine

### 4. Kliendi Funktsionaalsus
- [ ] Broneeringute ajalugu
- [ ] Lemmikute süsteem
- [ ] Hindamised ja tagasiside
- [ ] Uudiskirja tellimus

## Disaini Põhimõtted

### Värvid
```css
/* Põhivärvid */
--primary: #FF6B00;     /* Oranž */
--secondary: #2B3467;   /* Tumesinine */
--accent: #BAD7E9;      /* Helesinine */

/* Hallid toonid */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-700: #374151;
--gray-900: #111827;
```

### Tüpograafia
- **Põhifont**: Inter
- **Pealkirjad**: font-semibold
- **Tekst**: font-normal

### Komponendid
- Ümarad nurgad (rounded-xl)
- Varjud (shadow-lg)
- Hover efektid
- Sujuvad üleminekud

### Responsiivsus
- Mobile-first lähenemine
- Breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- Puhas ja modernne välimus
- Mobiilisõbralik disain
- Kiire ja sujuv kasutajakogemus
- Selge navigatsioon
- Atraktiivsed pildid ja visuaalid

## Andmebaasi Struktuur

### Põhitabelid

```sql
-- Kasutajad
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role ENUM('user', 'admin') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX email_idx (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Reisid
CREATE TABLE trips (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    departure_city VARCHAR(100) NOT NULL,
    departure_date DATE NOT NULL,
    nights INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    available_seats INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX departure_idx (departure_city, departure_date)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Broneeringud
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    trip_id INT NOT NULL,
    user_id INT NOT NULL,
    adults INT NOT NULL,
    children INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (trip_id) REFERENCES trips(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    INDEX user_trip_idx (user_id, trip_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Tõlketabelid

```sql
-- Keeled
CREATE TABLE languages (
    id VARCHAR(2) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    native_name VARCHAR(50) NOT NULL,
    is_active BOOLEAN DEFAULT true
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tõlked
CREATE TABLE translations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    language_id VARCHAR(2) NOT NULL,
    key_name VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (language_id) REFERENCES languages(id),
    UNIQUE KEY lang_key_idx (language_id, key_name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### Olemasolevad Tabelid

```sql
-- Kasutajad
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX email_idx (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```
```sql
-- Keeled
CREATE TABLE languages (
    id VARCHAR(10) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    is_default BOOLEAN DEFAULT false
);

-- Sisu
CREATE TABLE content (
    id CHAR(36) PRIMARY KEY,
    key_name VARCHAR(255) NOT NULL UNIQUE,
    type VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tõlked
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

### Planeeritud Tabelid
- users (kasutajad)
- packages (reisipaketid)
- bookings (broneeringud)
- reviews (tagasiside)
- favorites (lemmikud)

## Järgmised Sammud
1. Tõlkesüsteemi API endpointide loomine
2. Admin liidese põhja loomine
3. Keelevaliku funktsionaalsuse lisamine
4. Reisipakettide andmebaasi struktuuri loomine

## Projekti Prioriteedid
1. Põhifunktsionaalsus (tõlked, paketid, broneerimine)
2. Admin liides
3. Kasutajate süsteem
4. Lisafunktsionaalsus (tagasiside, lemmikud jne)

## UI ja Komponentide Struktuur

### Komponentide Hierarhia
```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   └── route.ts
│   │   ├── languages/
│   │   │   └── route.ts
│   │   ├── lib/
│   │   │   ├── db.ts
│   │   │   └── jwt.ts
│   │   ├── middleware/
│   │   │   └── authMiddleware.ts
│   │   ├── swagger/
│   │   │   └── route.ts
│   │   ├── translations/
│   │   │   └── route.ts
│   │   └── users/
│   │       └── route.ts
│   ├── docs/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── privaatsuspoliitika/
│   │   └── page.tsx
│   ├── reisitingimused/
│   │   ├── anex/
│   │   │   └── page.tsx
│   │   ├── coral-travel/
│   │   │   └── page.tsx
│   │   ├── itaka/
│   │   │   └── page.tsx
│   │   ├── join-up/
│   │   │   └── page.tsx
│   │   ├── novatours/
│   │   │   └── page.tsx
│   │   ├── tez-tour/
│   │   │   └── page.tsx
│   │   └── page.tsx
├── components/
│   ├── AreaSelect/
│   │   └── index.tsx
│   ├── AuthModal.tsx
│   ├── ContinentsSection.tsx
│   ├── DepartureCalendar/
│   │   └── index.tsx
│   ├── DepartureCalendar.tsx
│   ├── DepartureCitySelect/
│   │   └── index.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LastMinuteDeals.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   ├── PopularDestinations.tsx
│   ├── RegionSelect/
│   │   └── index.tsx
│   ├── SearchEngine/
│   │   ├── components/
│   │   │   ├── AdvancedSearch/
│   │   │   │   └── index.tsx
│   │   │   ├── AreaSelect/
│   │   │   │   └── index.tsx
│   │   │   ├── DateRangePicker/
│   │   │   │   └── index.tsx
│   │   │   ├── DepartureCitySelect/
│   │   │   │   └── index.tsx
│   │   │   ├── NightsInput/
│   │   │   │   └── index.tsx
│   │   │   ├── RegionSelect/
│   │   │   │   └── index.tsx
│   │   │   └── TravelersInput/
│   │   │       └── index.tsx
│   │   └── index.tsx
├── data/
│   ├── areas.ts
│   ├── continents.ts
│   ├── departureCities.ts
│   ├── destinations.ts
│   ├── dynamicPricing.ts
│   ├── hotels.ts
│   ├── mealPlans.ts
│   ├── mockData.ts
│   ├── regions.ts
│   └── trips.ts
├── i18n/
│   └── config.ts
├── i18n.ts
├── lib/
│   ├── db/
│   │   ├── migrations/
│   │   │   ├── create_users_table.sql
│   │   │   └── initial_schema.sql
│   │   └── (tühjad või muud failid)
│   ├── db.ts
│   ├── jwt.ts
│   ├── middleware/
│   │   └── authMiddleware.ts
│   └── swagger/
│       └── swagger.ts
├── locales/
│   └── et/
│       └── common.json
├── services/
│   ├── auth/
│   │   └── authService.ts
│   └── translations/
│       └── translationService.ts
├── types/
│   ├── server-action.ts
│   └── swagger-ui.d.ts
├── utils/
│   └── imageUtils.ts
```

### Stiilide Süsteem
- **Tailwind CSS** on peamine stiilide raamistik
- Eemaldatud eraldi CSS failid (home.css, login-modal.css)
- Stiilid on defineeritud otse komponentides Tailwind klassidega
- Korduvad stiilid on defineeritud Tailwind konfiguratsioonifailis

### Tailwind Konfiguratsioon
```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#45B7D1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        display: ['Montserrat', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### Disaini Süsteem
- **Värvid**:
  - Primaar: #FF6B6B (oranž)
  - Sekundaar: #4ECDC4 (türkiis)
  - Aktsent: #45B7D1 (sinine)
  - Hall: #F8F9FA (taust)
- **Tüpograafia**:
  - Peamine font: Inter
  - Pealkirjade font: Montserrat
- **Varjud**:
  - sm: 0 1px 2px rgba(0,0,0,0.05)
  - md: 0 4px 6px rgba(0,0,0,0.1)
  - lg: 0 10px 15px rgba(0,0,0,0.1)
- **Ääred**:
  - Ümar: 0.5rem (8px)
  - Ümaramad: 1rem (16px)
  - Pill: 9999px

### Responsive Disain
- **Breakpoints**:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px
- Mobile-first lähenemine
- Fluid tüpograafia
- Paindlik grid süsteem

## Swagger / OpenAPI dokumentatsioon

Kõik projekti API endpointid, nende sisend-väljund, vead ja äriloogika on dokumenteeritud käsitsi failis [`/docs/swagger.yaml`](docs/swagger.yaml).

- **Swagger UI** on kättesaadav arenduskeskkonnas aadressil [`/docs`](/docs), mis loeb dokumentatsiooni otse failist `/swagger.yaml` (see kopeeritakse buildi/postbuild scriptiga kausta `/public`).
- IGA API muudatuse (uue endpointi, parameetri, vea vms) puhul uuenda alati ka YAML-faili!
- Kui YAML-is on muudatus, tee kindlasti `cp docs/swagger.yaml public/swagger.yaml` (või kasuta automaatset build/postbuild skripti).
- Tootmiskeskkonnas peab Swagger UI olema parooliga kaitstud või üldse mitte avalik (turvalisuse huvides).
- Järgi OpenAPI 3.1 standardit, lisa alati näidisandmed ja veakoodid.

Swaggeri täiendamiseks:
1. Ava `/docs/swagger.yaml` ja lisa/muuda vastav endpoint.
2. Kopeeri fail käsitsi või las build-skript kopeerib selle `/public/swagger.yaml` kausta.
3. Kontrolli, et Swagger UI `/docs` lehel kuvatakse muudatused korrektselt.

## Märkused ja Tähelepanekud
- Kõik tekstid peavad olema tõlgitavad
- Admin liides peab olema lihtne ja intuitiivne
- Andmebaasi muudatused dokumenteerida
- Regulaarsed varundused
- Turvalise autentimise tagamine
- Komponentide taaskasutus on prioriteet
- Järgida Tailwind CSS häid tavasid
- Hoida komponendid väikesed ja fokusseeritud
- Dokumenteerida kõik kohandatud komponendid
