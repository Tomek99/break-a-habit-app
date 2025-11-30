import type { Request, Response, NextFunction } from 'express';

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // jeśli statusCode został ustawiony wcześniej, używamy go, w przeciwnym razie 500
  const statusCode =
    res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // pokaż stack tylko w środowisku innym niż produkcja
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
