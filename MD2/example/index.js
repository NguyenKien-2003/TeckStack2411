const pet = {
    type : "cho",
    name : {
        ten : "vang"
    }
    
}
Object.freeze(pet)
pet.name.ten = "meo"
console.log(pet.name.ten)