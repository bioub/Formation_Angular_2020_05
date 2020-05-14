const fs = require("fs");

// SYNC
try {
  const content = fs.readFileSync(".gitignore");
  fs.writeFileSync(".gitignore.copy", content);
  console.log("Copy Done");
} catch (err) {
  console.log(err);
}

// ASYNC
// Callback Hell
fs.readFile(".gitignore", (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(".gitignore.copy", content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Copy Done");
      }
    });
  }
});

// ASYNC
// Promise
fs.promises
  .readFile(".gitignore")
  .then((content) => fs.promises.writeFile(".gitignore.copy", content))
  .then(() => console.log("Copy Done"))
  .catch((err) => console.log(err));

// ASYNC
// Promise + async / await (ES2017)
async function copy() {
  try {
    const content = await fs.promises.readFile(".gitignore");
    await fs.promises.writeFile(".gitignore.copy", content);
    console.log("Copy Done");
  } catch (err) {
    console.log(err);
  }
}

copy();

// Top Level Await (ES2020) TypeScript 3.8
try {
  const content = await fs.promises.readFile(".gitignore");
  await fs.promises.writeFile(".gitignore.copy", content);
  console.log("Copy Done");
} catch (err) {
  console.log(err);
}
