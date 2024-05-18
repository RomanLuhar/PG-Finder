const userSchema = require("../schemas/userSchema");

const getUserData = (req, res) => {
  userSchema.find().populate('role').exec((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in fetching users",
        err: err
      })
    }
    else {
      if (data != null || data != undefined || data.length != 0) {
        res.status(200).json({
          message: "users fetched successfully",
          data: data
        })
      }
      else {
        res.status(404).json({
          message: "users not found",
        })
      }
    }
  })
}

  const addUser = (req, res) => {

    const user = new userSchema(req.body)
    user.save((err, data) => {
      if (err) {
        res.status(500).json({
          message: "error in adding user",
        })
      }
      else {
        res.status(201).json({
          message: "user added successfully",
          data: data
        })
      }

    })

  }
  const getUserById = (req, res) => {
    const id = req.params.id
    userSchema.findById(id, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "error in fetching user",
          err: err
        })
      }
      else {
        if (data != null || data != undefined || data.length != 0) {
          res.status(200).json({
            message: "user fetched successfully",
            data: data
          })
        }
        else {
          res.status(404).json({
            message: "user not found",
          })
        }
      }
    })
  }
  const deleteUser = (req, res) => {
    const id = req.params.id
    userSchema.findByIdAndDelete(id, (err, data) => {
      if (err) {
        res.status(500).json({
          message: "error in deleting user",
          err: err
        })
      }
      else {
        if (data != null || data != undefined || data.length != 0) {
          res.status(200).json({
            message: "user deleted successfully",
            data: data
          })
        }
        else {
          res.status(404).json({
            message: "user not found",
          })
        }
      }
    })
  }
  const updateUser = (req,res)=>{

    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    userSchema.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating user",
            })
        }
        else{
            res.status(200).json({
                message:"user updated successfully",
            })
        }
    })
}

const getUserDataWithRole = (req, res) => {
  userSchema.find().populate('role').exec((err, data) => {
    if (err) {
      res.status(500).json({
        message: "error in fetching users",
        err: err
      })
    }
    else {
      if (data != null || data != undefined || data.length != 0) {

        res.status(200).json({
          message: "users fetched successfully",
          data: data
        })
      }
      else {
        res.status(404).json({
          message: "users not found",
        })
      }
    }
  })
}
const loginUser = (req,res)=>{


  var email = req.body.email
  var password = req.body.password

  if(email!=undefined && password!= undefined && email!= "" && password!=""){
      userSchema.find({email:email,password:password}).populate('role').exec((err,data)=>{

          if(err){
              res.status(500).json({
                  message:"error while fetching user"
              })
          }
          else{
              if(data!=undefined && data!=null && data.length>0){
                  res.status(200).json({
                      message:"user login successfully",
                      data:data
                  })
              }
              else{
                  res.status(404).json({
                      message:"user not found"
                  })
              }
          }
      })
  }
  else{
      res.status(404).json({
          message:"email and password both are required"
      })
  }
}

  module.exports = {
    getUserData,
    addUser,
    getUserById,
    updateUser,
    deleteUser,
    getUserDataWithRole,
    loginUser
  }
