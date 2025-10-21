<script setup>
import logo from './components/layouts/header/logo.vue'
import MenuHeader from './components/layouts/header/MenuHeader.vue'
import MenuProfile from './components/layouts/header/MenuProfile.vue';
import CategorySection from './components/features/categories/index.vue';
import Banner from './components/features/banner/Banner.vue';
</script>

<template>
  <div class="container-xl mx-auto ">
    <header class="flex w-full" >
      <nav class="menu w-full bg-slate-200 fixed top-0 left-0 z-50 shadow-md">
        <div class="pc-menu__container flex items-center justify-between px-4 py-2 pt-0 pb-0">
          <logo />
          <MenuHeader />
          <MenuProfile />
        </div>
      </nav>
    </header>
    <main>
      <Banner class="mt-16"/>
      <CategorySection />
    </main>
  </div>
</template>