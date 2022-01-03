<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instagram</title>
    <link rel="stylesheet" href="/css/profile.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
    <section>
        <jsp:include page="../include/nav.jsp"></jsp:include>
        <main>
            <div class="container">
                <header class="profile-header">
                    <div class="profile-img">
                        <img src="/images/signin_title.PNG">
                    </div>
                    <div class="profile-info">
                        <div class="profile-info-top">
                            <h1 class="profile-username">juniltpe</h1>
                            <button type="button" class="profile-edit-btn">프로필 편집</button>
                            <i id="setting-btn" class="fas fa-cog"></i>
                        </div>
                        <div class="profile-info-middle">
                            <div class="profile-info-middle-item">게시물 <span>5</span></div>
                            <div class="profile-info-middle-item cursor-pointer">팔로워 <span>301</span></div>
                            <div class="profile-info-middle-item cursor-pointer">팔로우 <span>348</span></div>
                        </div>
                        <div class="profile-info-bottom">
                            <pre>김준일</pre>
                        </div>
                    </div>
                </header>
                <section>
                    <div class="board-menu">
                        <div class="board-menu-item">
                            <i class="fas fa-table"></i> <span>게시물</span>
                        </div>
                    </div>
                    <div class="board-container">
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
                        <div class="board-item-group">
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
                        <div class="board-item-group">
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
                        <div class="board-item-group">
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
                        <div class="board-item-group">
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
                        <div class="board-item-group">
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
                        <div class="board-item-group">
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

                    </div>
                </section>
            </div>
        </main>
    </section>
    <div class="modal-container">
        <div class="setting-modal">
            <button type="button">비밀번호 변경</button>
            <button type="button">로그아웃</button>
            <button type="button">취소</button>
        </div>
    </div>
    <script src="/js/profile.js"></script>
</body>

</html>