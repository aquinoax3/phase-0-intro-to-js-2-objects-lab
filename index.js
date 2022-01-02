// Write your solution in this file!

const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};


function updateEmployeeWithKeyAndValue(Object, key, value) {
    const newObj = {...Object};

    newObj[key] = value;

    return newObj;

};

function destructivelyUpdateEmployeeWithKeyAndValue(Object, key, value) {
    
    Object [key] = value;

    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...Object};

    delete newObj.key;
    
    return newObj;


};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    
    return employee ;

     
}