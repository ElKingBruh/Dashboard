<script setup lang="ts">
  import { ref } from 'vue';
  import MenuIcon from '@/assets/icon/MenuIcon.vue';
  import SideBar from '@/components/Dashboard/SideBar.vue';
  import UserLogin from '@/components/Dashboard/UserLogin.vue';

  const showSide = ref(true);
  const toggleSideBar = (): void => {
    showSide.value = !showSide.value;
  };
</script>


<template>
  <div class="w-[100%] h-screen flex">

    <!-- Side bar -->
    <aside class="w-[400px] h-[88.5%]" v-show="showSide">
      <SideBar/>
    </aside>

    <!-- Main Menu -->
    <main class="w-full h-screen">
      <!-- nav bar -->
      <nav class="h-[50px] bg-gray-100 flex items-center px-[20px] py-[10px] z-10 border-b shadow-xl justify-between ">
        <!-- sidebar show button -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <MenuIcon/>
        </div>
        <!-- Title -->
        <h1 class="font-bold text-xl hidden sm:flex ">
          Dashboard
        </h1>
        <!-- User options -->
          <UserLogin/>
      </nav>

      <!-- Content area -->
      <div class="w-full bg-gray-50 p-[20px] h-[92%] flex justify-center items-center">
        <div class="container border border-gray-300 rounded-md h-[97%] w-[95%] overflow-auto scroll-smooth">
          <router-view class="m-[15px]"></router-view>
        </div>
      </div>
    </main>
  </div>
</template>


<style>
.container{
  scrollbar-width: none;
}
</style>