import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// display all pg rooms in card format
const PgRooms = () => {

  // display all pg rooms in card format create api for this
  const [pgrooms, setpgrooms] = useState();

  useEffect(() => {

    getpgrooms();
  }, []);

  const getpgrooms = () => {
    axios.get("http://localhost:5000/pg/get").then((res) => {
      console.log(res.data.data)
      setpgrooms(res.data.data);
    });
  };









  return (

    <>
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>


      </Helmet>
      <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "#f5f5f5",
            

                

             }}>
      {
        pgrooms && pgrooms.map((pgroom) => {
          return (
          //  append all pg rooms in card format
          //  apply tailwind css

             

               
                  <div className="card flex flex-wrap
                  justify-center
                  bg-white
                  rounded-lg
                  shadow-2xl
                  hover:shadow-5xl
                  transition
                  duration-300
                  ease-in-out
                  transform
                  hover:-translate-y-1
                  hover:scale-110
                  cursor-pointer
                  m-6

                  
                flex-row" style={{ width: "18rem", 
                

               
                }}>


                    {/* <img src={`${process.env.PUBLIC_URL}/uploads/${pgroom?.image.name}`} className="card-img-top" alt="..." /> */}
                    {/* process.env.PUBLIC_URL + "/img/logo.png" */}
                    
                    {/* get image from backebd dynamiticaly using env file*/}
                    <img src={`${process.env.PUBLIC_URL}/uploads/${pgroom?.image.name}`} className="card-img-top" alt="..." />


                  
                    

                    <div className="card-body">
                      <h5 className="card-title">{pgroom?.name}</h5>
                      <p className="card-text">{pgroom?.address}</p>
                      <p className="card-text">{pgroom?.rent}</p>
                      <p className="card-text">
                        {pgroom?.type.type}
                        </p>
                      <p className="card-text">{pgroom?.pgtype.pgtype}</p>
                      <p className="card-text">{pgroom?.floor}</p>
                      <Link to={`/pg/${pgroom?._id}`} className="btn btn-primary">View</Link>


                    </div>
                  </div>
              
             
              
            
          );
        })


      }
        </div>




    </>


  );
};


export default PgRooms;
