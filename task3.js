
let hasil = []

const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if(nilaiAwal > nilaiAkhir){
        console.log("Nilai akhir harus lebih besar dari nilai awal.")
    }else{
        if(dataArray.length <= 5){
            console.log("Jumlah angka dalam dataArray harus lebih dari 5.")
        }else{
            for(let i = 0; i <= dataArray.length - 1; i++){
                if(dataArray[i] >= nilaiAwal && dataArray[i] <= nilaiAkhir){
                    if(hasil.length == 0){
                        hasil[0] = dataArray[i]
                    }else{
                        hasil[hasil.length] = dataArray[i]
                    }
                }
            }
            console.log(hasil.sort(function(a, b){return a - b}))
        }
    }
}

SeleksiNilai(2, 14, [2, 25, 4, 14, 17, 30, 8])