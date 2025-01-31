// main.js
import { database, ref, get, set } from "./firebaseConfig.js";

// ⚡ Ссылка на дату сброса в базе данных

// 🕒 Получение количества дней с момента сброса
async function getDaysSinceReset() {
    try {
        const resetDateRef = ref(database, "resetDate");

        const snapshot = await get(resetDateRef);
        const resetDate = snapshot.val();

        if (resetDate) {
            const resetTime = new Date(resetDate).getTime();
            const todayTime = new Date().getTime();
            document.getElementById("daysCounter").textContent =
                Math.floor((todayTime - resetTime) / (1000 * 60 * 60 * 24));
        } else {
            resetCounter();  // Если в базе данных нет даты, сбрасываем
        }
    } catch (error) {
        console.error("Ошибка загрузки даты сброса:", error);
        document.getElementById("daysCounter").textContent = "Ошибка";
    }
}

// Проверяем пароль и сбрасываем счетчик
async function resetCounter() {
    const passwordInput = prompt("Введите пароль для сброса:");

    try {
        const passRef = ref(database, "resetPassword");
        const snapshot = await get(passRef);

        const storedPassword = snapshot.val();

        if (passwordInput !== storedPassword) {
            alert("❌ Неверный пароль!");
            return;
        }
        const resetDateRef = ref(database, "resetDate");

        // Записываем текущую дату
        const todayDate = new Date().toISOString().split("T")[0];
        await set(resetDateRef, todayDate);

        alert("✅ Счетчик сброшен!");
        document.getElementById("daysCounter").textContent = 0;
    } catch (error) {
        alert("Ошибка: " + error.message);
    }
}


// 🚀 Запуск при загрузке страницы
document.addEventListener("DOMContentLoaded", getDaysSinceReset);
document.getElementById("resetButton").addEventListener("click", resetCounter);
