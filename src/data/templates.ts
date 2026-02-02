import { nanoid } from 'nanoid'

import type {
  AddonTool,
  BasicTool,
  OptionsTool,
  Signature,
  SocialTool,
} from '@/composables/signatures/types'

export interface Template extends Signature {
  preview?: string
  isNew?: boolean
}

export function useTemplateData() {
  const DEFAULT_COMPANY = 'REMAX Your Community Realty'
  const DEFAULT_WEBSITE = import.meta.env.VITE_YCR_WEBSITE_URL || 'https://yourcommunityrealty.com'
  const DEFAULT_EMAIL = 'info@yourcommunityrealty.com'
  const DEFAULT_PHONE = '000.000.0000'
  const DEFAULT_LOGO = import.meta.env.VITE_YCR_LOGO_URL || ''

  const DEFAULTS = {
    basic: [
      {
        id: nanoid(8),
        label: 'Avatar',
        type: 'image',
        main: true,
        value: DEFAULT_LOGO,
      },
      {
        id: nanoid(8),
        label: 'Full Name',
        type: 'text',
        main: true,
        value: 'John Doe',
      },
      {
        id: nanoid(8),
        label: 'Job Title',
        type: 'text',
        main: true,
        value: 'Sales Representative',
      },
      {
        id: nanoid(8),
        label: 'Company',
        type: 'text',
        main: true,
        value: DEFAULT_COMPANY,
      },
      {
        id: nanoid(8),
        label: 'Website',
        type: 'link',
        main: true,
        value: DEFAULT_WEBSITE,
      },
      {
        id: nanoid(8),
        label: 'Email',
        type: 'email',
        main: true,
        value: DEFAULT_EMAIL,
      },
      {
        id: nanoid(8),
        label: 'Cell Phone',
        type: 'phone',
        main: true,
        value: DEFAULT_PHONE,
      },
      {
        id: nanoid(8),
        label: 'Office Phone',
        type: 'phone',
        main: true,
        value: DEFAULT_PHONE,
      },
    ] as BasicTool[],
    options: {
      mainColor: '#ff1200',
      secondaryColor: '#000000',
      bgColor: '#0C2749',
      bgTextColor: '#f7f5ee',
      avatar: true,
      avatarSize: 120,
      avatarShape: 'square',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 12,
      jobSeparator: '/',
    } as OptionsTool,
    addons: [] as AddonTool[],
    socials: [
      {
        icon: 'facebook',
        value: '',
        label: 'Facebook',
      },
      {
        icon: 'twitter',
        value: '',
        label: 'Twitter',
      },
      {
        icon: 'linkedin',
        value: '',
        label: 'LinkedIn',
      },
      {
        icon: 'instagram',
        value: '',
        label: 'Instagram',
      },
    ] as SocialTool[],
  }

  const templates: Template[] = [
    {
      name: 'SignatureTemplate1',
      label: 'Template #1',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: DEFAULTS.options,
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-1.png',
    },
    {
      name: 'SignatureTemplate8',
      label: 'Template #8',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: DEFAULTS.options,
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-8.png',
    },
    {
      name: 'SignatureTemplate2',
      label: 'Template #2',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          avatarSize: 96,
          jobSeparator: 'br',
          column1Width: 20,
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-2.png',
    },
    {
      name: 'SignatureTemplate3',
      label: 'Template #3',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          avatarSize: 86,
          jobSeparator: 'br',
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-3.png',
    },
    {
      name: 'SignatureTemplate4',
      label: 'Template #4',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          avatarSize: 94,
          jobSeparator: 'br',
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-4.png',
    },
    {
      name: 'SignatureTemplate5',
      label: 'Template #5',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          avatarSize: 94,
          jobSeparator: 'br',
          column1Width: 20,
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-5.png',
    },
    {
      name: 'SignatureTemplate6',
      label: 'Template #6',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          mainColor: '#3D6693',
          secondaryColor: '#3D6693',
          bgColor: '#3D6693',
          avatarSize: 74,
          jobSeparator: 'br',
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-6.png',
    },
    {
      name: 'SignatureTemplate7',
      label: 'Template #7',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          mainColor: '#5A7CAA',
          bgColor: '#3D6693',
          avatarSize: 68,
          avatarShape: 'round',
          jobSeparator: '/',
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-7.png',
    },
    {
      name: 'SignatureTemplate9',
      label: 'Template #9',
      isNew: false,
      tools: {
        basic: DEFAULTS.basic,
        options: {
          ...DEFAULTS.options,
          avatarSize: 96,
        },
        addons: DEFAULTS.addons,
        socials: DEFAULTS.socials,
      },
      preview: 'template-9.png',
    },
  ]

  return {
    templates,
    DEFAULTS,
  }
}
