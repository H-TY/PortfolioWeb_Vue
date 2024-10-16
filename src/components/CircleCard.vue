<template>
  <div class="container m-0 p-0 w-auto d-flex flex-column flex-wrap align-content-center justify-content-center">
    <div class="d-flex justify-content-center align-items-center rounded-circle border border-3 border-gray bg-white" style="width: 100px; height: 100px;">
      <!-- <i :class="icon" style="font-size: 2.5rem; color: white;"></i> -->
      <div style="width: 50px; height:50px;">
        <img :src="img" class="object-fit-contain w-100 h-100">
      </div>
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


<style scoped>
.textCss{
  color: rgb(126, 126, 126);
  font-size: 18px;
  font-weight: 600;
}
</style>