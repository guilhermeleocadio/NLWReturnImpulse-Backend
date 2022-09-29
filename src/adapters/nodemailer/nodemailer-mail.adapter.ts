import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d03130a910e96c",
      pass: "acacc09c02ffde"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({ subject, body}: SendMailData){

        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget>',
            to: 'Guilherme Leocadio <guilhermeleocadio12@gmail.com>',
            subject,
            html: body,
        });

    };
}