
const contactButton = document.getElementById('buttonContact')

contactButton.addEventListener("click", () => {
    let email = document.getElementById('email')
    email = email.value;
    console.log(email);
})
const phoneInput = document.getElementById('phone')
let createParagraph = function(text){
    let para = document.createElement('p')
    para.textContent = text;
    console.log(para);
    return para;
}
phoneInput.addEventListener('input', () => {createParagraph(phoneInput.value)})





