const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: "./config.env",
});

const app = require("./src/app");

// mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.DB, {
//     useNewUrlParser: "true",
//     useUnifiedTopology: "true",
//   })
//   .then(() => {
//     console.log("Db connected");
//   })
//   .catch((e) => {
//     console.log(e, "Failed to connect Db");
//   });

// app.listen(process.env.PORT || 6000, () => {
//   console.log(`Server started ${process.env.PORT || 6000}`);
// });
