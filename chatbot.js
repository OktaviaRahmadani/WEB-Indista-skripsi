function toggleChat(show) {
  const chatbox = document.getElementById("chatbot");
  chatbox.style.display = show ? "flex" : "none"; // Menampilkan atau menyembunyikan chatbot
}

function handleKey(e) {
  if (e.key === "Enter") sendMessage();
}

function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById("chat-content");

  // Tampilkan pesan user
  const userDiv = document.createElement("div");
  userDiv.className = "user-message";
  userDiv.innerHTML = `<div class="message">${msg}</div>`;
  chat.appendChild(userDiv);

  // Jawaban bot
  const reply = getBotReply(msg.toLowerCase());

  const botDiv = document.createElement("div");
  botDiv.className = "bot-message";
  botDiv.innerHTML = `
    <img src="/images/bot-icon.png" class="avatar">
    <div class="message">${reply}</div>
  `;

  setTimeout(() => {
    chat.appendChild(botDiv);
    chat.scrollTop = chat.scrollHeight;
  }, 600);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}

function getBotReply(msg) {
  if (msg.includes("Apa kabar?")) return "mimin baik baik saja, bagaimana kabar mu!";
  if (msg.includes("dimana lokasinya?")) return "Lokasi kami di depok tepatnya di Alexandria Purple Cimanggis Depok West Java";
  if (msg.includes("harga") || msg.includes("ongkir")) return "Harga tergantung lokasi dan durasi ya!";
  if (msg.includes("sewa")) return "Kami menyediakan sewa mobil harian, mingguan, hingga bulanan.";
  if (msg.includes("indista")) return "Indista adalah penyedia solusi digital dan rental mobil terpercaya.";
  if (msg.includes("langganan")) return "Langganan entertainment tersedia dengan banyak pilihan paket.";
  if (msg.includes("mobil")) return "Kami memiliki berbagai tipe mobil mulai dari city car, MPV, hingga pick-up.";
  if (msg.includes("lokasi")) return "Lokasi kami di Alexandria Purple Cimanggis Depok, atau cek Google Maps.";
  if (msg.includes("bantuan")) return "Tim kami siap membantu kamu via WhatsApp atau telepon.";
  if (msg.includes("sewa mobil")) return "Kami menyediakan sewa mobil lepas kunci maupun dengan supir.";
  if (msg.includes("buka jam berapa") || msg.includes("jam operasional")) return "Kami buka setiap hari dari jam 08.00 sampai 20.00 WIB.";
  if (msg.includes("antar jemput")) return "Kami menyediakan layanan antar jemput sesuai zona. Bisa pilih saat pemesanan.";
  if (msg.includes("jenis mobil")) return "Kami punya mobil city car, MPV, SUV, pick-up, dan motor juga tersedia.";
  if (msg.includes("supir")) return "Kamu bisa pilih sewa dengan atau tanpa supir.";
  if (msg.includes("lepas kunci")) return "Ya, tersedia layanan lepas kunci. Syaratnya cukup SIM A dan KTP aktif.";
  if (msg.includes("lokasi") || msg.includes("alamat")) return "Lokasi kami di Alexandria Purple, Cimanggis - Depok.";
  if (msg.includes("bayar")) return "Pembayaran bisa melalui transfer bank, QRIS, dan pembayaran tunai di kantor.";
  if (msg.includes("dp") || msg.includes("uang muka")) return "Kami menerima DP minimal 30% untuk pemesanan kendaraan.";
  if (msg.includes("kontak") || msg.includes("hubungi")) return "Hubungi kami via WhatsApp di 0812-3456-7890 atau email marketing.indista@gmail.com.";
  if (msg.includes("durasi")) return "Penyewaan bisa mulai dari 6 jam, 12 jam, harian, mingguan, hingga bulanan.";
  if (msg.includes("ganti tanggal")) return "Kamu bisa mengubah tanggal sewa maksimal H-1 sebelum jadwal.";
  if (msg.includes("ketersediaan")) return "Cek ketersediaan kendaraan langsung dari form pencarian di halaman awal.";
  if (msg.includes("kendaraan rusak") || msg.includes("kerusakan")) return "Kami akan bantu ganti kendaraan jika ada kerusakan teknis selama sewa.";
  if (msg.includes("zona")) return "Ada 3 zona layanan: Zona 1 (70rb), Zona 2 (80rb), Zona 3 (90rb) per hari.";
  if (msg.includes("asuransi")) return "Harga belum termasuk asuransi. Kamu bisa menambahkan perlindungan tambahan.";
  if (msg.includes("promo") || msg.includes("diskon")) return "Cek halaman depan untuk promo terbaru atau follow IG kami @indista.rental.";

  return "Maaf, saya belum mengerti. Bisa ulangi dengan kata lain? atau silakan hubungi layanan pelanggan kami melalui WhatsApp +6285156434794  untuk bantuan lebih lanjut.";
}