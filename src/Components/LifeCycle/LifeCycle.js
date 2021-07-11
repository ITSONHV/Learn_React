import React, { Component } from 'react';
import LifeCycle2 from './LifeCycle2';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:"ok",
            check:"Son Hoang"
        };
    }
    
    componentWillMount() {
        console.log("componentWillMount đã chạy r này !");
    }
    
    componentDidMount() {
        console.log("componentDidMount đã chạy r này !");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate đã chạy r này !: "+nextState.status);
        // chỉ cần return true sẽ chạy các hàm tiếp theo
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate đã chạy r này !");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate đã chạy r này !");
    }
    
    CapNhatState=()=>{
        this.setState({
            status:"fail",
            check:"false"
        });
    }
    
    render() {
        console.log("Hàm render LifeCycle đã chạy !");
        console.log(this.state.status);
        return (
            <div>
                {/* Lấy từ thằng bố chuyển sang thằng con */}
                <LifeCycle2 ten={this.state.check}/>
                <button onClick={()=>this.CapNhatState()}>Click Me</button>
            </div>
        );
    }
}

export default LifeCycle;