//your JS code here. If required.
let fn = document.getElementById("fName");
let ln = document.getElementById("lName");
let pn = document.getElementById("pNumber");
let eid = document.getElementById("eId");

let btn = document.getElementById("btn");

btn.onclick = ()=>{
    alert(`${fn.name}: ${fn.value} ${ln.name}: ${ln.value} ${pn.name}: ${pn.value} ${eid.name}: ${eid.value}`)
}