import { Request, Response } from "express";
import { ValidatePasswordService } from "../services/validatePasswordService";
import { ValidatePasswordRequestBody, ValidatePasswordResponseBody } from "../types/validatePasswordRequest";

function validatePassword(
  req: Request<ValidatePasswordRequestBody, ValidatePasswordResponseBody>,
  res: Response
): Response {
  const { password }: { password: string } = req.body;

  if (!password) {
    return res.status(400).send("Empty password, please provide a password");
  }

  const isValid: boolean = new ValidatePasswordService().isValidPassword(password);

  return res.json({ isValid });
}

export { validatePassword };
