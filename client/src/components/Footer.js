import React from "react";
import '../css/footer.css';

const Footer = () => {
    return (
        <>
            <div
                class="d-flex position-relative p-5 justify-content-between flex-wrap"
                style={{ background: "rgb(64, 64, 64)" }}
            >
                <div class="d-flex flex-column col-md-9 col-12">
                    <div class="footer text-white">
                        <h1 className="f2 f-primary">About Us</h1>
                        <p>
                            At our company, we are a team of versatile professionals who specialize in a range of digital services including web development, digital marketing, graphic designing, video editing, content writing, and 3D modeling. With our diverse skillset and expertise, we are committed to delivering top-quality solutions to help our clients succeed in the digital world.
                        </p>
                    </div>
                    {/* <div>
                        <ul class="d-flex p-0">
                            <li class="list-unstyled width-50 mx-2">
                                <a
                                    href="https://www.youtube.com/@foodisyummy"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i class="fs-3 fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li class="list-unstyled width-50 mx-2">
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i class="fs-3 fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-unstyled width-50 mx-2">
                                <a
                                    href="https://twitter.com/home?lang=en"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i class="fs-3 fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-unstyled width-50 mx-2">
                                <a
                                    href="https://www.instagram.com/artandfood090"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i class="fs-3 fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="wrapper">
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
                    </div>
                </div>
                <div class="quick-links col-md-2 col-12">
                    <h1 className="f2 f-primary">Quick Links</h1>
                    <ul class="pt-1 list-unstyled">
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
            <div><p class="text-center p-md-4 p-3 bg-white mb-0">© Copyright 2023 alltasker.co, All Right Reserved.</p></div>
        </>
    );
};

export default Footer;
