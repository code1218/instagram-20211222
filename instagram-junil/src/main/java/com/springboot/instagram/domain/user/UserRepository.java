package com.springboot.instagram.domain.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	public int checkUsernameByUsername(String username);
}