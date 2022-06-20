const searchName = (key, data, cb) => {
    let array = []
    let counter = 0
    let hasil = []
    const names = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda',
        'Angela', 'Bella', 'Carol', 'Caroline',
        'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    for(let i = 0; i <= names.length - 1; i++){
        for(let k = 0; k <= key.length - 1; k++){
            for(let j = 0; j <= names[i].length - 1; j++){
                if(names[i].toLowerCase().substr(j, 1) == key.toLowerCase().substr(k, 1)){
                    counter++
                    break
                }
            }
        }
        if(counter == key.length){
            if(array.length == 0){
                array[0] =  names[i]
            }else{
                array[array.length] =  names[i]
            }
        }
        counter = 0;
    }
    for(let i = 0; i <= data - 1; i++){
        if(array[i]){
            hasil[i] = array[i]
        }
    }
    cb(hasil)
}

const showName = (data) => {
    console.log(data);
}

searchName("b", 2, showName)