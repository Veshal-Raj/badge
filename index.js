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
// in Apply method we need to put the arguments in an array.