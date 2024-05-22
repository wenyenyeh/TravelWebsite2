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
                            </div>
                            
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">交通</a>
                                </li>
                            </div>
                            <div class="dropdown dropdown-btn" >
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">住宿</a>
                                </li>
                            </div>
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">景點門票</a>
                                </li>
                            </div>
                            <div class="dropdown dropdown-btn">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">會員專區</a>
                                </li>
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

