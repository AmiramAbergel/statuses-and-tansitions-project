import express, { json } from "express";
import cors from "cors";

export const app = express()
const PORT = process.env.PORT || 5000
const BASE_URL = "/api/v1";

app.use(cors());
app.use(json());


app.listen(PORT, () => {
  console.log(`App is live!`);
});