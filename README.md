# Valid Password API

API that receives a password (string) as a parameter and validates if it is a valid password by returning a boolean

# Table of Contents

- [Requirements](#requirements)
- [How to run the project](#how-to-run-the-project)
- [Implementation choices](#implementation-choices)
- [Request method](#request-method)
- [Request types](#request-types)
- [HTTP response codes](#http-response-codes)
- [Constraints to validate password:](#constraints-to-validate-password)
- [Request examples](#request-examples)
  - [Request example 1](#request-example-1)
  - [Request example 2](#request-example-2)
  - [Request example 3](#request-example-3)

# Requirements

- Node v18.14.0 or later
- NPM v9.4.2 or later

# How to run the project

1. Clone the repository using one of the following commands:

   - `git clone https://github.com/luis-saes/valid-password-api.git` for HTTPS;
   - `git clone git@github.com:luis-saes/valid-password-api.git` for SSH;
   - `gh repo clone luis-saes/valid-password-api` for GitHub CLI;

2. Navigate to the project directory and install the dependencies using the command `npm install`

3. Run the project using the command `npm run init`

# Implementation choices

- Node.js: tool chosen for having high familiarity and for allowing fast and efficient development of a simple API.
- Express.js: framework chosen for allowing the creation of routes and the handling of requests and responses in a clear and fast way.
- Jest: framework chosen to carry out unit tests, ensuring the proper functioning of the password validation module, chosen for having excellent documentation and being easy to use.
- TypeScript: language chosen for allowing code typing, facilitating its reading, maintenance and scalability.
- ESLint and Prettier: tools chosen to standardize and format the code, ensuring high consistency between different developers of the same tool.
- Clean Code: methodology used to make the code more readable and easier to maintain, carefully choosing names, organization and structure of the code and avoiding unnecessary repetitions.
- SOLID: the applicable principles were used to try to guarantee that the code is maintainable and scalable, trying to assure that each class has only one responsibility.
- MVC: architecture pattern chosen to separate the application into different components. While not necessary for a simple application like this, the choice was made to ensure the code is maintainable and scalable.
- REST: standard chosen to ensure that the API is easy to use, lightweight, independent and flexible.

# Request method

This API only uses the POST request method.

# Request types

| Method | URL                                       | Description                                                                          |
| ------ | ----------------------------------------- | ------------------------------------------------------------------------------------ |
| `POST` | `http://localhost:3000/validate-password` | Sends a password in _string_ format and receives a _boolean_ indicating its validity |

# HTTP response codes

| Code  | Title         | Description                                       |
| ----- | ------------- | ------------------------------------------------- |
| `200` | `OK`          | The request was successful                        |
| `400` | `Bad Request` | The request could not be understood due to syntax |

# Constraints to validate password:

To be valid, the password must have:

- At least 9 characters
- At least 1 digit
- At least 1 lowercase letter
- At least 1 uppercase letter
- At least one special character (!@#$%^&\*()-+)
- No repeated characters
- No whitespaces

# Request examples

All requests are made sending a JSON object with the password to be validated.

JSON object format:

```json
{
  "password": "password_to_be_validated"
}
```

To send a request to the API, you can use:

- The command line, using [cURL](https://curl.se/)
- [Postman](https://www.postman.com/)

Curl example - Windows 10:

```bash
curl -X POST http://localhost:3000/validate-password ^
     -H "Content-Type:application/json" ^
     -d {\"password\":\"pasWordN@1\"}
```

## Request Example 1

Request:

```bash
POST http://localhost:3000/validate-password

{
    "password": "paSsVAlid@T0r"
}
```

Response:

```bash
{
    "isValid": true
}
```

Response status: `200`

<br>

## Request Example 2

Request:

```bash
POST http://localhost:3000/validate-password

{
    "password": "false password"
}
```

Response:

```bash
{
    "isValid": false
}
```

Response status: `200`

<br>

## Request Example 3

Request:

```bash
POST http://localhost:3000/validate-password

{
    "password": ""
}
```

Response: `Empty password, please provide a password`

Response status: `400`
