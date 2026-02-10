<template>
  <div class="circle-card m-0 p-0 py-4 w-auto h-fit-content d-flex flex-column flex-wrap align-content-center justify-content-center">
    <div class="d-flex justify-content-center align-items-center rounded-circle border border-1 border-gray bg-white p-4" style="width: 95px; height: 95px;">
      <img :src="img" class="object-fit-contain w-100 h-100">

      <!-- <i :class="icon" style="font-size: 2.5rem; color: white;"></i> -->
      <!-- <div style="width: 50px; height:50px;">
        <img :src="img" class="object-fit-contain w-100 h-100">
      </div> -->
    </div>
    <p class="m-0 mt-2 text-center textCss">{{ title }}</p>
  </div>
</template>


<script setup>
const props = defineProps({
  title: String,
  icon: String,
  img: String,
})

</script>
