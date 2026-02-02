<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

import type { AddonMobileApp } from '@/composables/signatures/types'

import * as Base from '@/components/templates/components/base'
import { normalizeUrl, publicAssetUrl } from '@/utils'

interface Props {
  tdStyle?: HTMLAttributes['style']
  enableAnalytics?: boolean
}

defineProps<Props>()

const { getAddonValue } = useSignatures()

const mobileApp = computed(() => getAddonValue<AddonMobileApp>('mobileApp'))

const appStoreBadge = publicAssetUrl('/assets/app-store-badge.png')
const googlePlayBadge = publicAssetUrl('/assets/google-play-badge.png')
</script>

<template>
  <Base.Table width="auto">
    <tr>
      <td
        v-if="mobileApp.appStore"
        :style="tdStyle"
      >
        <p style="margin: 0; line-height: 0">
          <a :href="normalizeUrl(mobileApp.appStore)">
            <img
              width="118"
              height="35"
              :src="appStoreBadge"
              alt="app store badge"
            >
          </a>
        </p>
      </td>
      <td
        v-if="mobileApp.appStore"
        width="5"
      />
      <td
        v-if="mobileApp.googlePlay"
        :style="tdStyle"
      >
        <p style="margin: 0; line-height: 0">
          <a :href="normalizeUrl(mobileApp.googlePlay)">
            <img
              width="118"
              height="35"
              :src="googlePlayBadge"
              alt="google play badge"
            >
          </a>
        </p>
      </td>
    </tr>
  </Base.Table>
</template>
