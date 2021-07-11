import React, { Component } from 'react';
import CrudToolbar from "../toolbar/CrudToolbar"
class Home extends Component {

    render() {
        return (
            <div>
                
        <CrudToolbar/>
                {/* Masthead*/}
                <header className="masthead">
                    <div className="container px-4 px-lg-5 h-100">
                        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                            <div className="col-lg-8 align-self-end">
                                <h1 className="text-white font-weight-bold">Your Favorite Place for Free Bootstrap Themes</h1>
                                <hr className="divider" />
                            </div>
                            <div className="col-lg-8 align-self-baseline">
                                <p className="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                <a className="btn btn-primary btn-xl" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
                </header>
                {/* About*/}
                <section className="page-section bg-primary" id="about">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h2 className="text-white mt-0">We've got what you need!</h2>
                                <hr className="divider divider-light" />
                                <p className="text-white-75 mb-4">Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!</p>
                                <a className="btn btn-light btn-xl" href="#services">Get Started!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;