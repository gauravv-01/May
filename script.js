console.log("Hello");
function setPrint()
{
localStorage.setItem("name","Gaurav Kumawat")
sessionStorage.setItem("name","Rahul Kumawat")

}
function getItem()
{
    console.log(localStorage.getItem("name"))
    localStorage.removeItem("name")
    console.log(localStorage.getItem("name"))

}