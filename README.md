# Clicky

Use clicky to invoke a callback after a user has clicked around your site/application a certain amount of times.

If you feel the need (or are forced to) implement some kind of marketing modal or popup, this is a better alternative to timer based events.

## Usage

```js
const clicky = new Clicky()

clicky.setOptions({
  threshold: 10,
  callback: () => {
    alert('You have clicked 10 times!')
  }
})
```

### Options

| Option           | Description                                        | Default                                 |
|------------------|----------------------------------------------------|-----------------------------------------|
| `threshold`        | The amount of clicks until callback is invoked     | `5`                                       |
| `localStorageName` | Override the name for the localStorage item        | `_ClickyClickCounter`                     |
| `callback`         | A function to be invoked when the threshold is met | `console.log('Clicky threshold reached')` |

### API

#### - `clicky.setOptions(object)`
Takes an object of options to override any defaults

#### - `clicky.clickCount()`
Returns the current click count, even after threshold has been reached

#### - `clicky.threshold()`
Returns the set threshold

#### - `clicky.incrementClickCount(n)`
Programatically increment the click count

#### - `clicky.reset()`
Reset the counters back to 0
