import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const teams = ref([])
  function add(title) {
    teams.value.push({ 'title': title, 'isActive': true })
  }

  return { teams, add }
})
