class ValidatePasswordService {
  private readonly MIN_LENGTH: number = 8;
  private readonly DIGIT_REGEX: RegExp = /\d/;
  private readonly LOWERCASE_REGEX: RegExp = /[a-z]/;
  private readonly UPPERCASE_REGEX: RegExp = /[A-Z]/;
  private readonly SPECIAL_CHARACTER_REGEX: RegExp = /[!@#$%^&*()+-]/;
  private readonly WHITESPACE_REGEX: RegExp = /\s/;

  public isValidPassword(password: string): boolean {
    if (password.length < this.MIN_LENGTH) {
      return false;
    }

    if (!this.DIGIT_REGEX.test(password)) {
      return false;
    }

    if (!this.LOWERCASE_REGEX.test(password)) {
      return false;
    }

    if (!this.UPPERCASE_REGEX.test(password)) {
      return false;
    }

    if (!this.SPECIAL_CHARACTER_REGEX.test(password)) {
      return false;
    }

    if (this.WHITESPACE_REGEX.test(password)) {
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
