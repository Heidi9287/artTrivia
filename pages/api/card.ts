import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("hit there")
  const client = new Client({
    database: 'forsal',
    port: 5432 // default PostgreSQL port number
  });
console.log("hit here")
  try {
    await client.connect();
    console.log('Connected to database');

    const result = await client.query('SELECT * FROM cards');
    const fetchedData = result.rows;
    // using the client.query() method
    // send the data back as a JSON response
    res.json({
      data: fetchedData
    });
  } catch (error) {
    console.error('Error connecting to database', error);
    console.log('Environment Variables:', process.env);
console.log('Database Connection Details:');
    res.status(500).json({
      error: 'Internal server error is this the reason'
    });
  } finally {
    await client.end();
    console.log('Disconnected from database');
  }
}

