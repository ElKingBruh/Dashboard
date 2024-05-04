<script setup lang="ts">
  import IconOne from '@/assets/icon/IconOne.vue';
  import IconTwo from '@/assets/icon/IconTwo.vue';
  import RedirectButton from './RedirectButton.vue';
</script>


<template>
  <div class="w-full h-full bg-blue-950 text-white">
    <div class="h-[13%] w-[100%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-b-2xl shadow-xl flex justify-center items-center">
      <h3 class="font-bold text-xl px-[20px]">LOGO</h3>
    </div>
    
    <!-- Content -->
    <div class="h-[100%] bg-blue-950">
      <div class="flex flex-col justify-between  space-y-[10px] h-[100%] content-between">
        <div>
          <!-- Tittle -->
          <div class="text-center pb-[20px] border-b-[1px] my-[20px]">
            <h2 class="font-bold text-xl">Panel de Control</h2>
          </div>
          <!-- options -->
          <ul class=" flex flex-col justify-between space-y-[10px] px-[20px]">
            <li>
              <RedirectButton to="/firstOption">
                <IconOne/>
                Actividad 1
              </RedirectButton>
            </li>
            <li>
              <RedirectButton to="/SecondOption">
              <IconTwo/>
              Actividad 2
            </RedirectButton>
            </li>
          </ul>
        </div>

        <!-- Footer -->
        <footer class="flex flex-col justify-center items-center py-[10px] border-t-[1px]">
          Integrantes:
          <ul class="text-sm font-light p-[10px] space-y-[4px]">
            <li>Gabriel Antonio Argel Villalba</li>
            <li>Diego Armando Argumedo Lopez</li>
            <li>Juan David Delgado Guerra</li>
            <li>Daniel Jose Sanchez Paternina</li>
            <li>Elkin Andres Vasquez Madrid</li>
          </ul>
        </footer>
      </div>
    </div>
  </div>
</template>