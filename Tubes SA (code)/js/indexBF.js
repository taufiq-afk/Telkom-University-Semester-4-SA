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
    newRow.insertCell(2).innerHTML = '<div> <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."> </div>' // Default checkbox
    newRow.insertCell(3).innerHTML = '<button type="button" class="btn btn-secondary btn-sm button-table" onclick="hapusData(this)">X</button>' // Tombol Hapus Row

    /* menghapus hasil input sebelumnya, untuk melakukan input selanjutnya */
    document.getElementById("namaBarangBF").value = null
    document.getElementById("hargaPokokBF").value = null
    document.getElementById("hargaJualBF").value = null
    document.getElementById("hargaPotonganBF").value = null
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
    // Definisikan variabel Tabel 1-6
    const tabelBF1 = document.getElementById("tabelBF1");
    const tabelBF2 = document.getElementById("tabelBF2");
    const tabelBF3 = document.getElementById("tabelBF3");
    const tabelBF4 = document.getElementById("tabelBF4");
    const tabelBF5 = document.getElementById("tabelBF5");
    const tabelBF6 = document.getElementById("tabelBF6");

    let totalProfitTerbesar = 0;
    let tabelBFProfitTerbesar = "";

    // Menghitung profit per tabel
    // Tabel BF1
    const cell1Row1TabelBF1 = tabelBF1.rows[1].cells[1];
    const cell1Row2TabelBF1 = tabelBF1.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF1 = parseInt(cell1Row1TabelBF1.textContent);
    const nilaiTeksCell1Row2TabelBF1 = parseInt(cell1Row2TabelBF1.textContent);
    const profitTabelBF1 = nilaiTeksCell1Row1TabelBF1 + nilaiTeksCell1Row2TabelBF1;
    if (profitTabelBF1 > totalProfitTerbesar) {
        totalProfitTerbesar = profitTabelBF1;
        tabelBFProfitTerbesar = "tabelBF1";
    }

    // Tabel BF2
    const cell1Row1TabelBF2 = tabelBF2.rows[1].cells[1];
    const cell1Row2TabelBF2 = tabelBF2.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF2 = parseInt(cell1Row1TabelBF2.textContent);
    const nilaiTeksCell1Row2TabelBF2 = parseInt(cell1Row2TabelBF2.textContent);
    const profitTabelBF2 = nilaiTeksCell1Row1TabelBF2 + nilaiTeksCell1Row2TabelBF2;
    if (profitTabelBF2 > totalProfitTerbesar) {
        totalProfitTerbesar = profitTabelBF2;
        tabelBFProfitTerbesar = "tabelBF2";
    }

    // Tabel BF3
    const cell1Row1TabelBF3 = tabelBF3.rows[1].cells[1];
    const cell1Row2TabelBF3 = tabelBF3.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF3 = parseInt(cell1Row1TabelBF3.textContent);
    const nilaiTeksCell1Row2TabelBF3 = parseInt(cell1Row2TabelBF3.textContent);
    const profitTabelBF3 = nilaiTeksCell1Row1TabelBF3 + nilaiTeksCell1Row2TabelBF3;
    if (profitTabelBF3 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF3;
    tabelBFProfitTerbesar = "tabelBF3";
    }

    // Tabel BF4
    const cell1Row1TabelBF4 = tabelBF4.rows[1].cells[1];
    const cell1Row2TabelBF4 = tabelBF4.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF4 = parseInt(cell1Row1TabelBF4.textContent);
    const nilaiTeksCell1Row2TabelBF4 = parseInt(cell1Row2TabelBF4.textContent);
    const profitTabelBF4 = nilaiTeksCell1Row1TabelBF4 + nilaiTeksCell1Row2TabelBF4;
    if (profitTabelBF4 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF4;
    tabelBFProfitTerbesar = "tabelBF4";
    }

    // Tabel BF5
    const cell1Row1TabelBF5 = tabelBF5.rows[1].cells[1];
    const cell1Row2TabelBF5 = tabelBF5.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF5 = parseInt(cell1Row1TabelBF5.textContent);
    const nilaiTeksCell1Row2TabelBF5 = parseInt(cell1Row2TabelBF5.textContent);
    const profitTabelBF5 = nilaiTeksCell1Row1TabelBF5 + nilaiTeksCell1Row2TabelBF5;
    if (profitTabelBF5 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF5;
    tabelBFProfitTerbesar = "tabelBF5";
    }

    // Tabel BF6
    const cell1Row1TabelBF6 = tabelBF6.rows[1].cells[1];
    const cell1Row2TabelBF6 = tabelBF6.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF6 = parseInt(cell1Row1TabelBF6.textContent);
    const nilaiTeksCell1Row2TabelBF6 = parseInt(cell1Row2TabelBF6.textContent);
    const profitTabelBF6 = nilaiTeksCell1Row1TabelBF6 + nilaiTeksCell1Row2TabelBF6;
    if (profitTabelBF6 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF6;
    tabelBFProfitTerbesar = "tabelBF6";
    }
    
    // Mengidentifikasi tabel terpilih
    let tabelTerpilih;

    if (tabelBFProfitTerbesar === "tabelBF1") {
        tabelTerpilih = tabelBF1;
    } else if (tabelBFProfitTerbesar === "tabelBF2") {
        tabelTerpilih = tabelBF2;
    } else if (tabelBFProfitTerbesar === "tabelBF3") {
        tabelTerpilih = tabelBF3;
    } else if (tabelBFProfitTerbesar === "tabelBF4") {
        tabelTerpilih = tabelBF4;
    } else if (tabelBFProfitTerbesar === "tabelBF5") {
        tabelTerpilih = tabelBF5;
    } else {
        tabelTerpilih = tabelBF6;
    }

    // Mengambil cell 0 dari row 1 dan 2
    const cell0Row2TabelTerpilih = tabelTerpilih.rows[1].cells[0];
    const cell0Row1TabelTerpilih = tabelTerpilih.rows[2].cells[0];
    const nilaiTeksCell0Row1TabelTerpilih = cell0Row1TabelTerpilih.textContent;
    const nilaiTeksCell0Row2TabelTerpilih = cell0Row2TabelTerpilih.textContent;
    
    // Output Akhir
    var output = "Barang Yang Terpilih Untuk Diberi Diskon : " + nilaiTeksCell0Row1TabelTerpilih + " dan " + nilaiTeksCell0Row2TabelTerpilih
    document.getElementById("BarangAkhirBF").value = output;
}

