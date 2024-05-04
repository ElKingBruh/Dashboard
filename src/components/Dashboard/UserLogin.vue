<script setup lang="ts">
import { ref } from 'vue';

const showDropDown = ref(false);

const toggleDrop = (): void => {
    showDropDown.value = !showDropDown.value;
  };
</script>


<template>
  <div class=" cursor-pointer">
          <!-- User image -->
          <div class="flex items-center justify-end space-x-4" @click="toggleDrop">
            <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
          </div>
          <!-- Drop down content -->
          <div v-show="showDropDown" class="absolute right-[10px] origin-top-right w-56" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="absolute right-[10px]  z-10 mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="py-1 text-left" role="none">
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem" tabindex="-1" id="menu-item-0">Ajustes de cuenta</a>
                <a href="#" class="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-100" role="menuitem" tabindex="-1" id="menu-item-1">Soporte</a>
                <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm hover:bg-slate-100" role="menuitem" tabindex="-1" id="menu-item-3">Cerrar sesión</button>
                </form>
              </div>
            </div>
          </div>
        </div>
</template>