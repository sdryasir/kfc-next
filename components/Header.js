import Image from "next/image"

import logo from '../assets/imgs/KFC-Logo-Red.png'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <Image src={logo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="btn btn-delivery" aria-current="page" href="#">Start and order for delivery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <a className="btn btn-location" href="#"><span>Select a Location</span></a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="btn btn-outline-danger rounded-0" href="#">0</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-danger" href="#">Register / Sign in</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header