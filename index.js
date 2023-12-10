const name = {
  firstName: 'Veshal',
  lastName: 'Raj',
}
const anotherName = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
}

let fullName = function() {
  console.log(this.firstName+ ' '+ this.lastName)
}

fullName.call(name)
fullName.call(anotherName)
