 // JavaScript for image preview

 const medcertimage = document.getElementById('medcertimage');
 const medcertpreview = document.getElementById('medcertpreview');
 const medcerticon = document.getElementById('medcerticon');


 medcertimage.addEventListener('change', function () {
   const file = this.files[0];
   if (file) {
    medcertpreview.classList.remove('d-none');
    medcerticon.classList.add('hidden');

     const reader = new FileReader();
     reader.onload = function () {
      medcertpreview.src = reader.result;
     }
     reader.readAsDataURL(file);
   }
 });

 
 const idFrontInput = document.getElementById('idFrontImage');
 const idFrontPreview = document.getElementById('idFrontPreview');
 const brgycerticon = document.getElementById('brgycerticon');
 

 idFrontInput.addEventListener('change', function () {
   const file = this.files[0];
   if (file) {
     idFrontPreview.classList.remove('d-none');
     brgycerticon.classList.add('hidden');

     const reader = new FileReader();
     reader.onload = function () {
       idFrontPreview.src = reader.result;
     }
     reader.readAsDataURL(file);
   }
 });

 


 
 const idBackInput = document.getElementById('idBackImage');
 const idBackPreview = document.getElementById('idBackPreview');
 const stateofaccounticon = document.getElementById('stateofaccounticon');

 idBackInput.addEventListener('change', function () {
   const file = this.files[0];
   if (file) {
     idBackPreview.classList.remove('d-none');
     stateofaccounticon.classList.add('hidden');

     const reader = new FileReader();
     reader.onload = function () {
       idBackPreview.src = reader.result;
     }
     reader.readAsDataURL(file);
   }
 });

 const birthCertificateInput = document.getElementById('birthCertificateImage');
 const birthCertificatePreview = document.getElementById('birthCertificatePreview');
 const govid = document.getElementById('govid');



 birthCertificateInput.addEventListener('change', function () {
   const file = this.files[0];
   if (file) {
     birthCertificatePreview.classList.remove('d-none');
     govid.classList.add('hidden');

     const reader = new FileReader();
     reader.onload = function () {
       birthCertificatePreview.src = reader.result;
     }
     reader.readAsDataURL(file);
   }
 });

 const validIDinput = document.getElementById('validIDimage');
 const validIDpreview = document.getElementById('validIDpreview');
 const authlettericon = document.getElementById('authlettericon');
 const validIDpreviewsummary = document.getElementById('validIDpreviewsummary');


 


 validIDinput.addEventListener('change', function () {
   const file = this.files[0];
   if (file) {
     validIDpreview.classList.remove('d-none');
     
     authlettericon.classList.add('hidden');

     const reader = new FileReader();
     reader.onload = function () {
      validIDpreview.src = reader.result;
      validIDpreviewsummary.src = reader.result;
     }
     reader.readAsDataURL(file);
   }
 })

