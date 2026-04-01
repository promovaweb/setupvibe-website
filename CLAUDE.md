# SetupVibe AI Guidelines

## OG Image Generation
Every time a new page is created in `src/pages/`, you **MUST** update `src/pages/og/[...route].ts` to add the metadata (title and description) for the OG image generation of that new page.

Follow the existing pattern:
- `title`: `setupvibe --<command-name>`
- `description`: A concise description of the page content.
