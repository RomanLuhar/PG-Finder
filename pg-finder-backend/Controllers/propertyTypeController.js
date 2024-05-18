const propertyType = require('../schemas/proprtyTypeSchema')

const addPropertyType = (req,res)=>{
    const property = new propertyType(req.body);
    property.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in adding property",
                err:err
            })
        }
        else{
            res.status(201).json({
                message:"Property added successfully",
                data:data
            })
        }
    })
}

const getAllPropertyType = (req,res)=>{

    propertyType.find((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error in fetching property",
                err:err
            })
        }
        else{
            if(data!=null || data!=undefined || data.length!=0){
                res.status(200).json({
                    message:"Property fetched successfully",
                    data:data
                })
            }
            else{
                res.status(404).json({
                    message:"Property not found",
                })
            }
        }
    })
}

const getPropertyTypeById = (req,res)=>{

    const id = req.params.id
    propertyType.findById(id, (err, data) => {
        if (err) {
          res.status(500).json({
            message: "error in fetching property details",
            err: err
          })
        }
        else {
          if (data != null || data != undefined || data.length != 0) {
            res.status(200).json({
              message: "property details fetched successfully",
              data: data
            })
          }
          else {
            res.status(404).json({
              message: "property details not found",
            })
          }
        }
      })
    }

const updatePropertyType = (req,res)=>{
    const id = req.params.id

    // const user = new userSchema(req.body)
    // user.fi
    propertyType.findByIdAndUpdate(id,req.body,(err,success)=>{
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

const deletePropertyType = (req,res)=>{
    const id = req.params.id
    propertyType.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting property",
            })
        }
        else{
            res.status(200).json({
                message:"property deleted successfully",
            })
        }
    })
}

module.exports = {
    addPropertyType,
    getAllPropertyType,
    getPropertyTypeById,
    updatePropertyType,
    deletePropertyType
}




