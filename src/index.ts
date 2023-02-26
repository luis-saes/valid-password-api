import express from "express";
import { validatePassword } from "./controllers/validatePasswordController";

const app = express();
app.use(express.json());

app.post("/validate-password", validatePassword);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
