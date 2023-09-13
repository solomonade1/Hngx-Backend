import express from "express";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
import { connectDb } from "./config/dbConnect.js";
// import urlRouter from "./routes/url.routes.js";
// import authRoute from "./routes/auth.route.js";
import personRouter from "./routes/person.routes.js";
// import scheduleActive from "./utils/schedule/activeSchedule.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4500;

// app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
app.use(express.json());

// //schedule active property of the URL
// scheduleActive()

// app.use("/api/v1", urlRouter);
// app.use("/api/v1", authRoute);

app.use("/v1/api/", personRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went Wrong !!!";
  const errorStack = err.stack;

  return res.status(errorStatus).json({
    status: errorStatus,
    message: errorMessage,
    stack: errorStack,
  });
});

app.listen(PORT, () => {
  connectDb();
  console.log(`App is running on Port ${PORT}`);
});
