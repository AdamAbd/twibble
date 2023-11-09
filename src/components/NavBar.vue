<script setup>
import AvatarItem from './AvatarItem.vue'
import CustomButton from './Buttons/CustomButton.vue'
</script>

<template>
  <nav class="fixed top-0 z-20 w-full bg-background border-b border-border font-rubik">
    <div class="flex items-center justify-between px-5 py-4">
      <!-- Content -->
      <div class="flex flex-row gap-[146px]">
        <!-- Logo -->
        <a href="https://twibbonize.com/">
          <img src="../assets/logo.svg" alt="Twibble Logo" class="w-[113px] h-8" />
        </a>
        <!-- Search Bar -->
        <form>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 mr-2"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#8C8C8C"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-80 px-3.5 py-2 pl-10 text-base font-inter text-[#8C8C8C] border border-border rounded-lg bg-[#2B2B2B]"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <!-- Content -->
      <div class="flex flex-row gap-6">
        <!-- CTA Button -->
        <CustomButton :title="'NEW PROJECT'">
          <template #icon
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 mr-2"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0013 4.1665V15.8332M4.16797 9.99984H15.8346"
                stroke="white"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
        </CustomButton>
        <!-- Divider -->
        <div class="w-px h-10 bg-border" />
        <!-- Avatar -->
        <AvatarItem />
      </div>
    </div>
  </nav>
</template>
