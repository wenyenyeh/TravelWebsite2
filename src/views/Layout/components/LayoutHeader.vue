<template>
    <div>
        <header>
        <nav class="navbar navbar-expand-lg fixed-top  ">
            <div class="container-fluid container">
                <a class="navbar-brand me-auto" href="#">
                    <router-link :to="'/'">
                    <img src="../img/logo.png">
                </router-link> 
                </a>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">海島旅遊</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">目的地</a>
                                </li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">北部</a>
                                    </li>
                                    <li>
                                        <a href="#">中部</a>
                                    </li>
                                    <li>
                                        <a href="#">南部</a>
                                    </li>
                                    <li>
                                        <a href="#">東部</a>
                                    </li>
                                    <li>
                                        <a href="#">離島</a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">交通</a>
                                </li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">高鐵</a>
                                    </li>
                                    <li>
                                        <a href="#">火車</a>
                                    </li>
                                    <li>
                                        <a href="#">租車</a>
                                    </li>
                                    <li>
                                        <a href="#">機票</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dropdown dropdown-btn" >
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">住宿</a>
                                </li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">飯店</a>
                                    </li>
                                    <li>
                                        <a href="#">民宿</a>
                                    </li>
                                    <li>
                                        <a href="#">旅館</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">景點門票</a>
                                </li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">遊樂園</a>
                                    </li>
                                    <li>
                                        <a href="#">海生館</a>
                                    </li>
                                    <li>
                                        <a href="#">景點門票</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">會員專區</a>
                                </li>
                                <ul class="menu">
                                    <li>
                                        <a href="#">我的票券</a>
                                    </li>
                                    <li>
                                        <a href="#">基本資料</a>
                                    </li>
                                    <li>
                                        <a href="#">行程筆記</a>
                                    </li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="icon">
                    <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"
                        href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-heart" viewBox="0 0 16 16">
                            <path
                                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    </a>
                    <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"
                        href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg></a>
                        <router-link :to="'/login'"><a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"
                        href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-person" viewBox="0 0 16 16">
                            <path
                                d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg></a></router-link>

                
                    <!-- 漢堡按鍵 -->
                    <button class="navbar-toggler pe-0" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
    </div>
    
</template>

<style scoped>
.navbar {
  background-color: white;
  height: 80px;
}

/* header的icon */
.icon>a {
  padding: 10px;
  color: #666777;
  text-decoration: none;

}

/* 設定漢堡框線樣式 */
.navbar-toggler {
  border: none;
  font-size: 1.25rem;
}

/* 清除漢堡點選框線 */
.navbar-toggler:focus {
  box-shadow: none;
  outline: none;
}

/* 清除叉叉點選框線 */
.btn-close:focus {
  box-shadow: none;
  outline: none;
}

/* 設定標籤列字體顏色 */
.nav-link {
  color: #666777;
  font-weight: 500;
  position: relative;
}

/* 設定標籤列滑鼠懸停字體顏色 */
.nav-link:hover,
.nav-link.active {
  color: #000000;
}


/* 設定項目列表底線 */
.nav-link::before {
  content: "";
  /* 新增偽元素 */
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2.8px;
  background-color: #7191ce;
  visibility: hidden;
  transition: 0.3s ease-in-out;
}

/* 設定項目列表底線滑鼠懸停 */
.nav-link:hover:before {
  width: 100%;
  visibility: visible;
}


.social-icon>a {
  font-size: 25px;
  color: #666777;
  margin-right: 20px;

}

.social-icon>a:hover {
  color: #2e6cdf;
}


/* ======================================================================================= */
/* 描述下拉選單容器 */
.dropdown {
  position: relative;
  width: 30px;
}

/* 描述下拉選單按鈕 */
.dropdown-btn {
  display: inline-block;
  color: white;
  text-decoration: none;
  line-height: 40px;
  height: 40px;
  width: 100px;
  text-align: center;
}

/* 描述下拉選單 */
.dropdown>.menu {
  position: absolute;
  left: 0;
  top: 60px;
  list-style: none;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
  /* 預設menu為隱藏 */
  display: none;
}

/* 描述hover後的下拉選單 */
.dropdown:hover>.menu {
  display: block;
}

/* 描述下拉選單裡的按鈕 */
.dropdown>.menu a {
  text-decoration: none;
  background: white;
  color: gray;
  display: block;
  padding: 5px 0;
  text-align: center;
  transition: all .5s ease;
}

.dropdown>.menu a:hover {
  background: #eee;
  color: #000000;
}

</style>