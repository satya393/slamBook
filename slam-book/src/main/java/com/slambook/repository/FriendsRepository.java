package com.slambook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.slambook.model.Friends;

import jakarta.transaction.Transactional;

@Repository
@Transactional
public interface FriendsRepository extends JpaRepository<Friends, Integer> {

	Friends findByFriendId(Friends friends);

//	Integer deleteByFriendId(Integer integer);

	Friends findByFriendId(Integer friendId);

	Integer deleteByFriendId(Integer friendId);




}
