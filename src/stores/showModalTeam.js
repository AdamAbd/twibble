import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShowModalTeamStore = defineStore('showModalTeam', () => {
    const initial = ref(false)
    function show() {
        initial.value = true;
    }
    function hide() {
        initial.value = false;
    }

    return { initial, show, hide }
})
