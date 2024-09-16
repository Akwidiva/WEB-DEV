import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://endorsements-94894-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app) // connects database to .js file
const endorsementsEl = ref(database, "Endorsements")

const inputField1El = document.getElementById("input-field1")
const inputField2El = document.getElementById("input-field2")
const TextAreaEl = document.getElementById("Textarea-el")
const ButtonEl = document.getElementById("button-el") 
const Elist = document.getElementById("endorsement-list")

ButtonEl.addEventListener("click", function() {
    let InputField1ElValue = inputField1El.value
    let InputField2ElValue = inputField2El.value
    let TextAreaElValue = TextAreaEl.value
    let FullContent = `<strong>To ${InputField2ElValue}</strong><p>${TextAreaElValue}</p><strong>From: ${InputField1ElValue}</strong>` 

    // Pushing full content to Firebase
    push(endorsementsEl, FullContent)
    // clearing input fields
    clearInputField1El()
    clearInputField2El()
    clearTextAreaEl()
    appendItemToElist(FullContent)
})

function clearInputField1El() {
    inputField1El.value = ""
}
function clearInputField2El() {
    inputField2El.value = ""
}
function clearTextAreaEl() {
    TextAreaEl.value = ""
}

function appendItemToElist(itemValue) {
    const newListItem = document.createElement("li")

    // Set innerHTML to allow HTML formatting
    newListItem.innerHTML = itemValue

    // Create an empty heart icon for the like button using Font Awesome
    const likeButton = document.createElement("i")
    likeButton.classList.add("far", "fa-heart") // Far heart (empty)

    // Create a span to display the number of likes
    const likeCount = document.createElement("span")
    likeCount.textContent = " 0 likes"

    // Initialize like count
    let likeNumber = 0
    let isLiked = false // To track whether it's liked or not

    // Event listener to toggle like/unlike
    likeButton.addEventListener("click", function() {
        if (isLiked) {
            // Unlike: switch to empty heart, decrement count
            likeButton.classList.remove("fas") // Full heart
            likeButton.classList.add("far")    // Empty heart
            likeNumber--
        } else {
            // Like: switch to filled heart, increment count
            likeButton.classList.remove("far") // Empty heart
            likeButton.classList.add("fas")    // Full heart
            likeNumber++
        }

        // Update the like count and toggle the like state
        likeCount.textContent = ` ${likeNumber} like${likeNumber > 1 ? 's' : ''}`
        isLiked = !isLiked
    })

    // Create a container div to hold both the like button and like count
    const likeContainer = document.createElement("div")
    likeContainer.style.textAlign = "right" // Align content to the right
    likeContainer.appendChild(likeButton)
    likeContainer.appendChild(likeCount)

    // Append the likeContainer to the list item
    newListItem.appendChild(likeContainer)

    // Insert the new list item at the top of the list
    if (Elist.firstChild) {
        Elist.insertBefore(newListItem, Elist.firstChild)
    } else {
        Elist.appendChild(newListItem)
    }
}
