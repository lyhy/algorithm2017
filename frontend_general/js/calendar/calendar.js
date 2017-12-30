function submitForm(e){
    var form = document.forms['myForm'];
    var firstname = form['fname'];
    alert(firstname.value + '1');
    //e.preventDefault();
    return false;
}
//var firstDayOfM = new Date(a.getFullYear(), a.getMonth(), 1)
//var lastDayOfM = new Date(a.getFullYear(), a.getMonth()+1, 0)
