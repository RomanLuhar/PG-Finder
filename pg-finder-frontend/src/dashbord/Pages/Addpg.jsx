import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import { ButtonBase, Grid, IconButton, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { Button } from 'bootstrap'

const Addpg = () => {
    const { register, handleSubmit } = useForm();
    const [types, settypes] = useState();
    const [pgtypes, setpgtypes] = useState();

    const addNewpg = (data) => {

        const formData = new FormData();

        formData.append("id", data.id);
        formData.append("name", data.name);
        formData.append("address", data.address);
        formData.append("rent", data.rent);
        formData.append("type", data.type);
        formData.append("pgtype", data.pgtype);
        formData.append("image", data.image[0]);
        formData.append("floor", data.floor);
        // fullFurnished
        formData.append("fullFurnished", data.fullFurnished);
        formData.append("parking", data.parking);
        formData.append("wifi", data.wifi);
        formData.append("ac", data.ac);
        formData.append("breakfast", data.breakfast);
        formData.append("lunch", data.lunch);
        formData.append("dinner", data.dinner);

        axios.post("http://localhost:5000/pg/add", formData).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })


        localStorage.setItem("pg", JSON.stringify(data))

    }




    useEffect(() => {
        gettypes();
    }, []);

    const gettypes = () => {
        axios.get("http://localhost:5000/propertyType/get").then((res) => {
            console.log(res.data.data)
            settypes(res.data.data);
        });
    };

    useEffect(() => {
        getpgtypes();
    }, []);

    const getpgtypes = () => {
        axios.get("http://localhost:5000/pgType/get").then((res) => {
            console.log(res.data.data)
            setpgtypes(res.data.data);
        });
    };
    return (

        // <div>

        //     <ToastContainer />
        //     <h1>Add pg</h1>
        //     <form onSubmit={handleSubmit(addNewpg)}>
        //         <table border="2">
        //             <tr>
        //                 <th>
        //                     Id

        //                 </th>
        //                 <td>
        //                     <input type="text" {...register("id")} />
        //                 </td>
        //             </tr>
        //             <tr>

        //                 <th>
        //                     Name
        //                 </th>
        //                 <td>
        //                     <input type="text" {...register("name")} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Address
        //                 </th>
        //                 <td>
        //                     <input type="text" {...register("address")} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Rent
        //                 </th>
        //                 <td>
        //                     <input type="text" {...register("rent")} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Type
        //                 </th>
        //                 <td>
        //                     <select {...register("type")}>
        //                         {types?.map((type) => (
        //                             <option value={type._id}>{type.type}</option>
        //                         ))}
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     PgType
        //                 </th>
        //                 <td>
        //                     <select {...register("pgtype")}>
        //                         {pgtypes?.map((pgtype) => (
        //                             <option value={pgtype._id}>{pgtype.pgtype}</option>
        //                         ))}
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Image
        //                 </th>
        //                 <td>
        //                     <input type="file" {...register("image")} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Floor
        //                 </th>
        //                 <td>
        //                     <input type="text" {...register("floor")} />
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     FullFurnished
        //                 </th>
        //                 <td>
        //                     <select {...register("fullFurnished")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Wifi
        //                 </th>
        //                 <td>
        //                     <select {...register("wifi")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Ac
        //                 </th>
        //                 <td>
        //                     <select {...register("ac")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Breakfast
        //                 </th>
        //                 <td>

        //                     <select {...register("breakfast")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>

        //                 <th>
        //                     Lunch
        //                 </th>
        //                 <td>

        //                     <select {...register("lunch")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>
        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Dinner
        //                 </th>
        //                 <td>
        //                     <select {...register("dinner")}>
        //                         <option value="true">Yes</option>
        //                         <option value="false">No</option>

        //                     </select>
        //                 </td>
        //             </tr>
        //             <tr>
        //                 <th>
        //                     Action
        //                 </th>
        //                 <td>
        //                     <button type="submit"
        //                         onClick={() => {
        //                             toast.success("pg added successfully")



        //                         }
        //                         }

        //                     >Add</button>
        //                 </td>





        //             </tr>


        //         </table>
        //     </form>


        // </div>
        //pg add form using material ui
        <div>
            <ToastContainer />

            <form onSubmit={handleSubmit(addNewpg)}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="id"
                            name="id"
                            label="Id"
                            fullWidth
                            autoComplete="given-name"
                            {...register("id")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Name"
                            fullWidth
                            autoComplete="family-name"
                            {...register("name")}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Address"
                            fullWidth
                            autoComplete="shipping address-line1"
                            {...register("address")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="rent"
                            name="rent"
                            label="Rent"
                            fullWidth
                            autoComplete="shipping address-level2"
                            {...register("rent")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        
                        <Select
                            required
                            labelId="demo-simple-select-label"
                            id="type"
                            name="type"
                            label="Type"
                            fullWidth
                            autoComplete="shipping state"
                            {...register("type")}

                        >
                            {
                                types?.map((type) => (
                                    <MenuItem value={type._id}>{type.type}</MenuItem>
                                ))

                            }

                            </Select>


                            {/* <TextField
                            required
                            id="type"
                            name="type"
                            label="Type"
                            fullWidth
                            autoComplete="shipping postal-code"
                            {...register("type")}
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select
                            required
                            id="pgtype"
                            name="pgtype"
                            label="Pgtype"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("pgtype")}
                        >
                            {
                                pgtypes?.map((pgtype) => (
                                    <MenuItem value={pgtype._id}>{pgtype.pgtype}</MenuItem>
                                ))

                            }

                            </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/* file input */}
                        <input type="file" 
                        required
                        id="image"
                        name="image"
                        label="image"
                        fullWidth
                        autoComplete="shipping country"
                        {...register("image")}




                        
                        />
                       



                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="floor"
                            name="floor"
                            label="Floor"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("floor")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="fullFurnished"
                            name="fullFurnished"
                            label="FullFurnished"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("fullFurnished")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="wifi"
                            name="wifi"
                            label="Wifi"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("wifi")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="ac"
                            name="ac"
                            label="Ac"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("ac")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="breakfast"
                            name="breakfast"
                            label="Breakfast"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("breakfast")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lunch"
                            name="lunch"
                            label="Lunch"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("lunch")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="dinner"
                            name="dinner"
                            label="Dinner"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("dinner")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField

                            id="action"
                            name="action"
                            label="Action"
                            fullWidth
                            autoComplete="shipping country"
                            {...register("action")}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <IconButton type="submit" variant="contained" color="primary" onClick={() => {
                            toast.success("pg added successfully")
                        }}>
                            Add
                        </IconButton>
                    </Grid>
                </Grid>
            </form>
        </div>




















    )
}



export default Addpg