const body = document.querySelector('body');
const modalContainer = document.querySelector('.modal-container');
const modalBtns = modalContainer.querySelectorAll('button');
const settingBtn = document.querySelector('#setting-btn');

var page = 0;

window.onscroll = () => {
	console.log('window_scrollTop: ' + $(window).scrollTop());
	console.log('window_height: ' + $(window).height());
	console.log('document_height: ' + $(document).height());
	console.log($(document).height()-$(window).height()-$(window).scrollTop());
}

function boardLoad() {
	$.ajax({
		type: "get",
		url: `/board?page=${page}`,
		dataType: "text",
		success: function(data){
			let boardList = JSON.parse(data);
			getBoardItem(boardList);
		},
		error: function(){
			
		}
	});
}

function getBoardItem(boardList) {
	let boardGroup = `
		<div class="board-item-group">
            <div class="board-item">
                <img src="images/signin_title.PNG" alt="">
                <div class="board-item-hover">
                    <div class="board-item-like">
                        <i class="fas fa-heart"></i><span>91</span>
                    </div>
                    <div class="board-item-comment">
                        <i class="fas fa-comment"></i><span>30</span>
                    </div>
                </div>
            </div>
            <div class="board-item">
                <img src="" alt="">
                <div class="board-item-hover">
                    <div class="board-item-like">
                        <i class="fas fa-heart"></i><span>91</span>
                    </div>
                    <div class="board-item-comment">
                        <i class="fas fa-comment"></i><span>30</span>
                    </div>
                </div>
            </div>
            <div class="board-item">
                <img src="" alt="">
                <div class="board-item-hover">
                    <div class="board-item-like">
                        <i class="fas fa-heart"></i><span>91</span>
                    </div>
                    <div class="board-item-comment">
                        <i class="fas fa-comment"></i><span>30</span>
                    </div>
                </div>
            </div>
        </div>
	`;
	return boardGroup;
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