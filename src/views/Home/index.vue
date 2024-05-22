<script setup>
    import LayoutHeader from '../Layout/components/LayoutHeader.vue';
</script>


<script>
import jsonData from '@/components/jsonData.json'
export default{
  data(){
    return{
      data: jsonData
    }
  }
}
</script>

<template>
    <div>
        <LayoutHeader></LayoutHeader>
        <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-3 " data-aos="fade-up">
                    <div class="card my-2 p-0 box-shadow">
                        <div class="row ">
                            <div class="col-md-12 my-2">
                                <div class="card-body">
                                    <h4 class="card-title pb-2">熱門旅遊縣市</h4>
                                    <div class="offcanvas-body">
                                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                            <li class="nav-item nav-link mx-lg-2">
                                                <input type="checkbox" id="taipei" name="台北市">
                                                <label for="scales">台北市</label>
                                            </li>
                                            <li class="nav-item nav-link mx-lg-2">
                                                <input type="checkbox" id="newtaipei" name="新北市">
                                                <label for="newtaipei">新北市</label>
                                            </li>
                                            <li class="nav-item nav-link mx-lg-2">
                                                <input type="checkbox" id="taichung" name="台中市">
                                                <label for="taichung">台中市</label>
                                            </li>
                                            <li class="nav-item nav-link mx-lg-2">
                                                <input type="checkbox" id="tainan" name="台南市">
                                                <label for="tainan">台南市</label>
                                            </li>
                                            <li class="nav-item nav-link mx-lg-2">
                                                <input type="checkbox" id="kao" name="高雄市">
                                                <label for="kao">高雄市</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card   my-3 py-1 box-shadow">
                        <div class="row ">
                            <div class="col-md-12 my-2">
                                <div class="card-body">
                                    <h4 class="card-title pb-2">所有商品類別</h4>
                                    <div class="offcanvas-body">
                                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                                            <li class="nav-item">
                                                <a class="nav-link active mx-lg-2" data-bs-toggle="collapse"
                                                    href="#destination" role="button" aria-expanded="false"
                                                    aria-current="page">目的地</a>
                                                <div class="collapse" id="destination">
                                                    <div class="card card-body">
                                                        <a href="#">北部</a>
                                                        <a href="#">中部</a>
                                                        <a href="#">南部</a>
                                                        <a href="#">東部</a>
                                                        <a href="#">離島</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-lg-2" data-bs-toggle="collapse"
                                                    href="#transportation" role="button" aria-expanded="false">交通</a>
                                                <div class="collapse" id="transportation">
                                                    <div class="card card-body">
                                                        <a href="#">高鐵</a>
                                                        <a href="#">火車</a>
                                                        <a href="#">租車</a>
                                                        <a href="#">機票</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-lg-2" data-bs-toggle="collapse" href="#lodging"
                                                    role="button" aria-expanded="false">住宿</a>
                                                <div class="collapse" id="lodging">
                                                    <div class="card card-body">
                                                        <a href="#">飯店</a>
                                                        <a href="#">民宿</a>
                                                        <a href="#">旅館</a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link mx-lg-2" data-bs-toggle="collapse" href="#tickets"
                                                    role="button" aria-expanded="false">景點門票</a>
                                                <div class="collapse" id="tickets">
                                                    <div class="card card-body">
                                                        <a href="#">遊樂園</a>
                                                        <a href="#">海生館</a>
                                                        <a href="#">景點門票</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card  my-2 p-0 box-shadow">
                        <div class="row ">
                            <div class="col-md-12 my-2 d-flex">
                                <div class="card-body">
                                    <span class="nav-link2">排序：</span>
                                    <a class="nav-link2 mx-lg-2" aria-current="page" href="#">人氣</a>
                                    <a class="nav-link2 mx-lg-2" href="#">評價</a>
                                    <a class="nav-link2 mx-lg-2" href="#">價格↑</a>
                                    <a class="nav-link2 mx-lg-2" href="#">價格↓</a>
                                </div>
                                <div>
                                    <img style=" height: 65px; width: auto;" src="../Layout/img/cat.png">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-for="item in data" :key = "item.AreaCode">
                        <div class="card  my-2 p-0 box-shadow">
                        <div class="row ">
                            <div class="col-md-12 my-2">
                                <div class="card-body d-flex">
                                    <div class="col-md-4">
                                        <img src="https://placehold.co/265x160" class="img-fluid">
                                    </div>
                                    <div class="col-md-8 product-context">
                                        <h4 class="card-title pb-3">{{item.景點名稱}}</h4>
                                        <p class="card-text">{{item.景點介紹}}
                                        </p><br>
                                        <router-link :to="'/category'">
                                        <a href="./product.html"><p class="card-text text-end"><small class="text-muted">
                                                了解詳情</small>
                                        </p></a></router-link> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    
               
                 
                </div>
            </div>
        </div>
    </section>

    </div>

</template>
