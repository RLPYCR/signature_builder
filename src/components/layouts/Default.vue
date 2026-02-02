<script setup lang="ts"></script>

<template>
  <div
    data-layout-default
    class="min-h-screen grid grid-cols-1 grid-rows-[50px_auto_auto_auto] lg:h-screen lg:grid-cols-[85px_550px_1fr] lg:grid-rows-[50px_1fr]"
  >
    <Header class="lg:col-span-3 border-b" />
    <Sidebar class="border-b lg:border-b-0 lg:border-r overflow-x-auto lg:overflow-y-auto" />
    <div
      data-main
      class="px-4 py-4 lg:px-6 overflow-y-auto"
    >
      <div class="mb-4">
        <h1 class="text-2xl font-semibold leading-thin mb-2">
          {{ $route.meta.title }}
        </h1>
        <p
          v-if="$route.meta.description"
          class="text-sm text-muted-foreground"
        >
          {{ $route.meta.description }}
        </p>
      </div>
      <div>
        <slot />
      </div>
    </div>
    <div
      data-preview
      class="bg-accent dark:bg-accent/20 p-4 lg:p-6 overflow-y-auto"
    >
      <Preview />
    </div>
  </div>
</template>
