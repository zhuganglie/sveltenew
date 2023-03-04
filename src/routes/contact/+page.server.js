import nodemailer from 'nodemailer'
import { env as private_env } from '$env/dynamic/private'
import { Client } from '@notionhq/client';
import { text } from 'svelte/internal';

// Initialize Notion client
const notion = new Client({ auth: private_env.NOTION_API_KEY });

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await request.formData();
    const email = form.get('email');
    const name = form.get('name');
    const message = form.get('message');

/*    // Send email notification
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: private_env.VITE_MAIL_USER,
        pass: private_env.VITE_MAIL_PASS,
      },
    });
    let mail = {
      from: private_env.VITE_MAIL_USER,
      to: "pyrrhonianpig@gmail.com",
      subject: "Form Submitted",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message:</p>
        <blockquote>${message}</blockquote>
      `,
    };
   // await transporter.sendMail(mail);
    await new Promise((resolve, reject) => {
        transporter.sendMail(mail, (err, info) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(info);
          }
        });
      }); */

    // Add form data to Notion database
    const databaseId = private_env.NOTION_DATABASE_ID;
    const newPage = {
      Name: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
      Email: {
       email: email,
      },
      Message: {
        rich_text: [
          {
            text: {
              content: message,
            },
          },
        ],
      },
    };
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: newPage,
    });

    // Return success response
    return {
      success: true,
      name,
    };
  },
};
