const name = {
  firstName: 'Veshal',
  lastName: 'Raj',
}
const anotherName = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
}

let fullName = function(hometown, state) {
  console.log(this.firstName+ ' '+ this.lastName + " from "+ hometown +', '+state)
}

fullName.call(name,'Pattambi', 'Kerala')
fullName.apply(anotherName, ['Mumbai', 'Maharastra'])


// Bind method returns a function. we can call this function whenver we want.
let printFullName = fullName.bind(name, 'Pattambi', 'kerala')
console.log(printFullName)
printFullName()