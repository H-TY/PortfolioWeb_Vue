<template>
  <div :id=id class="item-card">
    <a :href="to" target="_blank" class="text-decoration-none">
      <div class="img-box">
        <img :src="img"></img>
      </div>
      <p>{{ title }}</p>
    </a>
  </div>
</template>


<script setup>
const props = defineProps({
  id: String,
  title: String,
  img: String,
  video: String,
  to: String,
})

</script>
