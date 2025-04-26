import express from "express";
import helmet from "helmet";
import connectToDB from "./db/index.js";
// import routes from "./routes/index.js";

//Connecting MongoDB
connectToDB()

const app = express();
app.use(helmet());
app.use(express.json());

// app.use("/api",routes);


const port = 3000;
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

