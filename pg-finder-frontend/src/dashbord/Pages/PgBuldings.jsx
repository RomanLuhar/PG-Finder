import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useStepContext } from '@mui/material'
import "../App.css"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form'



// get data from database usin axios

const PgBuldings = () => {
    const navigate = useNavigate();
    const [pg, setpg] = useState();



    const { _id } = useParams();
    const getPgById = (_id) => {
        axios.get(`http://localhost:5000/pg/get/${_id}`).then((res) => {
            console.log(res.data.data)
            setpg(res.data.data)

            navigate(`/pg/update/`)
        })
    }

    //desplay all pg data








    const handleDelete = async (pg) => {
        setpgs(pgs.filter((p) => p._id !== pg._id));
        await axios.delete(`http://localhost:5000/pg/delete/${pg._id}`);
    };

    // function editpg 
    // function deletepg

    //get pg by id



    const handleEdit = async (pg) => {
        setpgs(pgs.filter((p) => p._id !== pg._id));
        await axios.get(`http://localhost:5000/pg/get/${pg._id}`);

        navigate(`pg/update/${pg._id}`)


    };








    //update pg



    const onSubmit = () => {
        console.log("update pg")

        handleEdit(pg)











    }
























    const [pgs, setpgs] = useState()
    const [type, settype] = useState()
    const [pgtype, setroles] = useState()

    useEffect(() => {
        getpgs();
    }, [])

    const getpgs = () => {

        axios.get("http://localhost:5000/pg/get").then((res) => {
            console.log(res.data.data)
            setpgs(res.data.data)
        })
    }

    useEffect(() => {
        gettype();
    }, []);

    const gettype = () => {
        axios.get("http://localhost:5000/propertyType/get").then((res) => {
            console.log(res.data.data)
            settype(res.data.data);
        });
    };

    useEffect(() => {
        getpgtype();
    }, []);

    const getpgtype = () => {
        axios.get("http://localhost:5000/pgType/get").then((res) => {
            console.log(res.data.data)
            setroles(res.data.data);
        });
    };


    return (
        <div className='tcontainer'>
            <div>PgBuldings</div>
            <section class=" h-screen overflow-hidden flex justify-center" >
                <div class="table w-full p-2" >
                    <button
                        onClick={() => navigate("pg/add")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded right-0"
                        style={{ position: "absolute", right: "20px" }}
                    >
                        Add Pg
                    </button>
                    <table class=" border" >
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="border px-4 py-2">id</th>
                                <th class="border px-4 py-2">type</th>
                                <th class="border px-4 py-2">pgtype</th>
                                <th class="border px-4 py-2">name</th>

                                <th class="border px-4 py-2">address</th>
                                <th class="border px-4 py-2">rent</th>

                                <th class="border px-4 py-2">floor</th>
                                <th class="border px-4 py-2">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {pgs?.map((pg) => (
                                <tr>
                                    <td class="border px-4 py-2">{pg.id}</td>
                                    <td class="border px-4 py-2">
                                        {
                                            pg.type.type

                                        }                                    
                                        </td>
                                    <td class="border px-4 py-2">
                                        {
                                            pg.pgtype.pgtype
                                        }

                                    </td>


                                    <td class="border px-4 py-2">{pg.name}</td>
                                    <td class="border px-4 py-2">{pg.address}</td>
                                    <td class="border px-4 py-2">{pg.rent}</td>
                                    <td class="border px-4 py-2">{pg.floor}</td>

                                    <td class="border px-4 py-2">
                                        <button onClick={
                                            () => onSubmit()
                                        } class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                                        <button onClick={() => handleDelete(pg)} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                                    </td>



                                </tr>



                            ))}



                        </tbody>

                    </table>
                </div>
            </section>

        </div>
    )
}

export default PgBuldings