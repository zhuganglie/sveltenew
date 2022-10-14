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
        user: 'nanwanglearningsg@gmail.com',
        pass: 'uznqowwgxxmtpwqe',
            },
        })
let mail = {
    from:'"Nan Wang Learning Hub" <nanwanglearningsg@gmail.com>',
    to: email,
   // bcc: "info@nanwanglearning.com.sg",
    subject: "Form Submitted",
    //text: "${message}",
    html:`
    Hi, here is what you just submitted on yzc.vercel.app. 
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message:
    <blockquote>${message}</blockquote>
    </p>
    I will get back to you again soon. Thank you!
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