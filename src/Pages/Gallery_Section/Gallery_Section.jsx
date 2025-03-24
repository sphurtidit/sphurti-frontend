import './Gallery_Section.css';
import Carousel from '../../Components/Carousel/Carousel';
import Gallery from '../../Components/Gallery/Gallery';
// import Navbar from '../../Components/Navbar/navbar';

const Gallery_Section = () => {
    return (
        <div id="gallery-section">
        <Nav/>
        <Carousel />
        <Gallery />
        </div>
    )
}

export default Gallery_Section;