const array = ["Hello", ["World", 42] ];

for (let i = 0; i < array.length; i ++) {
  let arraylevel1 = (array[i]);
  console.log(`result: ${arraylevel1}`);
  console.log(typeof(arraylevel1))
};
