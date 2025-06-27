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
  const { name, email }: { name?: string; email: string } = req.body as { name?: string; email: string };

  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });

  res.status(201).json({
    success: true,
    data: user,
    message: 'User created successfully',
  });
})
