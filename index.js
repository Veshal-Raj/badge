let obj1 = {
  name: 'Veshal',
  city: 'Pattambi',
  getIntro: function () {
    console.log('my name is '+this.name+', '+'I am from '+this.city)
  }
}

let obj2 = {
  name: 'Vishal'
}


// Never do this in real world, because this creates a lot of performance issue.
obj2.__proto__ = obj1