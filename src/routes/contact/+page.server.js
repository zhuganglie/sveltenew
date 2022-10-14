import nodemailer from 'nodemailer'

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request }) => {
       const form = await request.formData();
       const email = form.get('email');
       const name = form.get('name');
       const message = form.get('message');
       // do whatever you want to do with email and password
    
let transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure: false,
    auth:{
        user:'import.meta.env.VITE_MAIL_USER',
        pass: 'import.meta.env.VITE_MAIL_PASS',
            },
        })
let mail = {
    from:'"Nan Wang Learning Hub" <nanwanglearningsg@gmail.com>',
    to: "info@nanwanglearning.com.sg",
    bcc: "${email}",
    subject: "Form Submitted",
    //text: "${message}",
    html:`
    Here is a new form submitted from yzc.vercel.app site.
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message:
    <blockquote>${message}</blockquote>
    </p>
    `,
}

transporter.sendMail(mail, function(error, info){
    if (error){
        return console.log(error);
    }
    transporter.close()
    console.log('mail sent:', info.response)
})

//
       return { 
        success: true,
        name,
    };
  
    }
  };