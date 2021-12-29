/**
 * 프로필 수정
 */

const profileImg = document.querySelector('#profile-img');
const imgFile = document.querySelector('#file');
const profileImgChangeBtn = document.querySelector('.profile-img-change-btn');

const form = document.querySelector('form');
const submitBtn = document.querySelector('.edit-submit-btn');

const profilelabel = document.querySelectorAll('.edit-lb');
const profileInput = document.querySelectorAll('.profile-ip');


var usernameCheckResult = true;

var imgFileChangeFlag = false;

imgFile.style.display = 'none';

profileImgChangeBtn.onclick = () => {
	imgFile.click();
}

imgFile.onchange = () => {
	let reader = new FileReader();
	
	reader.onload = (e) => {
		imgFileChangeFlag = true;
		profileImg.src = e.target.result;
	}
	
	reader.readAsDataURL(imgFile.files[0]);
}

function usernameCheck(username) {
	$.ajax({
		type: "get",
		url: "/accounts/username-check",
		data: {
			"username": username
		},
		dataType: "text",
		success: function(data){
			usernameCheckResult = data;
		},
		error: function(){
			alert('비동기 처리 오류.');
		}
	});
}

function inputIsEmpty(str, lb) {
	let result = false;
	
	if(typeof(str) == undefined || str == null || str == ''){
		alert(lb + '은(는) 빈값일 수 없습니다.');
		result = true;
	}
	
	return result;
}

function multipartSubmit() {
	
}

function editSubmit() {
	
}

submitBtn.onclick = () => {
	const principalUsername = document.querySelector('#principal-username');
	let username = profileInput[1].value;
	let pUsername = principalUsername.contextContent;
	
	if(inputIsEmpty(profileInput[0].value, profilelabel[0].textContent)){
		return;
	}
	if(inputIsEmpty(profileInput[1].value, profilelabel[1].textContent)){
		return;
	}
	if(inputIsEmpty(profileInput[4].value, profilelabel[4].textContent)){
		return;
	}
	
	if(username != pUsername){
		usernameCheckResult = false;
		usernameCheck(username);
	}
	
	if(usernameCheckResult == true){
		//서브밋 실행
		if(imgFileChangeFlag == true){
			//파일업로드 필요 o
			multipartSubmit();
		}else {
			//파일업로드 필요 x
			editSubmit();
		}
	}
}

 