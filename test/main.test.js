QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('TEST volume', assert => {
  assert.equal(volumefunjs(1, 1, 1), 1, 'Positive integers')
  assert.equal(volumefunjs(-1, -1,2), 2, 'Negative integers')
  assert.equal(volumefunjs(-10, 10,1), -100, 'Mixed')
  assert.equal(volumefunjs(5, 3,7), 105, 'Default value')
  assert.equal(volumefunjs(2, 2,2), 8, 'even numbers')
})
// QUnit.test('TEST add', assert => {
//   assert.equal(add(1, 1), 2, 'Positive integers')
//   assert.equal(add(-1, -1), -2, 'Negative integers')
//   assert.equal(add(-10, 10), 0, 'Mixed')
// })

QUnit.config.autostart = false  // sync = false; start after loading html

// This script, called when the page loads, reaches out to the app that we wish to test
// It basically pastes the contents of that page into *this* web page, whew! This shows
// how we manipulate the DOM.

// The openingTag and closingTag specify which part of the original app's web page that we grab here
// Pretty slick eh?

window.addEventListener('load', () => {
  // const appURL = '../Operation.html' // reach out to the html for the app (js-gui)
  // const openingTag = '<main class="container mt-5 flex-fill">'
  // const closingTag = '</main>' // go grab it!
  // fetch(appURL, { method: 'GET' })
  //   .then(response => {
  //     return response.text() // returns promise
  //   })
  //   .then(txt => {                
  //     const start = txt.indexOf(openingTag)
  //     const end = txt.indexOf(closingTag) + closingTag.length
  //     const html = txt.substring(start, end) // we only want part of the page
  //     const qunitFixtureBody = document.querySelector('#qunit-fixture')
  //     qunitFixtureBody.innerHTML = html // put the page into the DOM - the second div associated with this page
  //     console.info(qunitFixtureBody) // print it out so we can see it (it doesn't get inserted into the page)
  //     QUnit.start() // start the actual testing - it finds and runs both the tests, defined in QUnit.test()
  //   })
  //   .catch(error => {
  //     console.error('error:', error);
  //     QUnit.start()
  //   })
  QUnit.start()
})



