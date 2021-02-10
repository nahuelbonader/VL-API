require("./db/db");
const app = require("./app");
const chalk = require("chalk");
const config = require("./config");
const cors = require("cors");
const PORT = process.env.PORT || config.PORT;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.listen(PORT, () =>
  console.log(chalk.blue("Server listen in port"), chalk.bgBlue(PORT))
);
