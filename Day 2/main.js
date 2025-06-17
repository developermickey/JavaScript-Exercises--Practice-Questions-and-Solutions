{
  var a = 10;
  const b = 10;
  let c = 30;
}

console.log(a);
console.log(b);
console.log(c);

// | Keyword | Scope Type      | Accessible Outside Block? |
// | ------- | --------------- | ------------------------- |
// | `var`   | Function/Global | ✅ Yes                     |
// | `let`   | Block           | ❌ No                      |
// | `const` | Block           | ❌ No                      |
