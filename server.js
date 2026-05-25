import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app=express();
const port=8080;

app.use(express.json());
app.use(cors());

app.use("/api",chatRoutes);
 
app.get("/",(req,res)=>{
  res.send("Server is running on port 8080");
})


app.get("/test",(req,res)=>{
  res.json({
    msg:"Test was successfull"
  })
})

app.listen(port, () =>{
  console.log(`App listening on port ${port}`);
  connectDB();
});


const connectDB = async()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected Succesfully");
    
    } catch(err){
  console.log(err);
  }
}

// app.post("/test",async(req,res)=>{
//       const options={
//         method : "POST",
//         headers : {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4o-mini",
//          messages: 
//           [{
//             role: "user",
//             content: req.body.message
//           }]
//       })
//     };

//     try{
//       const response = await fetch("https://api.openai.com/v1/chat/completions", options);
//       const data=await response.json();
//       console.log(data);
//       res.json(data);
//       // res.send(data.choices[0].message.content)
//     }
//     catch(err){
      
      
//       console.log(err);
      
//     }

// });
























































































// import OpenAI from 'openai';
// import 'dotenv/config';

// const client = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY // This is the default and can be omitted
// });

// const response = await client.responses.create({
//   model: 'gpt-4o-mini',
//   input: 'Are semicolons optional in JavaScript?',
// });
// console.log(response.output_text);