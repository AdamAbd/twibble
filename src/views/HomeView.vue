<script setup>
import CreateTeamModal from '../components/Modal/CreateTeamModal.vue'
import CustomButton from '../components/Buttons/CustomButton.vue'
import CustomIconButton from '../components/Buttons/CustomIconButton.vue'
import { useShowModalTeamStore } from '../stores/showModalTeam'

const showModalTeam = useShowModalTeamStore()
</script>

<template>
  <CreateTeamModal v-if="showModalTeam.initial" />

  <div class="h-screen px-6 pt-[98px] ml-[280px] bg-scaffold font-poppins">
    <!-- Header Project -->
    <div class="flex flex-row justify-between">
      <!-- Tittle Project -->
      <div class="inline-flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h1 class="text-white text-2xl font-normal">#TeamTwibble</h1>
      </div>
      <!-- Actions -->
      <div class="inline-flex gap-4">
        <div class="w-10 h-10 py-2 bg-zinc-800 rounded-[200px] justify-center items-center flex">
          <div
            class="w-10 text-center text-red-500 text-base font-medium font-['Inter'] leading-normal"
          >
            AR
          </div>
        </div>
        <CustomButton :title="'INVITE'" :is-primary="false">
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
            >
              <path
                d="M8.49935 11.2933V13.0345C7.97802 12.8503 7.4171 12.75 6.83268 12.75C4.07126 12.75 1.83268 14.9886 1.83268 17.75H0.166016C0.166016 14.0681 3.15078 11.0833 6.83268 11.0833C7.40818 11.0833 7.96668 11.1562 8.49935 11.2933ZM6.83268 10.25C4.07018 10.25 1.83268 8.0125 1.83268 5.25C1.83268 2.4875 4.07018 0.25 6.83268 0.25C9.59518 0.25 11.8327 2.4875 11.8327 5.25C11.8327 8.0125 9.59518 10.25 6.83268 10.25ZM6.83268 8.58333C8.67435 8.58333 10.166 7.09167 10.166 5.25C10.166 3.40833 8.67435 1.91667 6.83268 1.91667C4.99102 1.91667 3.49935 3.40833 3.49935 5.25C3.49935 7.09167 4.99102 8.58333 6.83268 8.58333ZM11.8327 13.5833V11.0833H13.4993V13.5833H15.9993V15.25H13.4993V17.75H11.8327V15.25H9.33268V13.5833H11.8327Z"
                fill="#BBBBBB"
              />
            </svg>
          </template>
        </CustomButton>
        <CustomIconButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.002 2.50098C9.31445 2.50098 8.75195 3.06348 8.75195 3.75098C8.75195 4.43848 9.31445 5.00098 10.002 5.00098C10.6895 5.00098 11.252 4.43848 11.252 3.75098C11.252 3.06348 10.6895 2.50098 10.002 2.50098ZM10.002 15.001C9.31445 15.001 8.75195 15.5635 8.75195 16.251C8.75195 16.9385 9.31445 17.501 10.002 17.501C10.6895 17.501 11.252 16.9385 11.252 16.251C11.252 15.5635 10.6895 15.001 10.002 15.001ZM10.002 8.75098C9.31445 8.75098 8.75195 9.31348 8.75195 10.001C8.75195 10.6885 9.31445 11.251 10.002 11.251C10.6895 11.251 11.252 10.6885 11.252 10.001C11.252 9.31348 10.6895 8.75098 10.002 8.75098Z"
              fill="white"
            />
          </svg>
        </CustomIconButton>
      </div>
    </div>

    <!-- Horizontal Tabs -->
    <div class="flex flex-col w-full mt-6">
      <div class="flex flex-row items-center justify-between">
        <button
          class="text-[#7C7F82] focus:outline-none font-normal text-sm text-center inline-flex items-center"
          type="button"
        >
          LAST VIEWED
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 ml-1"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#7C7F82"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="relative w-14 h-7 rounded-lg border border-border">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute w-5 h-5 bg-slate-500 p-0.5 rounded-md top-[3px] left-[3px]"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M3.33398 4.16683C3.33398 3.94582 3.42178 3.73385 3.57806 3.57757C3.73434 3.42129 3.9463 3.3335 4.16732 3.3335H7.50065C7.72166 3.3335 7.93363 3.42129 8.08991 3.57757C8.24619 3.73385 8.33398 3.94582 8.33398 4.16683V7.50016C8.33398 7.72118 8.24619 7.93314 8.08991 8.08942C7.93363 8.2457 7.72166 8.3335 7.50065 8.3335H4.16732C3.9463 8.3335 3.73434 8.2457 3.57806 8.08942C3.42178 7.93314 3.33398 7.72118 3.33398 7.50016V4.16683Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6673 4.16683C11.6673 3.94582 11.7551 3.73385 11.9114 3.57757C12.0677 3.42129 12.2796 3.3335 12.5007 3.3335H15.834C16.055 3.3335 16.267 3.42129 16.4232 3.57757C16.5795 3.73385 16.6673 3.94582 16.6673 4.16683V7.50016C16.6673 7.72118 16.5795 7.93314 16.4232 8.08942C16.267 8.2457 16.055 8.3335 15.834 8.3335H12.5007C12.2796 8.3335 12.0677 8.2457 11.9114 8.08942C11.7551 7.93314 11.6673 7.72118 11.6673 7.50016V4.16683Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33398 12.5002C3.33398 12.2791 3.42178 12.0672 3.57806 11.9109C3.73434 11.7546 3.9463 11.6668 4.16732 11.6668H7.50065C7.72166 11.6668 7.93363 11.7546 8.08991 11.9109C8.24619 12.0672 8.33398 12.2791 8.33398 12.5002V15.8335C8.33398 16.0545 8.24619 16.2665 8.08991 16.4228C7.93363 16.579 7.72166 16.6668 7.50065 16.6668H4.16732C3.9463 16.6668 3.73434 16.579 3.57806 16.4228C3.42178 16.2665 3.33398 16.0545 3.33398 15.8335V12.5002Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.6673 12.5002C11.6673 12.2791 11.7551 12.0672 11.9114 11.9109C12.0677 11.7546 12.2796 11.6668 12.5007 11.6668H15.834C16.055 11.6668 16.267 11.7546 16.4232 11.9109C16.5795 12.0672 16.6673 12.2791 16.6673 12.5002V15.8335C16.6673 16.0545 16.5795 16.2665 16.4232 16.4228C16.267 16.579 16.055 16.6668 15.834 16.6668H12.5007C12.2796 16.6668 12.0677 16.579 11.9114 16.4228C11.7551 16.2665 11.6673 16.0545 11.6673 15.8335V12.5002Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </label>
      </div>
      <div class="w-full h-px bg-border mt-2" />
    </div>

    <div class="mt-6 flex flex-wrap gap-6">
      <div
        class="w-[260px] h-[215px] border border-border border-dashed rounded-lg flex flex-col gap-2 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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
        <span class="text-xs text-white font-normal">ADD NEW PROJECT</span>
      </div>
    </div>
  </div>
</template>
