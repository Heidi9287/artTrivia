import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const client = new Client({
    database: 'forsal',
    port: 5432 // default PostgreSQL port number
  });

  try {  console.log('API route is called');
    await client.connect();
    console.log('Connected to database');

    const result = await client.query('SELECT * FROM cards');
    const fetchedData = result.rows;
    // using the client.query() method
    // send the data back as a JSON response
    res.json({
      data: fetchedData
    });
  } catch (error) { console.error('Error in API route:', error);
    res.status(500).json({
      error: 'Internal server error is this the reason'
    });
  } finally {
    await client.end();
    console.log('Disconnected from database');
  }
}

