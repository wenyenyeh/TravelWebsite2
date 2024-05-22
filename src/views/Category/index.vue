<script setup >
import LayoutHeader from '../Layout/components/LayoutHeader.vue';
</script>
<script>
    export default{
        data(){
            return{
                "City": "花蓮縣",
                "Town": "花蓮市",
                "Type":"民宿",
                "StreetAddress": "主安里福建街150巷29號",
                "HotelName": "韓舍民宿",
                "Description": "花蓮縣花蓮市合法民宿熱情的款待、親切的問候，這就是花蓮人的待客之道，來到花蓮除了優美的風景正等這您欣賞，充滿濃濃人情味的花蓮，也為您的疲憊、煩擾做最徹底的消除，此外，若您想規劃多樣化的旅程，花蓮著名的美景太魯閣、七星潭，刺激的水上泛舟、賞鯨，室內的石雕藝術 .. 等等，都是您在假期中不可錯過的活動喔。",
                "Tel": "(03)8351148",
                "Room": "雙人房"
            }
        }
    }
</script>



<template>
    <div>
        <LayoutHeader></LayoutHeader>
        <main>
            <br><br>
<div class="container">
    <div class="row py-4">
        <div class="col-11">
            {{City}}{{Type}}|{{HotelName}}
        </div>
        <div class="col-1">
            <label class="ui-bookmark">
                <input type="checkbox" />
                <div class="bookmark">
                    <svg viewBox="0 0 16 16" style="margin-top:4px" class="bi bi-heart-fill" height="20"
                        width="25" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                            fill-rule="evenodd"></path>
                    </svg>
                </div>
            </label>

        </div>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>
            {{City}}{{ Town }}{{StreetAddress}}
        </p>
        <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-telephone" viewBox="0 0 16 16">
                <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
            {{Tel}}
        </p>

        <div class="row row-cols-2 pt-4" style="display:inline-flex; ">
            <div class="col-md-3 "><img src="https://placehold.co/530x370"></div>
            <div class="col-md-3 " style="display: block;">

            </div>

            <div class="col-md-3 row-cols-lg-5 g-1 g-lg-1" style="display: block;">
                <div class="col-md-4"><img src="https://placehold.co/265x180"></div>
                <div class="row py-2" style="display: flex;">
                    <div class="col-md-4"><img src="https://placehold.co/265x180"></div>
                </div>
            </div>

            <div class="col-md-3 row-cols-lg-5 g-1 g-lg-1" style="display: block;">
                <div class="col-md-4"><img src="https://placehold.co/265x180"></div>
                <div class="row py-2" style="display: flex;">
                    <div class="col-md-4"><img src="https://placehold.co/265x180"></div>
                </div>
            </div>
        </div>

        <p>{{Description}}
        </p>

    </div>
</div>

<div class="container">
    <p class="py-2">房型</p>
    <div class="row">
        <div class="col-md-4"><img src="https://placehold.co/360x240"></div>
        <div class="col-md-6">{{Room}}
        </div>

        <div class="col-md-2">
            <p>
                <button class="btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#more"
                    aria-expanded="false" aria-controls="collapseExample">
                    立即訂房
                </button>
            </p><br><br><br><br><br><br><br><br><br>
            <h4>TWD{金額}</h4>

        </div>
        <!-- 摺疊區塊 -->
        <div class="collapse" id="more">
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-6">
                        
                    </div>
                    <div class="col-md-6">
                        <p>選項</p><br>
                        <input type="checkbox" class="btn-check" id="btn-check-outlined" autocomplete="off">
                        <label class="btn btn-outline-primary" for="btn-check-outlined">雙人床</label><br>
                        <br><br><br>
                        <p>選擇數量</p><br>
                        <div class="row">
                            <div class="col-8">間數</div>
                            <div class="col-4">
                                <form id='myform' method='POST' action='#'>
                                    <label for=""></label><input type='button' value='-' class='qtyminus'
                                        field='quantity' />
                                    <input type='text' name='quantity' value='0' class='qty' />
                                    <input type='button' value='+' class='qtyplus' field='quantity' />
                                </form>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-8">金額</div>
                            <div class="col-4">
                                <h3>TWD0,000</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-7"></div>
                            <div class="col-5">
                                <button type="button" class="btn btn-info">加入購物車</button>
                                <button type="button" class="btn btn-primary">立即訂購</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container">
    <p>設施</p><br>
    <p>行李寄放(免費)、自助洗衣設備(免費)、自助烘衣設備(免費)、攜帶Wifi分享器、寄物櫃、機場接送、禁止吸菸、無障礙設施、電梯</p><br>
    <p>資訊</p><br>
    <div class="row">
        <div class="col-9">
            <p>入住時間：15:00&nbsp; 退房時間：12:00</p>
            <p>{附近地標}</p>
        </div>
        <div class="col-3">
            <div class="map"><br><br><br><br>
                <button type="button" class="btn btn-outline-primary">查看地圖</button>
            </div>
        </div>
    </div>
    <p>評價</p>
    <div style="height: 250px;background-color: lightgray;"></div>
</div>

</main>
    </div>
</template>

