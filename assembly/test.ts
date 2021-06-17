import { decodeHEX, encodeHEX, decodeLatin, encodeLatin } from "./encodings";

import { console } from "as-console";

import { Buffer } from "./Buffer";

export function test(): void {
  console.log(`Buffer.from('Hello World')`);

  console.log(Buffer.from("Hello World"));

  console.log(`Buffer.toString()`);

  console.log(Buffer.from("Hello World").toString());

  console.log(`Buffer.alloc(5)`);

  console.log(Buffer.alloc(5));

  console.log(`Buffer.allocUnsafe(5)`);

  console.log(Buffer.allocUnsafe(5));

  console.log(`Buffer.byteLength('Hello World')`);

  console.log(Buffer.byteLength("Hello World"));

  console.log(`Buffer.isBuffer(Buffer.from('Hello World'))`);

  console.log(Buffer.isBuffer(Buffer.from("Hello World")));

  console.log(`Buffer.from('Hello World').equals(Buffer.from('Hello World'))`);
  
  console.log(Buffer.from("Hello World").equals(Buffer.from("Hello World")));
}
