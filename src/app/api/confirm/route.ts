import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';

// Fonction pour créer une connexion PostgreSQL
const createClient = () =>
  new Client({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    ssl: {
      rejectUnauthorized: false, // autorise SSL même sans certificat
    },
  });

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token');

  if (!token) {
    return NextResponse.json({ success: false, error: 'Token manquant' }, { status: 400 });
  }

  const client = createClient();

  try {
    await client.connect();

    // Vérifie si une réservation avec ce token existe
    const result = await client.query(
      'SELECT * FROM reservations WHERE token = $1',
      [token]
    );

    if (result.rows.length === 0) {
      await client.end();
      return NextResponse.json({ success: false, error: 'Token invalide' }, { status: 404 });
    }

    // Met à jour la réservation pour la confirmer
    await client.query(
      'UPDATE reservations SET confirmed = true WHERE token = $1',
      [token]
    );    

    await client.end();
    
    return NextResponse.redirect('https://wafoulashes.fr/thanks?status=confirmed');
    
  } catch (error) {
    console.error('Erreur GET confirm :', error);
    return NextResponse.json(
      { success: false, error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
