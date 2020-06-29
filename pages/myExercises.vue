<template>
  <div>
    <div class="pt-12 md:pt-0">
      <h1 class="text-3xl font-semibold text-gray-900 mb-4">Your Exercises</h1>
    </div>
    <div class="p-12 bg-white rounded shadow-xl">
      table of your exercises can go here!
    </div>
    <AddRepsForm />
  </div>
</template>

<script>
import AddRepsForm from '~/components/AddRepsForm'

export default {
  components: {
    AddRepsForm
  }
}
</script>

<style></style>
