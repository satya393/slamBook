import React,{ useState, Component } from "react";
import UrlAxion from "./UrlAxion";

class FriendTable extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            all: []  
         }

         
         this.addFriend = this.addFriend.bind(this);
         this.editFrien = this.editFrien.bind(this);
         this. deleteFriend = this.deleteFriend.bind(this); 
    };

    editFrien(friendId){      
       this.props.history.push(`UpdateFriendsForm/${friendId}`);
    };
    
    componentDidMount(){
        UrlAxion.getAll().then((res) =>{
            this.setState({all: res.data})  
        });

       
    };
   
    addFriend(){
        this.props.history.push('/AddFriendsForms');
    };


    deleteFriend(friendId){
     UrlAxion.deleteFriendById(friendId).then (res => {
        this.setState({all: this.state.all.filter(frien => frien.friendId !== friendId )});
        // this.setState({ alert: 'Item deleted successfully!' })
     });
    };
    
    render() { 
        return (  
            <>
            <div className="container">
                <h1 className="mt-4">Slam Book</h1>
               <h2 className="mt-4">Friends List Table</h2>
                <div className="row">
                    <div className="col-10">
                    <div><button type="submit" className="btn btn-dark" onClick={this.addFriend}>Add Your friend</button></div>
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        {/* <th scope="col">Sec_Id</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Note</th>
                         <th scope="col">Edit_Details</th>
                         <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    this.state.all.map(
                        all => 
                                <tr key={all.friendId}>
                                {/* <td>{all.friendId}</td>    */}
                                <td>{all.name}</td>
                                <td>{all.email}</td>
                                <td>{all.note}</td>     
                                 {/* Display Bootstrap alert conditionally */}
                          
                        <td><button type="submit" className="btn btn-primary" onClick={()=> this.editFrien(all.friendId ) }> Edit</button></td>                         
                        <td><button type="submit" className="btn btn-danger" onClick={()=> this.deleteFriend(all.friendId )}>Delete</button></td>                  
                        </tr>
                        )
                        }                    
                    </tbody>  
                     </table>                   
                    </div>
                </div>
            </div>

            </>
        );
    }
}
 
export default FriendTable ;

 
