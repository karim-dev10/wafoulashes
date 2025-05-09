import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  try {
    await resend.emails.send({
      from: 'contact@wafoulashes.fr',
      to: 'wafa.taslimant@outlook.com',
      subject: `Message de contact : ${name}`,
      replyTo: email,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong><br/>${message}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erreur Resend contact:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
