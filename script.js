function todo()
{
  var err = document.getElementById('error');

  var inputtext = textfield.value;

  function adddiv() {
    var add = document.createElement("div");
    add.setAttribute("class", "todotask");

    var p = document.createElement("p");
    p.setAttribute("class", "dis");
    p.innerHTML = inputtext;

    var add1 = document.createElement("button");
    add1.innerHTML = "&#10004;";
    add1.setAttribute("class", "tick");
    add1.setAttribute("onclick", "tick(this)");

    var add2 = document.createElement("button");
    add2.innerHTML = "&#9998;";
    add2.setAttribute("class", "edit");
    add2.setAttribute("onclick", "edit(this)");

    var add3 = document.createElement("button");
    add3.innerHTML = "&#10008;";
    add3.setAttribute("class", "cross");
    add3.setAttribute("onclick", "cross(this)");

    add.appendChild(p);
    add.appendChild(add1);
    add.appendChild(add2);
    add.appendChild(add3);

    document.getElementById('cont').appendChild(add);
  }


  if(inputtext === "")
  {
    err.style.display = "block";
  }
  else if(inputtext != "")
  {
    if(err.style.display == "block")
      {
        err.style.display = "none";
      }
    
    adddiv();
    textfield.value = "";
  }
  else
  {  
    adddiv();
    textfield.value = "";
  }
}

function cross(e) {
  var newnode = e.parentElement.nodeName;
  if(newnode == "DEL")
  {
    e.parentElement.parentElement.remove();
  }
  else
  {
    e.parentElement.remove();
  }
  
}

function tick(e) {
  var ptag = e.parentElement.getElementsByTagName("p")[0];
  if(ptag)
  {
    var deltag = ptag.getElementsByTagName("del")[0];
    if(!deltag)
    {
      var todo = ptag.innerHTML;
      ptag.innerHTML = `<del>${todo}</del>`;
    }
  }  
}

// to do task value to be used in case of cancelchange function 
var taskforedit;

function edit(e) {  
  var edittask = e.parentElement.firstChild.textContent;
  taskforedit = edittask;
  var n = document.createElement("input");
  n.setAttribute("type", "text");
  n.setAttribute("class", "editedtask");
  n.setAttribute("name", "editedtask");
  n.setAttribute("style", "margin-bottom: 5px;");
  n.value = edittask;
  
  var newbut = document.createElement("button");
  newbut.innerHTML = "\u{1F4BE}";
  newbut.setAttribute("class", "savechange");
  newbut.setAttribute("onclick", "savechange(this)");

  var newbut1 = document.createElement("button");
  newbut1.innerHTML = "&#10060";
  newbut1.setAttribute("class", "cancelchange");
  newbut1.setAttribute("onclick", "cancelchange(this)");

  var newinput = e.parentElement.getElementsByTagName("input")[0];

  if(!newinput)
  {
    var parentdiv = e.parentElement;
    parentdiv.firstChild.remove();
    parentdiv.appendChild(n);
    n.select();

    parentdiv.appendChild(newbut);
    parentdiv.appendChild(newbut1);

    parentdiv.getElementsByClassName("tick")[0].style.display = "none";
    parentdiv.getElementsByClassName("edit")[0].style.display = "none";
    parentdiv.getElementsByClassName("cross")[0].style.display = "none";
  }
}

function savechange(e) {
  var p = document.createElement("p");
  p.setAttribute("class", "dis");
  p.innerHTML = e.parentElement.getElementsByTagName("input")[0].value;

  var f = e.parentElement.firstChild;
  e.parentElement.insertBefore(p, f);

  e.parentElement.getElementsByClassName("tick")[0].style.display = "inline-block";
  e.parentElement.getElementsByClassName("edit")[0].style.display = "inline-block";
  e.parentElement.getElementsByClassName("cross")[0].style.display = "inline-block";

  e.parentElement.getElementsByTagName("input")[0].remove();
  e.parentElement.getElementsByClassName("cancelchange")[0].remove();
  e.parentElement.getElementsByClassName("savechange")[0].remove();
}

function cancelchange(e) {
  var p = document.createElement("p");
  p.setAttribute("class", "dis");
  p.innerHTML = taskforedit;

  var f = e.parentElement.firstChild;
  e.parentElement.insertBefore(p, f);

  e.parentElement.getElementsByClassName("tick")[0].style.display = "inline-block";
  e.parentElement.getElementsByClassName("edit")[0].style.display = "inline-block";
  e.parentElement.getElementsByClassName("cross")[0].style.display = "inline-block";

  e.parentElement.getElementsByTagName("input")[0].remove();
  e.parentElement.getElementsByClassName("savechange")[0].remove();
  e.parentElement.getElementsByClassName("cancelchange")[0].remove();
}

// display current date in h2 heading
function displaycurdate() {
  document.getElementById("curdate").innerHTML = new Date();
}

setInterval(function() { displaycurdate(); }, 1000);

var task = document.getElementById("textfield");

task.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbut").click();
  }
});

