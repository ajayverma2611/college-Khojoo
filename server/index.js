const express = require("express");
const app = express();
const connectToDatabase = require( "./config/connect");
const user = require("./routers/user");
const mocktest = require("./routers/mocktest");


app.use(express.json());


app.use("/user",user);
app.use("/mocktest",mocktest);



connectToDatabase().then(
  ()=>{
    app.listen(8000, () => {
      console.log(`Server is running on http://localhost:${8000}`);
    });
  }
)