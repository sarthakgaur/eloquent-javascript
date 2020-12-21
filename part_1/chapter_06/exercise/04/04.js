/* Borrowing a Method */

function borrowingAMethod() {
    let obj = {};
    obj.a = 1;
    obj.hasOwnProperty = 2;
    console.log(obj);

    // In order to call hasOwnProperty, we can do the following:

    console.log(Object.hasOwnProperty.call(obj, "a"));
}

borrowingAMethod();
