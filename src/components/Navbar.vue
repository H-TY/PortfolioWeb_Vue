<template>
  <div class="container-fluid p-0">
    <nav class="navbar navbar-expand-sm d-flex justify-content-end me-5 me-sm-0">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarToggler">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#about" @click.prevent="scrollToId('#about')" data-bs-toggle="tab">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#ppt" @click.prevent="scrollToId('#ppt')" data-bs-toggle="tab">前端專題 PPT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#frontWeb" @click.prevent="scrollToId('#frontWeb')" data-bs-toggle="tab">專題網站展示</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#other" @click.prevent="scrollToId('#other')" data-bs-toggle="tab">jQ 小遊戲</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#other" @click.prevent="scrollToId('#other')" data-bs-toggle="tab">紓壓時鐘</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>


<script setup>
// 因 router 設定為 createWebHashHistory，網址會帶有 #
// 故寫以下判斷式作區分，避免被視為要跳轉頁面
const scrollToId = (id) => {
  // 放在函式裡面宣告抓取的 id 物件，這樣在點擊時，即可抓取到當下已渲染完成的物件
  // 若放在外面會維持初始的狀態 null，變成抓不到 id 物件
  const sectionId = document.querySelector(id)
  
  if(sectionId){
    sectionId.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>


<style scoped>
.nav-link {
  font-size: 16px;
  font-weight: 400;
  color: rgb(70, 70, 70);
  
  &.active,
    &.show {
      font-weight: 600;
      color: rgb(4, 150, 194);
    }
}

.nav-item{
  a:hover{
    font-weight: 600;
    color: rgb(130, 228, 255);
  }
}

.nav-tabs {
  width: 100%;
  padding: 0 5px;
  --bs-nav-tabs-border-color: rgb(130, 228, 255);
  --bs-nav-tabs-link-active-border-color: rgb(130, 228, 255) rgb(130, 228, 255) white;
  
  a:hover{
    font-weight: 600;
    color: white;
    text-shadow: 1px 1px 1px rgba(3, 53, 82, 0.5);
    background: rgb(130, 228, 255);
  }
}


</style>