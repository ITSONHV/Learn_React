import React, { Component } from 'react';
import data from "../datas/tintuc.json";
import NewsRelated from '../newscomponent/NewsRelated';
class DetailsContent extends Component {
    render() {
        var dem=1;
        console.log(this.props.match.params.id);
        return (
            <div>
                {
                    data.map((value,index)=>{
                        if(value.id==this.props.match.params.id){
                            return(
                                    <div className="container my-4" key={index}>
                                    <div id="portfolio" className="d-flex align-items-center justify-content-center">
                                        <div className="container-fluid p-0">
                                            <div className="row g-0">
                                                <div className="col-lg-4 col-sm-6">
                                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                                        <img className="img-responsive center-block rong100" src={"../"+value.anh} alt="..." />
                                                        <div className="portfolio-box-caption">
                                                            <div className="project-category text-white-50">{value.tieuDe}</div>
                                                            <div className="project-name">{value.noiDung}</div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="raw">
                                        <h3 className="h4 mb-2">{value.tieuDe}</h3>
                                        <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
                                        <p className="text-black-75 mb-4">{value.noiDung}</p>
                                        <p className="text-black-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                                    </div>
                                </div>
                            );
                        }
                    })
                }
                    <div id="portfolio">
                        <h1 style={{ textAlign: 'center', color: 'red' }}>NỘI DUNG MỚI KHÁC</h1>
                    </div>
                    <div id="portfolio">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                            {
                                data.map((value,index)=>{
                                    if(value.id!=this.props.match.params.id){
                                        if(dem<=3){
                                            dem++;
                                            return(
                                                <NewsRelated  
                                                    tinId={value.id} 
                                                    anh={value.anh} 
                                                    tieuDe={value.tieuDe} 
                                                    noiDung={value.noiDung}
                                                    key={index}/>
                                            );
                                        }
                                    }
                                })
                            }
                                 {/* <NewsRelated/>
                                 <NewsRelated/>
                                 <NewsRelated/>
                                 <NewsRelated/>
                                 <NewsRelated/> */}
                                {/* <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                        <img className="img-fluid" src="../routerstyles/assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">Category</div>
                                            <div className="project-name">Project Name</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                        <img className="img-fluid" src="../routerstyles/assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">Category</div>
                                            <div className="project-name">Project Name</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                        <img className="img-fluid" src="../routerstyles/assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">Category</div>
                                            <div className="project-name">Project Name</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                        <img className="img-fluid" src="../routerstyles/assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                                        <div className="portfolio-box-caption">
                                            <div className="project-category text-white-50">Category</div>
                                            <div className="project-name">Project Name</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <a className="portfolio-box" href="/tinchitiet" title="Project Name">
                                        <img className="img-fluid" src="../routerstyles/assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                                        <div className="portfolio-box-caption p-3">
                                            <div className="project-category text-white-50">Category</div>
                                            <div className="project-name">Project Name</div>
                                        </div>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

export default DetailsContent;