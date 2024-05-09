// what is the output

for (let i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
} // output ->>> 1,2,3,4,5 let is a block scope


for (var i=0; i<5; i++) {
    setTimeout(function() {
        console.log(i)
    }, i * 1000);
} // output ->>> 5,5,5,5,5, var is a gloabla scope