import mysql from 'mysql2/promise';

export async function createConnection() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'eksootika_user',
    password: 'eksootika123',
    database: 'eksootikareisid_db'
  });
}

export async function query(sql: string, params: any[] = []) {
  const connection = await createConnection();
  try {
    const [results] = await connection.execute(sql, params);
    return results;
  } finally {
    await connection.end();
  }
}
