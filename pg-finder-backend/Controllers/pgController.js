const pgSchema = require("../schemas/pgSchema");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 9000000,
  },
}).single("image");

 const addPg = (req, res) => {

    console.log(req.file);
    upload(req,res,(err)=>{
        if(err){
            res.status(500).json({
                error: err,
                message: 'Error uploading file'

            })
        }
        else{
            console.log(req.file.originalname);
            //size
            console.log(req.file.size);
            //abs path
            console.log(req.file.path);
            var p= path.join(__dirname, '../uploads/'+req.file.originalname);
            console.log(p);

            //type

            if(req.file ==undefined){
                res.status(400).json({
                    message: 'No file selected'
                })
            }
            else{
                const pg = new pgSchema(req.body);
                if(req.file){
                    pg.image.name= req.file.originalname,
                    pg.image.size= req.file.size,
                    pg.image.url=p,
                    pg.image.type= req.file.mimetype
                }

                pg.save((err,data)=>{
                    if(err){
                        res.status(500).json({
                            error: err,
                            message: 'Error uploading file to db'
                        })
                    }
                    else{
                        res.status(200).json({
                            message: 'File uploaded successfully',
                            file: data
                        })
                    }
                })

                
            }
    }

})

}

// const addPg = async (req, res) => {
//   console.log(req.file);
//   upload(req, res, (err) => {
//     if (err) {
//       res.status(500).json({
//         error: err,
//         message: "Error uploading file",
//       });
//     } else {
//       console.log(req.file.originalname);
//       //size
//       console.log(req.file.size);
//       //abs path
//       console.log(req.file.path);
//       var p = path.join(__dirname, "../uploads/" + req.file.originalname);
//       console.log(p);

//       //type

//       if (req.file == undefined) {
//         res.status(400).json({
//           message: "No file selected",
//         });
//       } else {
//         const pg = new pgSchema(req.body);
//         if (req.file) {
//           (pg.file.name = req.file.originalname),
//             (pg.file.size = req.file.size),
//             (pg.file.url = p),
//             (pg.file.type = req.file.mimetype);
//         }

//         pg.save((err, data) => {
//           if (err) {
//             res.status(500).json({
//               error: err,
//               message: "Error uploading file to db",
//             });
//           } else {
//             res.status(200).json({
//               message: "File uploaded successfully",
//               file: data,
//             });
//           }
//         });
//         //name
//         //size
//         //url

//         //type

//         res.status(200).json({
//           message: "File uploaded successfully",
//           file: req.file.originalname,
//         });
//       }
//     }
//   });
// };
// const addPg = (req,res)=>{
//     //get pg image from user and save it in public/images folder
//     //get the image name and save it in database

//     const pg = new pgSchema(req.body);

//     pg.save((err,data)=>{
//         if(err){
//             res.status(500).json({
//                 message:"Error in adding pg",
//                 err:err
//             })
//         }
//         else{
//             res.status(201).json({
//                 message:"Pg added successfully",
//                 data:data
//             })
//         }
//     })
// }

const getAllPgs = (req, res) => {
  pgSchema.find().populate('type').populate('pgtype').exec((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Error in fetching pg",
        err: err,
      });
    } else {
      if (data != null || data != undefined || data.length != 0) {
        res.status(200).json({
          message: "Pg fetched successfully",
          data: data,
        });
      } else {
        res.status(404).json({
          message: "Pg not found",
        });
      }
    }
  });
};

const updatePg = (req, res) => {
  const id = req.params.id;
  pgSchema.findByIdAndUpdate(id, req.body, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in updating pg",
      });
    } else {
      res.status(200).json({
        message: "pg updated successfully",
      });
    }
  });
};

const deletePg = (req, res) => {
  const id = req.params.id;
  pgSchema.findByIdAndDelete(id, (err, success) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting pg",
      });
    } else {
      res.status(200).json({
        message: "pg deleted successfully",
      });
    }
  });
};

const getPgDetailsById = (req, res) => {
  const id = req.params.id;
  pgSchema.findById(id, (err, data) => {
    if (err) {
      res.status(404).json({
        message: "error in deleting pg",
      });
    } else {
      res.status(200).json({
        message: "pg deleted successfully",
      });
    }
  });
};

module.exports = {
  addPg,
  getAllPgs,
  updatePg,
  deletePg,
  getPgDetailsById,
};
