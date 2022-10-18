import cat1 from '../assets/imgs/cat1.png'
import cat2 from '../assets/imgs/cat2.png'
import cat3 from '../assets/imgs/cat3.png'
import cat4 from '../assets/imgs/cat4.png'
import cat5 from '../assets/imgs/cat5.png'
import cat6 from '../assets/imgs/cat6.png'
import Image from 'next/image'

function Category() {
    return (
        <div className="row">
            <div className="col-2">
                <Image src={cat1} class="img-thumbnail" alt="..."/>
            </div>
            <div className="col-2">
                <Image src={cat2} class="img-thumbnail" alt="..."/>
            </div>
            <div className="col-2">
                <Image src={cat3} class="img-thumbnail" alt="..."/>
            </div>
            <div className="col-2">
                <Image src={cat4} class="img-thumbnail" alt="..."/>
            </div>
            <div className="col-2">
                <Image src={cat5} class="img-thumbnail" alt="..."/>
            </div>
            <div className="col-2">
                <Image src={cat6} class="img-thumbnail" alt="..."/>
            </div>
        </div>
    )
}

export default Category