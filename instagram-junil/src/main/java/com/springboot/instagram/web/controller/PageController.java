package com.springboot.instagram.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.springboot.instagram.service.BoardService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Controller
public class PageController {
	private final BoardService boardService;
	
	@GetMapping({"/", "/index"})
	public String indexForm() {
		return "index";
	}
	
	@GetMapping("/auth/signin")
	public String siginForm() {
		return "auth/signin";
	}
	
	@GetMapping("/auth/signup")
	public String signupForm() {
		return "auth/signup";
	}
	
	@GetMapping("/accounts/edit")
	public String accountsEditForm() {
		return "accounts/accounts_edit";
	}
	
	@GetMapping("/accounts/password/change")
	public String accountsPasswordForm() {
		return "accounts/accounts_password";
	}
	
	@GetMapping("/upload")
	public String uploadForm() {
		return "upload/upload";
	}
	
	@GetMapping("/{username}")
	public String profileForm(@PathVariable String username) {
		boardService.getProfileBoard(username);
		return "profile/my_profile";
	}
	
	
}
