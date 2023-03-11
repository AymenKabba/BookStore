import { useEffect, useState } from "react";
import livreService from "../services/livres.services";
import "./LivreCard.css" 

function LivreCard() {
  const [livres, setLivres] = useState([]);
  const [search, setSearch] = useState("");

  const getAllLivres = async () => {
    try {
      const result = await livreService.getAllLivres();
      console.log(result.data);
      setLivres(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllLivres();
  }, []);

  return (
    <div className="container">
      <div className="row mt-8">
        <div className="col-12">
          <h3 className="text-center mt-4 mb-4">Liste des livres</h3>
          <div className="books-search-wrapper">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search by nom"
            />
          </div>
          <div className="books-wrapper">
            {livres
              .filter((livre) =>
                livre.nom.toLowerCase().includes(search.toLowerCase())
              )
              .map((livre, index) => (
                <div key={index} className="book">
                  <img src={livre.image} alt={livre.nom} className="book-img" />
                  <h2 className="book-name">{livre.nom}</h2>
                  <div className="book-details">
                    <div>Auteur: {livre.auteur}</div>
                    <div>Maison d'édition: {livre.editeur}</div>
                    <div>Date de publication: {new Date(livre.date_edition).toDateString()}</div>
                    <div>ISBN: {livre.isbn}</div>
                  </div>
                  <p className="book-description">{livre.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LivreCard;



