const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://angelsabu314:<sbconnect>@cluster0.ckvl2qd.mongodb.net/AssessDB?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to DB:", error);
  });