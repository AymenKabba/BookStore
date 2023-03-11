import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminHome.css';
import aboutImg from "../images/about-img2.jpg";

function AdminHome() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="/">Admine Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/livres">Add Livre</Nav.Link>
              <Nav.Link href="/livres/add">List Livre</Nav.Link>
              <Nav.Link href="/users/add">Liste Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className='about'>
  <div className='container'>
    <div className='section-title'>
      <h2>About Bookstore</h2>
    </div>

    <div className='about-content grid'>
      <div className='about-img'>
        <img src={aboutImg} alt='' />
      </div>
      <div className='about-text'>
        <p className='fs-17'>
        Adding books: If you want to add a new book to the website, you can do so by navigating to the "Books" section of the admin dashboard and clicking on the "Add Book" button. You will need to provide the book details such as the title, author, description, and cover image.

Viewing a list of books: To view a list of all the books currently on the website, you can navigate to the "Books" section of the admin dashboard and click on the "View Books" button. You will be able to see the title, author, and cover image of each book, as well as some other details.

Viewing a list of users: If you need to view a list of all the users registered on the website, you can navigate to the "Users" section of the admin dashboard and click on the "View Users" button. You will be able to see each user's name, email address, and some other details. 
        </p>
       
      </div>
    </div>
  </div>
</section>
     
    </div>
  );
}

export default AdminHome;





