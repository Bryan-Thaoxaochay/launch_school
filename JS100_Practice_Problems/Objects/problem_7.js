let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj['qux'] = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

/* 
  They will not output the same because Object.keys() only returns the object's keys, while 
  for..in iterates over all the keys including the prototypes.
*/