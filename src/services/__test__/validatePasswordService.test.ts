import { ValidatePasswordService } from "../validatePasswordService";

describe("ValidatePasswordService", () => {
  const casesLessThan8Characters = ["1234567", "123456", "12345", "1234", "123", "12", "1", ""];
  test.each(casesLessThan8Characters)("Passwords with less than 8 characters", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutDigit = ["abcdefghiRH@", "qwert!yuioPL", "zaqxs#wcdeQE", "vfebgr$nhtSW", "lpkoji(SWEAR"];
  test.each(casesWithoutDigit)("Passwords without digit", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutLowercase = ["ABCDE90FGHI@", "QWE17RT!YUIO", "ZAQXS32#WCDE", "VFEBGR$NHT56", "LPKOJI(12345"];
  test.each(casesWithoutLowercase)("Passwords without lowercase", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutUppercase = ["abcde90fghi@", "qwe17rt!yuio", "zaqxs32#wcde", "vfebgr$nht56", "lpkoji(12345"];
  test.each(casesWithoutUppercase)("Passwords without uppercase", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithoutSpecialCharacter = [
    "abWcde90fghiRS",
    "qwe17WSrtyuio",
    "zaqxERs32wcde",
    "vfebgrKQWnht56",
    "lpkojiA12345",
  ];
  test.each(casesWithoutSpecialCharacter)("Passwords without special character", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithWhitespace = [
    "a  bWcde@!90fgh  iRS",
    "qwe17(WSrtyuio ",
    "zaqxER )s32wcde",
    " vfebgrK#QWnht56",
    "lpk oj i A12 345+-",
  ];
  test.each(casesWithWhitespace)("Passwords with whitespace", (password) => {
    const isValid = new ValidatePasswordService().isValidPassword(password);

    expect(isValid).toBe(false);
  });

  const casesWithRepeatedCharacters = [
    "abWcde@!90feRSghiRS",
    "qwqe17(WSrtyuio",
    "zaqxER)s32wc)de",
    "vfeffffffffbgrK#QWnht56",
    "lplkojiA12345+-",
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
