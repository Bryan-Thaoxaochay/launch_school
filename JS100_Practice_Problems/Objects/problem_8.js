function copyObj(objCopy, keysArray) {
  let newObject = Object.create({});

  if (!keysArray) {
    for (let property in objCopy) {
      newObject[property] = objCopy[property];
    }
  } else {
    for (let i = 0; i < keysArray.length; i += 1) {
      newObject[keysArray[i]] = objCopy[keysArray[i]];
    }
  }

  return newObject;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }