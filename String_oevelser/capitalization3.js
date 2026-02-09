// const string1 = "Peter";
// const string2 = "peTer";
// const mixedString = string1
//   .substring(0, 5)
//   .concat(", nej jeg hedder ", string2);

// console.log(string1.toUpperCase());

// console.log(string2.toLowerCase());

// console.log(string2.concat(", ", string1));

// console.log(mixedString);

// const string3 = "SUSANNE";
// const string4 = "suSaNnE";
// const mixedString2 = string3
//   .substring(0, 8)
//   .concat(", nej jeg hedder ", string4);

// console.log(string3.toUpperCase());

// console.log(string4.toLowerCase());

// console.log(string3.concat(", ", string4));

// console.log(mixedString2);

// Opfølgning med Klaus, den rigtige måde:
const name = "Klaus";
let threecapitalizeStr =
  name.substring(0, 2).toLowerCase() +
  name.substring(2, 3).toUpperCase() +
  name.substring(3).toLowerCase();
// const mixedString = string1
//   .substring(0, 5)
//   .concat(", nej jeg hedder ", string2);

console.log(name.toUpperCase());

console.log("threecapitalizeStr", threecapitalizeStr);

console.log(threecapitalizeStr.concat(", ", name));

console.log(mixedString);

const string3 = "SUSANNE";
const string4 = "suSaNnE";
const mixedString2 = string3
  .substring(0, 8)
  .concat(", nej jeg hedder ", string4);

console.log(string3.toUpperCase());

console.log(string4.toLowerCase());

console.log(string3.concat(", ", string4));

console.log(mixedString2);
