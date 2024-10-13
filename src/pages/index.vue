<template>
  <div class="container-fluid p-0">
    <!-- ● 封面 Banner -->
    <coverBanner></coverBanner>

    <!-- ● 導覽列 Nav -->
    <div class="pt-3 bg-white align-content-end position-sticky top-0 z-3">
      <navbar></navbar>
    </div>

    <!-- ● 前端專題 PPT -->
    <div class="card mt-5" style="width: 18rem; height: 1000px;">
      <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
      </svg>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { definePage } from 'vue-router/auto'
import coverBanner from '@/components/CoverBanner'
import navbar from '@/components/Navbar'


definePage({
  meta: {
    title: 'TY Portfolio',
    login: false,
    admin: false
  }
})
</script>


<style scoped></style>