<template>
  <div class="">
    <!-- Off-canvas menu for mobile -->
    <div class="md:hidden" @click="showMobileMenu = false">
      <div v-show="showMobileMenu" class="fixed inset-0 flex z-40">
        <!--
            Off-canvas menu overlay, show/hide based on off-canvas menu state.

            Entering: "transition-opacity ease-linear duration-300"
                From: "opacity-0"
                To: "opacity-100"
            Leaving: "transition-opacity ease-linear duration-300"
                From: "opacity-100"
                To: "opacity-0"
            -->
        <transition
          enter-active-class="transition-opacity ease-linear duration-300"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity ease-linear duration-300"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <div class="fixed inset-0">
            <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
          </div>
        </transition>
        <!--
            Off-canvas menu, show/hide based on off-canvas menu state.

            Entering: "transition ease-in-out duration-300 transform"
                From: "-translate-x-full"
                To: "translate-x-0"
            Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "-translate-x-full"
            -->
        <transition
          enter-active-class="transition ease-in-out duration-300 transform"
          enter-class="-translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition ease-in-out duration-300 transform"
          leave-class="translate-x-0"
          leave-to-class="-translate-x-full"
        >
          <div
            v-show="showMobileMenu"
            class="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
          >
            <div class="absolute top-0 right-0 -mr-14 p-1">
              <button
                class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                aria-label="Close sidebar"
                @click="showMobileMenu = !showMobileMenu"
              >
                <svg
                  class="h-6 w-6 text-white"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div class="flex-shrink-0 flex items-center px-4">
                <!-- <img
                  class="h-8 w-auto"
                  src="/img/logos/workflow-logo-on-dark.svg"
                  alt="Workflow"
                /> -->
              </div>
              <nav class="mt-5 px-2">
                <nuxt-link
                  to="/fit"
                  class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-300 rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                    />
                  </svg>
                  Dashboard
                </nuxt-link>
                <nuxt-link
                  to="/team"
                  class="mt-1 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                >
                  <svg
                    class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Team
                </nuxt-link>
              </nav>
            </div>
            <div class="">
              <nuxt-link
                to="/profile"
                class="flex-shrink-0 group block bg-gray-700 p-4"
              >
                <div class="flex items-center">
                  <div>
                    <img
                      class="inline-block h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-base leading-6 font-medium text-white">
                      Tom Mobile
                    </p>
                    <p
                      class="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150"
                    >
                      View profile
                    </p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </transition>
        <div class="flex-shrink-0 w-14">
          <!-- Force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </div>
    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:flex-shrink-0">
      <div class="flex flex-col w-64 bg-gray-800 h-screen">
        <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div class="flex items-center flex-shrink-0 px-4">
            <!-- <img
                    class="h-8 w-auto"
                    src="/img/logos/workflow-logo-on-dark.svg"
                    alt="Workflow"
                /> -->
            <span class="text-white">Fit Buddies</span>
          </div>
          <!-- Sidebar component, swap this element with another sidebar if you like -->
          <nav class="mt-5 flex-1 px-2 bg-gray-800">
            <nuxt-link
              to="/fit"
              class="group flex items-center px-2 py-2 text-sm leading-5 font-medium rounded-md text-gray-300 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                />
              </svg>
              Dashboard
            </nuxt-link>
            <nuxt-link
              to="/team"
              class="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
            >
              <svg
                class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              Team
            </nuxt-link>
          </nav>
        </div>
        <div class="flex-shrink-0 flex ">
          <nuxt-link
            to="/profile"
            class="flex-shrink-0 w-full group block bg-gray-700 p-4"
          >
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm leading-5 font-medium text-white">
                  Tim Apple
                </p>
                <p
                  class="text-xs leading-4 font-medium text-gray-300 group-hover:text-gray-200 transition ease-in-out duration-150"
                >
                  View profile
                </p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      v-show="!showMobileMenu"
      class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 fixed z-10 ml-3 mt-2"
    >
      <!-- hamburger menu -->
      <button
        class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 bg-gray-200 transition ease-in-out duration-150"
        aria-label="Open sidebar"
        @click="showMobileMenu = !showMobileMenu"
      >
        <svg
          class="h-6 w-6"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMobileMenu: false
  })
}
</script>

<style scoped>
.nuxt-link-exact-active {
  @apply text-white bg-gray-900;
}
</style>
