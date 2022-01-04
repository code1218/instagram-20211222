const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const modalBtns = modalContainer.querySelectorAll('button');
const settingBtn = document.querySelector('#setting-btn');
const usernameObj = document.querySelector('#username');
const boardContainer = document.querySelector('.board-container');

var page = 0;
var username = usernameObj.value;

/*window.onscroll = () => {
	console.log('window_scrollTop: ' + $(window).scrollTop());
	console.log('window_height: ' + $(window).height());
	console.log('document_height: ' + $(document).height());
	console.log($(document).height()-$(window).height()-$(window).scrollTop());
}*/

boardLoad();

function boardLoad() {
	$.ajax({
		type: "get",
		url: `/${username}/board?page=${page}`,
		dataType: "text",
		success: function(data){
			let boardGroupObj = JSON.parse(data);
			let boardGroupItem = getBoardGroup(boardGroupObj.boardGroup);
			boardContainer.innerHTML = boardGroupItem;
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
    modalContainer.classList.toggle('show');

    if (modalContainer.classList.contains('show')) {
        body.style.overflow = 'hidden';
    }
}

modalContainer.onclick = () => {
    modalContainer.classList.toggle('show');

    if (!modalContainer.classList.contains('show')) {
        body.style.overflow = 'auto';
    }
}

modalBtns[0].onclick = () => {
    location.href = '/accounts/password/change';
}
modalBtns[1].onclick = () => {
    location.replace('/logout');
}