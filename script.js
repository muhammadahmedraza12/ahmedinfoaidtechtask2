// clear function for clear values
function clearScreenFunc() {
    document.getElementById("result").value = "";
}
 
//display function for display values
function displayFunc(value) {
    document.getElementById("result").value += value;
}
 
// calculate function for calculation of values
function calculateFunc() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}