/* (TOMBOL) Fungsi Mencari Total Profit */
function ProfitAkhirBF() {
    // Definisikan variabel Tabel 1-6
    const tabelBF1 = document.getElementById("tabelBF1");
    const tabelBF2 = document.getElementById("tabelBF2");
    const tabelBF3 = document.getElementById("tabelBF3");
    const tabelBF4 = document.getElementById("tabelBF4");
    const tabelBF5 = document.getElementById("tabelBF5");
    const tabelBF6 = document.getElementById("tabelBF6");

    let totalProfitTerbesar = 0;
    let tabelBFProfitTerbesar = "";

    // Menghitung profit per tabel
    // Tabel BF1
    const cell1Row1TabelBF1 = tabelBF1.rows[1].cells[1];
    const cell1Row2TabelBF1 = tabelBF1.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF1 = parseInt(cell1Row1TabelBF1.textContent);
    const nilaiTeksCell1Row2TabelBF1 = parseInt(cell1Row2TabelBF1.textContent);
    const profitTabelBF1 = nilaiTeksCell1Row1TabelBF1 + nilaiTeksCell1Row2TabelBF1;
    if (profitTabelBF1 > totalProfitTerbesar) {
        totalProfitTerbesar = profitTabelBF1;
    }

    // Tabel BF2
    const cell1Row1TabelBF2 = tabelBF2.rows[1].cells[1];
    const cell1Row2TabelBF2 = tabelBF2.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF2 = parseInt(cell1Row1TabelBF2.textContent);
    const nilaiTeksCell1Row2TabelBF2 = parseInt(cell1Row2TabelBF2.textContent);
    const profitTabelBF2 = nilaiTeksCell1Row1TabelBF2 + nilaiTeksCell1Row2TabelBF2;
    if (profitTabelBF2 > totalProfitTerbesar) {
        totalProfitTerbesar = profitTabelBF2;
    }

    // Tabel BF3
    const cell1Row1TabelBF3 = tabelBF3.rows[1].cells[1];
    const cell1Row2TabelBF3 = tabelBF3.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF3 = parseInt(cell1Row1TabelBF3.textContent);
    const nilaiTeksCell1Row2TabelBF3 = parseInt(cell1Row2TabelBF3.textContent);
    const profitTabelBF3 = nilaiTeksCell1Row1TabelBF3 + nilaiTeksCell1Row2TabelBF3;
    if (profitTabelBF3 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF3;
    }

    // Tabel BF4
    const cell1Row1TabelBF4 = tabelBF4.rows[1].cells[1];
    const cell1Row2TabelBF4 = tabelBF4.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF4 = parseInt(cell1Row1TabelBF4.textContent);
    const nilaiTeksCell1Row2TabelBF4 = parseInt(cell1Row2TabelBF4.textContent);
    const profitTabelBF4 = nilaiTeksCell1Row1TabelBF4 + nilaiTeksCell1Row2TabelBF4;
    if (profitTabelBF4 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF4;
    }

    // Tabel BF5
    const cell1Row1TabelBF5 = tabelBF5.rows[1].cells[1];
    const cell1Row2TabelBF5 = tabelBF5.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF5 = parseInt(cell1Row1TabelBF5.textContent);
    const nilaiTeksCell1Row2TabelBF5 = parseInt(cell1Row2TabelBF5.textContent);
    const profitTabelBF5 = nilaiTeksCell1Row1TabelBF5 + nilaiTeksCell1Row2TabelBF5;
    if (profitTabelBF5 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF5;
    }

    // Tabel BF6
    const cell1Row1TabelBF6 = tabelBF6.rows[1].cells[1];
    const cell1Row2TabelBF6 = tabelBF6.rows[2].cells[1];
    const nilaiTeksCell1Row1TabelBF6 = parseInt(cell1Row1TabelBF6.textContent);
    const nilaiTeksCell1Row2TabelBF6 = parseInt(cell1Row2TabelBF6.textContent);
    const profitTabelBF6 = nilaiTeksCell1Row1TabelBF6 + nilaiTeksCell1Row2TabelBF6;
    if (profitTabelBF6 > totalProfitTerbesar) {
    totalProfitTerbesar = profitTabelBF6;
    }

    // Output Akhir
    var output = "Total Profit Setelah Diskon : " + totalProfitTerbesar
    document.getElementById("ProfitAkhirBF").value = output;
}

/* (TOMBOL) Fungsi Mencari Waktu Eksekusi Akhir */
function waktuAkhirBF() {
    const start = performance.now()

    /* 4 fungsi yang akan dihitung */
    hitungBruteForce()
    hitungBruteForce2()
    BarangAkhirBF()
    ProfitAkhirBF()

    const end = performance.now()
    const executionTime = end - start
    var waktu = executionTime.toFixed(18)
    var output = "Waktu Eksekusi : " + waktu
    document.getElementById("waktuAkhirBF").value = output // output waktu eksekusi akhir
}