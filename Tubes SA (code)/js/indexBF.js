/* (TOMBOL) Fungsi Mencari Keuntungan */
function hitungBruteForce() {
    /* Mengambil elemen untuk dihitung */
    var hargaPokok = parseInt(document.getElementById("hargaPokokBF").value) 
    var hargaJual = parseInt(document.getElementById("hargaJualBF").value)
    var diskonPotongan = parseFloat(document.getElementById("hargaPotonganBF").value)
    
    /* menghitung keuntungan setelah diskon */
    var hargaDiskon = hargaJual - (hargaJual * diskonPotongan)
    var keuntungan = hargaDiskon - hargaPokok
    document.getElementById("keuntunganBF").value = keuntungan // output keuntungan
}

/* (TABEL) Fungsi Mencari Waktu Eksekusi Keuntungan & Menghapus Input */
function hitungBruteForce2() {
    /* mencari waktu eksekusi dari fungsi "hitungBruteForce()" */
    const start = performance.now()
    hitungBruteForce() // fungsi yang dihitung waktu eksekusinya
    const end = performance.now()
    const executionTime = end - start
    document.getElementById("waktuBF").value = executionTime.toFixed(18) // output waktu eksekusi (keuntungan)

    /* mengambil elemen dari hasil input sebelumnya */
    var namaBarang = document.getElementById("namaBarangBF").value
    var keuntungan = parseInt(document.getElementById("keuntunganBF").value)

    /* membuat tabel baru untuk hasil input sebelumnya */
    var table = document.getElementById("tabelBF")
    var newRow = table.insertRow(table.rows.length) // membuat baris baru pada tabel

    /* memasukan hasil input sebelumnya kedalam tabel */
    newRow.insertCell(0).innerHTML = namaBarang
    newRow.insertCell(1).innerHTML = keuntungan
    newRow.insertCell(2).innerHTML = executionTime.toFixed(18) // elemen dari waktu eksekusi
    newRow.insertCell(3).innerHTML = '<button type="button" class="btn btn-secondary btn-sm button-table" onclick="hapusData(this)">X</button>' // tombol hapus

    /* menghapus hasil input sebelumnya, untuk melakukan input selanjutnya */
    document.getElementById("namaBarangBF").value = null
    document.getElementById("hargaPokokBF").value = null
    document.getElementById("hargaJualBF").value = null
    document.getElementById("hargaPotonganBF").value = null
}

/* (TOMBOL) Fungsi Mengurutkan Profit Dari Yang Terbesar */
function profitBF() {
    var table, rows, switching, i, x, y, shouldSwitch // membuat variabel baru untuk mempermudah proses algoritma
    table = document.getElementById("tabelBF")
    switching = true

    /* buat perulangan yang akan berlanjut hingga tidak ada peralihan yang dilakukan */
    while (switching) {
        switching = false // mulai ketika "no switching"
        rows = table.rows

        /* melakukan perulangan pada semua baris tabel (kecuali baris pertama, yang berisi header tabel) */
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false // mulai ketika: "should be no switching"
            x = rows[i].getElementsByTagName("td")[1] // mengambil elemen profit baris pertama untuk dibandingkan
            y = rows[i + 1].getElementsByTagName("td")[1] // mengambil elemen profit baris kedua untuk dibandingkan

            /* memeriksa apakah perlu melakukan peralihan jika profit baris dua lebih besar */
            if (Number(x.innerHTML) < Number(y.innerHTML)) {
                shouldSwitch = true // jika iya,
                break // hentikan perulangan
            }
        }

        /* jika peralihan telah dilakukan, tandai baris tersebut */
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
        }
    }
}

/* (TOMBOL) Fungsi Menghapus Data Pada Tabel Satu Persatu & Menghapus Semua */
function hapusData(button) {
    /* membuat tombol untuk menghapus tabel secara keseluruhan */
    let row = button.parentNode.parentNode
    row.parentNode.removeChild(row) // menghapus selutuh tabel
}
function hapusSemuaDataBF() {
    /* membuat tombol untuk menghapus tabel pada baris tertentu */
    var rows = document.getElementById("tabelBF").rows.length;
    for (i = 1; i < rows; i++){
        document.getElementById("tabelBF").deleteRow(1); // menghapus baris tabel yang dipilih
    }
}

/* (TOMBOL) Fungsi Mencari Barang Diskon */
function BarangAkhirBF() {
    var table, rows, x, y, output
    table = document.getElementById("tabelBF")
    rows = table.rows
    x = (table.rows[1].cells[0].textContent) // mengambil elemen pada baris 1 kolom pertama
    y = (table.rows[2].cells[0].textContent) // mengambil elemen pada baris 2 kolom pertama
    output = "Barang Yang Terpilih Untuk Diberi Diskon : " + x + " dan " + y
    document.getElementById("BarangAkhirBF").value = output // output nama barang
}

/* (TOMBOL) Fungsi Mencari Total Profit */
function ProfitAkhirBF() {
    var table, x, y, profit, output
    table = document.getElementById("tabelBF")
    x = parseInt(table.rows[1].cells[1].textContent) // mengambil elemen pada bari 1 kolom kedua
    y = parseInt(table.rows[2].cells[1].textContent) // mengambil elemen pada bari 2 kolom kedua
    profit = x + y // menjumblah elemen yang diambil
    output = "Total Profit Setelah Diskon : " + profit
    document.getElementById("ProfitAkhirBF").value = output // output total profit
}

/* (TOMBOL) Fungsi Mencari Waktu Eksekusi Akhir */
function waktuAkhirBF() {
    const start = performance.now()

    /* 5 fungsi yang akan dihitung */
    hitungBruteForce()
    hitungBruteForce2()
    profitBF()
    BarangAkhirBF()
    ProfitAkhirBF()

    const end = performance.now()
    const executionTime = end - start
    var waktu = executionTime.toFixed(18)
    var output = "Waktu Eksekusi : " + waktu
    document.getElementById("waktuAkhirBF").value = output // output waktu eksekusi akhir
}