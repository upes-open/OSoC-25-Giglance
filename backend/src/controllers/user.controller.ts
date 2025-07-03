import prisma from '@/lib/prismaClient';
import { TryCatch } from '@/utils/exceptionHandler';
import type { Request, Response } from 'express';
import { WELCOME_EMAIL_TEMPLATE } from "../lib/Templates/welcomeTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);

// GET /api/users
export const getUsers = TryCatch(async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.json({
    success: true,
    data: users,
    message: "Users retrieved successfully",
  });
});

// POST /api/users
export const createUser = TryCatch(async (req: Request, res: Response) => {
  const { name, email }: { name?: string; email: string } = req.body;

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  // Generate email HTML using the welcome template
  const html = WELCOME_EMAIL_TEMPLATE(user.name || 'there');

  // Send email using Resend
  await resend.emails.send({
    from: 'welcome@giglance.com',
    to: user.email,
    subject: 'Welcome to Giglance!',
    html,
  });

  res.status(201).json({
    success: true,
    data: user,
    message: 'User created and welcome email sent',
  });
});
