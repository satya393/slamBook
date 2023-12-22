import { Component } from "react";
import UrlAxion from "./UrlAxion";

class UpdateFriendsForm extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            id: this.props.match.params.id,
            friendId: this.props.match.params.friendId,
            name: '',
            email: '',
            note: ''}
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeNoteHandler = this.changeNoteHandler.bind(this);
        this.UpdateFriend = this.UpdateFriend.bind(this);
        this.friendTable = this.friendTable.bind(this);
        this.addfriend = this.addfriend.bind(this);
    }

    componentDidMount(){

        UrlAxion.getFriendById(this.state.friendId).then((res) =>{
            let friend = res.data;
            this.setState({name: friend.name,
                           email: friend.email,
                           note: friend.note,
                           friendId: friend.friendId,
                          id: friend.id })
        });
    }

    UpdateFriend = (e) => {
        e.preventDefault();
        let friend = {name: this.state.name, 
                      email: this.state.email, 
                      note: this.state.note ,
                      friendId: this.state.friendId};

    //    console.log('friend => ' + JSON.stringify(friend));

       UrlAxion.updatFriendById(friend).then(res => {
        this.props.history.push('/FriendTable');
      
       }); 
        }  
    
    changeNameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changeEmailHandler =(event) =>{
        this.setState({email: event.target.value});
    }
    changeNoteHandler =(event) =>{
        this.setState({note: event.target.value});
    } 

    friendTable(){
        this.props.history.push('/FriendTable');
    };
    addfriend(){
        this.props.history.push('/AddFriendsForms');
    }
      
    
    render() {
        return ( 
            <>
        
         <div className="container ">
             <div className="row mt-5 ">
                <div className="col-sm-8">
                <h3>Update Friends Form</h3>
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
                    
                    <button type="submit" className="btn btn-primary" onClick={this.UpdateFriend}>Update Friend</button>
                    <button type="submit" className="btn btn-primary m-1"  onClick={this.addfriend} >Add Friend</button>
                    <button type="submit" className="btn btn-primary m-1" onClick={this.friendTable}>Friends Table</button>
               </form>
                </div>
             </div>
         </div>

            </>
         );
    }
}
 
export default UpdateFriendsForm ;