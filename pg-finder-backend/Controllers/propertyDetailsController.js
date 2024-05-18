const propertyDetails = require('../schemas/propertyDetailsSchema');


const addPropertyDetails = (req,res)=>{
    const property = new propertyDetails(req.body);
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

const getAllPropertyDetails = (req,res)=>{
    propertyDetails.find((err,data)=>{
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

const getPropertyDetailsById = (req,res)=>{
    const id = req.params.id
    propertyDetails.findById(id, (err, data) => {
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

const updatePropertyDetails = (req,res)=>{
    const id = req.params.id
    propertyDetails.findByIdAndUpdate(id,req.body,(err,success)=>{
            if(err){
                res.status(404).json({
                    message:"error in updating property details",
                })
            }
            else{
                res.status(200).json({
                    message:"property details updated successfully",
                })
            }
        })
    }

const deletePropertyDetails = (req,res)=>{
    const id = req.params.id
    propertyDetails.findByIdAndDelete(id,(err,success)=>{
        if(err){
            res.status(404).json({
                message:"error in deleting property details",
            })
        }
        else{
            res.status(200).json({
                message:"property details deleted successfully",
            })
        }
    })
}

module.exports = {
    addPropertyDetails,
    getAllPropertyDetails,
    getPropertyDetailsById,
    updatePropertyDetails,
    deletePropertyDetails
}

