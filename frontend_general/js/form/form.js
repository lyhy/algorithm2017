function submitForm(e){
    var form = document.forms['myForm'];
    var firstname = form['fname'];
    var numberinput = form['numberinput'];
    if(numberinput.checkValidity()){
        console.log('valid')
    }else{
        console.log('invalid')
        console.log(numberinput.validationMessage)
    }
    form['country_code'].checkValidity()
    form['country_code'].validity.patternMismatch
    form['country_code'].validationMessage

    console.log(form['cars'].value);
    console.log(firstname.value);

    //e.preventDefault();
    return false;
}

function onblurhandler() {
    alert('onblur')
}

function onchangehandler() {
    console.log(document.forms['myForm']['cars'].value);
}
