package com.slambook.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;


@Data
@Entity
@Table(name = "friends")
public class Friends {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Integer friendId;
	public String name;
	public String email;
	public String note;

}
