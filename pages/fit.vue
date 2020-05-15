<template>
  <div class="container">
    <div>Today, May 5 2020</div>
    <div class="current-user">100/250</div>
    <div class="group-progress">
      <div v-for="idx in 3" :key="idx" class="user">
        <div class="progress-indicator">76%</div>
        <div class="details">
          <div>
            Zach Eller
            <span>+30</span>
          </div>
          <div>Last Updated 2 days ago</div>
          <div>190</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
