let mot = 'salut mec salut salut'
let obj = {}

function strTOarray(val){
let tab = val.split(" ")
// console.log(tab)
// let b = tab.filter((key,index)=>key[index].lenght = !index).length+1
for(let word of tab){
    if(obj[word]){
        obj[word]++
    }else{
        obj[word]=1
    }
}

console.log(obj)
}

strTOarray(mot)




