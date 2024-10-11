<template>
  <div class="bg-slate-500 min-h-[100vh] p-10">
    <p class="text-white">
      Olá, Estou configurado com TailwindCss! xD
    </p>
    <div v-if="error" class="text-red-500">
      Erro ao carregar dados: {{ error.message }}
    </div>
    <div v-else-if="!data">
      Carregando...
    </div>
    <div v-else>
      <p class="text-white">
        Dados: {{ data }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, error } = await useFetch('http://localhost:3000/api/example')
</script>
