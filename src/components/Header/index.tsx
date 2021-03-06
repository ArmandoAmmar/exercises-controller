import React from 'react';
import Logo from './logo.png';
console.log('Logo', Logo);

export default function Header() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">
                <img src={Logo} alt="Controlador de Exercicios" />
            </h5>
            {/* <nav className="my-2 my-md-0 mr-md-3">
                <a className="p-2 text-dark" href="#">
                    Features
                </a>
                <a className="p-2 text-dark" href="#">
                    Enterprise
                </a>
                <a className="p-2 text-dark" href="#">
                    Support
                </a>
                <a className="p-2 text-dark" href="#">
                    Pricing
                </a>
            </nav>
            <a className="btn btn-outline-primary" href="#">
                Sign up
            </a> */}
        </div>
    );
}
