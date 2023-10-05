// Tentukan angka masukan
const angka_input = 6;

// Loop melalui angka dari 1 hingga angka masukan
for (let i = 1; i <= angka_input; i++) {
  // Hitung kubus dari angka saat ini
  const kubus = i ** 3;
  
  // Cetak angka saat ini dan kubusnya
  console.log(`Angka Sekarang adalah ${i} dan kubusnya adalah ${kubus}`);
}
