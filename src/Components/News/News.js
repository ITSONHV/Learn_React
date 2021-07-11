import React, { Component } from 'react';
import NewItem from '../newscomponent/NewItem';
import data from "../datas/tintuc.json";
class News extends Component {
    getNewItem=()=>{
        data.map((value,index)=>{
           return (
                <NewItem key={index} anh={value.anh} tieuDe={value.tieuDe} noiDung={value.noiDung}></NewItem>
           )
        });
    };
    render() {
        console.log(data);
        return (
            <div className="container">
                {/* Services*/}
                <section className="page-section" id="services">
                    <div className="container px-4 px-lg-5">
                        <h2 className="text-center mt-0">At Your Service</h2>
                        <hr className="divider" />
                        <div className="row gx-4 gx-lg-5">
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-gem fs-1 text-primary" /></div>
                                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                                    <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-laptop fs-1 text-primary" /></div>
                                    <h3 className="h4 mb-2">Up to Date</h3>
                                    <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-globe fs-1 text-primary" /></div>
                                    <h3 className="h4 mb-2">Ready to Publish</h3>
                                    <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 text-center">
                                <div className="mt-5">
                                    <div className="mb-2"><i className="bi-heart fs-1 text-primary" /></div>
                                    <h3 className="h4 mb-2">Made with Love</h3>
                                    <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Portfolio*/}
                <div id="portfolio">
                    <div className="container-fluid p-0">
                        <div className="row g-0">
                            {
                                data.map((value,index)=>{
                                    return (
                                         <NewItem key={index} tinId={value.id} anh={value.anh} tieuDe={value.tieuDe} noiDung={value.noiDung}></NewItem>
                                    )
                                 })
                            }
                        {/* <NewItem anh="routerstyles/assets/img/portfolio/thumbnails/1.jpg" tieuDe="Category" noiDung="Project Name"></NewItem> */}
                            {/* <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                                    <div className="portfolio-box-caption">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-sm-6"> */}
                                <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                    <img className="img-fluid" src="routerstyles/assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                                    <div className="portfolio-box-caption p-3">
                                        <div className="project-category text-white-50">Category</div>
                                        <div className="project-name">Project Name</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default News;