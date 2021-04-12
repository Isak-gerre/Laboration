"use strict";
for (let i =1; i<= 4; i++){
    let nyDiv = document.createElement("div");
    document.getElementById("colorScheme").append(nyDiv);

    nyDiv.innerHTML = `
    <div class="color"></div>
    <div class="color"></div>
    <div class="color">Scheme ${i}</div>
    <div class="color"></div>
    <div class="color"></div>
    `;
}
