let isLightMode = false;

function toggleMode() {
    isLightMode = !isLightMode;

    document.documentElement.classList.toggle("light", isLightMode);

    const img = document.querySelector("#profile img");
    img.setAttribute(
        "src",
        isLightMode ? "/assets/avatar-light.webp" : "/assets/avatar.webp"
    );
}
