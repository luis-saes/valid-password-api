class ValidatePasswordService {
  private readonly MIN_LENGTH = 8;

  public isValidPassword(password: string): boolean {
    // Length
    if (password.length < this.MIN_LENGTH) {
      return false;
    }

    // Digit
    if (!/\d/.test(password)) {
      return false;
    }

    // Lowercase
    if (!/[a-z]/.test(password)) {
      return false;
    }

    // Uppercase
    if (!/[A-Z]/.test(password)) {
      return false;
    }

    // Special character
    if (!/[!@#$%^&*()+-]/.test(password)) {
      return false;
    }

    // Whitespace
    if (/\s/.test(password)) {
      return false;
    }

    // Repeated characters
    if (new Set(password).size !== password.length) {
      return false;
    }

    return true;
  }
}

export { ValidatePasswordService };
