const name = {
  firstName: 'Veshal',
  lastName: 'Raj',
}
const anotherName = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
}

let fullName = function(hometown) {
  console.log(this.firstName+ ' '+ this.lastName + " from "+ hometown)
}

fullName.call(name,'Pattambi')
fullName.call(anotherName, 'Mumbai')
