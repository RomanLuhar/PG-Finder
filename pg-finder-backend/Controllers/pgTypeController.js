const pgType = require('../schemas/pgTypeSchema')

const addPgType = (req,res)=>{  
    const pg = new pgType(req.body);
    pg.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding pg",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Pg added successfully",
                data:data
            })
        }
    })
}

const getAllPgType = (req,res)=>{
    pgType.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching pg",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined || data.length!=0){
                res.status(200).json({
                    message:"Pg fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Pg not found",
                })
            }
        }
    })
}

const getPgTypeById = (req,res)=>{
    const id = req.params.id
    pgType.findById(id, (err, data) => {
        if (err) {
          res.status(500).json({
            message: "error in fetching pg type",
            err: err
          })
        }
        else {
          if (data != null || data != undefined || data.length != 0) {
            res.status(200).json({
              message: "Pg type fetched successfully",
              data: data
            })
          }
          else {
            res.status(404).json({
              message: "Pg type not found",
            })
          }
        }
      })
}

const updatePgType = (req,res)=>{
    const id = req.params.id

    // const user = new userSchema(req.body)
    pgType.findByIdAndUpdate(id,req.body,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in updating Property",
            })
        }
        else{
            res.status(200).json({
                message:"user updated successfully",
            })
        }

    })

}

const deletePgType = (req,res)=>{
    const id = req.params.id
    pgType.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting Property",
            })
        }
        else{
            res.status(200).json({
                message:"user deleted successfully",
            })
        }

    })
}

module.exports = {
    addPgType,
    getAllPgType,
    getPgTypeById,
    updatePgType,
    deletePgType
}
