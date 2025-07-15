import type { Request, Response } from 'express'
import { z } from 'zod'
import { CONTACT_ADMIN_TEMPLATE, CONTACT_USER_TEMPLATE } from '@/lib/Templates/contactTemplate'
import { TryCatch } from '@/utils/exceptionHandler'
import {env} from '@/env'
import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

// Define the transporter with proper typing
let transporter: Transporter
try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_ID ?? env.MAIL_ID,
      pass: process.env.MAIL_PASSWORD ?? env.MAIL_PASSWORD,
    },
  })
} catch (err) {
  console.error('Error creating nodemailer transporter:', err)
  throw err
}

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(1, 'Message is required'),
})

export const handleContactForm = TryCatch(async (req: Request, res: Response) => {
  const parseResult = contactSchema.safeParse(req.body)

  if (!parseResult.success) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: parseResult.error.flatten().fieldErrors,
    })
  }

  const { firstName, lastName, email, message } = parseResult.data

  // Inject data into email templates
  const userEmailHtml = CONTACT_USER_TEMPLATE.replace('{firstName}', firstName)
  const adminEmailHtml = CONTACT_ADMIN_TEMPLATE
    .replace('{firstName}', firstName)
    .replace('{lastName}', lastName)
    .replace(/{email}/g, email)
    .replace('{message}', message)

  // 1. Email to the user
  await transporter.sendMail({
    from: `${process.env.MAIL_NAME ?? env.MAIL_NAME} <${process.env.MAIL_ID ?? env.MAIL_ID}>`,
    to: email,
    subject: 'We received your message!',
    html: userEmailHtml,
  })

  // 2. Email to admin
  await transporter.sendMail({
    from: `${process.env.MAIL_NAME ?? env.MAIL_NAME} <${process.env.MAIL_ID ?? env.MAIL_ID}>`,
    to: 'osoc25giglance@gmail.com',
    subject: `New Contact Submission from ${firstName} ${lastName}`,
    html: adminEmailHtml,
  })

  return res.status(200).json({
    success: true,
    message: 'Emails sent successfully',
  })
})