import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: '💖 Aashaa Said YES to Valentine! 💖',
        html: `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px; background: linear-gradient(135deg, #ffc2d1 0%, #fb6f92 100%); border-radius: 20px;">
                <h1 style="color: #fff; text-align: center; font-size: 32px; text-shadow: 1px 1px 8px rgba(0,0,0,0.15);">💖 She Said YES! 💖</h1>
                
                <div style="background: rgba(255,255,255,0.85); padding: 25px; border-radius: 15px; margin-top: 20px;">
                    <p style="font-size: 20px; font-weight: bold; color: #c9184a; text-align: center;">
                        Aashaa accepted your Valentine proposal! 🎉
                    </p>
                    
                    <p style="font-size: 16px; color: #4a2040; text-align: center; margin-top: 15px;">
                        Chanda said YES to Aashaa's Bro.<br/>
                        You're the luckiest Waissoo alive! ❤️
                    </p>
                </div>
                
                <p style="text-align: center; margin-top: 25px; color: #fff; font-weight: bold; font-size: 18px;">
                    Happy Valentine's Day! 💕💗💖
                </p>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: 'Email sent!' });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
