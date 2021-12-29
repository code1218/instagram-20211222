package com.springboot.instagram.web.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.instagram.config.auth.PrincipalDetails;

@RestController
public class AccountsController {
	
	
	
	@GetMapping("/accounts/username-check")
	public Object usernameCheck(@RequestParam String username) {
		
		return null;
	}
	
	@PutMapping("/accounts/edit")
	public Object profileEdit(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		
		return null;
	}
	
	
}
