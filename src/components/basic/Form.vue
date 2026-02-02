<script setup lang="ts">
const { installed, mainFields } = useSignatures()

const ycrLogoUrl = import.meta.env.VITE_YCR_LOGO_URL
const connectLogoUrl = import.meta.env.VITE_CONNECT_LOGO_URL

const logoOptions = computed(() => {
  return [
    {
      key: 'ycr',
      label: 'YCR',
      url: ycrLogoUrl,
    },
    {
      key: 'connect',
      label: 'Connect',
      url: connectLogoUrl,
    },
  ].filter(option => !!option.url)
})

const image = computed({
  get: () => installed.value?.tools.basic[0].value || '',
  set: (value: string) => {
    if (!installed.value)
      return
    installed.value.tools.basic[0].value = value
  },
})

function onUploaded(url: string) {
  image.value = url
}

function selectLogo(url?: string) {
  if (!url)
    return
  image.value = url
}
</script>

<template>
  <div>
    <UiFieldForm label-position="top">
      <UiFieldFormItem label="Image">
        <div class="flex items-center gap-2" />
        <div
          v-if="logoOptions.length"
          class="mt-3 grid grid-cols-3 gap-3 items-end"
        >
          <UiButton
            v-for="option in logoOptions"
            :key="option.key"
            variant="outline"
            class="flex items-center gap-3 h-auto py-2 px-3"
            :class="
              image === option.url ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
            "
            @click="selectLogo(option.url)"
          >
            <img
              :src="option.url"
              :alt="option.label"
              class="h-10 w-10 object-contain"
            >
            <span class="text-sm text-left">
              {{ option.label }}
            </span>
          </UiButton>
          <UiUpload @uploaded="onUploaded" />
        </div>
      </UiFieldFormItem>
    </UiFieldForm>
    <div class="mt-6 grid grid-cols-2 gap-4">
      <BasicFormItem
        v-for="(i, index) in mainFields"
        :key="i.id!"
        :index="index"
        :value="i"
      />
    </div>
    <BasicAddNewFiled />
  </div>
</template>
