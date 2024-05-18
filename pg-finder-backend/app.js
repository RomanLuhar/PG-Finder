const express = require ('express')
const mongoose =require('mongoose')
const app = express ()
const port = 5000
const cors = require ('cors')

// // Middleware
app.use (express.json ())
app.use (express.urlencoded ({extended: true}))
app.use (cors ())

//import routes
const userRoutes =require('./Routes/userRoutes')
const roleRoutes=require('./Routes/roleRoutes')
const pgRoutes=require('./Routes/pgRoutes')
const propertyTypeRoutes=require('./Routes/propertyTypesRoutes')
const propertyDetailsRoutes=require('./Routes/propertyDetailsRoutes')
const pgTypeRoutes=require('./Routes/pgTypeRoutes')



// Routes
app.use ('/user',userRoutes)
app.use ('/role',roleRoutes)
app.use ('/pg',pgRoutes)
app.use ('/propertyType',propertyTypeRoutes)
app.use ('/propertyDetails',propertyDetailsRoutes)
app.use ('/pgtype',pgTypeRoutes)




// Connect to MongoDB
mongoose.connect ('mongodb://127.0.0.1:27017/pg-finder', {

},(err)=>{
    if(err){
        console.log("database connection error")
    }
    else{
        console.log("database connected")
    }
})
// Listen to port
app.listen (port, () => {
    console.log (`Server is running on port ${port}`)
})

