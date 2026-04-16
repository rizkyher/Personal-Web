// src/routes/api/contact/+server.js
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export async function POST({ request }) {
    try {
        // 1. Ambil data dari request
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validasi data kosong
        if (!name || !email || !message) {
            return json({ success: false, message: 'Nama, Email, dan Pesan wajib diisi.' }, { status: 400 });
        }

        // 2. Cek apakah Env Variable terbaca oleh Vercel
        if (!EMAIL_USER || !EMAIL_PASS) {
            console.error("CRITICAL ERROR: Environment variables EMAIL_USER atau EMAIL_PASS hilang di Vercel.");
            return json({ success: false, message: 'Konfigurasi server bermasalah.' }, { status: 500 });
        }

        // 3. Konfigurasi Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL_USER,
                pass: EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: EMAIL_USER,
            replyTo: email,
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

        // 4. Kirim email
        await transporter.sendMail(mailOptions);
        
        return json({ success: true, message: 'Email berhasil terkirim.' }, { status: 200 });

    } catch (error) {
        // Log error ini akan muncul di tab "Logs" Vercel
        console.error('Error pengiriman email:', error);
        return json({ 
            success: false, 
            message: 'Gagal mengirim email server.',
            errorDetail: error.message // Memberikan detail error ke jaringan
        }, { status: 500 });
    }
}