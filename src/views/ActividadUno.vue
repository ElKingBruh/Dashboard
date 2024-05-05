<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import instanciaAxios from '@/utils/AxiosInstance';

const list = ref([]);
const periodos = ref([]);
const facultades = ref([]);
const programas = ref([]);
const selectedPeriodo = ref('');
const selectedFacultad = ref('');
const selectedPrograma = ref('');

onMounted(async () => {
  try {
    const response = await instanciaAxios.get('/r86y-229a.json');
    list.value = response.data;

    periodos.value = new Set(response.data.map(item => item.periodo));

    facultades.value = new Set(response.data.map(item => item.facultad));

    programas.value = new Set(response.data.map(item => item.programa));
  } catch (error) {
    console.error(error);
  }
});

const filtrarTabla = async () => {
  try {
    let url = '/r86y-229a.json';
    const parametros = [];

    if (selectedPeriodo.value) {
      parametros.push(`periodo=${selectedPeriodo.value}`);
    }
    if (selectedFacultad.value) {
      parametros.push(`facultad=${selectedFacultad.value}`);
    }
    if (selectedPrograma.value) {
      parametros.push(`programa=${selectedPrograma.value}`);
    }

    if (parametros.length > 0) {
      url += `?${parametros.join('&')}`;
    }

    const response = await instanciaAxios.get(url);
    list.value = response.data;
  } catch (error) {
    console.error(error);
  }
};
</script>


<template>
  <div class="flex justify-between mt-[3rem] mx-[2rem] mb-[4rem]">
    <select v-model="selectedPeriodo" class="px-6 py-2 rounded-lg shadow-md bg-neutral-200 w-[12rem]">
      <option value="">Periodo</option>
      <option v-for="periodo in periodos" :value="periodo">{{ periodo }}</option>
    </select>

    <select v-model="selectedFacultad" class="px-6 py-2 rounded-lg shadow-md bg-neutral-200 w-[12rem]">
      <option value="">Facultad</option>
      <option v-for="facultad in facultades" :value="facultad">{{ facultad }}</option>
    </select>

    <select v-model="selectedPrograma" class="px-6 py-2 rounded-lg shadow-md bg-neutral-200 w-[12rem]">
      <option value="">Programa</option>
      <option v-for="programa in programas" :value="programa">{{ programa }}</option>
    </select>


    <button @click="filtrarTabla" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Filtrar</button>
  </div>

  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8 flex justify-center">
      <div class="inline-flex w-[95%] py-2 justify-center">
        <div class="container overflow-auto rounded-t-lg shadow-md w-[95%] h-screen">
          <table
            class="min-w-full text-left text-sm font-light text-surface dark:text-white">
            <thead
              class="border-b border-neutral-200 font-medium dark:border-white/10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <tr class="flex">
                <th scope="col" class="px-6 py-4 text-center w-[95%]">Periodo</th>
                <th scope="col" class=" py-4 text-center w-[95%]">Facultad</th>
                <th scope="col" class="px-6 py-4 text-center w-[95%]">Programa</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fila in list" class="border-b border-neutral-200 dark:border-white/10 flex">
                <td class="whitespace-nowrap px-6 py-4 text-xs sm:text-base font-semibold w-[95%]">{{ fila.periodo }}</td>
                <td class="whitespace-nowrap py-4 text-xs sm:text-base w-[95%]">{{ fila.facultad }}</td>
                <td class="whitespace-nowrap px-6 py-4 text-xs sm:text-base w-[95%]">{{ fila.programa }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container{
  scrollbar-width: none;
}
</style>