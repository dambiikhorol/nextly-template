import { EmailTemplate } from '../../components/email';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, message } = JSON.parse(req.body);

    const data = await resend.emails.send({
        from: `contactform@coretech.asia`,
        to: `is12d013@csms.edu.mn`,
        subject: "🎉New submission to your contact form!",
        html: "",
        react: EmailTemplate({ name, email, message })
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};