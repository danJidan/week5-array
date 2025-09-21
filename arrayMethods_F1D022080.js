// Nama: Muhammad Zidan Azzaki
// NIM: F1D022080

const dataDiri = [
  'zidan', 'azzaki', 'f1d0', '22080', 'nugas', 'lombok',
  'ngopi', 'game', 'musik', 'jalan', 'nonton',
  'mabar', 'turu', 'badminton', 'teknologi', 'ngoding',
  'kuliah', 'pweb', 'labdigital', 'kucing', 'miata', 'mazda'
];

const arrayHurufBesar = dataDiri.map((kata) => {
  return kata.toUpperCase();
});
console.log("Array toUpperCase:", arrayHurufBesar);

const kataPanjangLebihDari5 = dataDiri.filter((kata) => {
  return kata.length > 5;
});
console.log("Array filter (kata > 5):", kataPanjangLebihDari5);

const totalPanjangKata = dataDiri.reduce((total, kata) => {
  return total + kata.length;
}, 0);
console.log("Array reduced (total panjang kata):", totalPanjangKata);

const kataDitemukan = dataDiri.find((kata) => {
  return kata.startsWith("b");
});
console.log("Kata yang ditemukan (berawalan 'b'):", kataDitemukan);

const apakahAdaKataSangatPanjang = dataDiri.some((kata) => {
  return kata.length > 10;
});
console.log("Apakah ada kata yang lebih panjang dari 10?:", apakahAdaKataSangatPanjang ? "ada" : "tidak ada");

const apakahAdaKataPanjang4 = dataDiri.some((kata) => {
  return kata.length > 4;
});
console.log("Apakah ada kata yang lebih panjang dari 4?:", apakahAdaKataPanjang4 ? "ada" : "tidak ada");

const apakahSemuaKataPanjang = dataDiri.every((kata) => {
  return kata.length > 4;
});
if (apakahSemuaKataPanjang) {
  console.log("Apakah semua kata lebih panjang dari 4?: iya");
} else {
  console.log("Apakah semua kata lebih panjang dari 4?: tidak");
  const kata3 = dataDiri.filter((kata) => kata.length <= 4);
  console.log("Kata yang panjangnya kurang dari atau sama dengan 4:", kata3);
}