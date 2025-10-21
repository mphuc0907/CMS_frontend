<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import HomeLayout from '@/components/layouts/HomeLayout.vue'
// Nếu CHƯA có 2 file dưới thì ĐỪNG import
// import AdminLayout from '@/components/layouts/AdminLayout.vue'
// import AuthLayout from '@/components/layouts/AuthLayout.vue'

const route = useRoute()
const layouts = { HomeLayout /*, AdminLayout, AuthLayout */ }

const layoutComponent = computed(() => {
  const name = route.meta?.layout || 'HomeLayout'
  return layouts[name] || HomeLayout
})
</script>

<template>
  <component :is="layoutComponent">
    <RouterView />
  </component>
</template>
