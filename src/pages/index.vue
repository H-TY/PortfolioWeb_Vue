<template>
  <div class="container-fluid p-0">
    <!-- ● 封面 Banner -->
    <coverBanner ref="refBanner"></coverBanner>

    <!-- ● 導覽列 Nav -->
    <div ref="refNavbar" id="navbar" class="position-sticky top-0 z-3">
      <navbar></navbar>
    </div>


    <!-- 主色調
          粉紅：mcPink #FF89FF 255 137 255
          藍色：mcBlue #82E4FF 130 228 255
          黃色：mcYellow #FCE158 252 225 88
    -->
    <!-- ● about me -->
    <section id="about">
      <div class="content d-flex justify-content-center mt-3">
        <div class="row m-0">
          <div class="col-sm-6 p-0">
            <div class="row m-0 d-flex flex-sm-column">
              <div class="col p-0 position-relative">
                <div class="d-flex flex-column justify-content-center align-items-center mt-8">
                  <img src="@/assets/img/people.png" class="p-3 object-fit-contain w-100 h-100" style="max-width: 220px;"></img>
                  <p class="fs-8 text-myGray">※ 圖片來源 <a href="https://www.freepik.com/" target="_blank" class="text-decoration-none">Designed by Freepik</a></p>
                </div>
                <div class="position-absolute d-flex justify-content-center top-0 start-10 h-auto" style="min-width: 180px;">
                  <h5 class="position-absolute translate-middle-y text-white textShadow" style="top: 65px;">About Me</h5>
                  <i class="bi bi-chat-right-fill text-mcBlue w-auto z-n1" style="font-size: 7rem;"></i>
                </div>
              </div>
              <div class="col p-0">
                <ul class="list-group list-group-flush AAA">
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    熟悉 HTML / CSS / JavaScript。
                  </li>
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    應用 Bootstrap & Sass 刻版 RWD 網頁。
                  </li>
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    jQuery 製作小遊戲。
                  </li>
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    串接 google Api 製作 Line 機器人搜尋附近的餐廳。
                  </li>
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    基礎應用 Node.js & MongoDB。。
                  </li>
                  <li class="list-group-item">
                    <i class="pe-2 bi bi-pencil-fill"></i>
                    使用 Vue.js 建構網站，並搭配 Vuetify、Vue Router、Pinia 及 Axios 完成前後端串接與狀態管理。
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="h-fit-content col-sm-6 m-auto p-0 d-flex flex-wrap justify-content-evenly">
            <circleCard class="px-sm-3 px-2" v-for="(el, index) in skills" :key="index" :title="el.title" :icon="el.icon" :img="el.img"></circleCard>
          </div>
        </div>
      </div>
    </section>

    <!-- ● 在職實務專案 -->
    <section id="practice">
      <div class="content">
        <!-- Title -->
        <div class="d-sm-flex">
          <div class="section-title">
            <h4 class="">在職實務專案</h4>
          </div>
          <p class="m-0 ms-3 mt-2 mt-sm-0 text-myGray d-inline-flex align-self-end"><i class="bi bi-info-circle-fill me-1 text-myGray text-opacity-50"></i>在職期間完成的代表性系統與功能實作</p>
        </div>

        <div class="mt-5 px-5 d-flex gap-4 gap-md-3 gap-lg-4 flex-column flex-md-row justify-content-center align-items-center">
          <itemCard v-for="(el, index) in practiceItem" :key="index" :id="el.id" :title="el.title" :img="el.img" :to="el.to"></itemCard>
        </div>
      </div>
    </section>

    <!-- ● 前端專題 PPT -->
    <section id="ppt">
      <div class="content">
        <!-- Title -->
        <div class="section-title">
          <h4 class="">前端專題｜PPT</h4>
        </div>

        <iframe class="my-4 ratio ratio-16x9" src="https://embed.figma.com/proto/806M1lDeM6sO2VI4MX8P6S/%E7%B6%B2%E7%AB%99%E5%B0%88%E9%A1%8C%E6%9C%9F%E6%9C%AB%EF%BC%9ADost-%E5%AF%B5%E7%89%A9%E7%8B%97%E9%99%AA%E4%BC%B4%E9%A0%90%E7%B4%84%E6%9C%8D%E5%8B%99?node-id=5324-1523&p=f&scaling=contain&content-scaling=fixed&page-id=5324%3A1522&embed-host=share" allowfullscreen></iframe>
      </div>
    </section>

    <!-- ● 專題網站展示 -->
    <section id="frontWeb">
      <div class="content">
        <!-- Title -->
        <div>
          <div class="d-sm-flex">
            <div class="section-title">
              <h4 class="">前端專題｜Web 展示</h4>
            </div>
            <span class="m-0 ms-4 ms-sm-3 mt-2 mt-sm-0 text-myGray fs-8 d-inline-flex align-self-end">
              <i class="bi bi-info-circle-fill me-1 text-myGray text-opacity-50"></i>
              若進入網頁無內容，待 30 秒後重新載入頁面。
            </span>
          </div>
          <div class="box">
            <ul>
              <li>使用 Vue 3 建立單頁式應用（SPA）</li>
              <li>透過 Vuetify 快速建構響應式使用者介面</li>
              <li>使用 Vue Router 管理頁面導航與路由切換</li>
              <li>使用 Pinia 管理全域狀態與資料共享</li>
              <li>使用 Axios 串接後端 API</li>
              <li>使用 MongoDB 儲存與管理網站資料</li>
            </ul>
          </div>
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

    <!-- ● 互動小作品 -->
    <section id="other">
      <div class="content h-sm-50">
        <!-- Title -->
        <div class="section-title">
          <h4 class="">互動小作品</h4>
        </div>

        <!-- items -->
        <div class="mt-5 px-5 d-flex gap-4 gap-md-3 gap-lg-4 flex-column flex-md-row justify-content-center align-items-center">
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

