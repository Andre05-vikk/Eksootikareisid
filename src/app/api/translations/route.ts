import { NextRequest, NextResponse } from 'next/server';
import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const query = async (sql: string, values?: any[]) => {
  const [rows] = await pool.execute(sql, values);
  return rows;
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const lang = searchParams.get('lang') || 'et';

  try {
    const translations = await query(`
      SELECT c.key_name, t.value
      FROM content c
      LEFT JOIN translations t ON c.id = t.content_id
      WHERE t.language_id = ?
    `, [lang]);

    return NextResponse.json({ translations });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { key_name, type, translations } = body;

    // Insert content
    const contentResult: any = await query(
      'INSERT INTO content (id, key_name, type) VALUES (UUID(), ?, ?)',
      [key_name, type]
    );

    // Get the generated content ID
    const contentId = contentResult.insertId;

    // Insert translations
    for (const [langId, value] of Object.entries(translations)) {
      await query(
        'INSERT INTO translations (id, content_id, language_id, value) VALUES (UUID(), ?, ?, ?)',
        [contentId, langId, value]
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { content_id, translations } = body;

    // Update translations
    for (const [langId, value] of Object.entries(translations)) {
      await query(
        `INSERT INTO translations (id, content_id, language_id, value)
         VALUES (UUID(), ?, ?, ?)
         ON DUPLICATE KEY UPDATE value = ?`,
        [content_id, langId, value, value]
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
