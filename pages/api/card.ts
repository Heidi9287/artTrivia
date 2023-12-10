import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    database: 'dlg6hri8pkgt7',
    port: 5432,
    password:"317ef7ff9b6910763fc1117b0b4ea51b3631077ac0dd38c86ac63a28f652ad28",
    user:"ndgyvstbhoyhnj"

  });

  try {
    console.log('API route is called here');
    await client.connect();
    console.log('Connected to database');
    const result = await client.query('SELECT * FROM cards');
    const fetchedData = result.rows;
    res.json({
      data: fetchedData,
    });
  } catch (error:any) {
    console.error('Error in API route:', error);

    // Log additional information about the error
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);

    res.status(500).json({
      error: 'Internal server error',
    });
  } finally {
    await client.end();
    console.log('Disconnected from database');
  }
}

