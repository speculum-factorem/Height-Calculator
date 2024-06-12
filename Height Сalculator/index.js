const btn = document.getElementById("btn")
const output = document.getElementById("output")
const inputt = document.querySelector("input")

btn.onclick = () => {
    if (inputt.value == "") {
        alert("Field is empty")
    } 
    else {
        output.textContent = "Hello world!"
        inputt.value = ""
    }
}