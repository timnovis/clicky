const myClickyInstance = new Clicky()

myClickyInstance.setOptions({
  threshold: 10,
  callback: () => {
    alert(`I have clicked many times!`)
  }
})