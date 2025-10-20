<template>
    <ul class="pc-menu__center flex flex-wrap gap-12 relative" role="menubar" aria-label="Main menu">
        <li role="none" class="pt-[20px] pb-[20px] font-medium"><router-link role="menuitem" to="/dashboard">Dashboard</router-link></li>
        <li role="none" class="pt-[20px] pb-[20px] font-medium"><router-link role="menuitem" to="/pages">Pages</router-link></li>

        <li class="pc-menu__item--dropdown relative pt-[20px] pb-[20px] font-medium" role="none"
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave">
            <button class="pc-menu__button" aria-haspopup="true" aria-expanded="false">Catalog</button>
            <ul class="pc-menu__dropdown hidden flex flex-wrap gap-3 py-[15px] px-[20px] rounded-[10px] -left-5 absolute top-10 bg-slate-200 the" role="menu" aria-label="Catalog submenu">
                <li role="none"><router-link role="menuitem" to="/products">Products</router-link></li>
                <li role="none"><router-link role="menuitem" to="/categories">Categories</router-link></li>
                <li role="none"><router-link role="menuitem" to="/brands">Brands</router-link></li>
            </ul>
        </li>

        <li role="none" class="pt-[20px] pb-[20px] font-medium"><router-link role="menuitem" to="/media">Media</router-link></li>
        <li role="none" class="pt-[20px] pb-[20px] font-medium"><router-link role="menuitem" to="/settings">Settings</router-link></li>
    </ul>
</template>

<script setup>
function onMouseEnter(event) {
  const root = event.currentTarget
  const dropdown = root.querySelector('.pc-menu__dropdown')
  const btn = root.querySelector('.pc-menu__button')
  if (dropdown) dropdown.classList.remove('hidden')
  if (btn) btn.setAttribute('aria-expanded', 'true')
}

function onMouseLeave(event) {
  const root = event.currentTarget
  const dropdown = root.querySelector('.pc-menu__dropdown')
  const btn = root.querySelector('.pc-menu__button')
  if (dropdown) dropdown.classList.add('hidden')
  if (btn) btn.setAttribute('aria-expanded', 'false')
}
</script>