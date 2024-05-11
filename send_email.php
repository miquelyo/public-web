<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    $to = "yosafatmiquel@gmail.com"; // Ganti dengan alamat email Anda
    $subject = "Pesan dari Form Kontak";
    $body = "Nama: $name\nEmail: $email\nPhone: $phone\nPesan:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "Pesan telah terkirim!";
    } else {
        echo "Maaf, terjadi kesalahan. Pesan tidak terkirim.";
    }
}
?>
