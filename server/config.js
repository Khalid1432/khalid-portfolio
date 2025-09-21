import 'dotenv/config';


export const config = {
port: process.env.PORT || 5000,
mongoUri: process.env.MONGODB_URI,
corsOrigin: process.env.CORS_ORIGIN || '*',
smtp: {
host: process.env.SMTP_HOST,
port: Number(process.env.SMTP_PORT || 587),
user: process.env.SMTP_USER,
pass: process.env.SMTP_PASS,
},
receiver: process.env.RECEIVER_EMAIL,
};