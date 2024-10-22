<template>
  <div class="container-fluid p-0">
    <!-- ● 封面 Banner -->
    <coverBanner class="mb-sm-2"></coverBanner>

    <!-- ● 導覽列 Nav -->
    <div class="bg-white position-sticky top-0 z-3">
      <navbar></navbar>
    </div>


    <!-- 主色調
          粉紅：mcPink #FF89FF 255 137 255
          藍色：mcBlue #82E4FF 130 228 255
          黃色：mcYellow #FCE158 252 225 88
    -->
    <!-- ● about me -->
    <section id="about" class="m-auto mt-sm-5" style="max-width: 1000px;">
      <div class="d-flex justify-content-center mt-3">
        <div class="row m-0">
          <div class="col-sm-6 p-0">
            <div class="row m-0 d-flex flex-sm-column">
              <div class="col p-0 position-relative">
                <div class="d-flex flex-column justify-content-center align-items-center mt-8">
                  <img src="@/assets/img/people.png" class="p-3 object-fit-contain w-100 h-100" style="max-width: 220px;"></img>
                  <p class="fs-8 text-myGray">※ 圖片來源 <a href="www.freepik.com" class=" text-decoration-none">Designed by Freepik</a></p>
                </div>
                <div class="position-absolute d-flex justify-content-center top-0 start-10 h-auto" style="min-width: 180px;">
                  <h5 class="position-absolute translate-middle-y text-white textShadow" style="top: 65px;">About Me</h5>
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
          <div class="col-sm-6 mt-4 mt-sm-0 p-0 d-flex flex-wrap justify-content-evenly">
            <circleCard class="px-sm-3 px-2" v-for="(el, index) in skills" :key="index" :title="el.title" :icon="el.icon" :img="el.img"></circleCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ● 前端專題 PPT -->
    <section id="ppt" class="m-auto mt-5 py-5 bg-mcYellow bg-opacity-25">
      <div class="m-auto" style="max-width: 1000px; height:70vh;">
        <!-- Title -->
        <div class="position-relative d-flex justify-content-center w-auto" style="max-width: 180px;">
          <h4 class="z-1">前端專題｜PPT</h4>
          <div class="bg-mcBlue position-absolute bottom-0 translate-middle-y" style="width: 100%; height: 12px;"></div>
        </div>
        <iframe class="my-4 ratio ratio-16x9" style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="90%" src="https://reurl.cc/nvjDrX" allowfullscreen></iframe>
      </div>
    </section>

    <!-- ● 專題網站展示 -->
    <section id="frontWeb" class="m-auto mt-5 py-3">
      <div class="m-auto" style="max-width: 1000px;">
        <!-- Title -->
        <div class="d-flex">
          <div class="position-relative d-flex justify-content-center w-auto" style="max-width: 230px;">
            <h4 class="z-1">前端專題｜Web 展示</h4>
            <div class="bg-mcBlue position-absolute bottom-0 translate-middle-y" style="width: 100%; height: 12px;"></div>
          </div>
          <p class="m-0 ms-3 text-myGray fs-9 d-inline-flex align-self-end"><i class="bi bi-info-circle-fill me-1 text-myGray text-opacity-50"></i>若進入網頁無內容，請靜待 30 秒後，再重新載入頁面。</p>
        </div>
        <div class="position-relative my-4 ">
          <img class="w-100 object-fit-cover" src="@/assets/img/Dost_webPresentation_Banner.jpg">
          <div class="w-30 d-flex flex-wrap justify-content-center position-absolute top-50 end-0 translate-middle-y me-5">
            <a class="d-flex flex-wrap justify-content-center" href="https://h-ty.github.io/Dost_front_Veutify/#/" target="_blank">
              <img class="w-sm-100 w-75 mt-6" src="@/assets/logo_img/Dost_Logo_png.png">
            </a>
            <p class="m-0 mt-sm-4 mt-2 fs-sm-9 fs-10 text-myGray"><i class="bi bi-info-circle-fill me-md-2 me-1 text-myGray text-opacity-50"></i>點擊圖片可前往專題網站</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ● jQ 小遊戲｜紓壓時鐘 -->
    <section id="other" class="m-auto mt-5 py-5 bg-mcYellow bg-opacity-25">
      <div class="m-auto h-sm-50 h-100" style="max-width: 1000px;">
        <!-- Title -->
        <div class="position-relative d-flex justify-content-center w-auto" style="max-width: 90px;">
          <h4 class="z-1">Other</h4>
          <div class="bg-mcBlue position-absolute bottom-0 translate-middle-y" style="width: 100%; height: 12px;"></div>
        </div>
        <!-- items -->
        <div class="d-flex flex-wrap justify-content-around">
          <itemCard v-for="(el, index) in items" :key="index" :id="el.id" :title="el.title" :img="el.img" :to="el.to"></itemCard>
        </div>
      </div>
    </section>


  </div>
