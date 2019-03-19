const createTestCafe = require('testcafe');
let testcafe = null;

createTestCafe()
    .then(tc => {
        testcafe = tc;
        const runner = testcafe.createRunner();

        return runner
            .src([
                'test/tests/top.js',
                'test/tests/itemDetail.js',
            ])
            .browsers([
                'chrome',
                // 'firefox',
                // 'ie',
                // 'edge',
                // 'chrome:emulation:device=ipad pro;mobile=true',
                // 'chrome:emulation:device=ipad;mobile=true',
                // 'chrome:emulation:device=iphone X;mobile=true',
                // 'chrome:emulation:device=iphone 6/7/8 Plus;mobile=true',
                // 'chrome:emulation:device=iphone 6;mobile=true',
                // 'chrome:emulation:device=pixel 2;mobile=true',
            ])
            // .concurrency(3)  // 並列実行。but unsupport Edge browser.
            .screenshots('test/reports/screenshots/', true)
            .run({
                assertionTimeout: 5000,
                selectorTimeout: 5000,
                // assertionTimeout: 15000,
                // debugMode: true,
            })
            // TODO REPORT
            ;

        // sample
        // return runner.run({
        //   skipJsErrors: true,
        //   quarantineMode: true,
        //   selectorTimeout: 50000,
        //   assertionTimeout: 7000,
        //   pageLoadTimeout: 8000,
        //   speed: 0.1
        // });
    })
    .then(failedCount => {
        console.log('Tests failed:', failedCount);
        testcafe.close();
    });
