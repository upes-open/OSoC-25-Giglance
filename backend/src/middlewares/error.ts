import type { NextFunction, Request, Response } from 'express';
import type ErrorHandler from '@/utils/errorHandler';
import { env } from '@/env';

export const errorMiddleware = (
  err: ErrorHandler,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  err.message ||= 'Internal Server Error';
  err.statusCode = err.statusCode || 500;

  const response: {
    success: boolean;
    message: string;
    error?: ErrorHandler;
  } = {
    success: false,
    message: err.message,
  };

  if (env.NODE_ENV === 'development') {
    response.error = err;
  }

  return res.status(err.statusCode).json(response);
};


