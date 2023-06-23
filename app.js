const express = require("express");
const app = express();
const dontenv = require("dotenv");
dontenv.config();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const notFoundHandler = require("./middleware/notFoundHandler");
const errorHandler = require("./middleware/errorHandler");

connectDb();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/posts", postsRoutes);
app.use(notFoundHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("The application is running on localhost:8000");
});
