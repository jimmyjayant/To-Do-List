var todoArray = localStorage.getItem("todotasks") ? JSON.parse(localStorage.getItem("todotasks")) : [];

var err = document.getElementById('error');

function localstorageitem() {
  todoArray.push(textfield.value);
  localStorage.setItem("todotasks", JSON.stringify(todoArray));
}

function todo()
{
  if(textfield.value === "")
  {
    err.style.display = "block";
  }
  else if(textfield.value !== "")
  {
    if(err.style.display == "block")
      {
        err.style.display = "none";
      }
    localstorageitem();
    location.reload();
  }
  else
  { 
    localstorageitem();
    location.reload();
  }
}

function adddiv() {
  if(todoArray.length)
  {
    for(let i=0; i<todoArray.length; i++)
    {
      var add = document.createElement("div");
      add.setAttribute("class", "todotask");
    
      var p = document.createElement("p");
      p.setAttribute("class", "dis");
      p.innerHTML = todoArray[i];
    
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

      var add4 = document.createElement("span");
      add4.innerHTML = i;
      add4.setAttribute("class", "hidden");
      
      add.appendChild(p);
      add.appendChild(add1);
      add.appendChild(add2);
      add.appendChild(add3);
      add.appendChild(add4);
    
      document.getElementById('cont').appendChild(add);
    }
  }
}

function cross(e) {
  let i = e.parentElement.getElementsByClassName("hidden")[0].textContent;
  todoArray.splice(i,1);
  localStorage.setItem("todotasks", JSON.stringify(todoArray));
  e.parentElement.remove();
  location.reload();
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
      let i = e.parentElement.getElementsByClassName("hidden")[0].textContent;
      todoArray[i] = ptag.innerHTML;
      localStorage.setItem("todotasks", JSON.stringify(todoArray));
    }
  }  
}

function edit(e) {  
  var edittask = e.parentElement.firstChild.textContent;
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
  let i = e.parentElement.getElementsByClassName("hidden")[0].textContent;
  todoArray[i] = e.parentElement.getElementsByTagName("input")[0].value;
  localStorage.setItem("todotasks", JSON.stringify(todoArray));
  p.innerHTML = todoArray[i];

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
  let i = e.parentElement.getElementsByClassName("hidden")[0].textContent;
  p.innerHTML = todoArray[i];

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
  var d = new Date();
  d = d.toString().split(" ");
  d = d[1] + " " + d[2] + " " + d[3];
  document.getElementById("curdate").innerHTML = d;
}

window.onload = function() {
  displaycurdate();
  adddiv();
}

var task = document.getElementById("textfield");

task.addEventListener("keypress", function(event) {
  if(event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addbut").click();
  }
});

