
//custom error classes:

class ElementError extends Error{
    constructor(message: string){
        super(message);
    };
};

class BrowserError extends Error{
    constructor(message: string){
        super(message);
    };
};

class FrameworkError extends Error{
    constructor(message: string){
        super(message);
    };
};

function launchBrowser(browser: string){
    switch(browser.trim().toLowerCase()){
        case 'chrome':
            console.log('Open chrome');
            break;
        case 'edge':
            console.log('Open edge');
            break;
        default:
            console.log('Please pass the right browser');
            throw new BrowserError('==INVALID BROWSER==');
    };
};

launchBrowser('chrome');//Open chrome
console.log('Enter the URL');
launchBrowser('IE');//BrowserError: ==INVALID BROWSER==
console.log('Enter the URL');
