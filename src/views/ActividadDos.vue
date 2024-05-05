<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';
import instanciaAxios from '@/utils/AxiosInstance';

const periodos = ref([]);
const campos = ref(['sexo_feme', 'sexo_masc', 'total_matricula']);
const selectedPeriodo = ref('');
const selectedCampo = ref('');
let barChart: Chart;

onMounted(async () => {
  try {
    const response = await instanciaAxios.get('/r86y-229a.json');
    const uniquePeriodos = new Set(response.data.map((item: any) => item.periodo));
    periodos.value = Array.from(uniquePeriodos) as string[];
  } catch (error) {
    console.error(error);
  }
});

const actualizarGrafico = async () => {
  try {
    const response = await instanciaAxios.get(`/r86y-229a.json?periodo=${selectedPeriodo.value}`);
    const datos = response.data;
    
    const labels = datos.map((item: any) => item.programa);
    const valores = datos.map((item: any) => item[selectedCampo.value]);

    if (barChart) {
      barChart.destroy();
    }

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    barChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: selectedCampo.value,
          data: valores,
          backgroundColor: 'rgba(0, 109, 236, 0.39)',
          borderColor: 'rgba(0, 109, 236, 0.7)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
  }
};
</script>


<template>
  <div>
    <div class="flex justify-between my-12 w-[50%] mx-auto">
      <select v-model="selectedPeriodo" @change="actualizarGrafico" class="px-4 py-2 rounded-lg shadow-md bg-neutral-200">
        <option value="">Selecciona un período</option>
        <option v-for="periodo in periodos" :value="periodo">{{ periodo }}</option>
      </select>

      <select v-model="selectedCampo" @change="actualizarGrafico" class="px-4 py-2 rounded-lg shadow-md bg-neutral-200">
        <option value="">Selecciona un campo</option>
        <option v-for="campo in campos" :value="campo">{{ campo }}</option>
      </select>
    </div>

    <div>
      <canvas id="barChart" width="400" height="250" class="flex justify-center"></canvas>
    </div>
  </div>
</template>