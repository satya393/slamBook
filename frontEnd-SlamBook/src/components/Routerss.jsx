// im asport ReactDOM from "react-dom/client";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FriendTable from "./FriendTable";
import AddFriendsForms from "./AddFriendsForms";
import UpdateFriendsForm from "./UpdateFriendsForm"
 

class Routerss extends Component {
    render(){
    return (
      <>
        {/* // <BrowserRouter> */}
    <Router>
     <Switch>
        <Route exact path='/'  component={FriendTable } />
        <Route path ='/FriendTable' component={FriendTable } /> 
        <Route path ='/AddFriendsForms' component={AddFriendsForms}/> 
        <Route path ='/UpdateFriendsForm/:friendId' component={UpdateFriendsForm}/>
          
         
     </Switch>
    </Router>  
    {/* //    </BrowserRouter> */}
    </>
    );
  }
}

export default Routerss;