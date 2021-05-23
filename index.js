/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
function createEmployeeRecord(array){
    let obj = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}

function createEmployeeRecords(arrays){
    let objArray = [];
    arrays.forEach(x => objArray.push(createEmployeeRecord(x)));
    return objArray;
}

function createTimeInEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let obj = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour, 10)
    }
    this.timeInEvents.push(obj)
    return this
}

function createTimeOutEvent(dateStamp){
    let [date, hour] = dateStamp.split(' ')
    let obj = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour, 10)
    }
    this.timeOutEvents.push(obj)
    return this
}

function hoursWorkedOnDate(date){
    let inTime = this.timeInEvents.find(x => x.date === date)
    let outTime = this.timeOutEvents.find(x => x.date === date)
    return (outTime.hour - inTime.hour) / 100
}

// function wagesEarnedOnDate(date){
//     return hoursWorkedOnDate(date) * this.payPerHour
// }   
let wagesEarnedOnDate = function(date){
    let wages = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
    return parseFloat(wages.toString())
}

function findEmployeeByFirstName(array, name){
    return array.find(x => x.firstName === name)
}

function calculatePayroll(array){
    return array.reduce(function(i, employee){
        return i + allWagesFor.call(employee)
    }, 0)
}