const scriptURL = 'https://script.google.com/macros/s/AKfycbwvmsrE7PxxDkhlCMcXpdfDd-fUpBiGPSrYQB6k1LgAqjHcZzxjkFKxNdziYr9wDnAv/exec'
const form = document.forms['teksboxx-feedback']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');


form.addEventListener('submit', e => {
  e.preventDefault()
  //ketika tombol submit di tekan toggle(seperti tombol on/off)
  //memunculkan tombol loading, menghilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        //memunculkan tombol kirim, menghilangkan tombol loading
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        //memunculkan tombol alert sukses kirim, menghilangkan tombol loading
        myAlert.classList.toggle('d-none');
        //reset form data
        form.reset();
         console.log('Success!', response)}
         )
    .catch(error => console.error('Error!', error.message))
})