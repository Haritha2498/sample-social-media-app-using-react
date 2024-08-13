const express = require("express");
const { mongoose } = require("mongoose");
const app = express();
const cors = require("cors");
const smroutes = require("./routes/routes");
const authroute=require("./routes/authroute")

const cookieParser=require("cookie-parser")


app.use(cookieParser())
const PORT = 3002;

app.use(
  cors({ 
    origin: "http://localhost:3001",
  })
);

app.use(express.json());



app.use("/", smroutes);
app.use("/", authroute)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect("mongodb://mongodb:27017/sm_app");

const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
