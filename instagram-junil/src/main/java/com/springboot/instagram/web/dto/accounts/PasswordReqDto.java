package com.springboot.instagram.web.dto.accounts;

import com.springboot.instagram.domain.user.User;

import lombok.Data;

@Data
public class PasswordReqDto {
	private String prePassword;
	private String newPassword;
	
	public User toEntity(int id) {
		return User.builder()
				.id(id)
				.password(newPassword)
				.build();
	}
}
