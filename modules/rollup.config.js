import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: './logger.shared-worker.ts',
  plugins: [
    typescript()
    // uglify()
  ],
  output: {
    file: '../src/assets/workers/logger-worker.js',
    format: 'cjs'
  }
};