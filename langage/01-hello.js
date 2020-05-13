"use strict";
var prenoms = ['Jean', 'Eric'];
function hello(name) {
    return "Hello " + name;
}
for (var _i = 0, prenoms_1 = prenoms; _i < prenoms_1.length; _i++) {
    var prenom = prenoms_1[_i];
    console.log(hello(prenom));
}
