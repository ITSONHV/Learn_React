import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            isRedirect:false,
            fDate:"1"
        }
    }
    isChange=(event)=>{
        const name = event.target.name;
        const value=event.target.value;
        this.setState(
            {
                [name]:value
            }
        );
    }
    subMitData=(event)=>{
        event.preventDefault();//k cho chạy các action mặc định
        // this.state.isRedirect?(<Redirect to={
        //     // {
        //     //     pathname:"/",
        //     //     state:{from:location}
        //     // }
        // }/>):null
        this.setState({
            isRedirect:true
        });
    }
    getValue=()=>{
        var noiDung="";
        noiDung+="Ten la "+this.state.fName+" Email nhan duoc "+this.state.fEmail+" Phone nhan duoc "+this.state.fPhone+" Mess la "+ this.state.fMess+" ngay la "+this.state.fDate
        +" Ten anh la "+this.state.fImage;
        return noiDung;
    }
    IsChangeFile=(event)=>{
        //const nameImg = event.target.value;
        const nameImg = event.target.files[0];
        const nameImg2 = event.target.files[0].name;
        console.log(nameImg);
        this.setState(
            {
                fImage:nameImg2
            }
        );
    }
    render() {
        
        if(this.state.isRedirect){
            console.log(this.getValue());
            return <Redirect to="/"/>;
        }
        return (
            <div>
                {/* Contact*/}
                <section className="page-section" id="contact">
                    <div className="container px-4 px-lg-5">
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6 text-center">
                                <h2 className="mt-0">Let's Get In Touch!</h2>
                                <hr className="divider" />
                                <p className="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                            </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                            <div className="col-lg-6">
                                {/* * * * * * * * * * * * * * * **/}
                                {/* * * SB Forms Contact Form * **/}
                                {/* * * * * * * * * * * * * * * **/}
                                {/* This form is pre-integrated with SB Forms.*/}
                                {/* To make this form functional, sign up at*/}
                                {/* https://startbootstrap.com/solution/contact-forms*/}
                                {/* to get an API token!*/}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                    {/* Name input*/}
                                    <div className="form-floating mb-3">
                                        <input name="fName" onChange={(event)=>this.isChange(event)} className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label htmlFor="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    {/* Email address input*/}
                                    <div className="form-floating mb-3">
                                        <input name="fEmail" onChange={(event)=>this.isChange(event)} className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label htmlFor="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/* Phone number input*/}
                                    <div className="form-floating mb-3">
                                        <input name="fPhone" onChange={(event)=>this.isChange(event)} className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label htmlFor="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <select value={this.state.fDate} className="form-control" name="fDate" onChange={(event)=>this.isChange(event)} id="">
                                        <option value="2">Monday</option>
                                        <option value="1">Sunday</option>
                                        <option value="7">Satuday</option>
                                    </select>
                                    </div>
                                    <div className="form-group">
                                        <label for=""></label>
                                        <input type="file" className="form-control-file" name="fImage" onChange={(event)=>this.IsChangeFile(event)} id="" placeholder="" aria-describedby="fileHelpId"/>
                                       
                                    </div>
                                    {/* Message input*/}
                                    <div className="form-floating mb-3">
                                        <textarea name="fMess" onChange={(event)=>this.isChange(event)} className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" defaultValue={""} />
                                        <label htmlFor="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                    {/* Submit success message*/}
                                    {/**/}
                                    {/* This is what your users will see when the form*/}
                                    {/* has successfully submitted*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/* Submit error message*/}
                                    {/**/}
                                    {/* This is what your users will see when there is*/}
                                    {/* an error submitting the form*/}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/* Submit Button*/}
                                    <div className="d-grid"><button onClick={(event)=>this.subMitData(event)} className="btn btn-primary btn-xl" id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                        <div className="row gx-4 gx-lg-5 justify-content-center">
                            <div className="col-lg-4 text-center mb-5 mb-lg-0">
                                <i className="bi-phone fs-2 mb-3 text-muted" />
                                <div>+1 (555) 123-4567</div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Contact;