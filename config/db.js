const mongoose = require("mongoose");
const db = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://rahulsrivastava1:Phoebe26@users.rxaq3vy.mongodb.net/test",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        }
      )
      .then(() => {
        console.log("db connected");
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = db;
