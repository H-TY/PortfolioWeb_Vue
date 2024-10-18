<template>
  <div class="container-fluid p-0">

  </div>

  <!-- 渲染 pages 位置 -->
  <RouterView />

  <!-- ● footer 欄位 -->
  <div id="footer" class="w-100 overflow-hidden position-relative d-flex justify-content-center" style="height: 150px;">
    <!-- icon -->
    <div id="link" class="z-2 d-flex justify-content-between justify-content-lg-evenly align-items-center w-30" style="min-width: 150px;">
      <a href="https://github.com/H-TY" target="_blank">
        <button class=" border border-3 border-myGray rounded-circle bg-white">
          <i class="bi bi-github text-myGray fs-5"></i>
        </button>
      </a>
      <a href="https://fate0070.wixsite.com/ty-p" target="_blank">
        <button class=" border border-3 border-myGray rounded-circle bg-white">
          <i class="bi bi-brush text-myGray fs-5"></i>
        </button>
      </a>
      <a href="#" target="_blank">
        <button class=" border border-3 border-myGray rounded-circle bg-white">
          <i class="bi bi-envelope-open-fill text-myGray fs-5"></i>
        </button>
      </a>
    </div>
    <!-- bg -->
    <img src="@/assets/cover_img/portfolio_web_Cover_2.jpg" class="object-fit-cover position-absolute w-100 h-100">
  </div>
</template>



<script setup>

</script>



<style scoped>
/* 做漸層效果 */
#footer::before {
  content: "";
  width: 100%;
  height: 100%;
  /* filter: blur(2px); */
  background: linear-gradient(to right, transparent 0%, white 30%, white 70%, transparent 100%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

/* 圖片水平翻轉 */
.Hflip {
  transform: scaleX(-1);
}
</style>
