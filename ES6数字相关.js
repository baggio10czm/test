{
  console.log('B',0B111110111);
  console.log(0o767);
}
// isFinite 是否有效数     isNaN 是否不是数字
{
  console.log('15',Number.isFinite(15));    // ture
  console.log('NaN',Number.isFinite(NaN));   // fasle
  console.log('1/0',Number.isFinite('true'/0));   // fasle
  console.log('NaN',Number.isNaN(NaN));          // ture
  console.log('0',Number.isNaN(0));               // fasle

}
// 是否整数
{
  console.log('25',Number.isInteger(25));        // ture
  console.log('25.0',Number.isInteger(25.0));    // ture
  console.log('25.1',Number.isInteger(25.1));    // fasle
  console.log('25.1',Number.isInteger('25'));    // fasle       严格判断
}

{
  // 最大的有效数  和 最小的有效数           isSafeInteger 是否在安全范围内的数字
  console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
  console.log('10',Number.isSafeInteger(10));             // true
  console.log('a',Number.isSafeInteger('a'));           // fasle
}
//   数字取整的部分
{
  console.log(4.1,Math.trunc(4.1));    // 4
  console.log(4.9,Math.trunc(4.9));    // 4
}
// Math.sign 判断数字正负
{
  console.log('-5',Math.sign(-5));         // -1
  console.log('0',Math.sign(0));           // 0
  console.log('5',Math.sign(5));             // 1
  console.log('50',Math.sign('50'));          // 1
  console.log('foo',Math.sign('foo'));        // NaN
}

// 立方根
{
  console.log('-1',Math.cbrt(-1));        // -1
  console.log('8',Math.cbrt(8));         // 2
}
