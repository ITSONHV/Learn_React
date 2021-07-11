import React, { Component, useState } from 'react';

// const Content=(props)=>{
//     const [person,setPersons]=useState({
//         status:true
//     });
//     const thongbao=()=>{
//         alert("Cách xử lý sự kiện trong React !")
//     }
//     const thongbao2=()=>{
//         alert("Cách xử lý sự kiện xóa trong React !")
//     }
//     const thongbao3=(x)=>{
//         alert(x);
//     }
//     const renderButton=()=>(
//         <div className="row">
//         <div className="btn btn-group">
//         <div className="btn btn-success" onClick={()=>thongbao3("Thông báo 3")}> Create</div>
//         <div className="btn btn-info" onClick={clickEdit}> Edit</div>
//         <div className="btn btn-danger" onClick={thongbao2}> Delete</div>
//         {/* <div className="btn btn-danger" onClick={()=>thongbao2()}> Delete</div> */}
//         <div className="btn btn-default" onClick={thongbao3.bind(this,"Kaf kaf kaf")}> Test</div>
//         </div>
//         </div>
//     );
//     const renderForm=()=>(
//         <div className="row">
//         <div className="form-group">
//             <input type="text" name="ten" className="form-control"></input>
//             <br></br>
//             <div className="btn btn-success" onClick={clickSave}>Save</div>
//         </div>
//     </div>
//     );
//     const displayCheck=()=>{
//         if(person.status===true){
//            return renderButton();
//         }
//         else{
//            return renderForm();
//         }
//     };
//     const clickEdit=()=>{
//         setPersons({
//             status:false
//         });
//     }
//     const clickSave=()=>{
//         setPersons({
//             status:true
//         });
//     }
//     return(
//         <section id="scroll">
//             <div className="container px-5">
//             <div className="row gx-5 align-items-center">
//                 <div className={"col-lg-6 "+props.sapxep}>
//                 <div className="p-5"><img className="img-fluid rounded-circle" src={"assets/img"+props.tenanh} alt="..." /></div>
//                 </div>
//                 <div className="col-lg-6 order-lg-1">
//                 <div className="p-5">
//                     <h2 className="display-4">{props.tieude}</h2>
//                     <p>{props.noidung}</p>
                    
//                 <hr/>
//                {displayCheck()}

              
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </section>
//     );
// }

class Content extends Component {
    constructor(props) {
        super(props);
        this.state={status:true};
    }
    thongbao=()=>{
        alert("Cách xử lý sự kiện trong React !")
    }
    thongbao2=()=>{
        alert("Cách xử lý sự kiện xóa trong React !")
    }
    thongbao=()=>{
                alert("Cách xử lý sự kiện trong React !")
            }
    thongbao2=()=>{
                alert("Cách xử lý sự kiện xóa trong React !")
            }
    thongbao3=(x)=>{
                alert(x);
            }
    
    
    renderButton=()=>(
                <div className="row">
                <div className="btn btn-group">
                <div className="btn btn-success" onClick={()=>this.thongbao3("Thông báo 3")}> Create</div>
                <div className="btn btn-info" onClick={this.clickEdit}> Edit</div>
                <div className="btn btn-danger" onClick={this.thongbao2}> Delete</div>
                {/* <div className="btn btn-danger" onClick={()=>thongbao2()}> Delete</div> */}
                <div className="btn btn-success" onClick={this.thongbao3.bind(this,"Kaf kaf kaf")}> Test</div>
                </div>
                </div>
            );
    renderForm=()=>(
                <div className="row">
                <div className="form-group">
                    <input type="text" name="ten" ref={(data)=>{this.resTrungGian=data}} defaultValue={this.props.tieude} className="form-control"></input>
                    <br></br>
                    <div className="btn btn-success" onClick={this.clickSave}>Save</div>
                </div>
            </div>
            );
    displayCheck=()=>{
        if(this.state.status===true){
            return this.renderButton();
        }
        else{
            return this.renderForm();
        }
    };
    clickEdit=()=>{
        this.setState(
            {status:false}
        )
    }
    clickSave=()=>{
        this.setState(
            {status:true} 
        )
        console.log(this.resTrungGian.value);
    }
    render() {
        return (
            <section id="scroll">
            <div className="container px-5">
            <div className="row gx-5 align-items-center">
                <div className={"col-lg-6 "+this.props.sapxep}>
                <div className="p-5"><img className="img-fluid rounded-circle" src={"assets/img"+this.props.tenanh} alt="..." /></div>
                </div>
                <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                    <h2 className="display-4">{this.props.tieude}</h2>
                    <p>{this.props.noidung}</p>
                    
                <hr/>
                {this.displayCheck()}
                </div>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default Content;