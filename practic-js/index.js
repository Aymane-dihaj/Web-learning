
let sum = 0
let state = false
let isAlive = false;
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []

let player = {
    name: "Per", chips: 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function startGame()
{
    if (player.chips >= 50)
    {
        count = 0
        isAlive = true
        player.chips -= 50
        let firstCard = getRandomNumber()
        let secondCard = getRandomNumber()
        sum = firstCard + secondCard
        cards = [firstCard, secondCard]
        renderGame();
    }
    else
    {
        messageEl.textContent = "Charge your balance!!!"
    }
}

function renderGame()
{
        playerEl.textContent = player.name + ": $" + player.chips
        cardsEl.textContent = "Cards: "
        for (let i = 0; i < cards.length; i++)
            cardsEl.textContent += cards[i] + " "
        isAlive = true
        sumEl.textContent = "Sum: " + sum
        if (sum < 21)
        {
            isAlive = true
            message = "Do you want to draw a new cart?"
        }

        else if (sum === 21)
        {
            state = true
            player.chips += 200
            playerEl.textContent += " + 200"
            message = "Congrats! You've got Blackjack!"
        }

        else if (sum > 21)
        {
            isAlive = false
            message = "You're out of the game"
        }
        messageEl.textContent = message
}

function getRandomNumber()
{
    let result = Math.floor((Math.random() * 13)) + 1
    return (result)
}

function newCard()
{
    if (isAlive == true && player.chips >= 20)
    {
        player.chips -= 20
        let card = getRandomNumber()
        console.log(card)
        cards.push(card);
        sum += card
        renderGame()
    }
}
let count = 0

function chargeBalance()
{
    if (player.chips > 0 && count < 3)
    {
        player.chips += 100
        count++;
        playerEl.textContent += " + 100$"
    }
}