</template>


<script setup>
import { definePage } from 'vue-router/auto'
import { ref, computed, onMounted, watch } from 'vue'
import coverBanner from '@/components/CoverBanner'
import navbar from '@/components/Navbar'
import circleCard from '@/components/CircleCard'
import itemCard from '@/components/itemCard'


// 引用 GSAP_core 和 Plugins
import { gsap, Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin } from 'gsap/all'
// Plugins 需要再做註冊 gsap.registerPlugin 動作才能使用
gsap.registerPlugin(Flip, ScrollTrigger, Observer, ScrollToPlugin, Draggable, MotionPathPlugin, EaselPlugin, PixiPlugin, TextPlugin)



definePage({
  meta: {
    title: 'TY Portfolio',
    login: false,
    admin: false
  }
})



const skills = ref([
  { title: 'HTML', img: new URL('@/assets/logo_img/HTML_logo.png', import.meta.url).href },
  { title: 'CSS', img: new URL('@/assets/logo_img/CSS_logo.png', import.meta.url).href },
  { title: 'JavaScript', img: new URL('@/assets/logo_img/JS_logo.png', import.meta.url).href },
  { title: 'Bootstrap', img: new URL('@/assets/logo_img/BS_logo.png', import.meta.url).href },
  { title: 'Sass', img: new URL('@/assets/logo_img/Sass_logo.png', import.meta.url).href },
  { title: 'jQuery', img: new URL('@/assets/logo_img/jQuery_logo.png', import.meta.url).href },
  { title: 'Vue.js', img: new URL('@/assets/logo_img/Vue_logo.png', import.meta.url).href },
  { title: 'Node.js', img: new URL('@/assets/logo_img/Nodejs_logo_1.png', import.meta.url).href },
  { title: 'MongoDB', img: new URL('@/assets/logo_img/MongoDB_logo.png', import.meta.url).href },
])


const items = ref([
  { id: 'jQGame', title: 'jQ Game｜驅鬼小遊戲', img: new URL('../assets/gif/jQ_ExorciseGame_gif.gif', import.meta.url).href, to: 'https://h-ty.github.io/20240611_JS_HW_jQgame/' },
  { id: 'clock', title: '紓壓時鐘｜森林鐘', img: new URL('@/assets/gif/forestClock_gif.gif', import.meta.url).href, to: 'https://h-ty.github.io/20240416_JS_HW_clock/' },
  { id: 'LineBot', title: 'Line Bot｜搜尋食物', img: new URL('@/assets/gif/Line-Bot_SF_png-edit-1.gif', import.meta.url).href, to: 'https://lin.ee/B6TaGfb' },
])


// 滾動時觸發 navbar 所需要設定的數值設為陣列
const scrollNavbar = [
  {
    tab: "#aboutTab",
    trigger: "#about",
  },

  {
    tab: "#pptTab",
    trigger: "#ppt",
  },

  {
    tab: "#frontWebTab",
    trigger: "#frontWeb",
  },

  {
    tab: "#jQGameTab",
    trigger: "#jQGame",
  },

  {
    tab: "#clockTab",
    trigger: "#clock",
  },

  {
    tab: "#LineBotTab",
    trigger: "#LineBot",
  },
]


// 使用 onMounted 確定 DOM 已渲染完成，Gsap 才能抓到物件
onMounted(() => {

  // 找出物件尺寸數值
  // const element = document.querySelector("#about");
  // const rect = element .getBoundingClientRect();
  // console.log('#about', rect )


  // 由滾動滑鼠觸發 navtab 的相對應位置
  // 將上述的陣列 scrollNavbar 做迴圈並帶入 key 值執行函數
  const setGsap = () => {
    scrollNavbar.forEach(({ tab, trigger, start, end }) => {
      gsap.to(tab, {
        scrollTrigger: {
          trigger: trigger,
          start: "top 150px",
          end: "bottom 150px",
          onToggle: (self) => {
            if (self.isActive) {
              document.querySelector('.active')?.classList.remove('active')
              document.querySelector(tab).classList.add('active')
            } else {
              document.querySelector(tab).classList.remove('active')
            }
          },
          // markers: true,
        }
      })
    })
  }
  // 延遲觸發 gsap 動畫，避免位置設定成元素初始化的位置，導致錯位
  setTimeout(() => {
    setGsap()
  }, 500);
})





</script>


<style scoped>
/* about me 文字顏色 */
.list-group-item {
  color: rgb(70, 76, 85);
}

/* about me 對話框字體效果 */
.textShadow {
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
}
</style>