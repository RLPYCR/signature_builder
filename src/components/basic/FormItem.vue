<script setup lang="ts">
import { attributes } from '@/data/attributes'
import { clone } from '@/utils'

interface Props {
  index: number
  value: BasicTool
}

const props = defineProps<Props>()

const { installed } = useSignatures()

const localValue = ref(clone<BasicTool>(props.value))

// +1 потому что первый элемент это изображение
const index = props.index + 1

const COMPANY_YCR = 'REMAX Your Community Realty'
const COMPANY_CONNECT = 'REMAX Connect Realty'

const ycrLogoUrl = import.meta.env.VITE_YCR_LOGO_URL
const connectLogoUrl = import.meta.env.VITE_CONNECT_LOGO_URL

const isJobTitleField = computed(() => localValue.value.label.trim().toLowerCase() === 'job title')
const isCompanyField = computed(() => localValue.value.label.trim().toLowerCase() === 'company')

const imageValue = computed(() => installed.value?.tools.basic[0].value || '')

const companyLock = computed(() => {
  if (imageValue.value && ycrLogoUrl && imageValue.value === ycrLogoUrl)
    return COMPANY_YCR
  if (imageValue.value && connectLogoUrl && imageValue.value === connectLogoUrl)
    return COMPANY_CONNECT
  return ''
})

const companyOptions = [COMPANY_YCR, COMPANY_CONNECT]

const jobTitleMode = ref<'Sales Representative' | 'Broker' | 'custom'>('custom')
const customJobTitle = ref('')

function update(tool: BasicTool) {
  if (!installed.value)
    return

  const { label, type, value } = tool

  installed.value.tools.basic[index].label = label
  installed.value.tools.basic[index].type = type
  installed.value.tools.basic[index].value = value
}

function onRemoveField() {
  if (!installed.value)
    return
  installed.value.tools.basic.splice(index, 1)
}

watch(localValue, v => update(v), { deep: true })

watch(
  companyLock,
  (value) => {
    if (!isCompanyField.value || !value)
      return
    if (localValue.value.value !== value)
      localValue.value.value = value
  },
  { immediate: true },
)

watch(
  () => localValue.value.value,
  (value) => {
    if (!isJobTitleField.value)
      return
    if (value === 'Sales Representative' || value === 'Broker') {
      jobTitleMode.value = value
      customJobTitle.value = ''
    }
    else {
      jobTitleMode.value = 'custom'
      customJobTitle.value = value || ''
    }
  },
  { immediate: true },
)

watch([jobTitleMode, customJobTitle], () => {
  if (!isJobTitleField.value)
    return
  const nextValue = jobTitleMode.value === 'custom' ? customJobTitle.value : jobTitleMode.value
  if (nextValue !== localValue.value.value)
    localValue.value.value = nextValue
})
</script>

<template>
  <UiFieldForm label-position="top">
    <UiFieldFormItem>
      <template #label>
        <UiFieldFormLabel>
          <div class="flex items-center justify-between w-full">
            <div class="grow">
              {{ localValue.label }}
            </div>
            <div class="flex items-center">
              <UiPopover>
                <UiPopoverTrigger
                  tabindex="-1"
                  as-child
                >
                  <UiButton
                    variant="ghost"
                    size="icon-xs"
                  >
                    <UilSetting class="cursor-pointer" />
                  </UiButton>
                </UiPopoverTrigger>
                <UiPopoverContent>
                  <UiFieldForm
                    label-position="top"
                    class="grid grid-cols-2 gap-4 space-y-0"
                  >
                    <UiFieldFormItem label="Label">
                      <UiInput v-model="localValue.label" />
                    </UiFieldFormItem>
                    <UiFieldFormItem label="Type">
                      <UiSelect v-model="localValue.type">
                        <UiSelectTrigger class="w-full">
                          <UiSelectValue placeholder="Select a timezone" />
                        </UiSelectTrigger>
                        <UiSelectContent>
                          <UiSelectGroup>
                            <UiSelectItem
                              v-for="i in attributes.types"
                              :key="i.value"
                              :value="i.value"
                            >
                              {{ i.label }}
                            </UiSelectItem>
                          </UiSelectGroup>
                        </UiSelectContent>
                      </UiSelect>
                    </UiFieldFormItem>
                  </UiFieldForm>
                </UiPopoverContent>
              </UiPopover>
              <UiButton
                v-if="!localValue.main"
                variant="ghost"
                size="icon-xs"
                @click="onRemoveField"
              >
                <UilTrashAlt class="text-destructive" />
              </UiButton>
            </div>
          </div>
        </UiFieldFormLabel>
      </template>
      <template v-if="isCompanyField">
        <UiSelect
          v-model="localValue.value"
          :disabled="!!companyLock"
        >
          <UiSelectTrigger class="w-full">
            <UiSelectValue placeholder="Select company" />
          </UiSelectTrigger>
          <UiSelectContent>
            <UiSelectGroup>
              <UiSelectItem
                v-for="option in companyOptions"
                :key="option"
                :value="option"
              >
                {{ option }}
              </UiSelectItem>
            </UiSelectGroup>
          </UiSelectContent>
        </UiSelect>
      </template>
      <template v-else-if="isJobTitleField">
        <div class="flex items-center gap-2">
          <UiSelect v-model="jobTitleMode">
            <UiSelectTrigger class="w-full">
              <UiSelectValue placeholder="Select job title" />
            </UiSelectTrigger>
            <UiSelectContent>
              <UiSelectGroup>
                <UiSelectItem value="Sales Representative">
                  Sales Representative
                </UiSelectItem>
                <UiSelectItem value="Broker">
                  Broker
                </UiSelectItem>
                <UiSelectItem value="custom">
                  Custom
                </UiSelectItem>
              </UiSelectGroup>
            </UiSelectContent>
          </UiSelect>
          <UiInput
            v-if="jobTitleMode === 'custom'"
            v-model="customJobTitle"
            placeholder="Enter job title"
          />
        </div>
      </template>
      <UiInput
        v-else
        v-model="localValue.value"
      />
    </UiFieldFormItem>
  </UiFieldForm>
</template>
