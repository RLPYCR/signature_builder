<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import 'vue-sonner/style.css'

const { applyUrlParams, init } = useSignatures()

onMounted(() => {
  init()
  applyUrlParams()
})
</script>

<template>
  <RouterView />
  <Toaster />
</template>
