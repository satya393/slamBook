package com.slambook.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.slambook.model.Friends;
import com.slambook.repository.FriendsRepository;
//@CrossOrigin( origins = "http://localhost:3000/")
@RestController
@RequestMapping("/friends")
public class FriendsController {

	@Autowired
	FriendsRepository friendsRepository;

	
	  @GetMapping("/api/status")
	    public String getStatus() {
	        return "Spring Boot application is running";
	    }
	
	
	
	@PostMapping("/add")
	public Friends add(@RequestBody Friends friends) {
		return friendsRepository.save(friends);
	}

	// single friend
	@GetMapping("/{friendId}")
	public Object select(@PathVariable(value = "friendId") Integer friendId) {
		System.out.println(friendId);
		return friendsRepository.findByFriendId(friendId);
	}

	@PostMapping("/update")
	public Friends update( @RequestBody Friends friends) {
		
//		friends.setFriendId(friendId);
		return friendsRepository.save(friends);
	}

	@DeleteMapping("/delete/{friendId}")
	public Integer delete(@PathVariable(value = "friendId") Friends friends) {
		return friendsRepository.deleteByFriendId(friends.getFriendId());
	}

	// all friends
	@GetMapping("/select")
	public List<Friends> selecting(Friends friends) {
		List<Friends> friendss = friendsRepository.findAll();
		return friendss;
	}

}
