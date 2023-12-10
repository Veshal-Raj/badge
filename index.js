const name = {
  firstName: 'Veshal',
  lastName: 'Raj',
  fullName: function() {
    console.log(this.firstName+ ' '+ this.lastName)
  }
}

name.fullName()

const anotherName = {
  firstName: 'Sachin',
  lastName: 'Tendulkar'
}

// function borrowing

name.fullName.call(anotherName)