import { $ } from 'zx';

async function main() {
  // zxの$関数を使ってシェルコマンドを実行
  const result = await $`ls -la`;
  console.log(result.stdout);
  const envResult = await $`echo $PATH`;
  console.log(envResult.stdout);
}

main();
