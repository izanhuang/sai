import express from "express";
import cors from "cors";
import assistantRoutes from "./routes/assistantRoutes.js";
import config from "./config/config.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/assistant", assistantRoutes);

// Handle undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Handle global errors
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
