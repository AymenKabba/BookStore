import {useEffect, useState} from "react"

import userService from "../services/user.services";
import { Link } from "react-router-dom";
import { Button, Table } from 'react-bootstrap';

function UserList(){
   const [user,setUser]=useState([])
   const getAllUsers =async () =>{

    try {
        const result =await userService.getAllUsers()
        console.log(result.data)
        setUser(result.data)
    } catch (error) {
        console.log(error);
    }

   }
    useEffect(()=>{
        
        getAllUsers()
        
    },[])
   async function delLocal(id){
    await userService.deleteUserById(id)
    getAllUsers()
    }
    console.log(user.data)
    return(

        <div className="container">
            <div className="row mt-8">
                <div className="col-12">
                <h3 className="text-center mt-4 mb-4">Liste des Client</h3>
                <Table striped bordered hover size="sm">
                

            <thead>
            <tr>
                <th>ID</th>
                <th>FName</th>
                <th>LName</th>
                <th>email</th>
                <th>password</th>
                <th>photo</th>
                <th>Action</th>
                
                
            </tr>
            </thead>
          
            <tbody>
                {user.map((elem,i)=>{
                    return <tr key={i} >
                        <td>{i}</td>
                        <td>{elem.fName}</td>
                        <td>{elem.lName}</td>
                        <td>{elem.email}</td>
                        <td>{elem.password}</td>
                        <td>{elem.photo}</td>
                      
                        
                        <td>
                            <Button onClick={()=>delLocal(elem._id)} variant="danger " className="btn-delete"  >Supp</Button>
                            <Link to={`/users/edit/${elem._id}`} className="btn btn-success">Editer</Link>
                            </td>
                    </tr>
                })}
            </tbody>
            </Table>
      
                </div>
            </div>
        </div>

        
    )

}

export default UserList;