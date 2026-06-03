# Alberta Heart Website

The website for Alberta Heart, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

This is a living project. Pages, components, and styles change often as the site grows, so expect the structure here to evolve.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Running locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Edit `app/page.tsx` to change the home page, it hot-reloads on save.

## Code style

A couple of conventions worth following when you add components:

- **TSDoc on every exported component/function.** Keep the prose to a short paragraph (a couple of sentences, what it is and what's notable). Then always use `@param` for every parameter or prop and always use `@returns` for the return value. Components with no props still get a `@returns` line. Don't skip these tags, even when the types make them feel redundant.
- **No em dashes.** Use commas, colons, parentheses, or a period instead.
- **Use the Tailwind color tokens** (e.g. `bg-light-red`, `text-dark-blue`) defined in `app/globals.css`. Don't hardcode hex values in components.
