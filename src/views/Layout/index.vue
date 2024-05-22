<script setup>
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';

</script>


<template>
    <div>
        <LayoutHeader></LayoutHeader>
        <main><hr>
        <div class="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 mx-auto align-self-center">
                        <div class="group">
                            <svg class="iconSearch" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path
                                        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                    </path>
                                </g>
                            </svg>
                            <input placeholder="Search" type="search" class="input">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row py-4">
                <h4 class="py-2">熱門搜尋</h4>
                <div class="col-md-6">
                    <button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>&emsp;台北市</button>&emsp;&emsp;
                    <button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>&emsp;台南市</button>&emsp;&emsp;
                    <button type="button" class="btn btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg"
                            width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>&emsp;高雄市</button>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row py-4">
                <h4 class="py-2">最新優惠</h4>
                <div class="gallery-wrap">
                    <div class="img img-1"></div>
                    <div class="img img-2"></div>
                    <div class="img img-3"></div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row py-4">
                <h4 class="py-2">熱門活動</h4>
                <div class="gallery-wrap">
                    <div class="item item-1"></div>
                    <div class="item item-2"></div>
                    <div class="item item-3"></div>
                    <div class="item item-4"></div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row py-4">
                <h4 class="py-2">城市旅遊</h4>
                <div class="gallery-wrap">
                    <div class="img img-4"></div>
                    <div class="img img-4"></div>
                    <div class="img img-4"></div>
                    <div class="img img-4"></div>
                    <div class="img img-4"></div>   
                </div>
            </div>
        </div>

        
    </main>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

