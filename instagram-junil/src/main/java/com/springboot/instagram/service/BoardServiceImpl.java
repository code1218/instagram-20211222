package com.springboot.instagram.service;

import org.springframework.stereotype.Service;

import com.springboot.instagram.config.auth.PrincipalDetails;
import com.springboot.instagram.domain.board.BoardRepository;
import com.springboot.instagram.web.dto.board.BoardReqDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class BoardServiceImpl implements BoardService{
	
	private final BoardRepository boardRepository;

	@Override
	public boolean insertBoard(PrincipalDetails principalDetails, BoardReqDto boardReqDto) {
		
		return false;
	}

	
}
