import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const here=dirname(fileURLToPath(import.meta.url)); const root=resolve(here,'..');
const src=resolve(root,'node_modules/@rhwp/core/rhwp_bg.wasm'); const dest=resolve(root,'public/rhwp_bg.wasm');
if(!existsSync(resolve(root,'public'))) mkdirSync(resolve(root,'public'),{recursive:true});
if(existsSync(src)){copyFileSync(src,dest); console.log('Copied rhwp WASM');} else console.warn('rhwp WASM not found');
