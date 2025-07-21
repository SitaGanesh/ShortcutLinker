document.getElementById('btn').addEventListener('click', function() {
    document.getElementById('input-div').classList.toggle('hidden');
});
document.getElementById('cancel').addEventListener('click', function() {
    document.getElementById('input-div').classList.add('hidden');
});
let nameInput = document.querySelector(".input-name");
let nameValue
let nameFirstValue
nameInput.addEventListener("input", function(e) {
    nameValue=e.target.value
    console.log(nameValue)
});

document.getElementById("done").addEventListener("click", function() {
    var shortCut = document.querySelector(".short-cut"); 
    var cloneSt = shortCut.cloneNode(true);
    var nameInput = document.querySelector(".input-name").value;
    var urlInput = document.querySelector("#url").value; 
    var firstChar = nameInput.charAt(0).toUpperCase(); 
    cloneSt.querySelector('#btn').value = firstChar;
    cloneSt.querySelector('h5').textContent = nameInput; 
    cloneSt.addEventListener('click', function(){ 
        window.location.href = urlInput; 
    });
    document.body.appendChild(cloneSt);  
});
document.querySelector(".dropdown").addEventListener('click',function(){
    document.querySelector(".select").classList.toggle('hidden');


})

// var dropdown = document.createElement("div");
// dropdown.setAttribute("id", "drop");
// dropdown.classList.add("dropdown");
// dropdown.innerHTML='<ul class="icons showleft"><li></li><li></li><li></li></ul>'
// cloneSt.appendChild(dropdown);
// document.body.appendChild(cloneSt);


