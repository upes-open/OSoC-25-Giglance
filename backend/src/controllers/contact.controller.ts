import type { Request, Response } from 'express'
import { Resend } from 'resend'
import { z } from 'zod'

import { CONTACT_ADMIN_TEMPLATE, CONTACT_USER_TEMPLATE } from '@/lib/Templates/contactTemplate'
import { TryCatch } from '@/utils/exceptionHandler'
import {env} from '@/env'

const resend = new Resend(env.RESEND_API_KEY)

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
