const express=require("express")

const bodyParser=require("body-parser")

const route=require("./route/routes")
const port=process.env.PORT || 4000

const mongoose=require("mongoose")

 const cors = require('cors');
// const morgan = require("morgan")
// require('dotenv').config()

const cookieParser = require('cookie-parser')

const app=express()

 app.use(cors());
// app.use(morgan('dev'))

app.use(cookieParser())

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }));

// const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");

// const options={
//    definition:{
//       openapi:"3.0.0",
//       info:{
//         title:"rest API",
//         version:"2.0.0",
//         description:"user ApI"
//       },
//       servers:[
//         {
//          url:"http://localhost:4000"
//       },
//     ]
//    },
//    apis:["./route/routes.js"]
// }

// var swaggerSpec = swaggerJSDoc(options);
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

mongoose.connect("mongodb+srv://avinay:Avinay1996@cluster0.wj0k43r.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology:true,
 
    
}).then(()=>console.log("mongoDb connected"))
.catch(err=>console.log(err))

app.use("/",route)

app.listen(port,function(){
    console.log("server is running on"+" "+port)
})
