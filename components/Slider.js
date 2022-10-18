import Image from "next/image"
import slide1 from '../assets/imgs/slider1.jpg'
import slide2 from '../assets/imgs/slider2.png'
import slide3 from '../assets/imgs/slider3.png'
function Slider() {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="true" data-bs-interval="1000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={slide1} className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <Image src={slide2} className="d-block w-100"/>
                </div>
                <div className="carousel-item">
                    <Image src={slide3} className="d-block w-100"/>
                </div>
            </div>
        </div>
    )
}

export default Slider