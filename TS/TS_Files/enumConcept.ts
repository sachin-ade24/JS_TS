
//enum is collection of constants:

enum BROWSERS{
    CHROME = 'chrome',
    FIREFOX = 'firefox',
    EDGE = 'edge',
    SAFARI = 'safari'
};

console.log(BROWSERS.CHROME);

enum ENVIRONMENTS{
    QA = 'qa',
    UAT = 'uat',
    STAGE = 'stage',
    PRODUCTION = 'prod'
};

export {BROWSERS, ENVIRONMENTS};
