<script setup>
import { useShowModalTeamStore } from '../stores/showModalTeam'
import { useTeamStore } from '../stores/team'
import SideBarButton from './Buttons/SideBarButton.vue'

const showModalTeam = useShowModalTeamStore()
const teams = useTeamStore()
</script>

<template>
  <aside
    class="fixed top-0 left-0 z-10 w-[280px] h-screen pt-[74px] bg-background border-r border-border font-rubik"
  >
    <div class="h-full pt-6 overflow-y-auto flex flex-col">
      <!-- Team Section -->
      <div class="px-5">
        <!-- Team Title -->
        <h3 class="text-[#BBBBBB] text-xs font-normal tracking-wider">TEAMS</h3>
        <!-- Team Child -->
        <div class="flex flex-col gap-3 mt-3">
          <!-- <SideBarButton :is-active="true" :tertiary="true">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
                  stroke="#EF6351"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #title>
              <span class="font-normal text-base text-primary">#TeamTwibble</span>
            </template>
          </SideBarButton> -->
          <SideBarButton
            v-for="(team, index) in teams.teams"
            :is-active="team.isActive"
            :tertiary="true"
            :key="index"
          >
            <template #icon>
              <svg
                v-if="team.isActive"
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
                  stroke="#EF6351"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
                  stroke="#BBBBBB"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
            <template #title>
              <span
                class="font-normal text-base"
                :class="{ 'text-primary': team.isActive, 'text-white': !team.isActive }"
                >#{{ team.title }}</span
              >
            </template>
          </SideBarButton>
          <!-- Create New Team Button -->
          <SideBarButton @click="showModalTeam.show()">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-3 p-0.5 border border-border rounded-md"
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
            <template #title>
              <span class="font-normal text-sm text-[#BBBBBB]">CREATE NEW TEAMS</span>
            </template>
          </SideBarButton>
        </div>
      </div>
      <div class="w-full h-px bg-border my-4" />
      <!-- Library Button -->
      <div class="px-5 flex flex-col">
        <SideBarButton>
          <template #icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"
                fill="#BBBBBB"
              />
            </svg>
          </template>
          <template #title>
            <span class="font-normal text-base text-[#BBBBBB]">Library</span>
          </template>
        </SideBarButton>
      </div>
      <!-- Help Center Button -->
      <div class="mt-auto">
        <div class="w-full h-px bg-border" />
        <div class="px-5 py-4 flex flex-col">
          <SideBarButton>
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z"
                  fill="#BBBBBB"
                />
              </svg>
            </template>
            <template #title>
              <span class="font-normal text-base text-[#BBBBBB]">Help Center</span>
            </template>
          </SideBarButton>
        </div>
      </div>
    </div>
  </aside>
</template>
