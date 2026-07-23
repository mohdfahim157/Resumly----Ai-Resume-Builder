import dotenv from "dotenv"
dotenv.config({
  path: ".env",
})
import { app } from "./src/index.js";


import connectToDB from "./src/config/database.js";
connectToDB()



const PORT = process.env.PORT || 3005

app.listen(PORT,()=>{
    console.log(`Server Is Running On PORT : ${PORT}`)
})