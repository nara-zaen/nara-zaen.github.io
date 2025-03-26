        async function getLatestWebhookInfo(botToken, responseDiv) {
            const apiUrl = `https://api.telegram.org/bot${botToken}/getWebhookInfo`;
            const resultDiv = document.createElement("div");
            resultDiv.innerHTML = `<h3 style="color: #fff;">Memuat Webhook Info Terbaru...</h3>`;
            responseDiv.appendChild(resultDiv);

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                resultDiv.innerHTML = `<h3 style="color: #fff;">Nara berhasil memperbarui Webhook Info :</h3>` + formatResult(data);
                if (data.ok) {
                    resultDiv.classList.add("response-success");
                } else {
                    resultDiv.classList.add("response-error-bg");
                }
            } catch (error) {
                resultDiv.innerHTML = `<h3 style="color: #fff;">Error Webhook Info Terbaru:</h3>` + formatError(error);
                resultDiv.classList.add("response-error-bg");
            } finally {
                responseDiv.appendChild(resultDiv);
            }
        }
