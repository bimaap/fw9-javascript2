
// 1. Array.isArray(value)
// Build In ini berfungsi untuk mengecek apakah variabel yang di inputkan merupakan array variable atau tidak. Jika array variabel maka akan menghasilkan true, jika tidak maka menghasilkan false.
// let data = [1, 2, 3];
// let data2 = {name: "Bima"}
// console.log(Array.isArray(data));//true
// console.log(Array.isArray(data2));//false

// 2. array.reverse()
// Build In ini berfungsi untuk membalik struktur array.
// let data = [1, 2, 3];
// console.log(data.reverse());//[3, 2, 1]

// 3. array.indexOf()
// Build In ini berfungsi untuk mencari element yang ada pada array dan menghasilkan nomor index element tersebut.
// const array = [2, 9, 10];
// console.log(array.indexOf(9))//1
// console.log(array.indexOf(6))//-1

// 4. Function.length
// Build In ini berfungsi untuk menghitung jumlah parameter yang dimasukkan dalam function tersebut.
// function func1() {}
// function func2(a, b) {}
// console.log(func1.length);//0
// console.log(func2.length);//2

// 5. JSON.parse(value)
// Build In ini berfungsi untuk merubah value object yang masih berbentuk type string menjadi type object.
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);
// console.log(obj.count);

// 6. Map()
// Build In ini berfungsi untuk menyimpan elemen dan disimpan berpasangan (key dan value).
// const map1 = new Map();

// 7. map.set(key, value)
// Build In ini berfungsi untuk menambahkan elemen baru kedalam map yang sudah dibuat dengan spesifikasi key dan value.
// const map1 = new Map();
// map1.set('a', [1, 2, 3]);
// console.log(map1);//Map(1) { 'a' => [ 1, 2, 3 ] }

// 8. map.delete(key)
// Build In ini berfungsi untuk menghapus elemen yang ada di map dengan spesifikasi key.
// console.log(map1.delete('a'));//true

// 9. Math
// Build In ini berfungsi untuk yang berkaitan dengan matematika.
// let x = 2.2
// console.log(Math.floor(x));//2

// 10. Math.floor
// Build In ini berfungsi untuk membulatkan variabel integer.
// let x = 2.2
// console.log(Math.floor(x));//2