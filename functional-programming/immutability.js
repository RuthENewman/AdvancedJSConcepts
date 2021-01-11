// Immutability
const obj = {name: "Ruth"};
function clone(obj) {
    return {...obj} // this is pure
}

function updateToFullName(obj) {
    const obj2 = clone(obj);
    obj2.name = 'Ruth Newman';
    return obj2;
}

const updatedObject = updateToFullName(obj);
console.log(obj, updatedObject);
