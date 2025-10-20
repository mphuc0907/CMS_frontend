<script setup>
import logo from './components/layouts/header/logo.vue'
import MenuHeader from './components/layouts/header/MenuHeader.vue'
import MenuProfile from './components/layouts/header/MenuProfile.vue';
</script>

<template>
  <div class="container mx-auto">
    <header class="flex w-full">
      <nav class="menu w-full bg-slate-200">
        <div class="pc-menu__container flex items-center justify-between px-4 py-2">
          <logo />
          <MenuHeader />
          <MenuProfile />
        </div>
      </nav>
    </header>
  </div>
</template>