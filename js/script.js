let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// class formSubmit{
//     constructor(settings){
//         this.settings = settings;
//         this.form = document.querySelector(settings.form);
//         this.formButton = document.querySelector(settings.button);
//         if(this.form){
//             this.url = this.form.getAttribute('action');
//         };
//     };

//     displaySuccess(){
//         this.form.innerHTML = this.settings.success;
//     };

//     displayError(){
//         this.form.innerHTML = this.settings.error;
//     };

//     getFormObject(){
//         const formObject = {};
//         const fields = this.form.querySelectorAll('[name]');
//         fields.forEach((field)=>{
//             formObject[field.getAttribute('name')] = field.value;
//         });
//         return formObject;
//     };

//     async sendForm(){
//         try{
//         await fetch(this.url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Accept: 'application/json',
//             },
//             body: JSON.stringify(this.getFormObject()),
//         });
//         this.displaySuccess();
//     } catch (error){
//         this.displayError();
//         throw new Error(error);
//         };
//     };

//     init(){
//         if(this.form) this.formButton.addEventListenner('click', ()=>this.displaySuccess());
//         return this;
//     };
// };

// const formSubmit = new formSubmit({
//     form: '[data-form]',
//     button: '[data-button]',
//     success: '<h1>Mensagem enviada!</h1>',
//     error: '<h1>Não foi possivel enviar sua mensagem.</h1>',
// });