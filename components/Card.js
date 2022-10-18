import product1 from '../assets/imgs/product1.png'
import product2 from '../assets/imgs/product2.png'
import product3 from '../assets/imgs/product3.jpg'
import product4 from '../assets/imgs/product4.png'
import Image from 'next/image'

function Card() {
    return (
        <div className="row pb-5">
            <div className="col-3">
                <div class="card">
                    <Image src={product1} class="card-img-top" alt="..." />
                    <div class="card-body p-0 pt-3">
                        <h5 class="card-title text-white">Card title</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-btns d-flex justify-content-between">
                            <a href="#" class="btn text-white">Rs 500</a>
                            <a href="#" class="btn btn-danger">Add to bucket</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div class="card">
                    <Image src={product2} class="card-img-top" alt="..." />
                    <div class="card-body p-0 pt-3">
                        <h5 class="card-title text-white">Card title</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-btns d-flex justify-content-between">
                            <a href="#" class="btn text-white">Rs 500</a>
                            <a href="#" class="btn btn-danger">Add to bucket</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div class="card">
                    <Image src={product3} class="card-img-top" alt="..." />
                    <div class="card-body p-0 pt-3">
                        <h5 class="card-title text-white">Card title</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-btns d-flex justify-content-between">
                            <a href="#" class="btn text-white">Rs 500</a>
                            <a href="#" class="btn btn-danger">Add to bucket</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div class="card">
                    <Image src={product4} class="card-img-top" alt="..." />
                    <div class="card-body p-0 pt-3">
                        <h5 class="card-title text-white">Card title</h5>
                        <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="card-btns d-flex justify-content-between">
                            <a href="#" class="btn text-white">Rs 500</a>
                            <a href="#" class="btn btn-danger">Add to bucket</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Card