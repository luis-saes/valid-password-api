import { Request, Response } from "express";
import { ValidatePasswordService } from "../services/validatePasswordService";
import { ValidatePasswordRequestBody, ValidatePasswordResponseBody } from "../types/validatePasswordRequest";

const validatePasswordService = new ValidatePasswordService();

function validatePassword(req: Request<ValidatePasswordRequestBody, ValidatePasswordResponseBody>, res: Response) {
  const password: string = req.body.password;

  if (!password) {
    return res.status(400).send("Empty password, please provide a password");
  }

  const isValid: boolean = validatePasswordService.isValidPassword(password);

  return res.json({ isValid });
}

export { validatePassword };
