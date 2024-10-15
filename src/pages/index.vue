<template>
  <div class="container-fluid p-0">
    <!-- ● 封面 Banner -->
    <coverBanner></coverBanner>

    <!-- ● 導覽列 Nav -->
    <div class="pt-3 bg-white align-content-end position-sticky top-0 z-3">
      <navbar></navbar>
    </div>


    <!-- 主色調
          粉紅：mcPink #FF89FF 255 137 255
          藍色：mcBlue #82E4FF 130 228 255
          黃色：mcYellow #FCE158 252 225 88
    -->
    <!-- ● about me -->
    <section class="m-auto mt-5" style="max-width: 1000px;" id="about">
      <div class="d-flex justify-content-center mt-3">
        <div class="row m-0">
          <div class="col-6 p-0">
            <div class="row m-0 d-flex flex-column">
              <div class="col p-0 position-relative">
                <div class="d-flex justify-content-center mt-8">
                  <img src="@/assets/img/people.png" class="p-3 object-fit-contain w-100 h-100" style="max-width: 220px;"></img>
                </div>
                <div class="position-absolute d-flex justify-content-center top-0 start-10 h-auto" style="min-width: 180px;">
                  <h5 class="position-absolute translate-middle-y text-myGray" style="top: 65px;">About Me</h5>
                  <i class="bi bi-chat-right-fill text-mcBlue w-auto z-n1" style="font-size: 7rem;"></i>
                </div>
              </div>
              <div class="col p-0">
                <ul class="list-group list-group-flush AAA">
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>熟悉 HTML & CSS & JavaScript。</li>
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>應用 Bootstrap & Sass 刻版 RWD 網頁。</li>
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>jQuery 製作小遊戲。</li>
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>串接 google Api 製作 Line 機器人搜尋附近的餐廳。</li>
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>了解 Node.js & MongoDB。</li>
                  <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>Vue 框架建構網站 ＆ 前後端資料串接。</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="d-flex flex-wrap justify-content-around col-6  p-0">
            <circleCard class="px-3" v-for="(el, index) in skills" :key="index" :title="el.title" :icon="el.icon" :img="el.img"></circleCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ● 前端專題 PPT -->
    <section class="m-auto mt-5 py-5 bg-mcYellow bg-opacity-25" id="ppt">
      <div class="m-auto" style="max-width: 1000px; height:70vh;">
        <div class="position-relative d-flex justify-content-center w-auto" style="max-width: 180px;">
          <h4 class="z-1">前端專題｜PPT</h4>
          <div class="bg-mcBlue position-absolute bottom-0 translate-middle-y" style="width: 100%; height: 12px;"></div>
        </div>
        <iframe class="mt-4 ratio ratio-16x9" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="90%" src="https://reurl.cc/nvjDrX" allowfullscreen></iframe>
      </div>
    </section>

    <!-- ● 專題網站展示 -->
    <section class="m-auto mt-5 py-5" id="frontWeb">
      <div class="m-auto" style="max-width: 1000px; height:100vh;">
        <div class="position-relative d-flex justify-content-center w-auto" style="max-width: 180px;">
          <h4 class="z-1">前端專題｜Web</h4>
          <div class="bg-mcBlue position-absolute bottom-0 translate-middle-y" style="width: 100%; height: 12px;"></div>
        </div>
        <iframe class="mt-4" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="90%" src="https://h-ty.github.io/Dost_front_Veutify/#/" allowfullscreen></iframe>
      </div>
    </section>


  </div>
</template>


<script setup>
import { definePage } from 'vue-router/auto'
import { ref, computed} from 'vue'
import coverBanner from '@/components/CoverBanner'
import navbar from '@/components/Navbar'
import circleCard from '@/components/CircleCard'


definePage({
  meta: {
    title: 'TY Portfolio',
    login: false,
    admin: false
  }
})


// const skills = ref([
//   {title: 'HTML', icon:' bi-filetype-html'},
//   {title: 'CSS', icon:'bi-filetype-css'},
//   {title: 'JavaScript', icon:'bi-filetype-js'},
//   {title: 'Bootstrap', icon:' bi-bootstrap-fill'},
//   {title: 'Sass', icon:' bi-filetype-sass'},
//   {title: 'jQuery', icon:' bi-filetype-sass'},
//   {title: 'Vue.js', icon:' bi-filetype-sass'},
//   {title: 'Node.js', icon:' bi-filetype-sass'},
//   {title: 'MongoDB', icon:' bi-filetype-sass'},
// ])

const skills = ref([
  {title: 'HTML', img: new URL('@/assets/logo_img/HTML_logo.png', import.meta.url).href},
  {title: 'CSS', img: new URL('@/assets/logo_img/CSS_logo.png', import.meta.url).href},
  {title: 'JavaScript', img:new URL('@/assets/logo_img/JS_logo.png', import.meta.url).href},
  {title: 'Bootstrap', img:new URL('@/assets/logo_img/BS_logo.png', import.meta.url).href},
  {title: 'Sass', img:new URL('@/assets/logo_img/Sass_logo.png', import.meta.url).href},
  {title: 'jQuery', img:new URL('@/assets/logo_img/jQuery_logo.png', import.meta.url).href},
  {title: 'Vue.js', img:new URL('@/assets/logo_img/Vue_logo.png', import.meta.url).href},
  {title: 'Node.js', img:new URL('@/assets/logo_img/Nodejs_logo_1.png', import.meta.url).href},
  {title: 'MongoDB', img:new URL('@/assets/logo_img/MongoDB_logo.png', import.meta.url).href},
])





</script>


<style scoped>
/* about me 文字顏色 */
.list-group-item{
  color: rgb(70, 76, 85);
}

</style>