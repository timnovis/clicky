function Clicky () {

  // Default options. Can be overridden using the setOptions method
  this.options = {
    localStorageName: '_ClickyClickCounter',
    threshold: 5,
    callback: function () {
      console.log('Clicky threshold reached')
    }
  }

  // Allows user/developer to override the default options
  this.setOptions = (object) => {
    this.options = {
      ...this.options,
      ...object
    }
  }

  // Return current click count
  this.clickCount = () => {
    return parseInt(localStorage.getItem(this.options.localStorageName), 10)
  }

  // Return the set threshold
  this.threshold = () => {
    return parseInt(this.options.threshold, 10)
  }

  // Increment the click count
  this.incrementClickCount = (n = 1) => {
    localStorage.setItem(this.options.localStorageName, this.clickCount() + n)
  }

  // Reset the click count
  this.reset = () => {
    Object.keys(localStorage).forEach(item => {
      if (item.indexOf(this.options.localStorageName) > -1) {
        localStorage.removeItem(item)
      }
    })
  }

  document.addEventListener('click', () => {
    if (isNaN(this.clickCount())) {
      // If localstorage item is not there, add it
      localStorage.setItem(this.options.localStorageName, 1)
    } else if (this.clickCount() === this.threshold() - 1) {
      // If threshold has been reached, invoke callback + inc
      this.incrementClickCount()
      this.options.callback()
    } else {
      this.incrementClickCount()
    }
  })

}

module.exports = Clicky
