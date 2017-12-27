function submitForm(){
    var form = document.forms['myForm'];
    var firstname = form['fname'];
    alert(firstname.value);
    return false;
}
