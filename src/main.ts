import dotenv from "dotenv";
import express from "express";
import webhookRoutes from "./routes/webhook.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use(webhookRoutes);

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
