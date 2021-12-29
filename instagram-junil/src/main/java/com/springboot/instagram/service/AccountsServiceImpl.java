package com.springboot.instagram.service;

import org.springframework.stereotype.Service;

import com.springboot.instagram.config.auth.PrincipalDetails;
import com.springboot.instagram.domain.user.User;
import com.springboot.instagram.domain.user.UserDtl;
import com.springboot.instagram.domain.user.UserRepository;
import com.springboot.instagram.web.dto.accounts.ProfileReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class AccountsServiceImpl implements AccountsService{
	
	private final UserRepository userRepository;

	@Override
	public boolean usernameCheck(String username) {
		int result = userRepository.checkUsernameByUsername(username);
		if(result == 0) {
			// 수정 가능한 username
			return true;
		}else {
			// 이미 존재하는 username
			return false;
		}
	}

	@Override
	public boolean updateUser(PrincipalDetails principalDetails, ProfileReqDto profileReqDto) {
		if(profileReqDto.getFile() == null) {
			int id = principalDetails.getUser().getId();
			String profile_img = principalDetails.getUserDtl().getProfile_img();
			User userEntity = profileReqDto.toUserEntity(id);
			UserDtl userDtlEntity = profileReqDto.toUserDtlEntity(id, profile_img);
			
			int result = 0;
			
			result += userRepository.updateUserById(userEntity);
			result += userRepository.updateUserDtlById(userDtlEntity);
			
			if(result == 2) {
				return true;
			}else {
				return false;
			}
			
		}else {
			
		}
		return false;
	}

}
