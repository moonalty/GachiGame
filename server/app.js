const config = require("./config/config");
const express = require("express");
//main
const mainRouter = require("./routes/main.router");
//

//
const app = express();
const PORT = process.env.PORT ?? 4000;

config(app);
/// ROUTES
app.use("/", mainRouter);
//
//API ROUTES

/////

app.listen(PORT, () => {
  console.log(`*** Working at PORT: ${PORT} ***`);
});
