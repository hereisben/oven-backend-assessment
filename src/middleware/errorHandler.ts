import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  console.log(error);

  return res.status(500).json({
    error: "Internal server error",
  });
};
