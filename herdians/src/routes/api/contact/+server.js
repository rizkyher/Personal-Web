// src/routes/api/contact/+server.js
import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASS } from '$env/static/private';

export async function POST({ request }) {
    try {
        const { name, email, subject, message } = await request.json();

        // GANTI DENGAN DOMAIN VERCEL ANDA YANG SEBENARNYA
        // Tanpa slash di akhir. Contoh: https://herdians.vercel.app
        const ORIGIN_URL = 'https://herdians.vercel.app'; 

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
            subject: `✦ Inisiasi Baru: ${subject || 'Proyek Web'}`,
            html: `
                <div style="background-color: #f4f5f7; padding: 40px 20px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333333; line-height: 1.6;">
                    
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(42, 77, 136, 0.08); border: 1px solid #e2e8f0;">
                        
                        <div style="background-color: #1e3d70; padding: 30px 30px; text-align: center;">
                            <img 
                                src="${ORIGIN_URL}/logo.png" 
                                alt="herdians" 
                                style="display: block; margin: 0 auto; border: 0; outline: none; text-decoration: none; height: 50px; width: auto;"
                                height="50"
                            />
                            <p style="margin: 15px 0 0 0; color: #7C94B8; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; font-weight: bold;">
                                New Project Initiation
                            </p>
                        </div>

                        <div style="padding: 40px 35px;">
                            <h2 style="margin: 0 0 25px 0; color: #1e3d70; font-size: 20px; font-weight: 600;">
                                Detail Klien & Topik
                            </h2>

                            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 20px; margin-bottom: 30px;">
                                <p style="margin: 0 0 15px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
                                    <span style="display: block; font-size: 11px; color: #7C94B8; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; margin-bottom: 5px;">Nama Lengkap</span>
                                    <span style="font-size: 16px; color: #1e3d70; font-weight: 600;">${name}</span>
                                </p>
                                <p style="margin: 0 0 15px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
                                    <span style="display: block; font-size: 11px; color: #7C94B8; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; margin-bottom: 5px;">Alamat Email</span>
                                    <a href="mailto:${email}" style="font-size: 16px; color: #1e3d70; font-weight: 600; text-decoration: none;">${email}</a>
                                </p>
                                <p style="margin: 0;">
                                    <span style="display: block; font-size: 11px; color: #7C94B8; text-transform: uppercase; letter-spacing: 1px; font-weight: bold; margin-bottom: 5px;">Subjek / Topik</span>
                                    <span style="font-size: 16px; color: #1e3d70; font-weight: 600;">${subject || 'Tidak ada subjek'}</span>
                                </p>
                            </div>

                            <h2 style="margin: 0 0 15px 0; color: #1e3d70; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">
                                Pesan / Deskripsi Proyek
                            </h2>
                            
                            <div style="background-color: #ffffff; padding: 25px; border-radius: 10px; border-left: 4px solid #7C94B8; box-shadow: 0 2px 10px rgba(0,0,0,0.02); border-top: 1px solid #f1f5f9; border-right: 1px solid #f1f5f9; border-bottom: 1px solid #f1f5f9; font-size: 15px; color: #475569; line-height: 1.8;">
                                ${message.replace(/\n/g, '<br>')}
                            </div>
                            
                            <div style="margin-top: 35px; text-align: center;">
                                <a href="mailto:${email}" style="display: inline-block; background-color: #1e3d70; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 50px; font-size: 14px; font-weight: bold; letter-spacing: 1px; text-transform: uppercase;">
                                    Balas Klien Ini
                        </a>
                            </div>
                        </div>

                        <div style="background-color: #f8fafc; padding: 25px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                                Dikirim otomatis dari sistem portofolio <strong>rherdians</strong>.<br>
                                ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta', dateStyle: 'full', timeStyle: 'short' })} WIB
                            </p>
                        </div>

                    </div>
                    
                </div>
            `
        };

        await transporter.sendMail(mailOptions);
        return json({ success: true, message: 'Email berhasil terkirim.' }, { status: 200 });

    } catch (error) {
        console.error('Error:', error);
        return json({ success: false, message: 'Gagal mengirim email server.' }, { status: 500 });
    }
}