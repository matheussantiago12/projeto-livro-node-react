const express = require("express");
const app = express();
const cors = require('cors')

// Swagger.
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("../swagger_output.json");

/// Rotas.
const booksRoute = require("./route/booksRoute");
const usersRoute = require("./route/usersRoute");

app.use(express.json());
app.use(cors())

app.use(booksRoute);
app.use(usersRoute);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.listen(5000);
