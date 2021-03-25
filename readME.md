# API automation

**A BDD based API automation framework based on JAVASCRIPT**

**Libraries used**

1. [ya-done-api](https://www.npmjs.com/package/ya-done-api/v/1.0.0)
2. [mocha](https://www.npmjs.com/package/mocha)
3. [expect]()
4. [email-validator](https://www.npmjs.com/package/email-validator)
5. [mochawesome](https://www.npmjs.com/package/mochawesome)

**Directory Structure**

```
api-calls
    ├─api-calls.js
helper
    ├─helper.js
features
    ├─features.feature
steps
    ├─given
    |    ├─lib
    |    |   ├─givenSteps.js
    |    ├─index.js
    ├─when
    |    ├─lib
    |    |   ├─whenSteps.js
    |    ├─index.js
    ├─then
    |    ├─lib
    |    |   ├─thenSteps.js
    |    ├─index.js
    ├─index.js
index.js
package.json
```

**Install and Run**

```js
1. clone the repository
2. install all the packages using `npm  i`
3. Run the tests using the command `npm  test` or `npm t`
```

**Sample results**

Pass Scenario:

![Alt text](passResult.png?raw=true "result")

Fail Scenario:

![Alt text](failureResult.png?raw=true "result")
