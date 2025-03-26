        async function performAction(action, botToken, chatId, responseDiv) {
            let apiUrl = `https://api.telegram.org/bot${botToken}/`;
            let params = {};
            let actionTitle = "";
            let resultDiv = document.createElement("div");
            let resultContent = "";

            switch (action) {
                case "getChat":
                    actionTitle = "PEMILIK BOT";
                    if (chatId) {
                        apiUrl += "getChat";
                        params.chat_id = chatId;
                    } else {
                        resultContent = `<p style="color: #4CAF50;">Chat ID tidak diisi.</p>`;
                        resultDiv.innerHTML = `<h3 style="color: #fff;">Nara telah melacak ${actionTitle}:</h3>` + resultContent;
                        responseDiv.appendChild(resultDiv);
                        return;
                    }
                    break;
                case "getMe":
                    actionTitle = "BOTusername";
                    apiUrl += "getMe";
                    break;
                case "getUpdates":
                    actionTitle = "AKTIVITASbot";
                    apiUrl += "getUpdates";
                    break;
                case "getWebhookInfo":
                    actionTitle = "WEBHOOK";
                    apiUrl += "getWebhookInfo";
                    break;
                default:
                    return;
            }

            try {
                const response = await fetch(apiUrl + (action === "getChat" ? "?" + new URLSearchParams(params).toString() : ""));
                const data = await response.json();
                resultContent = formatResult(data);
                resultDiv.innerHTML = `<h3 style="color: #fff;">Nara telah melacak ${actionTitle}:</h3>` + resultContent;
                if (data.ok) {
                    resultDiv.classList.add("response-success");
                } else {
                    resultDiv.classList.add("response-error-bg");
                }
            } catch (error) {
                resultContent = formatError(error);
                resultDiv.innerHTML = `<h3 style="color: #fff;">Error ${actionTitle}:</h3>` + resultContent;
                resultDiv.classList.add("response-error-bg");
            } finally {
                responseDiv.appendChild(resultDiv);
            }
        }
