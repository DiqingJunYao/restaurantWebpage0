import { cp, mkdir, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const page of ['index.html', 'menu.html', 'contact.html']) {
  await cp(page, `dist/${page}`);
}
await mkdir('dist/src/css', { recursive: true });
await cp('src/css/main.css', 'dist/src/css/main.css');
await cp('src/main.js', 'dist/src/main.js');
await cp('src/images', 'dist/src/images', { recursive: true });
console.log('Built static website in dist/');
