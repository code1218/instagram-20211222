/**
 * 프로필 수정
 */

const profileImg = document.querySelector('#profile-img');
const imgFile = document.querySelector('#file');
const profileImgChangeBtn = document.querySelector('.profile-img-change-btn');
const form = document.querySelector('form');
const submitBtn = document.querySelector('.edit-submit-btn');

var usernameCheckResult = true;

imgFile.style.display = 'none';

profileImgChangeBtn.onclick = () => {
	imgFile.click();
}

imgFile.onchange = () => {
	let reader = new FileReader();
	
	reader.onload = (e) => {
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

submitBtn.onclick = () => {
	const usernameInput = document.querySelector('#username-ip');
	const principalUsername = document.querySelector('#principal-username');
	
	let username = usernameInput.value;
	let pUsername = principalUsername.contextContent;
	
	if(username != pUsername){
		usernameCheckResult = false;
		usernameCheck(username);
	}
	
	if(usernameCheckResult == true){
		//서브밋 실행
	}
}

 