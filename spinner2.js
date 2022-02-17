const spinStr = "|/-\\|\n";
const spinArr = spinStr.split('');
let x = 0;
for (let elem of spinArr) {
  setTimeout(() => {
    process.stdout.write('\r' +  elem);
 }, x);
 x += 300;
}


