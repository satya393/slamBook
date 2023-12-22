import { Component } from "react";
import UrlAxion from "./UrlAxion";
// import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../friend1.jpg";

class AddFriendsForms extends Component {
    constructor(props) {
        super(props)
    
    this.state = { 
         name: '',
         email: '',
         note: ''}
     this.changeNameHandler = this.changeNameHandler.bind(this);
     this.changeEmailHandler = this.changeEmailHandler.bind(this);
     this.changeNoteHandler = this.changeNoteHandler.bind(this);
     this.saveFriend = this.saveFriend.bind(this);
     this.friendTable = this.friendTable.bind(this);
    }

    friendTable(){
        this.props.history.push('/FriendTable');
    };
    changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler =(event) =>{
        this.setState({email: event.target.value});
    }
    changeNoteHandler =(event) =>{
        this.setState({note: event.target.value});
    } 
    saveFriend = (e) => {
        e.preventDefault();
        let friend = {name: this.state.name, 
                      email: this.state.email, 
                      note: this.state.note };

        if (!this.state.name || !this.state.email || !this.state.note) {
            this.setState({ showAlert: true });
            setTimeout(() => {
                this.setState({ showAlert: false });
            }, 3000);
            return;
        };
    //    console.log('friend=> ' + JSON.stringify(friend));
         UrlAxion.createFriend(friend).then(res => {
          this.props.history.push('/FriendTable');
         });       
    }

    render() {
        return ( 
            <>
         <div className="container">
             <div className="row mt-5">
                <div className="col-sm-8">
                <h3>Add Friends Form</h3>
                <form>

                <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                          name= "name" value={this.state.name}  onChange={this.changeNameHandler}/>
                </div>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                        name= "email" value={this.state.email}  onChange={this.changeEmailHandler}/>
                        {/* <div id="emailHelp" className="form-text"></div> */}
                </div>
                <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Note</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name= "note" value={this.state.note}  onChange={this.changeNoteHandler} />
                        {/* <div id="emailHelp" className="form-text"></div> */}
                 </div>   
                   {/* Display Bootstrap alert conditionally */}
                   {this.state.showAlert && (
                                <div className="alert alert-danger" role="alert">
                                    Please fill all fields!
                                </div>
                            )} 
                    <button type="submit" className="btn btn-primary" onClick={this.saveFriend}>Submit</button>
                    <button type="submit" className="btn btn-primary m-1" onClick={this.friendTable} >Friends Table</button>
                  
               </form>              
                </div>
                <div className="col-sm-4 mt-3">
                    <img src={image} className="img-fluid rounded-top" alt="" />
                   <h2 className="mt-3">Add your best Friends</h2>
                </div>
             </div>
             
         </div>

            </>
         );
    }
}
 
export default AddFriendsForms ;