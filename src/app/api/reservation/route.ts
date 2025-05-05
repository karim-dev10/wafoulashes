import { NextRequest, NextResponse } from 'next/server';
import { Client } from 'pg';
import { Resend } from 'resend';
import { randomUUID } from 'crypto';

// Connexion PostgreSQL
const createClient = () =>
  new Client({
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  });

export async function POST(req: NextRequest) {
  const { firstname, lastname, phone, email, date, hour, prestation } = await req.json();
  const client = createClient();

  try {
    const token = randomUUID();
    await client.connect();

    await client.query(
      'INSERT INTO reservations (firstname, lastname, phone, email, date, hour, prestation, token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [firstname, lastname, phone, email, date, hour, prestation, token]
    );

    const resend = new Resend(process.env.RESEND_API_KEY);

    const dateObj = new Date(`${date}T${hour}`);
    const formattedDate = dateObj.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'long',
    });
    const formattedHour = dateObj.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const result = await resend.emails.send({
      from: 'contact@wafoulashes.fr',
      to: email,
      subject: 'Confirmation de votre réservation',
      html: `
        <p>Bonjour ${firstname},</p>
        <p>Merci pour votre réservation chez <strong>Wafoulashes</strong>.</p>
        <p><strong>Date du rendez-vous :</strong> ${formattedDate} à ${formattedHour}</p>
        <p>Veuillez confirmer votre rendez-vous en cliquant sur le lien ci-dessous :</p>
        <p><a href="https://wafoulashes.fr/api/confirm?token=${token}">Confirmer ma réservation</a></p>
        <p>À très bientôt !</p>
      `,
    });

    console.log('✅ E-mail envoyé :', result);

    await client.end();
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('❌ Erreur POST réservation :', error);
    return NextResponse.json(
      { success: false, error: 'Erreur lors de l’enregistrement' },
      { status: 500 }
    );
  }
}
