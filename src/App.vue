<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <Navbar />
  <SideBar />
  <RouterView />
</template>
