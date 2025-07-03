import type { Request, Response } from 'express'
import { Resend } from 'resend'
import { CONTACT_ADMIN_TEMPLATE, CONTACT_USER_TEMPLATE } from '@/lib/Templates/contactTemplate'
import { TryCatch } from '@/utils/exceptionHandler'

const resend = new Resend(process.env.RESEND_API_KEY)

export const handleContactForm = TryCatch(async (req: Request, res: Response) => {
  const { firstName, lastName, email, message } = req.body

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ success: false, message: 'Missing required fields' })
  }

  // Inject data into email templates
  const userEmailHtml = CONTACT_USER_TEMPLATE.replace('{firstName}', firstName)
  const adminEmailHtml = CONTACT_ADMIN_TEMPLATE
    .replace('{firstName}', firstName)
    .replace('{lastName}', lastName)
    .replace(/{email}/g, email)
    .replace('{message}', message)


  // 1. Email to the user
  await resend.emails.send({
    from: 'OSoC Giglance <onboarding@resend.dev>',
    to: email,
    subject: 'We received your message!',
    html: userEmailHtml,
  })

  // 2. Email to admin
  await resend.emails.send({
    from: 'OSoC Giglance <onboarding@resend.dev>',
    to: 'osoc25giglance@gmail.com',
    subject: `New Contact Submission from ${firstName} ${lastName}`,
    html: adminEmailHtml,
  })

  return res.status(200).json({
    success: true,
    message: 'Emails sent successfully',
  })
})