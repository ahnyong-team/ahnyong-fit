<template>
  <div class="container">
    <div class="max-w-7xl pt-12 md:pt-0">
      <h1 class="text-2xl font-semibold text-gray-900">Profile</h1>
    </div>
    <div class="flex flex-col">
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Account Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-3 gap-6">
                <div class="col-span-3 sm:col-span-2">
                  <label
                    for="company_website"
                    class="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Nickname
                  </label>
                  <div class="mt-1 flex rounded-md shadow-sm">
                    <input
                      id="company_website"
                      class="form-input flex-1 block w-full rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <label
                  for="about"
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  Why do you rep?
                </label>
                <div class="rounded-md shadow-sm">
                  <textarea
                    id="about"
                    rows="3"
                    class="form-textarea mt-1 block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    placeholder="you@example.com"
                  ></textarea>
                </div>
                <p class="mt-2 text-sm text-gray-500">
                  Briefly describe why you can't stop repping.
                </p>
              </div>

              <div class="mt-6">
                <label
                  class="block text-sm leading-5 font-medium text-gray-700"
                >
                  Avatar
                </label>
                <div class="mt-2 flex items-center">
                  <span
                    class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                  >
                    <svg
                      class="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </span>
                  <span class="ml-5 rounded-md shadow-sm">
                    <button
                      type="button"
                      class="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                    >
                      Change
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >First name</label
                  >
                  <input
                    id="first_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Last name</label
                  >
                  <input
                    id="last_name"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email_address"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >Email address</label
                  >
                  <input
                    id="email_address"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-3">
                  <label
                    for="city"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >City</label
                  >
                  <input
                    id="city"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-3">
                  <label
                    for="state"
                    class="block text-sm font-medium leading-5 text-gray-700"
                    >State / Province</label
                  >
                  <input
                    id="state"
                    class="mt-1 form-input block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">
              Notifications
            </h3>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Decide which communications you'd like to receive and how.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <fieldset>
                <legend class="text-base leading-6 font-medium text-gray-900">
                  By Email
                </legend>
                <div class="mt-4">
                  <div class="flex items-start">
                    <div class="absolute flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div class="pl-7 text-sm leading-5">
                      <label for="comments" class="font-medium text-gray-700"
                        >Team Reps</label
                      >
                      <p class="text-gray-500">
                        Get notified when a teammate made gains.
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label
                          for="candidates"
                          class="font-medium text-gray-700"
                          >Team Goals</label
                        >
                        <p class="text-gray-500">
                          Get notified when a goal has been completed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset class="mt-6">
                <legend class="text-base leading-6 font-medium text-gray-900">
                  Push Notifications
                </legend>
                <p class="text-sm leading-5 text-gray-500">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div class="mt-4">
                  <div class="flex items-center">
                    <input
                      id="push_everything"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_everything" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Everything</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_email"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_email" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >Same as email</span
                      >
                    </label>
                  </div>
                  <div class="mt-4 flex items-center">
                    <input
                      id="push_nothing"
                      name="form-input push_notifications"
                      type="radio"
                      class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label for="push_nothing" class="ml-3">
                      <span
                        class="block text-sm leading-5 font-medium text-gray-700"
                        >No push notifications</span
                      >
                    </label>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
