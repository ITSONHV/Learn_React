import React, { Component } from 'react';

class CrudToolbar extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="row">
                <div className="col-sm-1">
                <button className="btn btn-block btn-success">Thêm</button>
                </div>
                <div className="col-sm-1">
                <button className="btn btn-block btn-info">Sửa</button>
                
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-block btn-danger">Xóa</button>
                </div>
            </div>
        );
    }
}

export default CrudToolbar;