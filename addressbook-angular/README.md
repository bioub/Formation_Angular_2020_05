# Exercice

## Générer 4 composants dans ContactsModule :

* contacts
* contacts-list
* contact-add
* contact-show

## Créer 3 routes dans ContactsRoutingModule :

* /contacts -> ContactsListComponent
* /contacts/add -> ContactAddComponent
* /contacts/123 -> ContactShowComponent

## Importer ContactsModule dans AppModule AVANT AppRoutingModule

Tester que les 3 composants sont accessibles

## Ecrire les templates avec du faux texte

Un contact aura 3 propriétés : name, email, phone

Dans ContactsListComponent afficher une liste de contacts
Créer un lien vers ContactShowComponent

Dans ContactShowComponent afficher les 3 propriétés : name, email, phone

Dans ContactAddComponent créer un formulaire avec 3 champs : name, email, phone
