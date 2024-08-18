import express from "express";
import testRoutes from "./routes/test.js";

const port = 8080;
const app = express();

app.use(`/test`, testRoutes);

app
  .listen(port, () => {
    console.log(`Server started on port ${port}...`);
  })
  .on("error", (err) => {
    console.error(`Failed to start the server: ${err.message}`);
  });
