Navigating Between Nodes
parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling
Warning !
    A common error in DOM processing is to expect an element node to contain text.
    In this example: <title>DOM Tutorial</title>, the element node <title> does not contain text. It contains a text node with the value "DOM Tutorial".
<h1 id="intro">My First Page</h1>
<p id="demo">Hello!</p>
<script>
var myText = document.getElementById("intro").childNodes[0].nodeValue;
document.getElementById("demo").innerHTML = myText;
</script>
alert(document.body.innerHTML);//body content without body
alert(document.documentElement.innerHTML);//start from header
<div id="div1">
    <p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
parent.replaceChild(para,child);
<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para,child);

    document.getElementById("demo").innerHTML = "Hello World!";
document.getElementById(id)	//Find an element by element id
document.getElementsByTagName(name)	//Find elements by tag name
document.getElementsByClassName(name)	//Find elements by class name
element.innerHTML =  new html content	Change the inner HTML of an element
element.attribute = new value	Change the attribute value of an HTML element
element.setAttribute(attribute, value)	Change the attribute value of an HTML element
element.style.property = new style	Change the style of an HTML element
document.createElement(element)	Create an HTML element
document.removeChild(element)	Remove an HTML element
document.appendChild(element)	Add an HTML element
document.replaceChild(element)	Replace an HTML element
document.write(text)	Write into the HTML output stream
document.getElementById(id).onclick = function(){code}	Adding event handler code to an onclick event
document.anchors	Returns all <a> elements that have a name attribute	1
document.applets	Returns all <applet> elements (Deprecated in HTML5)	1
document.baseURI	Returns the absolute base URI of the document	3
document.body	Returns the <body> element	1
document.cookie	Returns the document's cookie	1
document.doctype	Returns the document's doctype	3
document.documentElement	Returns the <html> element	3
document.documentMode	Returns the mode used by the browser	3
document.documentURI	Returns the URI of the document	3
document.domain	Returns the domain name of the document server	1
document.domConfig	Obsolete. Returns the DOM configuration	3
document.embeds	Returns all <embed> elements	3
document.forms	Returns all <form> elements	1
document.head	Returns the <head> element	3
document.images	Returns all <img> elements	1
document.implementation	Returns the DOM implementation	3
document.inputEncoding	Returns the document's encoding (character set)	3
document.lastModified	Returns the date and time the document was updated	3
document.links	Returns all <area> and <a> elements that have a href attribute	1
document.readyState	Returns the (loading) status of the document	3
document.referrer	Returns the URI of the referrer (the linking document)	1
document.scripts	Returns all <script> elements	3
document.strictErrorChecking	Returns if error checking is enforced	3
document.title	Returns the <title> element	1
document.URL	Returns the complete URL of the document	1

var x = document.querySelectorAll("p.intro");
//form

document.forms['formid'].elements['inputname'].value
<form id="frm1" action="form_action.asp">
    First name: <input type="text" name="fname" value="Donald"><br>
    Last name: <input type="text" name="lname" value="Duck"><br><br>
    <input type="submit" value="Submit">
    </form>

    <p>Click "Try it" to display the value of each element in the form.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

    <script>
    function myFunction() {
        var x = document.forms["frm1"];
        var text = "";
        var i;
        for (i = 0; i < x.length ;i++) {
            text += x.elements[i].value + "<br>";
        }
        document.getElementById("demo").innerHTML = text;
    }
    </script>

    function addEvent(element, evnt, funct){
        if (element.attachEvent)
            return element.attachEvent('on'+evnt, funct);
        else
            return element.addEventListener(evnt, funct, false);
    }

element.addEventListener("mouseover", myFunction);
element.addEventListener("click", mySecondFunction);
element.addEventListener("mouseout", myThirdFunction);
element.removeEventListener("mousemove", myFunction);