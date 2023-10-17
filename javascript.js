var validerbtn = document.getElementById('btn-valider');
var nom = document.getElementById('nom');
var prenom = document.getElementById('prenom');
var email = document.getElementById('email');
var password = document.getElementById('password');
var passwordVerif = document.getElementById('password-verif');

var missNom = document.getElementById('missNom');
var missPrenom = document.getElementById('missPrenom');
var missEmail = document.getElementById('missEmail');
var missPassword = document.getElementById('missPassword');
var missPasswordVerif = document.getElementById('missPasswordVerif');

var emailValide = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
var passwordValide = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;
var passwordVerifValide = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=])[A-Za-z\d!@#$%^&*()-_+=]{8,}$/;




validerbtn.addEventListener('submit',validerForm)
function validerForm (event) {
if(nom.validity.valueMissing ){
  event.preventDefault();
  missNom.textContent = 'Renseigner le champ vide';
  missNom.style.color = "red";
  missNom.style.fontStyle = "italic";
}
if(prenom.validity.valueMissing ){
  event.preventDefault();
  missPrenom.textContent = 'Renseigner le champ vide';
  missPrenom.style.color = "red";
  missPrenom.style.fontStyle = "italic";
}
if(email.validity.valueMissing ){
  event.preventDefault();
  missEmail.textContent = 'Renseigner le champ vide';
  missEmail.style.color = "red";
  missEmail.style.fontStyle = "italic"; 
}else if(emailValide.test(email.value) == false){
  event.preventDefault();
  missEmail.textContent = "Votre mail n'est pas valide";
  missEmail.style.color = "red";
  missEmail.style.fontStyle = "italic";
}else{}
if(password.validity.valueMissing ){
  event.preventDefault();
  missPassword.textContent = 'Renseigner le champ vide';
  missPassword.style.color = "red";
  missPassword.style.fontStyle = "italic";
}else if(passwordValide.test(password.value) == false){
  event.preventDefault();
  missPassword.textContent = "Votre mot de passe n'est pas valide";
  missPassword.style.color = "red";
  missPassword.style.fontStyle = "italic";
}else{}
if(passwordVerif.validity.valueMissing ){
  event.preventDefault();
  missPasswordVerif.textContent = 'Renseigner le champ vide';
  missPasswordVerif.style.color = "red";
  missPasswordVerif.style.fontStyle = "italic";
}else if(passwordVerif === password){
}else{
  event.preventDefault();
  missPasswordVerif.textContent = 'le mot de passe est différent';
  missPasswordVerif.style.color = "red";
  missPasswordVerif.style.fontStyle = "italic";
}
if(nom.validity.valid && prenom.validity.valid && email.validity.valid && password.validity.valid && passwordVerif.validity.valid) {
  window.location.href = 'reussi.html';
}
}


























