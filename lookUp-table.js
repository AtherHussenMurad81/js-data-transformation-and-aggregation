const postsArray = [
  {
    id: "p-101",
    title: "intro of SQL",
    author: "Alex",
  },
  {
    id: "p-102",
    title: "SQL basics for beginners",
    author: "Alex",
  },
  {
    id: "p-103",
    title: "Understanding SELECT queries",
    author: "Alex",
  },
  {
    id: "p-104",
    title: "SQL WHERE clause explained",
    author: "Alex",
  },
  {
    id: "p-105",
    title: "Joins in SQL made simple",
    author: "Alex",
  },
];

const lookUpTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
}, {});
// console.log(lookUpTable);

for (let post in lookUpTable) {
  //   console.log(lookUpTable[post]);
  const result = lookUpTable[post];
  //   console.log([...result]);
  console.log(result);
}
