<template>
  <div class="container-fluid p-0">
    <!-- ● 封面 Banner -->
    <coverBanner></coverBanner>

    <!-- ● 導覽列 Nav -->
    <div class="pt-3 bg-white align-content-end position-sticky top-0 z-3">
      <navbar></navbar>
    </div>

    <!-- ● about me -->
    <div class="d-flex justify-content-center mt-5">
      <div class="row m-0" style="max-width: 900px;">
        <div class="col-5">
          <div class="row m-0 d-flex flex-column">
            <div class="col">
              <div class="d-flex justify-content-center">
                <img src="@/assets/img/people.png" class="p-3 object-fit-contain w-100 h-100" style="max-width: 250px;"></img>
              </div>
            </div>
            <div class="col">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>熟悉 HTML & CSS & JavaScript。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>應用 Bootstrap & Sass 刻版 RWD 網頁。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>jQuery 製作小遊戲。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>串接 google Api 製作 Line 機器人搜尋附近的餐廳。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>Vuetify 和 套件的使用。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>了解 Node.js & MongoDB。</li>
                <li class="list-group-item"><i class="pe-2 bi bi-pencil-fill"></i>Vue 框架建構網站 ＆ 前後端資料串接。</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="d-flex flex-wrap justify-content-around col-7">
          <circleCard class="p-3 mb-2" v-for="(el, index) in skills" :key="index" :title="el.title" :icon="el.icon" :img="el.img"></circleCard>
        </div>
      </div>
    </div>

    <!-- ● 前端專題 PPT -->
    


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


<style scoped></style>