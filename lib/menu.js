const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Asal nama bot kenapa WG-01? 
WG singkatan Wahyu Gamteng wkwk, 01 menujukan ini bot pertama saya.

Source code / bot ini merupakan program open-source yang ditulis menggunakan Javascript.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.

Facebook : https://www.facebook.com/wahyucahyo01
Instagram : -

Semoga harimu menyenangkan✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Perkenalkan saya WG-01, Berikut adalah beberapa fitur yg bisa dilakukan WG-01 untukmu, ketik perintah untuk mengetahui fungsinya dan cara penggunaannya✨

[ Creator 🛠️ ]
📍 *${prefix}sticker*
Mengubah gambar menjadi sticker✅
📍 *${prefix}stickergif*
Mengubah gif menjadi stiker bergerak✅
📍 *${prefix}stickergiphy*
Mendownload sticker dari giphy✅
📍 *${prefix}meme*
Mengubah gambar menjadi meme✅
📍 *${prefix}quotemaker*
Membuat quotes✅
📍 *${prefix}nulis*
Membuat ketikanmu menjadi tulisan di atas buku (untuk km yg males nulis wkwk)✅

[ Islam 🕌]
📍 *${prefix}infosurah*
Menginfokan tentang surah tertentu✅
📍 *${prefix}surah*
Menampilkan ayat Al-Quran tertentu beserta terjemahannya✅
📍 *${prefix}tafsir*
Menampilkan ayat Al-Quran tertentu beserta terjemahan dan tafsirnya✅
📍 *${prefix}alaudio*
Menampilkan link download atau mengirim audio surah dan ayat tertentu beserta terjemahannya✅
📍 *${prefix}jsolat*
Menunjukkan jadwal sholat daerah tertentu (kadang lambat/eror😔)
📍 *${prefix}listsurah*
Menunjukan list surah Al-Qur'an✅

[ Download 🎬 ]
📍 *${prefix}instagram*
Mendownload gambar/video dari Instagram (kadang lambat/eror😔)
📍 *${prefix}ytmp3*
Mendownload lagu dari YouTube (kadang lambat/eror😔)
📍 *${prefix}ytmp4*
Mendownload video dari YouTube (kadang lambat/eror😔)


[ Primbon 💫 ]
📍 *${prefix}artinama*
Memberikan arti tentang nama mu (hanya opini)✅
📍 *${prefix}cekjodoh*
Menginfokan tentang positif & negatif suatu pasangan (hanya opini)✅

[ Search Any 🔍 ]
📍 *${prefix}images*
Mencarikan gambar tertentu dari pinterest✅
📍 *${prefix}sreddit*
Mencarikan gambar tertentu dari subreddit✅
📍 *${prefix}resep*
Mencarikan resep tertentu, mau masak apa hari ini?✅
📍 *${prefix}stalkig*
Memberikan info tentang Instagram sesorang✅
📍 *${prefix}wiki*
Mencarikan info tertentu dari Wikipedia✅
📍 *${prefix}cuaca*
Menginfokan cuaca di daerah tertentu✅
📍 *${prefix}chord*
Mencarikan chord lagu tertentu✅
📍 *${prefix}lirik*
Mencarikan lirik lagu tertentu✅
📍 *${prefix}ss*
Memberikan screenshot suatu web tertentu✅
📍 *${prefix}play*
Mencarikan lagu dari YouTube✅
📍 *${prefix}whatanime*
Mencarikan nama anime berdasarkan gambar tertentu✅

[ Random Teks 💬 ] 
📍 *${prefix}fakta*
Mencarikan info fakta acak✅
📍 *${prefix}pantun*
Mencarikan pantun acak✅
📍 *${prefix}katabijak*
Mencarikan Kata-kata bijak acak✅
📍 *${prefix}quote*
Mencarikan quote dan authornya acak✅

[ Random Images 📸 ]
📍 *${prefix}anime*
Mencarikan gambar anime tertentu✅
📍 *${prefix}kpop*
Mencarikan gambar kpop tertentu✅
📍 *${prefix}memes*
Mencarikan meme acak✅

[ Lain-lain 🔥 ]
📍 *${prefix}tts*
Mengubah ketikanmu menjadi suara google✅
📍 *${prefix}translate*
Menerjemahkan sebuah kalimat(bisa buat ngerjain tugas wkwk)✅
📍 *${prefix}resi*
Mengecek resi pengiriman✅
📍 *${prefix}shortlink*
Membuatkan shortlink untukmu✅
📍 *${prefix}ping*
Mengecek kecepatan respon dari WG-01✅
📍 *${prefix}bapakfont*
Mengubah kalimat menjadi 4l4y✅
📍 *${prefix}covidindo*
Menginfokan tentang covid-19 di Indonesia✅
📍 *${prefix}ceklokasi*
Menginfokan tentang covid-19 di lokasi tertentu✅

[ Tentang Bot 🤖 ]
📍 *${prefix}tnc*
Info WG-01✅
📍 *${prefix}donasi*
Cara membuat owner bot bahagia✅
📍 *${prefix}join*
Mengundang bot bergabung grub✅
📍 *${prefix}ownerbot*
Menginfokan pemilik WG-01✅
📍 *${prefix}botstat*
Menginfokan status WG-01✅

WG-01 By Wahyu Cahyo
Sebagian perintah masih uji coba, semoga dapat membantu;)
Hope you have a great day!✨`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Owner Group Only* ] ⚠
Berikut adalah fitur owner grup yang ada pada bot ini!
-owner adalah pembuat grup.

. *${prefix}kickall*
Mengeluarkan semua anggota grub✅

⚠ [ *Admin Group Only* ] ⚠ 
Berikut adalah fitur admin grup yang ada pada bot ini!

. *${prefix}add*
Menambah anggota✅
. *${prefix}kick* @tag
Mengeluarkan anggota✅
. *${prefix}promote* @tag
Menaikkan jabatan anggota✅
. *${prefix}demote* @tag
Menurunkan jabatan anggota✅
. *${prefix}tagall*
Memanggil semua anggota✅
. *${prefix}del*
Menghapus chat tertentu dari WG-01✅

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Owner Bot Only (GUNAKAN DENGAN HATI-HATI)* ] ⚠
. *${prefix}ban* - banned✅
. *${prefix}bc* - promosi ke semua kontak yg ada✅
. *${prefix}leaveall* - keluar semua grup✅
. *${prefix}clearall* - hapus semua chat ke kontak yg ada✅
`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini, namun menjalankan bot ini perlu waktu, tenaga & kuota.
Untuk mendukung bot ini kamu dapat membantu dengan berdonasi melalui :

PULSA : TELKOMSEL 082288975515
DANA : 082288975515 AN WAHYU CAHYO
GOPAY : 082288975515 AN WAHYU CAHYO
OVO : 082288975515 AN WAHYU CAHYO
BRI : 5447-01-027712-53-4 AN WAHYU CAHYO

Doakan agar project bot ini bisa terus berkembang
Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih.`
}
