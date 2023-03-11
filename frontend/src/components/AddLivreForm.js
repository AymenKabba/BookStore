import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  "../App.css";
import Navbar from "./Navbar";
import livreServices from "../services/livres.services";
import getAllCategories from "../services/category.services";
import AdminHome from "./AdmineHome";

function AddLivreForm(props){
    const [nom,setNom]=useState("")
    const[description,setDescr]=useState("")
    const[isbn,setIsbn]=useState("")
    const[auteur,setAut]=useState("")
    const[editeur,setEdit]=useState("")
    const[date_edition,setDate]=useState("")
    const[image,setImage]=useState("")
    const[selectdCat,setSelectedCat]=useState(0)
    const[categories,setCategories]=useState([])
    const navigate=useNavigate()

    useEffect(()=>{
        getCategories()
    }, [])

    async function getCategories(){
        const res= await getAllCategories()
        setCategories(res.data)
    }
    function submitLivre(e){
        e.preventDefault()
        const p={"nom":nom,"description":description,
        "isbn":isbn,"auteur":auteur,"editeur":editeur,
        "date_edition":date_edition,"image":image,"category":categories[selectdCat]}
        livreServices.addLivre(p)
        navigate("/livres")
    }

    return(
        <Form onSubmit={(e)=>submitLivre(e)}>
          
            <h1 className="text-center mt-4 mb-4">Ajouter un livre</h1>
            <Form.Group controlId="nom">
                <Form.Label>Nom :</Form.Label>
                <Form.Control type="text" placeholder="Entrez le nom" value={nom} onChange={(e)=>setNom(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="description">
                <Form.Label>Description :</Form.Label>
                <Form.Control type="text" placeholder="Entrez la description" value={description} onChange={(e)=>setDescr(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="isbn">
                <Form.Label>Isbn :</Form.Label>
                <Form.Control type="text" placeholder="Entrez le isbn" value={isbn} onChange={(e)=>setIsbn(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="auteur">
                <Form.Label>Auteur :</Form.Label>
                <Form.Control type="text" placeholder="Entrez l'auteur" value={auteur} onChange={(e)=>setAut(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="editeur">
                <Form.Label>Editeur :</Form.Label>
                <Form.Control type="text" placeholder="Entrez l'editeur" value={editeur} onChange={(e)=>setEdit(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="date_edition">
                <Form.Label>Date_edition :</Form.Label>
                <Form.Control type="text" placeholder="Entrez date edition" value={date_edition} onChange={(e)=>setDate(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="image">
                <Form.Label>Image :</Form.Label>
                <Form.Control type="text" placeholder="Entrez l'image" value={image} onChange={(e)=>setImage(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="category">
                <Form.Label>Catégorie :</Form.Label>
                <Form.Control as="select" onChange={(e)=>setSelectedCat(e.target.value)}>
                    <option value={0}>Sélectionnez une catégorie</option>
                    {categories.map((elem,index)=>{
                        if(elem.name === undefined) {return null}
                        return <option key={index} value={index}>{elem.name}</option>
                    })}
                </Form.Control><br/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Ajouter
            </Button>
            <Button variant="success" type="submit" href="/livres/add">Liste des livres</Button>
        </Form>
    )
}

export default AddLivreForm;
