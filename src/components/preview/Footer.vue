<script setup lang="ts">
const year = new Date().getFullYear()
const repoUrl = import.meta.env.VITE_REPO
</script>

<template>
  <div
    data-footer
    class="text-xs text-muted-foreground text-right space-y-1"
  >
    <div>©{{ year }} • REMAX</div>
    <div v-if="repoUrl">
      <a
        :href="repoUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="underline underline-offset-2"
      >
        Source
      </a>
    </div>
  </div>
</template>
