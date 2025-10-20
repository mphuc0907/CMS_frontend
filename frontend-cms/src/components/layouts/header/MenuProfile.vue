<template>
  <div class="pc-menu__right flex items-center gap-4">
    <form class="pc-menu__search" @submit.prevent>
      <input
        type="search"
        placeholder="Search..."
        aria-label="Search"
        class="pc-menu__search-input w-full px-3 py-1 border rounded-lg border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </form>

    <div
      ref="root"
      class="pc-menu__user relative"
      tabindex="0"
      role="button"
      aria-haspopup="true"
      :aria-expanded="open.toString()"
      @click="toggleMenu"
      @keydown.enter.prevent="toggleMenu"
    >
      <img
        src="https://www.vlance.vn/uploads/48x48/ef0b40aacbfa7539da9a5deae6003c71c88637b61.jpg"
        alt="User avatar"
        class="pc-menu__avatar rounded-full w-[40px] h-[40px] object-cover"
      />

      <ul
        v-show="open"
        class="pc-menu__user-dropdown absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md py-1 z-50"
        role="menu"
        aria-label="User menu"
      >
        <li role="none">
          <router-link role="menuitem" to="/profile" class="block px-4 py-2 text-sm hover:bg-slate-100">Profile</router-link>
        </li>
        <li role="none">
          <router-link role="menuitem" to="/logout" class="block px-4 py-2 text-sm hover:bg-slate-100">Logout</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const open = ref(false)
const root = ref(null)

function toggleMenu() {
  open.value = !open.value
}

function closeMenu() {
  open.value = false
}

function handleDocumentClick(e) {
  if (!root.value) return
  if (!root.value.contains(e.target)) closeMenu()
}

function handleKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  document.addEventListener('click', handleDocumentClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDocumentClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>