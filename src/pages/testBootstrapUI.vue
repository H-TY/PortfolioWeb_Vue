<template>
  <div class="container">
    測試是否可以使用 bootstrap 的元件
    <br>
    <button type="button" class="btn btn-primary">123456789</button>
    <hr>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
      </button>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="https://x.com">Action</a></li>
        <li><a class="dropdown-item" href="https://yahoo.com">Another action</a></li>
        <li><a class="dropdown-item" href="https://google.com">Something else here</a></li>
      </ul>
    </div>
    <hr>
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <span class="input-group-text" id="basic-addon2">@example.com</span>
    </div>

    <div class="mb-3">
      <label for="basic-url" class="form-label">Your vanity URL</label>
      <div class="input-group">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
        <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4">
      </div>
      <div class="form-text" id="basic-addon4">Example help text goes outside the input group.</div>
    </div>

    <div class="input-group mb-3">
      <span class="input-group-text">$</span>
      <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <span class="input-group-text">.00</span>
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Username" aria-label="Username">
      <span class="input-group-text">@</span>
      <input type="text" class="form-control" placeholder="Server" aria-label="Server">
    </div>

    <div class="input-group">
      <span class="input-group-text">With textarea</span>
      <textarea class="form-control" aria-label="With textarea"></textarea>
    </div>
    <hr>
    　　<div class="vr"></div>
    <div class="d-flex" style="height: 200px;">
      　　<div class="vr">56789</div>
    </div>
    <hr>
    <div class="hstack gap-3">
      <div class="p-2">First item</div>
      <div class="p-2 ms-auto">Second item</div>
      <div class="vr"></div>
      <div class="p-2">Third item</div>
    </div>
  </div>
</template>



<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: 'about | 789789',
    login: false,
    admin: false
  }
})
</script>


<style scoped>
.hstack {
  background: gray;
}
</style>

<!-- <route lang="yaml">
  meta:
    layout:""
</route> -->