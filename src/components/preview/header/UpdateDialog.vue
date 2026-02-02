<script setup lang="ts">
import { useHeaderPreview } from './composables'

const { openDialog } = useHeaderPreview()
</script>

<template>
  <Dialog v-model:open="openDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Update</DialogTitle>
      </DialogHeader>
      <div class="text-sm text-muted-foreground">
        This dialog is disabled in this build.
      </div>
    </DialogContent>
  </Dialog>
</template>
