// Функция для получения параметра `chat_id` из URL
function getChatIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("chat_id");
}

// Функция для отправки `chat_id` и начального счета в базу данных
async function sendChatIdToDatabase(chatId, score = 0) {
    try {
        const response = await fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chat_id: chatId, score }),
        });

        if (response.ok) {
            document.getElementById("status").textContent = "User registered successfully!";
        } else {
            document.getElementById("status").textContent = "Failed to register user.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("status").textContent = "An error occurred.";
    }
}

// Главная логика при загрузке страницы
window.onload = () => {
    const chatId = getChatIdFromUrl();

    if (chatId) {
        // Отправляем данные в базу
        sendChatIdToDatabase(chatId);
    } else {
        document.getElementById("status").textContent = "Chat ID not found in URL.";
    }
};
