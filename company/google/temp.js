<ul class=”dropdown”>
<li>Company</li>
<li>
<a>About</a>
<ul>
<li>Career</li>
<li>Investment</li>
</ul>
</li>
</ul>

.dropdown {
    li {
        position: relative;
        padding: 10px 5px;
        display: inline-block;
        ul {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
        }
    &:hover {
            ul {
                display: block;
            }
        }

    &.current {
            li a {
                border: 1px solid #eeeeee;
            }
            ul {
                display: block;

            }
        }
    }

}

//javascript
var menuDropdown = {
    currentActiveIndex = -1;
total = 5;//improve to dynamic created from the dom children , 0 - 4
};
document.querySelector(‘.dropdown’).keyup(function(evt){
    var keycode = evt.keyCode;

//13 for enter?
    if(keycode === 13){
        menuDropdown.currentActiveIndex = menuDropdown.currentActiveIndex === menuDropdown.total -1 ? 0 : ++menuDropdown.currentActiveIndex;
        //loop the li to remove .current, add it back to
        menuDropdown.currentActiveIndex

        var menuList = document.querySelector(‘.dropdown > li’);
//      menuList.removeClass
        for(var i = 0, len = menuList.length; i < len; i++){
            var item = menuList[i];
            if(menuDropdown.currentActiveIndex !== i){
                item.removeClass(‘current’);
            }else {
                item.addClass(‘current’);
            }
        }

    }

    setTimeout(function(){
        menuDropdown.currentActiveIndex = -1;
        var menuList = document.querySelector(‘.dropdown > li’);
//loop to remove all the current on li

    }, 1000)//1 sec
})


//mobile
document.querySelector(‘.dropdown > li’).touchdown(function(evt){
    evt.preventDefault();
    var currentDom = evt.target;
    var menuList = document.querySelector(‘.dropdown > li’);

    for(var i = 0, len = menuList.length; i < len; i++){
        var item = menuList[i];
        item.removeClass(‘current’)

    }
//toggle

    currentDom.hasClass(‘current’’) ? currentDom.removeClass(‘current’)
    :currentDom.addClass(‘current’)



})//event name for mobile touch










var form = document.querySelector('#contactform')

form.addEventListener('submit', event => {
    event.preventDefault()
    checkForm()
})

function otherChoice(that) {
    if (that.value === 'Autre') {
        new_option = prompt('Entrer la nouvelle option', '')
        if (new_option != '' && new_option != null) {
            that.options[that.length] = new Option(new_option, new_option, true, true)
            for (i = 0; i < that.options.length; i++) {
                if (that.options[i].value == new_option) {
                    that.options[i].selected = true
                }
            }
        } else {
            return
        }
    }
}

function checkForm() {
    var form = document.querySelector('#contactform'),
        selects = document.querySelectorAll("#contactform select"),
        inputs = document.querySelectorAll("#contactform input[type='text']"),
        checkboxes = document.querySelectorAll("#contactform .checkbox"),
        email = document.querySelector("#contactform input[type='email']"),
        tel = document.querySelector("#contactform input[type='tel']"),
        boolTestSelect,
        boolTestInput,
        boolTestCb,
        boolTestEmail,
        boolTestTel

    for (i = 0; i < selects.length; i++) {
        boolTestSelect = checkSelect(selects[i])
    }

    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].id !== "adresse2") {
            boolTestInput = checkInput(inputs[i])
        }
    }

    for (i = 0; i < checkboxes.length; i++) {
        boolTestCb = checkBoxes(checkboxes[i])
    }

    boolTestEmail = checkEmail(email)
    boolTestTel = checkInput(tel)

    if (!boolTestSelect && !boolTestInput && !boolTestCb && !boolTestEmail && !boolTestTel) {
        var formElement = document.getElementById("contactform"),
            success = document.querySelector("#success"),
            request = new XMLHttpRequest();

        request.onreadystatechange = function() {
            var submit = document.querySelector("#contactform input[type='submit']")
            if (request.readyState == 4 && request.status == 200) {
                submit.disabled = true
                success.style.display = "block"
            }
        }
        request.open("POST", "send.php");
        request.send(new FormData(formElement));
    }
}

function checkSelect(select) {
    var selector = "label[for='" + select.id + "']",
        labelSelect = document.querySelector(selector)

    if (select.selectedIndex === 0) {
        labelSelect.style.color = "red"
        return true
    } else {
        labelSelect.style.color = "black"
        return false
    }
}

function checkInput(input) {
    var selector = "label[for='" + input.id + "']",
        labelInput = document.querySelector(selector)

    if (input.value.length < 4) {
        labelInput.style.color = "red"
        return true
    } else {
        labelInput.style.color = "black"
        return false
    }
}


function checkEmail(mail) {
    var selector = "label[for='" + mail.id + "']",
        labelEmail = document.querySelector(selector),
        re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(mail.value)) {
        labelEmail.style.color = "red"
        return true
    } else {
        labelEmail.style.color = "black"
        return false
    }
}

function checkBoxes(input) {
    var error,
        labelInput = input.children[0]

    for (v = 0; v < input.children.length; v++) {
        if (input.children[v].tagName === "INPUT" && input.children[v].checked === true) {
            labelInput.style.color = "black"
            error = false
            break
        } else {
            labelInput.style.color = "red"
            error = true
        }
    }
    return error
}