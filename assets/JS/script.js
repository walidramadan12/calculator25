let showNumbers = []
// let outputEl=document.getElementById("output")
function display(value){
    showNumbers+=value
document.getElementById("output").value=showNumbers

}
function showResult(){
    let result=eval(showNumbers)
    document.getElementById("output").value=result  //eval() is a function that takes in the string and evaluates it as javascript code       
}
function clearDisplay() {
    location.reload()
}
function Delete() {
    showNumbers = showNumbers.slice(0, -1)
    document.getElementById("output").value = showNumbers
}