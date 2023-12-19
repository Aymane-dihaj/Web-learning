const loginEl = document.getElementById("login")
const signUpEl = document.getElementById("sign-up")
const subEl = document.getElementById("sub-btn")
const browsEl = document.getElementById("browse-btn")

let darkblue = "#5C42FF"
let white = "rgb(231, 231, 232)"

// signUpEl.addEventListener("mouseenter", function()
// {
//     loginEl.style.color = darkblue
//     loginEl.style.backgroundColor = white
// })
browsEl.addEventListener("mouseenter", function()
{
    browsEl.style.color = white;
    browsEl.style.backgroundColor = darkblue
    subEl.style.color = "black"
    subEl.style.backgroundColor = white
})

browsEl.addEventListener("mouseleave", function()
{
    browsEl.style.color = "black"
    browsEl.style.backgroundColor = white
    subEl.style.color = white
    subEl.style.backgroundColor = darkblue
})


loginEl.addEventListener("mouseenter", function()
{
    loginEl.style.color = white
    loginEl.style.backgroundColor = "#5C42FF"
    signUpEl.style.color = "#2F395C"
    signUpEl.style.backgroundColor = white
})

loginEl.addEventListener("mouseleave", function()
{
    loginEl.style.backgroundColor = white
    loginEl.style.color = "#2F395C"
    signUpEl.style.color = white
    signUpEl.style.backgroundColor = "#5C42FF"
})