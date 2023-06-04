/**
uniq ArrayObject: Giống Uniq nhưng mở rộng cho 1 collection 

 * @param {array} arr
 * @returns uniq ArrayObject
 */

function uniqArrayObject(arr) {
  let uniObject = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let count = 0;
    for (let x = 0; x < uniObject.length; x++) {
      if (JSON.stringify(arr[i]) == JSON.stringify(uniObject[x])) {
        count++;
      }
    }
    if (count == 0) {
      uniObject = [...uniObject, arr[i]];
    }
  }

  return uniObject;
}

module.exports = uniqArrayObject;
