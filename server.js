const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://abogunets:VyQRXbi83Novya4H@cluster0.9erkcet.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Server running. Use our API on port: 3000");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
