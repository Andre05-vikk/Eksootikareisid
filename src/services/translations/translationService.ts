import { query } from '@/lib/db';

export interface Translation {
  key_name: string;
  value: string;
}

export async function getTranslations(lang: string = 'et'): Promise<Translation[]> {
  try {
    const translations = await query(`
      SELECT c.key_name, t.value
      FROM content c
      LEFT JOIN translations t ON c.id = t.content_id
      LEFT JOIN languages l ON t.language_id = l.id
      WHERE l.code = ?
    `, [lang]) as Translation[];
    
    return translations;
  } catch (error) {
    console.error('Error fetching translations:', error);
    throw error;
  }
}

export interface ContentTranslation {
  key_name: string;
  type: string;
  translations: Record<string, string>;
}

export async function createTranslation(data: ContentTranslation): Promise<boolean> {
  try {
    // Insert content
    const contentResult: any = await query(
      'INSERT INTO content (id, key_name, type) VALUES (UUID(), ?, ?)',
      [data.key_name, data.type]
    );

    // Get the generated content ID
    const contentId = contentResult.insertId;

    // Insert translations
    for (const [langId, value] of Object.entries(data.translations)) {
      await query(
        'INSERT INTO translations (id, content_id, language_id, value) VALUES (UUID(), ?, ?, ?)',
        [contentId, langId, value]
      );
    }

    return true;
  } catch (error) {
    console.error('Error creating translation:', error);
    throw error;
  }
}

export interface UpdateTranslation {
  content_id: string;
  translations: Record<string, string>;
}

export async function updateTranslation(data: UpdateTranslation): Promise<boolean> {
  try {
    // Update translations
    for (const [langId, value] of Object.entries(data.translations)) {
      await query(
        `INSERT INTO translations (id, content_id, language_id, value)
         VALUES (UUID(), ?, ?, ?)
         ON DUPLICATE KEY UPDATE value = ?`,
        [data.content_id, langId, value, value]
      );
    }

    return true;
  } catch (error) {
    console.error('Error updating translation:', error);
    throw error;
  }
}
