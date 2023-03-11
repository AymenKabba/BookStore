import Header from "./Header"
import Navbar from "./Navbar"
import aboutImg from "../images/about-img.jpg";

function Home(props){
    return( 
        <>
  
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
          Welcome to our online bookstore! We offer a wide range of books from various genres, including fiction, non-fiction, and children's books. Our collection is constantly growing, and we pride ourselves on offering high-quality books at affordable prices. We also have a team of knowledgeable staff who can assist you in finding the perfect book for yourself or as a gift. 
        </p>
        <p className='fs-17'>
          We understand the importance of reading and the impact it can have on personal growth and development. That's why we strive to make books accessible to everyone, regardless of their budget or location. We offer fast and reliable shipping to ensure that you receive your books as quickly as possible.
        </p>
      </div>
    </div>
  </div>
</section>

        </>
     )
}

export default Home