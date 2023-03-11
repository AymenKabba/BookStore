import {useEffect, useState} from "react"

import livreService from "../services/livres.services";
import { Link } from "react-router-dom";
import { Button, Navbar, Table } from 'react-bootstrap';

function LivreList(){
   const [livre,setLivre]=useState([])
   const getAllLivres =async () =>{

    try {
        const result =await livreService.getAllLivres()
        console.log(result.data)
        setLivre(result.data)
    } catch (error) {
        console.log(error);
    }

   }
    useEffect(()=>{
        
        getAllLivres()
        
    },[])
   async function delLivre(id){
    await livreService.deleteLivreById(id)
     getAllLivres()
    }
    console.log(livre.data)
    return(
        
        <div className="container">
            <div className="row mt-8">
                <div className="col-12">
                <h3 className="text-center mt-4 mb-4">Liste des livers</h3>
                <Table striped bordered hover size="sm">
                

            <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Description</th>
                <th>Isbn</th>
                <th>Auteur</th>
                <th>Editeur</th>
                <th>Date_edition</th>
                <th>Image</th>
                <th>Catégorie</th>
                <th>Action</th>
                
                
            </tr>
            </thead>
          
            <tbody>
                {livre.map((elem,i)=>{
                    return <tr key={i} >
                        <td>{i}</td>
                        <td>{elem.nom}</td>
                        <td>{elem.description}</td>
                        <td>{elem.isbn}</td>
                        <td>{elem.auteur}</td>
                        <td>{elem.editeur}</td>
                        <td>{elem.date_edition}</td>
                        <td> <img src={elem.image} width="50" height="50" /></td>
                        
                        <td>{elem.category?.name}</td>
                      
                        
                        <td>
                            <Button onClick={()=>delLivre(elem._id)} variant="danger " className="btn-delete"  >Supp</Button>
                            <Link to={`/livres/edit/${elem._id}`} className="btn btn-success">Editer</Link>
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

export default LivreList;