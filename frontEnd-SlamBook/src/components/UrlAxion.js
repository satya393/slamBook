import axios from 'axios';


const WORKER_API_BASE_URL = "http://localhost:8080/friends/select";
const CREATE_FRIEND_API_BASE_URL = "http://localhost:8080/friends/add";
const UPDATE_FRIEND_API_BASE_url = "http://localhost:8080/friends/update";
const SELECT_FRIEND_API_BASE_URL ="http://localhost:8080/friends";
const DELETE_FRIEND_API_BASE_url = "http://localhost:8080/friends/delete";

class UrlAxion  {
    getAll(){
        return axios.get(WORKER_API_BASE_URL);
    }; 
    createFriend(friend){
        return axios.post(CREATE_FRIEND_API_BASE_URL, friend);
    };
    getFriendById(friendId){
        // console.log(SELECT_FRIEND_API_BASE_URL + '/' + friendId);
        return axios.get(SELECT_FRIEND_API_BASE_URL + '/' + friendId);
    };
   updatFriendById(friend){
    // console.log(UPDATE_FRIEND_API_BASE_url ,friend);
    return axios.post(UPDATE_FRIEND_API_BASE_url ,friend);
   };
   deleteFriendById(friendId){
    // console.log(DELETE_FRIEND_API_BASE_url, friendId ); 
    return axios.delete(DELETE_FRIEND_API_BASE_url +"/"+ friendId);
   }



}
export default new UrlAxion();