        let backgroundMusic = document.getElementById("backgroundMusic");

        async function playBackgroundMusic() {
            backgroundMusic.play().catch(error => {
                console.error("Gagal memutar musik:", error);
                alert("Gagal memutar musik otomatis. Pastikan browser Anda mengizinkan pemutaran audio.");
            });
        }
