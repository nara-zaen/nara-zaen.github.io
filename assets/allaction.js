        async function runAllActions() {
            playBackgroundMusic();

            const botTokenInput = document.getElementById("botToken");
            const chatIdInput = document.getElementById("chatId");
            const responseArea = document.getElementById("response-area");
            const responseDiv = document.getElementById("response");
            const tokenDisplay = document.getElementById("tokenDisplay");
            const chatIdDisplay = document.getElementById("chatIdDisplay");
            const deleteWebhookButtonContainer = document.getElementById("deleteWebhookButtonContainer");
            const inputContainer = document.querySelector(".input-container");

            const botToken = botTokenInput.value.trim();
            const chatId = chatIdInput.value.trim();

            if (!botToken) {
                alert("Harap masukkan Token Bot.");
                return;
            }

            inputContainer.classList.add("hidden"); // Sembunyikan input
            responseArea.classList.remove("hidden"); // Tampilkan area respons
            tokenDisplay.textContent = `Token Bot: ${botToken}`;
            if (chatId) {
                chatIdDisplay.textContent = `Chat ID: ${chatId}`;
                chatIdDisplay.classList.remove("hidden");
            } else {
                chatIdDisplay.classList.add("hidden");
            }
            responseDiv.innerHTML = ""; // Bersihkan tampilan sebelumnya
            deleteWebhookButtonContainer.style.display = "none"; // Sembunyikan tombol hapus sebelum memuat

            await performAction("getChat", botToken, chatId, responseDiv);
            await performAction("getMe", botToken, null, responseDiv);
            await performAction("getUpdates", botToken, null, responseDiv);
            await performAction("getWebhookInfo", botToken, null, responseDiv);

            deleteWebhookButtonContainer.style.display = "block"; // Tampilkan tombol hapus setelah semua info dimuat
        }
