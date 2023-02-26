interface ValidatePasswordRequestBody {
  password: string;
}

interface ValidatePasswordResponseBody {
  isValid: boolean;
}

export { ValidatePasswordRequestBody, ValidatePasswordResponseBody };
