// app/api/reservation/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';

export async function POST(req: NextRequest) {
  const { firstname, lastname, phone, date, hour, prestation } = await req.json();

  const client = new Client({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });

  try {
    await client.connect();

    await client.query(
      'INSERT INTO reservations (firstname, lastname, phone, date, hour, prestation) VALUES ($1, $2, $3, $4, $5, $6)',
      [firstname, lastname, phone, date, hour, prestation]
    );

    await client.end();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur API réservation :', error);
    return NextResponse.json({ success: false, error: 'Erreur serveur' }, { status: 500 });
  }
}
