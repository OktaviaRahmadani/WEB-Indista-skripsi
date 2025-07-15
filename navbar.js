   // Cek status login dari localStorage
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Fungsi login: redirect ke login.html
    function handleLogin() {
        window.location.href = 'login.html'; // diarahkan ke halaman login
    }

    // Fungsi logout
    function handleLogout() {
        localStorage.setItem('isLoggedIn', 'false');

        // Tampilkan tombol login, sembunyikan profil
        document.getElementById('loginBtn').classList.remove('hidden');
        document.getElementById('userProfile').classList.add('hidden');
    }

    // Saat halaman dimuat
    document.addEventListener('DOMContentLoaded', function () {
        if (isLoggedIn) {
            document.getElementById('loginBtn').classList.add('hidden');
            document.getElementById('userProfile').classList.remove('hidden');
        } else {
            document.getElementById('loginBtn').classList.remove('hidden');
            document.getElementById('userProfile').classList.add('hidden');
        }
    });

    // Opsional: tutup dropdown saat klik di luar
    document.addEventListener('click', function(event) {
        const userProfile = document.getElementById('userProfile');
        const userDropdown = userProfile ? userProfile.querySelector('.user-dropdown') : null;

        if (userDropdown && !userProfile.contains(event.target)) {
            userDropdown.style.display = 'none';
        }
    });

    // Tampilkan dropdown profil saat hover
    document.addEventListener('DOMContentLoaded', function () {
        const userProfile = document.getElementById('userProfile');

        if (userProfile) {
            userProfile.addEventListener('mouseenter', function () {
                const dropdown = this.querySelector('.user-dropdown');
                if (dropdown) {
                    dropdown.style.display = 'block';
                }
            });

            userProfile.addEventListener('mouseleave', function () {
                const dropdown = this.querySelector('.user-dropdown');
                if (dropdown) {
                    dropdown.style.display = 'none';
                }
            });
        }
    });