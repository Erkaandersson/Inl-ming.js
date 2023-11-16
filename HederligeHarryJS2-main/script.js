
const contactButton = document.getElementById('buttonContact')
const phoneInput = document.getElementById('phone')
const emailInput = document.getElementById('email')
const substrSe = 'se'
let checkEmail = emailInput.includes(substrSe)

contactButton.addEventListener("click", () => {
    const email = document.getElementById('email')
    email = email.value;
    console.log(email);
})

let createParagraph = function(text){
    let para = document.createElement('p')
    para.textContent = text;
    console.log(para);
    return para;
}

let createInput = function() {
    if(checkEmail === true){
        
    }
}

phoneInput.addEventListener('input', () => {createParagraph(phoneInput.value)})





