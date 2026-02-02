<template>
  <div
    data-header
    class="p-3 pr-6 flex justify-between"
  >
    <RouterLink to="/basic">
      <div class="w-[var(--sidebar-width)]">
        <img
          src="/balloon.avif"
          alt="REMAX"
          class="h-6 px-3"
        >
      </div>
    </RouterLink>
    <div class="flex items-center gap-6">
      <HeaderColorMode />
    </div>
  </div>
</template>
