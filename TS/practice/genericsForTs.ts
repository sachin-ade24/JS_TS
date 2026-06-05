
function identity(value: number): number {
    return value;
}

function identity1<t>(val: t): t{
    return val;
}

identity1<string>('Sona Lana');
identity1<number>(100);


function pair<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}


