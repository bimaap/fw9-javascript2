const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal.")
    }else{
        if(dataArray.length <= 5){
            console.log("Jumlah angka dalam dataArray harus lebih dari 5.")
        }else{
            const dataArrayFilter = dataArray.filter(e => {
                return e >= nilaiAwal && e <= nilaiAkhir
            })
            console.log(dataArrayFilter.sort(function(a, b){return a - b}));
        }
    }
}

SeleksiNilai(2, 14, [2, 25, 4, 14, 17, 30, 8])