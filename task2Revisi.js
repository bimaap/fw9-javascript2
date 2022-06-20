const searchName = (find, max, cb) => {
    const names = [
        'Abigail', 'Alexandra', 'Alison', 'Amanda',
        'Angela', 'Bella', 'Carol', 'Caroline',
        'Carolyn', 'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ]
    const nameFilter = names.filter(e => {
        return e.toLowerCase().indexOf(find.toLowerCase()) !== -1
    })
    cb(nameFilter.slice(0, max === null || max === 0? (nameFilter.length):max))
}

const showName = (data) => {
    console.log(data);
}

searchName("ab", 1, showName)