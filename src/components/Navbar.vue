<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-sm d-flex justify-content-center">

      <!-- 漢堡按鈕 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <div ref="refBurgerIcon" class="burger-icon">
          <hr>
          <hr>
          <i class="bi bi-caret-down-fill"></i>
        </div>
      </button>

      <div ref="refNavbarToggler" class="collapse navbar-collapse justify-content-center" id="navbarToggler">
        <ul class="nav nav-tabs justify-content-center">
          <template v-for="el in navbarItems" :key="el.id">
            <li class="nav-item">
              <a :id="el.id" class="nav-link" :href="el.target" @click.prevent="scrollToSectionId(el.target)" data-bs-toggle="tab">{{ el.title }}</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script setup>
import { ref } from 'vue';

// ● 新增一個 navbarItems 陣列，裡面放置導覽列的項目資訊，包含 id、顯示文字、對應的區塊 id
const navbarItems = ref([
  { id: 'aboutTab', title: 'About Me', target: '#about' },
  { id: 'practiceTab', title: '實務專案', target: '#practice' },
  { id: 'pptTab', title: '專題 PPT', target: '#ppt' },
  { id: 'frontWebTab', title: '專題網站展示', target: '#frontWeb' },
  { id: 'otherTab', title: '互動小作品', target: '#other' },
  // { id: 'jQGameTab', title: 'jQ 小遊戲', target: '#jQGame' },
  // { id: 'clockTab', title: '紓壓時鐘', target: '#clock' },
  // { id: 'LineBotTab', title: 'Line Bot', target: '#LineBot' }
])


// 因 router 設定為 createWebHashHistory，網址會帶有 #
// 故寫以下判斷式作區分，避免被視為要跳轉頁面
const scrollToSectionId = (id) => {
  // 放在函式裡面宣告抓取的 id 物件，這樣在點擊時，即可抓取到當下已渲染完成的物件
  // 若放在外面會維持初始的狀態 null，變成抓不到 id 物件
  const sectionId = document.querySelector(id)

  if (sectionId) {
    sectionId.scrollIntoView({ behavior: 'smooth' })
  }
}

// ● 手機版，當點擊漢堡按鈕展開 navbar 時，添加樣式 .burger-icon-open
// 監聽綁定 show.bs.collapse 及 hidden.bs.collapse 事件須寫在 onMounted 裡面才有用
const refBurgerIcon = ref(null)
const refNavbarToggler = ref(null)


onMounted(() => {
  // console.log('refNavbarToggler', refNavbarToggler.value)
  // console.log('refBurgerIcon', refBurgerIcon.value)

  // ● 監聽綁定 show.bs.collapse 及 hidden.bs.collapse 事件
  refNavbarToggler.value.addEventListener('show.bs.collapse', event => {
    refBurgerIcon.value.classList.add('burger-icon-open')
  })
  refNavbarToggler.value.addEventListener('hidden.bs.collapse', event => {
    refBurgerIcon.value.classList.remove('burger-icon-open')
  })

})

</script>
