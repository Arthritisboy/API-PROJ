/*
 * The flow of creating everything
 *
 * You make a model.
 * That model requires a controller.
 * That controller requires routes.
 * Those routes are used by the server.
 *
 * Middlewares are the ones that do actions in the middle of a request.
 *
 */

const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("../routes/goalRoutes"));
app.use("/api/users", require("../routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
