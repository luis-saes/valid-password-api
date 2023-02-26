import { ValidatePasswordService } from "../validatePasswordService";

describe("ValidatePasswordService", () => {
  const casesLessThan8Characters = ["1234567", "123456", "12345", "1234", "123", "12", "1", ""];
  test.each(casesLessThan8Characters)("Passwords with less than 8 characters", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutDigit = [
    "abcdefgh",
    "ABCDEFGH",
    "abcdefghijk",
    "abcdefghijklmno",
    "Qwerty!@#",
    "ABCdefGHIjklMNO!@#",
    "GHIJKLMNOPQWERTY",
    "GHIJKLMNOPQWERTY!",
  ];
  test.each(casesWithoutDigit)("Passwords without digit", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutLowercase = [
    "12345678",
    "ABCDEFGH",
    "1234567890",
    "ABCDEFGHIJKLMNO",
    "QWERTY!@#",
    "ABCDEFGHIJKLMNO!@#",
    "GHIJKLMNOPQWERTY",
    "GHIJKLMNOPQWERTY!",
  ];
  test.each(casesWithoutLowercase)("Passwords without lowercase", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutUppercase = [
    "12345678",
    "abcdefgh",
    "1234567890",
    "abcdefghijklmno",
    "Qwerty!@#",
    "abcdefghijklmno!@#",
    "GHIJKLMNOPQWERTY",
    "GHIJKLMNOPQWERTY!",
  ];
  test.each(casesWithoutUppercase)("Passwords without uppercase", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutSpecialCharacter = [
    "12345678",
    "abcdefgh",
    "1234567890",
    "abcdefghijklmno",
    "Qwertyyyyy",
    "ABCdefGHIjklMNO",
    "GHIJKLMNOPQWERTY",
    "GHIJKLMNOPQWERTYU",
  ];
  test.each(casesWithoutSpecialCharacter)("Passwords without special character", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithWhitespace = [
    "12345678 ",
    " abcdefgh",
    "1234567890 ",
    " abcdefghijklmno",
    "Qwerty!@# ",
    "ABCdefGHIjklMNO!@#",
    "GHIJKLMNOPQWERTY ",
    "GHIJKLMNOPQWERTY! ",
  ];
  test.each(casesWithWhitespace)("Passwords with whitespace", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithRepeatedCharacters = [
    "112345678",
    "aabcdefgh",
    "11234567890",
    "aabcdefghijklmno",
    "Qwertyy!@#",
    "ABCdefGHIjklMN!O!@#",
    "GHIJKLMNOPQWWERTY",
    "GHIJKLKMNOPQWERTY!",
  ];
  test.each(casesWithRepeatedCharacters)("Passwords with repeated characters", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesValidPasswords = [
    "Qwerty2!@#",
    "ABC1defGHIjklMNO!@#",
    "GHIJKLMN3qeOPQWERTY!",
    "abcGHIJKLMNOPQW4ERTY!",
    "12345678aA!@#$%^&*()",
    "Nm1^pL@7o",
    "S#4jFgH%6",
    "H%8nBdK#4",
  ];
  test.each(casesValidPasswords)("Valid passwords", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(true);
  });
});
