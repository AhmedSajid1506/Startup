import React from "react";
import {NavLink} from "react-router-dom"
import '../css/footer.css';

const Footer = () => {
    return (
        <>
            <div
                className="d-flex position-relative p-5 justify-content-between flex-wrap"
                style={{ background: "rgb(64, 64, 64)" }}
            >
                <div className="d-flex flex-column col-md-9 col-12">
                    <div className="footer text-white">
                        <h1 className="f2 f-primary">About Us</h1>
                        <p>
                            At our company, we are a team of versatile professionals who specialize in a range of digital services including web development, digital marketing, graphic designing, video editing, content writing, and 3D modeling. With our diverse skillset and expertise, we are committed to delivering top-quality solutions to help our clients succeed in the digital world.
                        </p>
                    </div>

                    {/* Social Icons */}
                    {/* <div className="wrapper">
                        <div className="button">
                            <div className="icon"><i className="fa-brands fa-youtube"></i></div>
                            <span>YouTube</span>
                        </div><div className="button">
                            <div className="icon"><i className="fa-brands fa-facebook-f"></i></div>
                            <span>Facebook</span>
                        </div><div className="button">
                            <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                            <span>Instagram</span>
                        </div><div className="button">
                            <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                            <span>Twitter</span>
                        </div><div className="button">
                            <div className="icon"><i className="fa-brands fa-tiktok"></i></div>
                            <span>Tiktok</span>
                        </div>
                    </div> */}
                    <div className="mt-3">
                        <ul className="social-icons">
                            <li>
                                <NavLink to="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fa-brands fa-youtube"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fa-brands fa-facebook-f"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fa-brands fa-instagram"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fa-brands fa-twitter"></span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="#">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span className="fa-brands fa-tiktok"></span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="quick-links col-md-2 col-12">
                    <h1 className="f2 f-primary">Quick Links</h1>
                    <ul className="pt-1 list-unstyled">
                        <li>
                            <a className="text-white" href="/">Home</a>
                        </li>
                        <li>
                            <a className="text-white" href="/about">About Us</a>
                        </li>
                        <li>
                            <a className="text-white" href="/contact">Contact Us</a>
                        </li>
                        <li>
                            <a className="text-white" href="/privacy-policy">Privacy Policy</a>
                        </li>
                        <li>
                            <a className="text-white" href="/dmca">DMCA</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div><p className="text-center p-md-4 p-3 bg-white mb-0">© Copyright 2023 alltasker.co, All Right Reserved.</p></div>
        </>
    );
};

export default Footer;
