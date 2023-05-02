import crypto from 'crypto';

import { VERSION } from "pixi.js";
import { Application } from "pixi.js";

const hash= crypto.createHash('md5')
  .update(Application.toString())
  .digest('hex');
console.log('default');
console.log(VERSION);
console.assert(VERSION === '6.5.0');
console.log(hash);
