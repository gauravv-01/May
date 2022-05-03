console.log("Console Check");
function getInput(e)
{
 let c=e.target.value
 console.log(c);
}

function setPrint()
{
  
  var input = document.getElementById("saveServer");
  // console.log(input.value)
  // localStorage.setItem("server", input.value);
  // localStorage.setItem("server",JSON.stringify(input.value))
  
  if(input.value.length!=0)
  {
      // localStorage.setItem("server",JSON.stringify(input))
      // localStorage.setItem("server", input.value);
      localStorage.setItem("name",JSON.stringify(input.value))
      console.log("Hi my name is {name}");
  }
  else
  {
      console.log("No user key found");
  }
  // localStorage.setItem("server", input.value);
  
  
  // let d = localStorage.saveServer


// localStorage.setItem("name","Gaurav Kumawat")
// sessionStorage.setItem("name","Rahul Kumawat")

}
function getItem()
{
    console.log(localStorage.getItem("name"))
    localStorage.removeItem("name")
    console.log(localStorage.getItem("name"))

}
