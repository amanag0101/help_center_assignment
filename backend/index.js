import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpecs from "./config/swagger.js";
import testRoutes from "./routes/test.js";
import cardRoutes from "./routes/card.js";
import { connectToDB } from "./config/db-config.js";

const port = 8080;
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use("/ping", testRoutes);
app.use("/card", cardRoutes);

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}...`);
    });
  })
  .catch((error) =>
    console.error(`Failed to start the server: ${error.message}`)
  );
