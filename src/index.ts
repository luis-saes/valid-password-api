import express, { Application } from "express";
import { validatePassword } from "./controllers/validatePasswordController";

const app: Application = express();
app.use(express.json());

app.post("/validate-password", validatePassword);

function startServer() {
  const PORT: string = process.env.PORT || "3000";

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();
