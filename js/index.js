var  nameInput= document.getElementById('siteName');
var  uRLInput= document.getElementById('siteURL');

var sitesList=[];

if(localStorage.getItem('sitesList') != null){
  sitesList= JSON.parse(localStorage.getItem('sitesList'));
  displayInput();
}

function addSite() {
if(validationInput(nameInput)&&validationInput(uRLInput)){
  var website={
    name:nameInput.value,
    url:uRLInput.value
}
sitesList.push(website);

localStorage.setItem('sitesList',JSON.stringify(sitesList));
displayInput();
clearInput();
}else{
var myDiv = document.createElement("div");
myDiv.innerHTML = ` <div class="d-flex justify-content-end align-items-end flex row">
    
    <div class="m-3 ">
<div class="spinners-grow text-danger " role="status">
  <span class="visually-hidden  ">span>
</div>
<div class="spinners-grow text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>

<div class="spinners-grow text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
<div >
<h4>Site Name or Url is not valid, Please follow the rules below :</h4>
<h6> <i class="fa-solid fa-circle-arrow-right m-2"></i>Site name must contain at least 3 characters
  </h6>
<h6> <i class="fa-solid fa-circle-arrow-right m-2"></i>Site URL must be a valid one</h6>
</div>
</div>`;
swal({
  
  button:false,
  content: myDiv,

});



}

   

}
function clearInput() {
    nameInput.value= null;
    uRLInput.value=null;
    
}

function displayInput() {
  var container='';

    for(var i=0 ;i<sitesList.length;i++)
       container +=
  ` <tr>
          <td>${i+1}</td>
          <td>${sitesList[i].name}</td>
          <td>
          <button type="button" class="btn btn-visit">
            <a href="${sitesList[i].url}">
            <i class="fa-solid fa-eye m-2"></i>Visit
          </a>
          </button></td>
          <td>
            <button onclick="deleteSite(${i})" type="button" class="btn btn-delete"><i class="fa-solid fa-trash-can m-2"></i>Delete</button>
          </td>
        </tr>`
        document.getElementById('tbody').innerHTML = container;
        localStorage.setItem('sitesList',JSON.stringify(sitesList));

}

function deleteSite(index) {
  sitesList.splice(index,1);
  
   localStorage.setItem('sitesList',JSON.stringify(sitesList));
  //  console.log(sitesList)
  //  displayInput(sitesList);
  displayInput();
  
}

function validationInput(element) {
  var regex={
    siteName:/^[a-zA-Z]{3,}/,
    siteURL:/^(https:\/\/)[\w]/,

  }
if(regex[element.id].test(element.value)){
element.classList.add('is-valid')
element.classList.remove('is-invalid')
return true;
}else{
  element.classList.add('is-invalid')
  element.classList.remove('is-valid')
  return false;
}

}



