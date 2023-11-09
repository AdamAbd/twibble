<script setup>
import CustomButton from '../Buttons/CustomButton.vue'
</script>

<template>
  <div class="fixed z-30 w-screen h-screen bg-black/40">
    <div class="fixed top-0 bottom-0 right-0 left-0 m-auto w-[400px] h-min">
      <div class="relative w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div class="p-6">
            <div class="flex flex-row items-center justify-between mb-3">
              <h2 class="text-lg font-medium text-gray-900 dark:text-white">CREATE NEW TEAM</h2>
              <button type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <p class="text-sm font-normal mb-5">
              Add a new team and start assigning projects to collaborate on.
            </p>
            <form class="space-y-6" action="#">
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-base font-medium rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-3.5 py-2.5"
                placeholder="name@company.com"
                required
              />
              <div class="flex flex-row gap-3">
                <CustomButton :title="'Add Team'" />
                <CustomButton :title="'Add Team'" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
