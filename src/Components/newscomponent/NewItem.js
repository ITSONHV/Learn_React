import React, { Component } from 'react';

class NewItem extends Component {
    constructor(props) {
        super(props);
        
    }
    xulyUrl=(str)=>{
         // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
    }
    render() {
        return (
            <div className="col-lg-4 col-sm-6">
                {/* đường dẫn thân thiện slug */}
            <a className="portfolio-box" href={"/tin-chi-tiet/"+this.xulyUrl(this.props.tieuDe)+"."+this.props.tinId+".html"} title="Project Name">
                <img className="img-fluid" src={this.props.anh} alt="..." />
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">{this.props.tieuDe}</div>
                    <div className="project-name">{this.props.noiDung}</div>
                </div>
            </a>
        </div>
        );
    }
}

export default NewItem;