const inputEl = document.getElementById("input-el")
let myLeads = []
let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteEl = document.getElementById("delete-btn")
const tabEl = document.getElementById("tab-btn")

const  leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))



if (leadsFromLocalStorage)
{
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

inputBtn.addEventListener("click", function()
{
    if (inputEl.value === "")
    {
        inputEl.placeholder = "Enter a link here please"
        return ;
    }
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    inputEl.placeholder = "Paste text here"
    render(myLeads)
})

tabEl.addEventListener("click", function()
{
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
   
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })
})

deleteEl.addEventListener("dblclick", function()
{
    myLeads = []
    localStorage.clear()
    render(myLeads)
})

function render(leads)
{
    let listItems = ""
    for (let i = 0; i < leads.length ; i++)
    {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]}
            </a>
        </li>`
    }
    ulEl.innerHTML = listItems
}
