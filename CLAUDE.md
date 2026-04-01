# SetupVibe AI Guidelines

## OG Image Generation
Every time a new page is created in `src/pages/`, you **MUST** update `src/pages/og/[...route].ts` to add the metadata (title and description) for the OG image generation of that new page.

Follow the existing pattern:
- `title`: `setupvibe --<command-name>`
- `description`: A concise description of the page content.

## SEO Best Practices
When creating or updating pages, ensure that:
- **Titles**: Should be between 50-60 characters. Include the primary keyword and the brand name "SetupVibe".
- **Descriptions**: Should be between 150-160 characters. Provide a clear value proposition and a call to action.
- **Keywords**: Use relevant keywords naturally within the content and metadata.
