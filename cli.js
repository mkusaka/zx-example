#!/usr/bin/env node
import { $ } from 'zx';

// 現在の環境変数を表示
console.log('Node.js process.env:');
console.log(process.env.PATH);

// シェルから見える環境変数を表示
console.log('\nShell environment variables:');
await $`echo PATH: $PATH`;

// 新しい環境変数を設定してテスト
process.env.ZX_TEST_VAR = 'Hello from Node.js';
console.log('\nAfter setting ZX_TEST_VAR:');
await $`echo ZX_TEST_VAR: $ZX_TEST_VAR`;
