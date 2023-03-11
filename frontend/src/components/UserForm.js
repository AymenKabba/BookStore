import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import userServices from "../services/user.services";
import Navbar from "./Navbar";

function AddUserForm(props) {
  const [fnom, setNomf] = useState("");
  const [lnom, setNoml] = useState("");
  const [emaily, setEmail] = useState("");
  const [passwordy, setPassw] = useState("");
  const [photor, setPhot] = useState("");

  const navigate = useNavigate();

  function submitReservation(e) {
    e.preventDefault();
    const p = { fName: fnom, lName: lnom, email: emaily, password: passwordy,photo:photor };
    userServices.addUser(p);
    navigate("/users");
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-4 mb-4">Ajouter un utilisateur</h1>
        <Form onSubmit={submitReservation}>
          <Form.Group controlId="formFirstName">
            <Form.Label>Prénom :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre prénom"
              value={fnom}
              onChange={(e) => setNomf(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formLastName">
            <Form.Label>Nom :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez votre nom"
              value={lnom}
              onChange={(e) => setNoml(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="Entrez votre email"
              value={emaily}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Mot de passe :</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entrez votre mot de passe"
              value={passwordy}
              onChange={(e) => setPassw(e.target.value)}
            /><br/>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Photo :</Form.Label>
            <Form.Control
              type="photo"
              placeholder="Entrez votre photo"
              value={photor}
              onChange={(e) => setPhot(e.target.value)}
            /><br/>
          </Form.Group>

          <Button variant="primary" type="submit" >
            Ajouter
          </Button>
          <Button variant="success" type="submit" href="/users/add">Liste des users</Button>
        </Form>
      </div>
    </>
  );
}

export default AddUserForm;
