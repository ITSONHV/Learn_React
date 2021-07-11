import React, { Component } from 'react';

class LifeCycle2 extends Component {
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps LifeCycle2 đã chạy r này !: "+nextProps.ten);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate LifeCycle2 đã chạy r này !: ");
        // chỉ cần return true sẽ chạy các hàm tiếp theo
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate LifeCycle2 đã chạy r này !");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate LifeCycle2 đã chạy r này !");
    }
    
    
    
    render() {
        console.log("Render Life Cycle2");
        return (
            <div>
                <p>{this.props.ten}</p>
            </div>
        );
    }
}

export default LifeCycle2;