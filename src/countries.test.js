import { getCountry } from './countries.js'

// Run tests
evaluate([
  // Lowercase
  test(_ => getCountry('u.k.').code, 'GB'),
  // Dot elimination
  test(_ => getCountry('Usa').code, 'US'),

])



// Evaluate test outcomes
function evaluate(tests) {
  if(tests.reduce( (t1,t2) => t1 || t2 )) {
    throw new Error('[!] Tests failed')
  }

  console.log(`All tests [${tests.length}] passed.`)
}

// Test
function test(run, expected) {
  let result
  try {
    result = run()
    if (result !== expected) {
      throw new Error(`Failed :\n${run.toString()}\n> Expected: ${typeof expected} ${expected}\n> Result: ${typeof result} ${result}`)
    }
  }
  catch(ex) {
    console.error(ex)
    return 1
  }
}