// ● 在職實務專案的項目資訊，包含標題、圖片、連結網址
const practiceItem = ref([
  { title: '澄新室內設計｜多頁式', img: 'https://cleardesigntwn.com/images/OG_img.jpg', to: 'https://cleardesigntwn.com/' },
  { title: '六本設計｜一頁式', img: 'https://hemusih.com/6design-lab/images/OG_img.jpg', to: 'https://hemusih.com/6design-lab/' },
  { title: '棠淩藝術美學｜一頁式', img: 'https://hemusih.com/tang-ling-art-studio/images/OG_img.jpg', to: 'https://hemusih.com/tang-ling-art-studio/' },
])

// ● 互動小作品的項目資訊，包含標題、圖片、連結網址
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
    tab: "#practiceTab",
    trigger: "#practice",
  },

  {
    tab: "#otherTab",
    trigger: "#other",
  },

  // {
  //   tab: "#jQGameTab",
  //   trigger: "#jQGame",
  // },

  // {
  //   tab: "#clockTab",
  //   trigger: "#clock",
  // },

  // {
  //   tab: "#LineBotTab",
  //   trigger: "#LineBot",
  // },
]

// ● 當 navbar 滾動貼到頂部時，添加樣式 .top-touch-top
// 邏輯為當視窗滾動距離大於頂於 banner 的高度時，添加樣式；反之則移除樣式
const refNavbar = ref(null)
const refBanner = ref(null)
const bannerHeight = computed(() => refBanner.value ? refBanner.value.$el.offsetHeight : 0)

window.addEventListener('scroll', () => {
  // console.log('window.scrollY', window.scrollY)
  // console.log('bannerHeight', bannerHeight.value)

  // * 手機版不觸發，只在 PC 版添加滾動事件
  // if (window.innerWidth <= 425) {
  //   return
  // }

  if (window.scrollY >= bannerHeight.value) {
    refNavbar.value.classList.add('top-touch-top')
  } else {
    refNavbar.value.classList.remove('top-touch-top')
  }
})






// 使用 onMounted 確定 DOM 已渲染完成，Gsap 才能抓到物件
onMounted(() => {
  // console.log('refNavbar', refNavbar.value) // 不是 vue 的元件，所以輸出會是 DOM 元素
  // console.log('refBanner', refBanner.value) // 是 vue 的元件，所以輸出會是 VueComponent 的實例物件
  // console.log('refBanner', refBanner.value.$el.offsetHeight)

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
          start: "top 80px",
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
