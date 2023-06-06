/**
uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection 

 * @param {array} arr
 * @returns uniq ArrayObject
 */

function uniqArrayObject(arr) {
  let arrKey = arr.reduce((key, cur) => {
    for (const property in cur) {
      if (!key.includes(property)) {
        key.push(property);
      }
    }
    return key;
  }, []);
  console.log(arrKey);
  let uniObject = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let count = 0;
    let a = arr[i];
    for (let j = 0; j < uniObject.length; j++) {
      let b = uniObject[j]
      const check = arrKey.every((x) => {
        return a[x] === b[x]
      })
      if (check) {
        count ++
      }
    }
    if (count == 0) {
      uniObject = [...uniObject, arr[i]];
    }
  }
console.log(uniObject);
  return uniObject;
}
uniqArrayObject([
  { x: 1, y: 2 },
  { y: 2, x: 1 },
  { x: 1, y: 2 , z : 3},
]);

module.exports = uniqArrayObject;
