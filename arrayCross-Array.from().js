// some

// const num = [1, 3, 5, 5, 61, 7];

// const hasEvanNum = num.some((n) => n % 2 === 0);
// console.log(hasEvanNum);

// const currentUserRoles = ["user", "editor"];
// const featureAccessRoles = ["admin", "manager"];

// const canAccess = currentUserRoles.some((role) =>
//   featureAccessRoles.includes(role),
// );
// console.log(canAccess);

// .......

// const arr = Array.from({ length: 5 });

// console.log(arr); // return undifine of 5 elements
// const fill = arr.fill(null);
// console.log(fill);

// const arr = Array.from({ length: 5 }, (_, i) => i);
// console.log(arr);

// const array = Array.from([1, 2, 3], (value, index) => value ** 2);
// console.log(array);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step,
  );

console.log(range(1, 11, 2));
