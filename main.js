var list = document.getElementById('list');
var arrayofspan = list.querySelectorAll('li');
var arrayofinput = list.querySelectorAll('input');

for (var i=0; i < arrayofspan.length; i++){
    arrayofspan[i].addEventListener('click', editlist);
    arrayofinput[i].addEventListener('blur', savechange);
    arrayofinput[i].addEventListener('keypress', savechangewithkey)
}


function editlist(){
    console.log(this);
    this.className = 'edit';
    var input = this.querySelector('input');
    input.focus();
    input.setSelectionRange(null, input.value.length);
    
    
}

function savechange(){
    console.log(this.value)
    this.previousElementSibling.innerHTML = this.value
    this.parentNode.className = ""

}
function savechangewithkey(event){
    if (event.which == 13){
        savechange.call(this);
    }

}

var all = document.getElementsByClassName('all')
var inputs = document.getElementsByTagName('input')

for(var i = 0; i < inputs.length; i++){
    allitems = inputs[i].value;
    // ITEM = String(allitems)
    // alert('You have: ',ITEM)
    
}
