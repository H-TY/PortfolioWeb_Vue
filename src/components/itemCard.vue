<template>
  <div class="container m-0 my-4 w-auto p-0 d-flex justify-content-center">
    <a :href="to" target="_blank" class="text-decoration-none">
      <div class="row d-flex flex-column rounded-3 border border-3 border-gray bg-white" style="width: 360px; height: 450px;">
        <div class="col p-0 overflow-hidden d-flex justify-content-center" style="min-height: 350px;">
          <img :src="img" class="object-fit-cover rounded-top-2 w-100 h-100"></img>
        </div>
        <div class="col p-0 d-flex justify-content-center align-items-center">
          <p class="m-0 text-center textCss">{{ title }}</p>
        </div>
      </div>
    </a>
  </div>
</template>


<script setup>
const props = defineProps({
  title: String,
  img: String,
  video: String,
  to: String,
})

</script>


<style scoped>
.textCss{
  color: rgb(126, 126, 126);
  font-size: 18px;
  font-weight: 600;
}
</style>