import React from "react";
// import servicesImg from "../../img/service.png";
import webDev from "../../img/web-dev.png";

const WhatWeDo = () => {
  return (
    <div>
      <h2>What We Do</h2>
      <div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Web Development</h2>
          <p>We deliver custom web development services that are responsive, user-friendly, visually appealing, and aligned with our client's business goals. </p>
          <ul className="list-unstyled px-3">
            <li className="job-items">Front-End Development</li>
            <li className="job-items">Back-End Development</li>
            <li className="job-items">Full Stack Development</li>
            <li className="job-items">Web Designing</li>
            <li className="job-items">Responsive Designing</li>
            <li className="job-items">E-Commerce Website</li>
            <li className="job-items">PSD to Html</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4">
          <img src={webDev} alt="WebDev Images" className="w-100" />
        </div>
      </div><div className="row bg-white p-3 rounded-4 shadow mb-3">
        <div className="col-md-8">
          <h2 className="f-primary f2">Digital Marketing</h2>
          <p>We deliver custom web development services that are responsive, user-friendly, visually appealing, and aligned with our client's business goals. </p>
          <ul className="list-unstyled px-3">
            <li className="job-items">Social media marketing</li>
            <li className="job-items">Search engine optimization (SEO)</li>
            <li className="job-items">Pay-per-click advertising (PPC)</li>
            <li className="job-items">Content marketing</li>
            <li className="job-items">Affiliate marketing</li>
            <li className="job-items">Email marketing</li>
          </ul>
          <button type="button" className="mt-3 btn-color py-2 px-3">Packages</button>
        </div>
        <div className="col-md-4">
          <img src={webDev} alt="WebDev Images" className="w-100" />
        </div>
      </div>
    </div>
    // <div className="p-md-0 p-3">
    //   <section className="row py-md-5 mt-1 mt-md-0 justify-content-center">
    //     <div className="col-md-6">
    //       <h1 className="f2 display-5 fw-bold f-primary mb-2">Our Services</h1>
    //       <p className="mb-3">
    //       Welcome to our services section! Here, you can learn about the wide range of services that we offer to our clients. We are committed to providing high-quality, reliable, and cost-effective solutions that meet your unique needs. Whether you're looking for web development, graphic design, social media management, or digital marketing services, we have the expertise and experience to help you achieve your goals. Our team of skilled professionals will work closely with you to understand your requirements and deliver customized solutions that exceed your expectations. So, explore our services section and discover how we can help your business grow and succeed.
    //       </p>
    //     </div>
    //     <div className="col-md-6">
    //       <img src={servicesImg} alt="" width={"100%"} />
    //     </div>
    //     <div className="mt-4 row p-0">
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //         <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-laptop-code fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">Web Development</h5>
    //           <p>
    //           At our All Tasker company, we offer a range of services to help businesses establish a strong online presence. Our team of experienced developers specializes in creating custom websites that are tailored to the unique needs and goals of each client. From front-end design to back-end development, we work closely with our clients to ensure that every aspect of their website is optimized for performance, usability, and aesthetics. We also provide ongoing maintenance and support to ensure that our clients' websites remain up-to-date and secure. Whether you need a simple brochure site or a complex e-commerce platform, our web development services can help you achieve your online goals.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //       <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-chart-simple fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">Digital Marketing</h5>
    //           <p>
    //           At our company, we offer a comprehensive suite of digital marketing services designed to help businesses of all sizes increase their online visibility, attract more website traffic, and ultimately, drive more conversions and sales. Our services include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and more. We work closely with our clients to develop customized strategies for their specific needs and goals. Whether you're looking to increase brand awareness, generate leads, or boost sales, our digital marketing experts have the skills and experience to help you achieve your goals.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //       <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-palette fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">Graphic Designing</h5>
    //           <p>
    //           At our company, we are proud to offer top-notch graphic designing services to help our clients elevate their brands and create impactful visuals. Our team of skilled designers specializes in creating visually stunning logos, websites, brochures, business cards, and other marketing materials that are tailored to our client's unique needs and preferences. Our goal is to work closely with our clients to understand their vision and turn it into a reality that exceeds their expectations. We strive to deliver exceptional quality work that stands out in today's competitive market, and we are committed to providing excellent customer service to ensure our clients' complete satisfaction.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //       <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-photo-film fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">Video Editing</h5>
    //           <p>
    //           Our video editing services are designed to help individuals, businesses, and organizations take their video content to the next level. Our team of experienced editors is skilled in all aspects of video editing, from basic trimming and cutting to advanced techniques like color grading and special effects. We work closely with our clients to understand their vision and bring it to life through precise editing and attention to detail. Whether you need to create a promotional video for your business, edit footage from a special event, or produce a cinematic masterpiece, we are here to help. Our video editing services are reliable, affordable, and tailored to meet your unique needs. We deliver high-quality video editing services that exceed expectations.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //       <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-gamepad fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">3D Modeling</h5>
    //           <p>
    //           We offer high-quality 3D modeling services to help our clients bring their ideas and designs to life. Our team of skilled professionals is experienced in using the latest software and techniques to create stunning, realistic 3D models that accurately represent our client's vision. Whether it's for product prototyping, architectural visualization, or gaming and animation, we have the expertise to deliver exceptional results. We work closely with our clients to understand their specific needs and requirements, and we are committed to providing timely and efficient service that exceeds their expectations. With our 3D modeling services, our clients can be confident that they will receive top-notch quality and attention to detail every step of the way.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //       <div className="d-flex flex-column align-items-center text-center col-md-4 mb-4">
    //       <div className="bg-white h-100 rounded-4 p-3 px-md-4">
    //           <i className="fa-solid fa-pen-to-square fs-1 f-primary mb-3"></i>
    //           <h5 className="mb-4 mt-2">Content Writing</h5>
    //           <p>
    //           At our content writing services, we understand the importance of well-crafted and engaging content that captures the attention of your target audience. Our team of experienced writers has a keen eye for detail and a passion for creating content that stands out. We offer a range of writing services, including website content, blog posts, product descriptions, social media posts, email newsletter and more. Whether you need content for a one-time project or ongoing content creation, we work closely with you to understand your brand voice and goals and deliver content that aligns with your vision. With our content writing services, you can be confident that your content will be of the highest quality and help you achieve your business objectives.
    //           </p>
    //           <button type="button" className="my-4 btn-color py-2 px-3">Our Packages</button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default WhatWeDo;
