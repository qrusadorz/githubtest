const createTestCafe = require('testcafe');
let runner = null;
let testcafe = null;

// createTestCafe()
// createTestCafe('localhost', 1337, 1338)
createTestCafe('', 1337, 1338)
    .then(tc => {
        testcafe = tc;
        runner = testcafe.createRunner();

        return testcafe.createBrowserConnection();
    })
    .then(remoteConnection => {

        // Outputs remoteConnection.url so that it can be visited from the remote browser.
        console.log(remoteConnection.url);

        remoteConnection.once('ready', () => {
            runner
                .src([
                    'test/tests/top.js',
                    'test/tests/itemDetail.js',
                ])
                .browsers(remoteConnection)
                .run()
                .then(failedCount => {
                    console.log(failedCount);
                    testcafe.close();
                })
                .catch(error => { /* ... */ });
        });
    });
