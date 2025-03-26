        function formatError(error) {
            let errorMessage = "";
            if (typeof error === 'string' || error instanceof String) {
                errorMessage = `<p class="error">${errorMessage}</p>`;
            } else if (error && error.description) {
                errorMessage = `<p class="error">${error.description}</p>`;
            } else if (error && error.message) {
                errorMessage = `<p class="error">${error.message}</p>`;
            } else {
                errorMessage = `<pre class="error">${JSON.stringify(error, null, 2)}</pre>`;
            }
            return errorMessage;
        }
