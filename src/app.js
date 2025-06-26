import express from "express";
import userRoutes from "./routes/userroutes.js";
import bookRoutes from "./routes/bookroutes.js";

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(bookRoutes);

export default app;
