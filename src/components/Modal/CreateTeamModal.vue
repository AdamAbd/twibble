<script setup>
import { ref } from 'vue'
import { useShowModalTeamStore } from '../../stores/showModalTeam'
import CustomButton from '../Buttons/CustomButton.vue'
import { useTeamStore } from '../../stores/team'
import { useShowModalCollabStore } from '../../stores/showModalCollab'

const showModalTeam = useShowModalTeamStore()
const showModalCollab = useShowModalCollabStore()

const teams = useTeamStore()

const teamTitle = ref('')
</script>

<template>
  <div class="fixed z-30 w-screen h-screen bg-black/50 font-rubik">
    <div class="fixed top-0 bottom-0 right-0 left-0 m-auto w-[400px] h-min">
      <div class="relative w-full max-h-full">
        <!-- Modal content -->
        <div class="relative bg-background rounded-lg shadow">
          <div class="p-6">
            <div class="flex flex-row items-center justify-between mb-3">
              <h2 class="text-lg font-medium text-white">CREATE NEW TEAM</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 hover:bg-primary/20 rounded-md cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                @click="showModalTeam.hide()"
              >
                <path
                  d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z"
                  fill="white"
                />
              </svg>
            </div>
            <p class="text-sm text-[#BBBBBB] font-normal mb-5">
              Add a new team and start assigning projects to collaborate on.
            </p>
            <!-- Form -->
            <form class="space-y-6" action="#">
              <input
                type="text"
                class="bg-[#2B2B2B] border border-border text-base text-white font-medium font-inter rounded-lg focus:ring focus:ring-primary/30 focus:border-primary block w-full px-3.5 py-2.5"
                placeholder="Team name"
                required
                v-model="teamTitle"
              />
              <div class="flex flex-row gap-3">
                <CustomButton :title="'CANCEL'" :isPrimary="false" @click="showModalTeam.hide()" />
                <CustomButton
                  :title="'ADD TEAM'"
                  @click="
                    () => {
                      teams.add(teamTitle)
                      showModalCollab.show()
                    }
                  "
                >
                  <template #icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0013 4.16602V15.8327M4.16797 9.99935H15.8346"
                        stroke="white"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </template>
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
