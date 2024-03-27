function getTheme() {
    return localStorage.getItem("theme") === "light";
}

// apply theme
function applyTheme(isLightMode) {
    document.documentElement.classList.toggle("light", isLightMode);
}

// update theme localStorage
function updateTheme(isLightMode) {
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
}

// update image
function updateProfileImage(isLightMode) {
    const img = document.querySelector("#profile img");
    img.setAttribute(
        "src",
        isLightMode ? "/assets/avatar-light.webp" : "/assets/avatar.webp"
    );
}

// Toggle theme
function toggleMode() {
    let isLightMode = getTheme();

    isLightMode = !isLightMode;

    applyTheme(isLightMode);

    updateTheme(isLightMode);

    updateProfileImage(isLightMode);
}

// Apply theme actual localStorage
applyTheme(getTheme());
