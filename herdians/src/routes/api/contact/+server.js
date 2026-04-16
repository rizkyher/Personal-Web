// src/routes/api/contact/+server.js
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private'; // SvelteKit aman membaca .env

export async function POST({ request }) {
    try {
        const { name, email, subject, message } = await request.json();

        // Konfigurasi Server Pengirim (Nodemailer)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        // Konten Email
        const mailOptions = {
            from: `"${name}" <${email}>`, // Nama pengirim di inbox Anda
            to: EMAIL_USER, // Dikirim ke email Anda sendiri
            replyTo: email, // Jika Anda klik 'Reply', otomatis membalas ke pengirim
            subject: `Portfolio Inisiasi: ${subject || 'Proyek Baru'}`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; background: #f4f5f7; border-radius: 10px;">
                    <h2 style="color: #2A4D88;">Pesan Baru dari Portfolio</h2>
                    <p><strong>Nama:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <div style="background: white; padding: 15px; border-radius: 5px; margin-top: 15px;">
                        <p style="margin:0;">${message.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            `
        };

        // Kirim Email
        await transporter.sendMail(mailOptions);
        return json({ success: true, message: 'Email berhasil terkirim.' }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return json({ success: false, message: 'Gagal mengirim email server.' }, { status: 500 });
    }
}