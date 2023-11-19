let count = 0;
let countEl = document.getElementById("counter-el")
let saveEl = document.getElementById("last-entries")

function increment()
{
    count++
    countEl.innerText = count
}

function save()
{
    let countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0
    count = 0
}

function reset()
{
    count = 0 
    countEl.innerText = 0
}
