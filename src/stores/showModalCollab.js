import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useShowModalCollabStore = defineStore('showModalCollab', () => {
    const initial = ref(false)
    function show() {
        initial.value = true;
    }
    function hide() {
        initial.value = false;
    }

    return { initial, show, hide }
})
