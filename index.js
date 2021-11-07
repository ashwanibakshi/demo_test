const express  =  require("express");
const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/testdemo")
.then(()=>console.log("connected to db"))
.catch((err)=>console.log("db connection error ",err))

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use("/api/v1",require("./routes/orderRoutes"));

const port  = process.env.PORT || 3000;
app.listen(port,()=>console.log(`server run at port ${port}`));