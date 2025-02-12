import './Gallery_Section.css';
import Carousel from '../../Components/Carousel/Carousel';
import Gallery from '../../Components/Gallery/Gallery';
import Nav from '../../Components/Navbar/nav';

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