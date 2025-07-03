import prisma from '@/lib/prismaClient';
import { TryCatch } from '@/utils/exceptionHandler';
import type { Request, Response } from 'express';
import { WELCOME_EMAIL_TEMPLATE } from "../lib/Templates/welcomeTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string);


export const getUsers = TryCatch(async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();

  res.json({
    success: true,
    data: users,
    message: "Users retrieved successfully",
  });
});


export const createUser = TryCatch(async (req: Request, res: Response) => {
 main
  const { name, email }: { name?: string; email: string } = req.body;

  if (!id || !email) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const existingUser = await prisma.user.findUnique({ where: { id } });

  if (existingUser) {
    return res.status(200).json({ success: true, data: existingUser, message: 'User already exists' });
  }
 main

  const user = await prisma.user.create({
    data: { id, name, email },
  });

 main
  
  const html = WELCOME_EMAIL_TEMPLATE(user.name || 'there');
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

  res.status(201).json({ success: true, data: user, message: 'User created successfully' });
});
 main
