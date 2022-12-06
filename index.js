const input = document.getElementById("button");
function addingEventListener() {
 
  input.addEventListener("click", function(){
      alert("I was clicked");
      console.log("I was clicked");
  });
}
addingEventListener()