import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import LifeCycle from './Components/LifeCycle/LifeCycle';
import Nav from './Components/Navs/Nav';
import Home from './Components/Home/Home';
import FooterRouter from './Components/Footer/FooterRouter';
import ContentRouter from './Components/Content/ContentRouter';
import DetailsContent from './Components/Content/DetailsContent';
import Contact from './Components/Contact/Contact';
import News from './Components/News/News';
import MainRouter from './Routers/MainRouter';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// xài function + props
function One(props){
  return(
    <div className="col-6">
      <div className="card">
        <img className="card-img-top" src={props.urlanh}/>
        <div className="card-body">
          <h4 className="card-title">{props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
  )
}
// xài anonymus function
var Two = function(){
  return(
    <div>
      Cách 2
    </div>
  )
}
var Three =()=>(
  <div>
    Cách 3
  </div>
)
// props
class Four extends Component {
  render() {
    return (
      <div className="col-6">
      <div className="card">
        <img className="card-img-top" src={this.props.urlanh}/>
        <div className="card-body">
          <h4 className="card-title">{this.props.tieude}</h4>
          <p className="card-text">Text</p>
        </div>
      </div>
    </div>
    );
  }
}
const so=[11,2,3,3,4,5,56,6];
const so2=so.map((x)=>x*2+",")
const so3=so.map((x)=>(
    <li>
      So: {x}
    </li>
));
class App1 extends Component {
  render() {
    return (
      <div>
        {so3}
      </div>
    );
  }
}
//Dùng để test LefCycle
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <LifeCycle/> */}
        <Nav/>
        <Home/>
        <MainRouter/>
        {/* <ContentRouter/> */}
        {/* <News/> */}
        {/* <DetailsContent/> */}
        {/* <Contact/> */}
        <FooterRouter></FooterRouter>
      </div>
      </Router>
    );
  }
}

// function App() {
//   return (
//     <div className="SonCustom">
//       <TopMenu/>
//       <Header/>
//       <Content sapxep="order-lg-2" tenanh="/01.jpg" tieude="Props theo classbase" noidung="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//       Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
//       <Content  tenanh="/02.jpg" tieude="Props theo classbase" noidung="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//       Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
//       <Content  sapxep="order-lg-2" tenanh="/03.jpg" tieude="Props theo classbase" noidung="Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
//       Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati."/>
//       <Footer/>
//       {/* <header className="App-header">
//         <App1/>
//         <One tieude="Test sử dụng props" urlanh="https://i.pinimg.com/originals/fe/1c/53/fe1c53b7a73eeabc673505fbd141c571.jpg"></One>
//         <Two></Two>
//         <Three></Three>
//         <hr/>
//         <Four tieude="Test props class" urlanh="https://camerabox.vn/uploads/news/2018_11/chup-anh-thien-nhien-theo-mua-2b.jpg"/>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
      
//     </div>
//   );
// }

export default App;
