import { BROWSERS, ENVIRONMENTS } from "./enumConcept";

console.log(BROWSERS.CHROME);//chrome
console.log(ENVIRONMENTS.QA);//qa

function launchBrowser(browser: BROWSERS){
    switch(browser.trim().toLowerCase()){
        case BROWSERS.CHROME:
            console.log(`Launch ${BROWSERS.CHROME} browser`);
            break;
        case BROWSERS.EDGE:
            console.log(`Launch ${BROWSERS.EDGE} browser`);
            break;
        case BROWSERS.FIREFOX:
            console.log(`Launch ${BROWSERS.FIREFOX} browser`);
            break;
        case BROWSERS.SAFARI:
            console.log(`Launch ${BROWSERS.SAFARI} browser`);
            break;
        default:
            break;
    }
};
launchBrowser(BROWSERS.CHROME);//Launch chrome browser

export{};//--> This tells TS that: This file is a module, not a global script.
