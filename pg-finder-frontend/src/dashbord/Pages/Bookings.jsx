// this is Bookings page in dashbord

import { Helmet } from "react-helmet";

const Bookings = () => {
return (
 
//   APPLY TAILWIND CSS CLASSES
   
    <div className="container-fluid 
    ">
      <Helmet>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>


      </Helmet>
      <div className="row">
        <div className="col-12">
          <div className="card mt-5">
            <div className="card-body">
              <h4 className="header-title">Bookings</h4>
              <div className="data-tables datatable-primary ">
                <table

                  id="dataTable2"
                  className="text-center
                  table table-bordered
                  "
                  style={{ width: "100%" }}
                >
                  <thead className="text-capitalize">
                    <tr>
                      <th>id</th>
                      <th>name</th>
                      <th>email</th>
                      <th>phone</th>
                      <th>pg</th>
                      <th>room</th>
                      <th>status</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>john</td>
                      <td>
                        <a href="mailto:

                        ">

                        </a>
                      </td>
                      <td>
                        <a href="tel:

                        ">
                          1234567890
                        </a>
                      </td>
                      <td>pg1</td>
                      <td>room1</td>
                      <td>
                        <span className="badge badge-success">active</span>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary btn-xs"
                          data-toggle="modal"
                          data-target="#editModal"
                        >
                          <i className="fa fa-pencil"></i>
                        </button>
                        <button

                          type="button"
                          className="btn btn-danger btn-xs"
                          data-toggle="modal"
                          data-target="#deleteModal"
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                      </td>
                    </tr>
                    </tbody>
                    </table>  
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>

  
  );
};

export default Bookings;
