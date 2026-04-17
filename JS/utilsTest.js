
import print, {name, add as sum, test, user, subtractTwoNums as sub} from './utils.js';
//import { getRandomNumber } from './utilForNumber.js' //Valid
import * as numUtil from './utilForNumber.js';//above line no. 3 can be written like this


console.log(name);//Tom
//console.log(add(25, 25));//Allowed if --> 'as' with the another name is not given
// 'as' is only allowed for 'name', 'add', 'test' not for 'print'
console.log(sum(25, 25));//50

test();//Test method

print();//Print something..

//console.log(getRandomNumber());//100 --> valid

console.log(numUtil.getRandomNumber());//100

function rest(){
    console.log('rest() --> method');
}

console.log(user.name);//Sachin

sub(100, 70);//30

export { rest };
