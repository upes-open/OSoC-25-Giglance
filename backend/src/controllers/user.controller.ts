import prisma from '@/lib/prismaClient';
import { TryCatch } from '@/utils/exceptionHandler';
import type { Request, Response } from 'express';

export const getUsers = TryCatch(async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  
  res.json({
    success: true,
    data: users,
    message: "Users retrieved successfully",
  });
});

export const createUser = TryCatch(async (req: Request, res: Response) => {
  const { id, name, email }: { id: string; name?: string; email: string } = req.body;

  if (!id || !email) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const existingUser = await prisma.user.findUnique({ where: { id } });

  if (existingUser) {
    return res.status(200).json({ success: true, data: existingUser, message: 'User already exists' });
  }

  const user = await prisma.user.create({
    data: { id, name, email },
  });

  res.status(201).json({ success: true, data: user, message: 'User created successfully' });
});