<script setup lang="ts">
  import IconOne from '@/assets/icon/IconOne.vue';
  import IconTwo from '@/assets/icon/IconTwo.vue';
  import IconThree from '@/assets/icon/Iconthree.vue';
  import RedirectButton from './RedirectButton.vue';
</script>

<template>
  <div class="w-full h-full bg-blue-950 text-white">
    <div class="h-[13%] w-[100%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl shadow-xl flex justify-center items-center">
        <div class="px-[20px] ">
          <h3 class="font-bold text-xl">LOGO</h3>
        </div>
      </div>
      <div class="h-[100%] bg-blue-950  py-[20px]">
        <div class="flex flex-col justify-between h-full space-y-[10px]">
          <div>
            <div class="text-center pb-[20px] border-b-[1px] mb-[20px]">
              <h3 class="font-bold text-xl">Panel de Control</h3>
            </div>
            <div class=" flex flex-col justify-between space-y-[10px] px-[20px]">
              <RedirectButton to="/firstOption">
                <IconOne/>
                Actividad 1
              </RedirectButton>
              <RedirectButton to="/SecondOption">
                <IconTwo/>
                Actividad 2
              </RedirectButton>
              
            </div>
          </div>
          <div class="h-[50px]">
            <div class="flex justify-center items-center pt-[20px] border-t-[1px]">
              Copyright aea
            </div>
          </div>
        </div>
      </div>
  </div>
</template>