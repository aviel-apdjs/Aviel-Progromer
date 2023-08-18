"use strict";

const Time = document.getElementById("time");

setInterval(() => {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    Time.innerText = `${hours}:${minutes}:${seconds}`;
}, 1000);

// Socials Buttons

const icon = document.querySelectorAll("#social-down");
const text = document.querySelectorAll(".social-text");
const btn = document.querySelectorAll(".social");

btn.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.id === "twitter-icon") {
            window.open("https://twitter.com", "_blank")
        } else if (button.id === "facebook-icon") {
            window.open("https://facebook.com", "_blank")
        } else if (button.id === "instagram-icon") {
            window.open("https://instagram.com", "_blank")
        } else if (button.id === "youtube-icon") {
            window.open("https://youtube.com", "_blank")
        }
    })

    
    button.addEventListener("mouseenter", () => {
        const iconName = button.id;
        const textId = `${iconName}-text`;
        const iconId = `${iconName}-down`

        const matchingText = document.getElementById(textId);
        const matchingIcon = document.getElementById(iconId);
        if (matchingText && matchingIcon) {
            matchingText.style.opacity = 1;
            matchingIcon.style.opacity = 1;
        }
    });

    button.addEventListener("mouseleave", () => {
        const iconName = button.id;
        const textId = `${iconName}-text`;
        const iconId = `${iconName}-down`

        const matchingText = document.getElementById(textId);
        const matchingIcon = document.getElementById(iconId);
        if (matchingText && matchingIcon) {
            matchingText.style.opacity = 0;
            matchingIcon.style.opacity = 0;
        }
    });
});

