        function formatResult(data) {
            let formatted = "";
            if (data.ok) {
                formatted = "<pre>" + JSON.stringify(data.result, null, 2) + "</pre>";
            } else {
                formatted = formatError(data);
            }
            return formatted;
        }
