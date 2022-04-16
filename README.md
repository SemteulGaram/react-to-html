# 📜 React To Static

Fast static HTML/CSS/JS/Resource generation from react things

## 📦 This template includes...

- [Next.js](https://nextjs.org/)
  - [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - And highly customized which not you want. (You can change it on `.eslintrc.js`->`rules` or `.prettierrc.js`)
- [`@emotion/react`](https://emotion.sh/docs/introduction) (CSS-in-JS)
- [`next-optimized-images`](https://github.com/cyrilwanner/next-optimized-images) (Static image optimization which not implemented in natively. See `next.config.js`)
  - See more about build-time image optimization: [https://github.com/vercel/next.js/discussions/19065](https://github.com/vercel/next.js/discussions/19065)
  - `imagemin-mozjpeg imagemin-optipng imagemin-gifsicle imagemin-svgo svg-sprite-loader webp-loader lqip-loader responsive-loader jimp image-trace-loader` (All for plugin above. IT HAS MASSIVE AUDIT ISSUE EVEN NOT RESOLVED IN LATEST. But you can remove it any desire. See `next.config.js`->`optimizedImages` options)
- [serve](https://www.npmjs.com/package/serve) (For static serve test)

## 🚀 Scripts

- `npm run dev` - Run hot-reloading dev server at [http://localhost:3000](http://localhost:3000).
- `npm run export` - Builds static HTML/CSS/JS/Resource to the `./out` folder.
- `npm run serve` - Test serve `./out` folder in [http://localhost:3000](http://localhost:3000).
- `npm run lint` - Do eslint test
  - `npm run lint:fix` - Try auto fix eslint
- Purpose of this template is to create a static pages, but it can also be used as a regular nextjs app.
(In this case, you can use `getServerSideProps`)
  - `npm run build`
  - `npm run start`

## 🧂 Useful memo
- Image handle
  - (Native nextjs solution) -> (next-optimized-images solution)
  - `<Image src='/img.png' />`  -> `<img src={require('public/img.png')} />`

## 🔧 Knowing issue (Last check 2022.04.17)
- `next-optimized-images` sometimes build times are prohibitively long or makes error.
  - Solution: `<img src={require('public/img.png')} />` -> `<img src='/img.png' />` to disable image optimization (use image as-is)
- `next-optimized-images`'s image processing deps has massive audit problem.
