<script setup lang="ts">
import type { AddonBanner } from '@/composables/signatures/types'

const { getAddonValue, patchAddonValue } = useSignatures()

const ycrBannerUrl = import.meta.env.VITE_YCR_BANNER_URL
const connectBannerUrl = import.meta.env.VITE_CONNECT_BANNER_URL

const bannerOptions = computed(() => {
  return [
    {
      key: 'ycr',
      label: 'YCR',
      url: ycrBannerUrl,
    },
    {
      key: 'connect',
      label: 'Connect',
      url: connectBannerUrl,
    },
  ].filter(option => !!option.url)
})

const image = computed({
  get: () => getAddonValue<AddonBanner>('banner').image,
  set: (value) => {
    patchAddonValue<AddonBanner>('banner', 'image', value)
  },
})

const link = computed({
  get: () => getAddonValue<AddonBanner>('banner').link,
  set: (value) => {
    patchAddonValue<AddonBanner>('banner', 'link', value)
  },
})

const width = computed({
  get: () => [getAddonValue<AddonBanner>('banner').width ?? 100],
  set: (value) => {
    patchAddonValue<AddonBanner>('banner', 'width', value[0])
  },
})

function onUploaded(path: string) {
  image.value = path
}

function selectBanner(url?: string) {
  if (!url)
    return
  image.value = url
}
</script>

<template>
  <UiFieldForm>
    <UiFieldFormItem label="Image">
      <div
        v-if="bannerOptions.length"
        class="mt-3 grid grid-cols-3 gap-3 items-end"
      >
        <UiButton
          v-for="option in bannerOptions"
          :key="option.key"
          variant="outline"
          class="flex items-center gap-3 h-auto py-2 px-3"
          :class="
            image === option.url ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''
          "
          @click="selectBanner(option.url)"
        >
          <img
            :src="option.url"
            :alt="option.label"
            class="h-10 w-10 object-contain"
          >
          <span class="text-sm text-left">{{ option.label }}</span>
        </UiButton>
        <UiUpload @uploaded="onUploaded" />
      </div>
      <div
        v-else
        class="flex items-center gap-2"
      >
        <UiInput
          v-model="image"
          placeholder="https://example.com/image.png"
        />
        <UiUpload @uploaded="onUploaded" />
      </div>
    </UiFieldFormItem>
    <UiFieldFormItem label="Link">
      <UiInput v-model="link" />
    </UiFieldFormItem>
    <UiFieldFormItem
      label="Width"
      :description="`Width in percentage. Current: ${width}%`"
    >
      <div class="flex items-center h-5">
        <UiSlider
          v-model="width"
          :min="10"
          :max="100"
        />
      </div>
    </UiFieldFormItem>
  </UiFieldForm>
</template>
