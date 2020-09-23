//import swal from 'sweetalert';

function val () {
    var form = document.form;

    if (form.firstname.value == 0){
        swal({text:"The firtname field is required",button: false,timer:4000});
        form.firstname.value="";
        form.firstname.focus();
        return false;
    }
    if (form.lastname.value == 0){
      swal({text:"The lastname field is required",button: false,timer:4000}); 
      form.lastname.value="";
      form.lastname.focus();
      return false;
    
    }
    if (form.email.value == 0){
      swal({text:"The email field is required",button: false,timer:4000}); 
      form.email.value="";
      form.email.focus();
      return false;
    }
    if(form.phone.value == 0){
      swal({text:"The phone field is required",button: false,timer:4000}); 
      form.phone.value="";
      form.phone.focus();
      return false;
    }
    if (form.message.value == 0){
      swal({text:"The message field is required",button: false,timer:4000});
      form.message.value="";
      form.message.focus();
      return false;

  }
  swal({
    title: 'Good!',
    text: 'Message sent successfully',
    icon: 'success',
    button: false,
    timer: 6000,

  });
  form.submit();
}



