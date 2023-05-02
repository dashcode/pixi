import crypto from 'crypto';

import { VERSION } from "@pixi/core";
import { Application } from "pixi.js";

const hash= crypto.createHash('md5')
  .update(Application.toString())
  .digest('hex');
console.log('default');
console.log(VERSION);
console.assert(VERSION === '7.2.4');
console.log(hash);
