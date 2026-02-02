<p align="center">
  <img src="public/REMAX_Joint.png" width="220" alt="REMAX Logo" />
</p>

<h1 align="center">REMAX Signature Builder</h1>
<p align="center">
  <strong>Email signature generator for REMAX teams.</strong>
</p>

## Features
- **Easy copy** – one-click “Copy Signature”
- **Customization** – fonts, colors, avatar shapes, social icons, custom fields
- **Templates** – ready-to-use layouts for quick start
- **Brand defaults** – YCR/Connect logos and company defaults

## Development

### Prerequisites

The project uses Bun for building and running. Please make sure you have [Bun](https://bun.sh/) installed.

### Quick Start

```bash
bun install
bun run dev
```

### Set env variables
If you want to test image upload functionality, you need to set Supabase credentials.

Create a `.env` file in the root directory and add the following variables:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_BUCKET=
VITE_REPO=

VITE_YCR_LOGO_URL=
VITE_CONNECT_LOGO_URL=
VITE_YCR_WEBSITE_URL=
VITE_CONNECT_WEBSITE_URL=
```

Your Supabase storage bucket must be public for direct uploads to work.

## URL Parameters
Pre-fill fields via query params:

- `fullName`, `email`, `jobTitle`, `website`, `company`
- `company=ycr` or `company=connect` auto-sets company, logo, and website

## License

This project is licensed under the [AGPL-3.0](LICENSE).
