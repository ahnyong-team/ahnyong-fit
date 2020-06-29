<template>
  <div class="fixed right-0 bottom-0 mb-4 mr-4 z-0">
    <button
      v-show="!showForm"
      class="btn btn-primary text-green-50 h-12 w-12 rounded-full bg-green-700 border p-2"
      @click="showForm = true"
    >
      <svg
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 4v16m8-8H4"></path>
      </svg>
    </button>
    <div
      v-show="showForm"
      class="fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center"
    >
      <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
      <div class="fixed inset-0 transition-opacity" @click="showForm = false">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  -->
      <div
        class="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div>
          <div
            class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100"
          >
            <svg
              class="h-6 w-6 text-green-600"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-5">
            <h3
              id="modal-headline"
              class="text-lg leading-6 font-medium text-gray-900"
            >
              How Swole are you?
            </h3>
            <div class="mt-2">
              <label
                for="exercise-name"
                class="block text-sm font-medium leading-5 text-gray-700 text-left"
              >
                Exercise Name
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <select
                  id="exercise-name"
                  class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 mb-6"
                >
                  <option> - </option>
                  <option>Pushups</option>
                  <option>Situps</option>
                  <option>Squats</option>
                </select>
              </div>
              <label
                for="reps"
                class="block text-sm font-medium leading-5 text-gray-700 text-left"
              >
                Reps
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="reps"
                  type="number"
                  class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-6">
          <span class="flex w-full rounded-md shadow-sm">
            <button
              type="button"
              class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            >
              Add Reps
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showForm: false
  })
}
</script>

<style></style>
