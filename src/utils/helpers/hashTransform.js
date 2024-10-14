import { Transform } from 'node:stream';
import crypto from 'node:crypto';

class HashTransform extends Transform {
  constructor(options) {
    super(options);
    this.hash = crypto.createHash('sha256');
  }

  _transform(chunk, encoding, callback) {
    this.hash.update(chunk);
    callback();
  }

  _flush(callback) {
    this.push(Buffer.from(this.hash.digest('hex')));
    callback();
  }
}

export default HashTransform;
