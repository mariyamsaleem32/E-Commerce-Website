import express from "express";
import helmet from "helmet";
import connectToDB from "./db/index.js";
import { ENV } from './constant/index.js';
import cors from 'cors';
import routes from "./routes/routes.js";

// Connecting MongoDB
connectToDB();

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.use("/api", routes);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
