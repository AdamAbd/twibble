<script setup>
import { ref } from 'vue'
import { useShowModalCollabStore } from '../../stores/showModalCollab'

const showModalCollab = useShowModalCollabStore()

const email = ref('')
</script>

<template>
  <div class="fixed z-30 w-screen h-screen bg-black/50 font-rubik">
    <div class="fixed top-0 bottom-0 right-0 left-0 m-auto w-[560px] h-min">
      <div class="relative w-full max-h-full">
        <!-- Modal content -->
        <div class="relative bg-background rounded-lg shadow py-6">
          <div class="flex flex-row items-center justify-between mb-3 px-6">
            <h2 class="text-lg font-medium text-white">ADD YOUR COLLABORATORS</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 hover:bg-primary/20 rounded-md cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              @click="showModalCollab.hide()"
            >
              <path
                d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                fill="white"
              />
            </svg>
          </div>
          <p class="text-sm text-[#BBBBBB] font-normal mb-5 px-6">
            Invite now or you can update user permission on the team later on.
          </p>
          <!-- Form -->
          <form class="space-y-6" action="#">
            <div class="flex flex-row items-end gap-4 px-6">
              <div class="flex flex-col gap-3 flex-1">
                <label for="email" class="block text-sm font-normal text-white"> EMAIL </label>
                <input
                  type="email"
                  class="bg-[#2B2B2B] border border-border text-base text-white font-medium font-inter rounded-lg focus:ring focus:ring-primary/30 focus:border-primary block w-full px-3.5 py-2.5"
                  placeholder="contact@example.com"
                  required
                  v-model="email"
                />
              </div>
              <button
                class="focus:outline-none font-medium rounded-lg text-sm tracking-wider px-4 py-[13px] text-center inline-flex items-center justify-center"
                :disabled="email.trim().length === 0"
                :class="{
                  'text-[#8C8C8C] bg-[#2B2B2B]': email.trim().length === 0,
                  'text-white bg-primary hover:bg-red-500': email.trim().length !== 0
                }"
                @click="showModalCollab.hide()"
              >
                SEND INVITE
              </button>
            </div>
            <div class="w-full h-px bg-border my-5" />
            <div class="flex flex-col px-6">
              <span for="email" class="block text-sm font-normal text-white">
                PROJECT MEMBERS
              </span>
              <div class="flex flex-row justify-between items-end">
                <div class="max-w-[180px] gap-3 items-center inline-flex mt-4">
                  <div
                    class="w-10 h-10 py-2 bg-[#2B2B2B] rounded-[200px] justify-center items-center flex"
                  >
                    <div
                      class="w-10 text-center text-primary text-base font-medium font-['Inter'] leading-normal"
                    >
                      AR
                    </div>
                  </div>
                  <div class="flex-col justify-between items-start inline-flex">
                    <h3 class="text-white text-sm font-normal">Andar Rahman</h3>
                    <p class="text-[#7C7F82] text-sm font-normal">andar.rahman@gmail.com</p>
                  </div>
                </div>
                <button
                  class="focus:outline-none font-normal rounded-lg text-sm leading-3 h-8 tracking-wider px-4 text-center inline-flex items-center justify-center text-[#BBBBBB] border border-border hover:bg-primary/30 hover:border-primary/30"
                >
                  OWNER
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    class="ml-2"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0932 10.8845L14.218 6.75977L15.3965 7.93827L10.0932 13.2416L4.78992 7.93827L5.96842 6.75977L10.0932 10.8845Z"
                      fill="#EF6351"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="w-full h-px bg-border my-5" />
          </form>
          <button
            class="focus:outline-none font-medium rounded-lg text-sm tracking-wider px-4 py-2.5 mx-6 mt-5 text-center text-primary border border-border hover:bg-primary/30 hover:border-primary/30"
            @click="showModalCollab.hide()"
          >
            SKIP FOR NOW
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
