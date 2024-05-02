<script setup lang="ts">
  import { ref } from 'vue';
  import MenuIcon from '@/assets/icon/MenuIcon.vue';
  import SideBar from '@/components/Dashboard/SideBar.vue';
  import UserLogin from '@/components/Dashboard/UserLogin.vue';

  const showDropDown = ref(false);
  const showSide = ref(true);

  const toggleSideBar = (): void => {
    showSide.value = !showSide.value;
  };

  const toggleDrop = (): void => {
    showDropDown.value = !showDropDown.value;
  };
</script>

<template>
  <div class="w-[100%] h-screen flex">
    <!-- Side bar -->
    <div class="w-[400px] h-[88.5%]" v-show="showSide">
      <SideBar/>
    </div>
    <!-- Main Menu -->
    <div class="w-full h-screen bg-gray-400">
      <div class="h-[50px] bg-gray-100 flex items-center px-[20px] py-[10px] z-10 border-b shadow-xl justify-between ">
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <MenuIcon/>
        </div>
          
        <div class="font-bold text-lg hidden sm:flex ">
          Nombre de usuario
        </div>
        <!-- User login -->
        <div class=" cursor-pointer">
          <div class="flex items-center justify-end space-x-4" @click="toggleDrop">
            <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="">
          </div>
          <!-- Drop down -->
          <div v-show="showDropDown" class="absolute right-[10px] origin-top-right w-56" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <UserLogin/>
          </div>
        </div>
      </div>
      <div class="w-full bg-gray-50 p-[20px] h-[92%] flex justify-center items-center">
        <div class="container border border-gray-300 rounded-md h-[97%] w-[95%] overflow-auto scroll-smooth">
          <router-view class="m-[15px]"></router-view>
        </div>
      </div>
    </div>
  </div>
    <!-- Main  -->
</template>


<style>
.container{
  scrollbar-width: none;
}
</style>