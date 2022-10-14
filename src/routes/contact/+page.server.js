import nodemailer from 'nodemailer'

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
       const form = await request.formData();
       const email = form.get('email');
       const name = form.get('name');
       const message = form.get('message');
       // do whatever you want to do with email and password
  
async function main(){  
let transporter = nodemailer.createTransport({
    service:"Gmail",
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
        user: 'nanwanglearningsg@gmail.com',
        pass: 'uznqowwgxxmtpwqe',
            },
        })
let mail = await transporter.sendMail({
    from:'"Nan Wang Learning Hub" <nanwanglearningsg@gmail.com>',
    to: "pyrrhonianpig@gmail.com",
   // bcc: "info@nanwanglearning.com.sg",
    subject: "Form Submitted",
    //text: "${message}",
    html:`
    Someone just submitted a form on yzc.vercel.app. Here is what they had to say.
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message:
    <blockquote>${message}</blockquote>
    </p>
    `,
}); 
    transporter.close()
    console.log('mail sent:', mail.response)
}
main().catch(console.error);
       return { 
        success: true,
        name,
    };
  
    }
  };