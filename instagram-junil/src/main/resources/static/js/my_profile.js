const body = document.querySelector('body');
const modalContainer = document.querySelectorAll('.modal-container');
const modalBtns = modalContainer[0].querySelectorAll('.setting-modal-btn');
const settingBtn = document.querySelector('#setting-btn');
const usernameObj = document.querySelector('#username');
const boardContainer = document.querySelector('.board-container');
const boardTotalCount = document.querySelector('#board-total-count');
var boardItem = document.querySelectorAll('.board-item');

var page = 0;
var username = usernameObj.value;
var boardGroupItem = ``;
var boardTotal = boardTotalCount.value;

window.onscroll = () => {
	let checkNum = $(document).height()-$(window).height()-$(window).scrollTop();
	
	if(checkNum < 1 && checkNum > -1 && boardTotal > (page+1)*9) {
		page++;
		boardLoad();
	}
}

boardLoad();

function boardLoad() {
	$.ajax({
		type: "get",
		url: `/${username}/board?page=${page}`,
		dataType: "text",
		success: function(data){
			let boardGroupObj = JSON.parse(data);
			boardGroupItem += getBoardGroup(boardGroupObj.boardGroup);
			boardContainer.innerHTML = boardGroupItem;
			boardItem = document.querySelectorAll('.board-item');
			boardItemClick();
		},
		error: function(){
			alert('비동기 처리 오류.');
		}
	});
}

function getBoardList(boardList) {
	let result = ``;
	
	for(let board of boardList) {
		result += `
			<div class="board-item">
				<input type="hidden" id="board_id" value="${board.id}">
                <img src="/image/${board.board_img}" alt="">
                <div class="board-item-hover">
                    <div class="board-item-like">
                        <i class="fas fa-heart"></i><span>0</span>
                    </div>
                    <div class="board-item-comment">
                        <i class="fas fa-comment"></i><span>0</span>
                    </div>
                </div>
            </div>
		`;
	}
	return result;
}

function getBoardGroup(boardGroup) {
	let boardGroupHtml = ``;
	
	for(let boardList of boardGroup){
		let boardListHtml = getBoardList(boardList);
		
		boardGroupHtml += `
			<div class="board-item-group">
            	${boardListHtml}
        	</div>
		`;
	}
	
	return boardGroupHtml;
}

settingBtn.onclick = () => {
    modalContainer[0].classList.toggle('show');

    if (modalContainer[0].classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
}

modalContainer[0].onclick = () => {
    modalContainer[0].classList.toggle('show');

    if (!modalContainer[0].classList.contains('show')) {
        body.style.overflow = 'auto';
    }
}

modalContainer[1].onclick = () => {
    modalContainer[1].classList.toggle('show');

    if (!modalContainer[1].classList.contains('show')) {
        body.style.overflow = 'auto';
    }
}

modalBtns[0].onclick = () => {
    location.href = '/accounts/password/change';
}
modalBtns[1].onclick = () => {
    location.replace('/logout');
}

function getBoard(i){
	let boardId = boardItem[i].querySelector('#board_id');
	alert(boardId.value);
	/*
	$.ajax({
		type: "get",
		url: `/board/${boardId.value}`,
		dataType: "text",
		success: function(data){
			
		},
		error: function(){
			alert('비동기 처리 오류.');
		}
	});
	*/
}

function boardItemClick() {
	for(let i = 0; i < boardItem.length; i++){
		boardItem[i].onclick = () => {
			modalContainer[1].classList.toggle('show');
		
		    if (modalContainer[1].classList.contains('show')) {
		        body.style.overflow = 'hidden';
		    }
		    getBoard(i);
		}
	}
}

