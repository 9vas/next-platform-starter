"use client";

import React, { useEffect } from 'react';

export default function Page() {
    useEffect(() => {
        // Remove loader after page load (like in original index-gradient.html)
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('loaded');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500); // adjust delay as needed
        }
    }, []);

    return (
        <>
            {/* Loader Start */}
            <div id="loader" className="loader">
                <div id="loaderContent" className="loader__content">
                    <div className="loader__shadow"></div>
                    <div className="loader__box"></div>
                </div>
            </div>
            {/* Loader End */}

            {/* Header Start */}
            <header id="header" className="header d-flex justify-content-between">
                {/* Navigation Menu Start */}
                <div className="header__navigation">
                    <nav id="menu" className="menu">
                        <ul className="menu__list d-flex justify-content-start">
                            <li className="menu__item">
                                <a className="menu__link btn" href="#home">
                                    <span className="menu__caption">Home</span>
                                    <i className="ph-bold ph-house-simple"></i>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="#portfolio">
                                    <span className="menu__caption">Portfolio</span>
                                    <i className="ph-bold ph-squares-four"></i>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="#about">
                                    <span className="menu__caption">About Me</span>
                                    <i className="ph-bold ph-user"></i>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="#resume">
                                    <span className="menu__caption">Resume</span>
                                    <i className="ph-bold ph-article"></i>
                                </a>
                            </li>
                            <li className="menu__item">
                                <a className="menu__link btn" href="#contact">
                                    <span className="menu__caption">Contact</span>
                                    <i className="ph-bold ph-envelope"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Navigation Menu End */}
                {/* Header Controls Start */}
                <div className="header__controls d-flex justify-content-end">
                    <button id="color-switcher" className="color-switcher header__switcher btn" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
                    <a id="notify-trigger" className="header__trigger btn" href="mailto:example@example.com?subject=Message%20from%20your%20site">
                        <span className="trigger__caption">Let's Talk</span>
                        <i className="ph-bold ph-chat-dots"></i>
                    </a>
                </div>
                {/* Header Controls End */}
            </header>
            {/* Header End */}

            {/* Gradient Background Start */}
            <div className="gradient-background">
                <div className="blur"></div>
                <div className="blur"></div>
                <div className="blur"></div>
            </div>
            {/* Gradient Background End */}

            {/* Avatar Side Block Start */}
            <div id="avatar" className="avatar">
                <div className="avatar__container d-flex flex-column justify-content-lg-between">
                    {/* Avatar Block 1 Start */}
                    <div className="avatar__block">
                        <div className="avatar__img">
                            <img src="path/to/your/image1.jpg" alt="Description 1" />
                        </div>
                        <div className="avatar__info">
                            <h2 className="avatar__name">Your Name</h2>
                            <p className="avatar__desc">Short description or tagline.</p>
                        </div>
                    </div>
                    {/* Avatar Block 1 End */}
                    {/* Avatar Block 2 Start */}
                    <div className="avatar__block">
                        <div className="avatar__img">
                            <img src="path/to/your/image2.jpg" alt="Description 2" />
                        </div>
                        <div className="avatar__info">
                            <h2 className="avatar__name">Your Name</h2>
                            <p className="avatar__desc">Short description or tagline.</p>
                        </div>
                    </div>
                    {/* Avatar Block 2 End */}
                    {/* Add more avatar blocks as needed */}
                </div>
            </div>
            {/* Avatar Side Block End */}

            {/* Page Content Start */}
            <div id="content" className="content">
                <div className="content__wrapper">
                    {/* Section: Home Start */}
                    <section id="home" className="section home">
                        <div className="container">
                            <h1 className="section__title">Welcome to My Portfolio</h1>
                            <p className="section__subtitle">I am a [Your Profession]</p>
                            <a href="#portfolio" className="btn">
                                <span className="btn__text">View My Work</span>
                                <i className="ph-bold ph-arrow-right"></i>
                            </a>
                        </div>
                    </section>
                    {/* Section: Home End */}

                    {/* Section: Portfolio Start */}
                    <section id="portfolio" className="section portfolio">
                        <div className="container">
                            <h2 className="section__title">My Work</h2>
                            <div className="portfolio__grid">
                                {/* Portfolio Item 1 */}
                                <div className="portfolio__item">
                                    <a href="path/to/your/project1" className="portfolio__link">
                                        <img src="path/to/your/thumbnail1.jpg" alt="Project 1" className="portfolio__img" />
                                        <div className="portfolio__info">
                                            <h3 className="portfolio__title">Project Title 1</h3>
                                            <p className="portfolio__desc">Short description of the project.</p>
                                        </div>
                                    </a>
                                </div>
                                {/* Portfolio Item 2 */}
                                <div className="portfolio__item">
                                    <a href="path/to/your/project2" className="portfolio__link">
                                        <img src="path/to/your/thumbnail2.jpg" alt="Project 2" className="portfolio__img" />
                                        <div className="portfolio__info">
                                            <h3 className="portfolio__title">Project Title 2</h3>
                                            <p className="portfolio__desc">Short description of the project.</p>
                                        </div>
                                    </a>
                                </div>
                                {/* Add more portfolio items as needed */}
                            </div>
                        </div>
                    </section>
                    {/* Section: Portfolio End */}

                    {/* Section: About Start */}
                    <section id="about" className="section about">
                        <div className="container">
                            <h2 className="section__title">About Me</h2>
                            <p className="section__desc">
                                Detailed information about yourself, your background, and your skills.
                            </p>
                        </div>
                    </section>
                    {/* Section: About End */}

                    {/* Section: Resume Start */}
                    <section id="resume" className="section resume">
                        <div className="container">
                            <h2 className="section__title">My Resume</h2>
                            <a href="path/to/your/resume.pdf" className="btn" download>
                                <span className="btn__text">Download My Resume</span>
                                <i className="ph-bold ph-arrow-down"></i>
                            </a>
                        </div>
                    </section>
                    {/* Section: Resume End */}

                    {/* Section: Contact Start */}
                    <section id="contact" className="section contact">
                        <div className="container">
                            <h2 className="section__title">Get in Touch</h2>
                            <form action="path/to/your/form/handler" method="POST" className="contact__form">
                                <div className="form__group">
                                    <label htmlFor="name" className="form__label">Your Name</label>
                                    <input type="text" id="name" name="name" className="form__input" required />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="email" className="form__label">Your Email</label>
                                    <input type="email" id="email" name="email" className="form__input" required />
                                </div>
                                <div className="form__group">
                                    <label htmlFor="message" className="form__label">Your Message</label>
                                    <textarea id="message" name="message" className="form__textarea" required></textarea>
                                </div>
                                <button type="submit" className="btn">
                                    <span className="btn__text">Send Message</span>
                                    <i className="ph-bold ph-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </section>
                    {/* Section: Contact End */}
                </div>
            </div>
            {/* Page Content End */}

            {/*
                Die folgenden Skripte müssen in Next.js/React über useEffect und npm-Module eingebunden werden:
                - js/libs.min.js
                - js/app.js
                - js/gallery-init.js
                - sowie das GSAP-Animation-Snippet
            */}
        </>
    );
}
