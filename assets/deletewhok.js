        async function deleteWebhookFlow() {
            const botTokenInput = document.getElementById("botToken");
            const responseDiv = document.getElementById("response");
            const deleteWebhookButton = document.getElementById("deleteWebhookButton");
            const botToken = botTokenInput.value.trim();
            const tokenDisplay = document.getElementById("tokenDisplay");
            const chatIdDisplay = document.getElementById("chatIdDisplay");

            if (!botToken) {
                responseDiv.innerHTML += `<div style="color: #fff;"><h3>Error deleteWebhook:</h3><p class="error">Harap masukkan Token Bot.</p></div>`;
                return;
            }

            const apiUrl = `https://api.telegram.org/bot${botToken}/setWebhook?url=`;
            const resultDiv = document.createElement("div");
            resultDiv.innerHTML = `<h3 style="color: #fff;">Menghapus Webhook...</h3>`;
            responseDiv.appendChild(resultDiv);
            deleteWebhookButton.classList.add("hidden"); // Sembunyikan tombol saat proses

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                resultDiv.innerHTML = `<h3 style="color: #fff;">Nara telah BERHASIL delete ADS LIVEGRAM:</h3>` + formatResult(data);
                if (data.ok && data.result) {
                    resultDiv.classList.add("response-success");
                    deleteWebhookButton.classList.add("hidden"); // Hilangkan tombol jika berhasil
                    await getLatestWebhookInfo(botToken, responseDiv); // Ambil info webhook terbaru
                } else {
                    resultDiv.classList.add("response-error-bg");
                    deleteWebhookButton.classList.remove("hidden"); // Tampilkan kembali jika gagal
                }
            } catch (error) {
                resultDiv.innerHTML = `<h3 style="color: #fff;">Error deleteWebhook:</h3>` + formatError(error);
                resultDiv.classList.add("response-error-bg");
                deleteWebhookButton.classList.remove("hidden"); // Tampilkan kembali jika error
            } finally {
                responseDiv.appendChild(resultDiv);
            }
        }
