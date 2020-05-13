// class Contact {
//   firstName = 'Romain'; // en phase d'être normé en JS
//   #lastName = 'Bohdanowicz';

//   // ES5 2009 (IE9+)
//   get fullName() {
//     return `${this.firstName} ${this.#lastName}`;
//   }

//   set fullName(fullName) {
//     const parts = fullName.split(' ');
//     this.firstName = parts[0];
//     this.#lastName = parts[1];
//   }

//   get lastName() {
//     return this.#lastName.toUpperCase();
//   }

//   set lastName(lastName) {
//     this.#lastName = lastName.toUpperCase();
//   }
// }

// Normes JS en cours de rédaction
// https://github.com/tc39/proposals

class Contact {
  // https://github.com/tc39/proposal-class-fields
  firstName = 'Romain'; // en phase d'être normé en JS
  _lastName = 'Bohdanowicz';

  // ES5 2009 (IE9+)
  get fullName() {
    return `${this.firstName} ${this._lastName}`;
  }

  set fullName(fullName) {
    const parts = fullName.split(' ');
    this.firstName = parts[0];
    this._lastName = parts[1];
  }

  get lastName() {
    return this._lastName.toUpperCase();
  }

  set lastName(lastName) {
    this._lastName = lastName.toUpperCase();
  }
}

const contact = new Contact();
console.log(contact.fullName);

contact.fullName = 'Jean Dupont';

console.log(contact.firstName); // Jean

console.log(contact.lastName);
