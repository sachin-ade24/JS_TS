
const testCases = [
    {name: 't1', status: 'passed', duration: 100},
    {name: 't2', status: 'failed', duration: 200},
    {name: 't3', status: 'passed', duration: 100},
    {name: 't4', status: 'failed', duration: 150}
];

// const r1 = [...testCases.filter((test)=> test['status']=='failed')];
// console.log([r1[0]['name'], r1[1]['name']]);

// function getFailedTest(array){
//     const r1 = testCases.filter((test)=> test['status']=='failed');
//     return [r1[0]['name'], r1[1]['name']];
// };

function getFailedTest(array){
    const r1 = testCases.filter((test)=> test['status']=='failed');
    return r1.map((obj)=>obj['name']);
};
console.log(getFailedTest(testCases));
