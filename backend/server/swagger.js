const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const serverFiles = ["./server/route/booksRoute.js"];

swaggerAutogen(outputFile, serverFiles).then(() => {
  require("./server.js");
});
