# Turborepo starter with Shadcn/UI & Tailwind CSS

Turborepo starter with Shadcn/UI & Tailwind CSS pre-configured for shared UI components powered by:

- [Turborepo](https://turborepo.org/)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PNPM](https://pnpm.io/)
- [Fastify](https://fastify.dev)
- [Nextra](https://nextra.site/)

> \[!NOTE\] This example uses `pnpm` as package manager.

## Credit where it is due:

We leaned heavily on three prior works.

- Vercel's: [kitchen-sink](https://vercel.com/templates/remix/turborepo-kitchensink)
- Aris Ripandi: [Fuelstack](https://github.com/riipandi/fuelstack)
- Aris Ripandi (ris): [turborepo-shadcn-ui/-tailwindcss/](https://github.com/henriqpohl/turborepo-shadcn-ui-tailwindcss)

## Using this example

Clone the repository:

```sh
git clone https://github.com/dodotdev/do-stack-webs
```

Install dependencies:

```sh
cd do-stack-webs
pnpm install
```

## What's inside?

This Turborepo is organised in the following manner:

### Apps Folder

- `webs`: a [Next.js](https://nextjs.org/) app
- `api`: a [fastify](https://fastify.dev) api setup
- `docs`: a [Nextra & Next.js](https://nextra.site/) api setup

### Libraries Folder - @lib/

- `eslint-config` - eslint configs for all other situations. See folder structure
- `jest-presets` - Coming soon.
- `tailwind-config` - tailwind setup and configs
- `tsconfig` - typescript configs

### Packages Folder - @pkg/

- `@pkg/ui`: a stub React component library shared by applications inside of `apps` folder (Shadcn/UI and Tailwind CSS)
- `@pkg/utilities`: `eslint` Some useful utilities
- `@pkg/logger`: currently a stub for a console.log

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```sh
cd do-stack-webs
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```sh
cd do-stack-webs
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd do-stack-webs
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```sh
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
