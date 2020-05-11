const prenoms = ['Jean', 'Eric'];

function hello(name: string | number) {
  return `Hello ${name}`;
}

// for of
for (const prenom of prenoms) {
  console.log(hello(prenom));
}

