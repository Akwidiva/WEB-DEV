let homecount = document.getElementById("home")
let guestcount = document.getElementById("guest")
let count = 0
function addone() {
    count += 1
    homecount.innerText = count
}
function addtwo() {
    count += 2
    homecount.innerText = count
}
function addthree() {
    count += 3
    homecount.innerText = count
}
function addo() {
    count += 1
    guestcount.innerText = count
}
function addt() {
    count += 2
    guestcount.innerText = count
}
function addth() {
    count += 3
    guestcount.innerText = count
}
