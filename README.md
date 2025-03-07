
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>Nara Zaen - Jadwal Sholat, Dzikir, dan Kuis Ramadhan</title>
    <meta name="description" content="Temukan jadwal sholat, dzikir harian, kuis Ramadhan, dan konten Islami lainnya dari Nara Zaen. Klaim voucher dan nikmati pengalaman YouTube Premium.">
    <meta name="keywords" content="nara zaen, zara zaen, jadwal sholat, dzikir, kuis ramadhan, voucher, youtube premium, islami">
    <meta name="author" content="Nara Zaen">
<style>
        body, html {
            margin: 0;
            padding: 0;
            height: 100%;
            background-image: url(https://l.top4top.io/p_33451fevz0.png);
            background-size: cover;
            background-repeat: no-repeatbackground-position: center;
            background-attachment: fixed;
            height: 100%;
            }
            
            
            
        

        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: black;
            padding: 0;
border-bottom: 2px solid red; 
animation: blink 3s infinite;   
}
@keyframes blink {
    0%, 100% {
        border-color: green;
    }
    50% {
        border-color: red;
    }
}

        .navbar-left .logo {
            height: 40px;
        }

        .navbar-right .menu-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 20px;
        }

        .navbar-right .menu-icon {
            width: 25px;
            height: 3px;
            background-color: white;
            margin: 5px 0;
        }

        .menu-list {
            display: none;
            position: absolute;
            top: 60px;
            right: 20px;
            background-color: white;
            border: 2px solid red;
            padding: 10px;
            z-index: 1;
            border-radius: 15px;
        }

        .menu-list.show {
            display: block;
        }

        .menu-list button {
            display: block;
            width: 100%;
            text-align: left;
            padding: 5px 10px;
            border: none;
            background: none;
            cursor: pointer;
        }

        .content {
            display: none;
            
        }

        .content.show {
            display: block;
        }
iframe{
  top: 20px; 
  bottom: 25px; 
  left: 0;
  right: 0;
  width: 100%;
  border: none; 
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  overflow: auto;
  height: 500px;
}
.copyright {
    position: fixed;
    bottom: 0;
    left: 0;
    color: white;
    width: 100%;
    background-color: black;
    text-align: center;
    padding: 10px 0;
    transition: opacity 0.3s ease;
    
    border-top: 2px solid red; 
    animation: blink 3s infinite; 
    text-align: center;
}

@keyframes blink {
    0%, 100% {
        border-color: red; /* Warna border saat terlihat */
    }
    50% {
        border-color: green; /* Warna border saat tidak terlihat */
    }
}

    
    
}


        
   

                  
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="navbar-left">
<video autoplay loop muted width="150px" height="70px">
  <source src="https://h.top4top.io/m_3344t78p00.mp4" type="video/mp4">
</video>

        </div>
        <div class="navbar-right">
            <button class="menu-button">
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
                <div class="menu-icon"></div>
            </button>
            <div class="menu-list">
                <button data-content="content1" type="button">🎋 Salat Fardhu</button>
                <button data-content="content2" type="button">🎋 Dzikir</button>
                <button data-content="content3" type="button">🎋 JADWAL IMSAK TANGERANG</button>
                <button data-content="content4" type="button">🎋 KLAIM VOUCHER</button>
                <button data-content="content5" type="button">🎋 KUIS RAMADHAN</button>
                <button data-content="content6" type="button">🎋 KLAIM YT PREMIUM</button>
            </div>
        </div>
    </nav>


    <div id="content1" class="content"><iframe src="https://narazaen.github.io/NaraOi/solat.html"></iframe>
</div>
    <div id="content2" class="content"><iframe src="https://narazaen.github.io/NaraOi/dzikir.html"></iframe></div>
<div id="content3" class="content">
  <iframe id="myIframe" src="https://nara-zaen.github.io/Nara/imsak.html"></iframe>
</div>
    <div id="content4" class="content">  <iframe id="myIframe" src="https://nara-zaen.github.io/Nara/voucher.html"></iframe></div>
    <div id="content5" class="content"><iframe src="https://nara-zaen.github.io/Nara/kuis.html" ></iframe></div>
    <div id="content6" class="content" scrolling="no" style="height: 100vh; overflow: hidden;"><iframe src="https://nara-zaen.github.io/Nara/Rff.html" ></iframe></div>









<!-- BAR BAWAH -->
        <div class="copyright">
<div style="text-align: left; font-size: 7px; color: white; ">
    &copy; 2025 Nara Zaen. Semua hak dilindungi. Izin resmi untuk penggunaan atau reproduksi konten situs web ini harus diperoleh secara tertulis dari Nara Zaen.
</div>
</div>




    <script>
        const menuButton = document.querySelector('.menu-button');
        const menuList = document.querySelector('.menu-list');
        const contents = document.querySelectorAll('.content');

        menuButton.addEventListener('click', () => {
            menuList.classList.toggle('show');
        });

        menuList.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                event.preventDefault();
                const contentId = event.target.dataset.content;
                contents.forEach(content => content.classList.remove('show'));
                document.getElementById(contentId).classList.add('show');
                menuList.classList.remove('show');
            }
        });
        
        
const copyright = document.querySelector('.copyright');

let isCopyrightVisible = true;
let touchTimer;

document.addEventListener('touchstart', () => {
    clearTimeout(touchTimer); // Batalkan timer jika ada sentuhan baru
    if (isCopyrightVisible) {
        copyright.style.opacity = '0';
        isCopyrightVisible = false;
    }
});

document.addEventListener('touchend', () => {
    touchTimer = setTimeout(() => {
        if (!isCopyrightVisible) {
            copyright.style.opacity = '1';
            isCopyrightVisible = true;
        }
    }, 1000); // Munculkan setelah 2 detik tanpa sentuhan
});

    </script>
    
    
</body>
</html>






