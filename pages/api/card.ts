import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    database: 'forsal',
    port: 5432,
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

