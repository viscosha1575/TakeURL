// Инициализация Telegram Web App
Telegram.WebApp.ready();

// Получение данных пользователя
const userData = Telegram.WebApp.initDataUnsafe;

// Вывод chat_id на экран
if (userData.user && userData.user.id) {
    const chatId = userData.user.id;
    document.getElementById("chat-id").textContent = `Chat ID: ${chatId}`;
} else {
    document.getElementById("chat-id").textContent = "Chat ID not available.";
}

// Вывод информации о пользователе на экран
if (userData.user) {
    const { first_name, last_name, username } = userData.user;
    document.getElementById("user-info").textContent =
        `User Info: ${first_name || ""} ${last_name || ""} (@${username || "no username"})`;
} else {
    document.getElementById("user-info").textContent = "User Info not available.";
}
