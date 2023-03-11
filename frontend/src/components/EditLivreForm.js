import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import livreService from "../services/livres.services"
import { Button, Form, Navbar } from "react-bootstrap"

function EditLivreForm(){
    const [nom,setNom]=useState("")
    const[description,setDescr]=useState("")
    const[isbn,setIsbn]=useState("")
    const[auteur,setAut]=useState("")
    const[editeur,setEdit]=useState("")
    const[date_edition,setDate]=useState("")
    const[image,setImage]=useState("")
    const navigate=useNavigate()
    const {id}=useParams()
    async function livById(){
    const res= await livreService.getLivreById(id)
    setNom(res.data.nom)
    setDescr(res.data.description)
    setIsbn(res.data.isbn)
    setAut(res.data.auteur)
    setEdit(res.data.editeur)
    setDate(res.data.date_edition)
    setImage(res.data.image)


    }
    useEffect(()=>{
     livById()
    },[]) 
    async function submitLivre(e){
        e.preventDefault()
        const p={"nom":nom,"description":description,
        "isbn":isbn,"auteur":auteur,"editeur":editeur,
        "date_edition":date_edition,"image":image}
        await livreService.updateLivre(p)
        navigate("/livres/add")
        }
    return ( 
    <form onSubmit={(e)=>submitLivre(e)}>
        
        <h1 className="text-center mt-4 mb-4" >Modifier un livre</h1>
    <Form.Label htmlFor="nom">nom :</Form.Label>
    <Form.Control type="text" value={nom} id="nom" onChange={(e)=>setNom(e.target.value)}/><br/>
    <Form.Label htmlFor="description">description :</Form.Label>
    <Form.Control type="text" value={description} id="description" onChange={(e)=>setDescr(e.target.value)}/><br/>
    <Form.Label htmlFor="isbn">isbn :</Form.Label>
    <Form.Control type="text" value={isbn} id="isbn" onChange={(e)=>setIsbn(e.target.value)}/><br/>
    <Form.Label htmlFor="auteur">auteur :</Form.Label>
    <Form.Control type="text" value={auteur} id="auteur" onChange={(e)=>setAut(e.target.value)}/><br/>
    <Form.Label htmlFor="editeur">editeur :</Form.Label>
    <Form.Control type="text" value={editeur} id="editeur" onChange={(e)=>setEdit(e.target.value)}/><br/>
    <Form.Label htmlFor="date_edition">date_edition :</Form.Label>
    <Form.Control type="text" value={date_edition} id="date_edition" onChange={(e)=>setDate(e.target.value)}/><br/>
    <Form.Label htmlFor="image">image :</Form.Label>
    <Form.Control type="text" value={image} id="image" onChange={(e)=>setImage(e.target.value)}/><br/>
    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" className="text-center mt-4 mb-4">
                            Modifier un livre
                        </Button>
                    </div>
   </form>)
}

export default EditLivreForm