<template>
  456
  <font-awesome-icon :icon="['fas', 'house']" />
  <font-awesome-icon :icon="['fas', 'user-secret']" />
  <font-awesome-icon icon="fa-solid fa-user" />
  <font-awesome-icon icon="magnifying-glass" />
  <div class=" container">
    <div class="row">
      <div class="p-5 mb-4 bg-light" rounded-3>
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">This is an about page</h1>
          <p class="col-md-8 fs-4">Using a series of utilities, you can create this iumbotorn, just A</p>
          <button class="btn btn-primary btn-lg" type="buttom">Example</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn">Base class</button>
  <div>
    <button type="button" class="btn btn-primary me-5">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>

    <button type="button" class="btn btn-link">Link</button>
  </div>
</template>


<script setup>
import { definePage } from 'vue-router/auto'


definePage({
  meta: {
    title: 'In | 789789',
    login: true,
    admin: true
  }
})
</script>


<style scoped></style>