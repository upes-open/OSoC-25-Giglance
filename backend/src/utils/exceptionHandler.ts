import type { NextFunction, Request, Response } from 'express';

type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void | Response<unknown, Record<string, unknown>>>;

export const TryCatch = (passedFunc: ControllerType) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await passedFunc(req, res, next);
  } catch (error) {
    next(error);
  }
};