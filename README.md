# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## GrowDoc assessment reports

The assessment report endpoint recalculates scores on the server, renders a PDF,
uploads it as an authenticated Cloudinary image/PDF asset, and sends a
time-limited download link through Resend. The download link is a signed token
for the server-side download route; it does not expose Cloudinary credentials or
the Cloudinary delivery URL.

### Environment variables

Create a local `.env` file from `.env.example` and set:

| Variable                | Required value                                                                   |
| ----------------------- | -------------------------------------------------------------------------------- |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud identifier (currently `jhj0l02f`)                               |
| `CLOUDINARY_API_KEY`    | Cloudinary API key                                                               |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret; keep server-side                                          |
| `RESEND_API_KEY`        | Resend API key; keep server-side                                                 |
| `RESEND_FROM_EMAIL`     | Verified sender, for example `Growen Reports <reports@assessment.thegrowen.com>` |
| `PUBLIC_APP_URL`        | Public HTTPS origin used in email links, e.g. `https://thegrowen.com`            |

The Cloudinary `growdoc_reports` upload preset must remain signed, and PDF
delivery must be enabled in the Cloudinary security settings. For production,
add these values as server-side environment variables/secrets in the Cloudflare
Worker configuration; do not use `VITE_` prefixes. `CLOUDINARY_API_SECRET` is
also used to authenticate seven-day report access tokens. Rotating it
invalidates already-issued links.

The Cloudinary upload uses the signed Upload API over `fetch` rather than the
Node-only Cloudinary SDK so it remains compatible with the Nitro Cloudflare
runtime. Resend uses its official Node.js SDK, and the PDF is rendered with
`pdf-lib`.

### Persistence limitation

This deployment currently has no database, and the selected implementation
uses Cloudinary only for PDF assets. Consequently, report status, Resend message
IDs, token hashes, and retry state are not persisted; durable idempotency,
revocation, background retries, and server-side rate limiting are not
guaranteed. Repeated submissions after a failed or ambiguous email request may
create another report or send another email. A persistent database such as
Cloudflare D1 is required to meet those reliability requirements.

#Hi there
