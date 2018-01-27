//test
// dbRef.set()
//dbRef.push()
//on("child_added", function (snapshot) {

//	console.log(snapshot.val())						}) 
//
//displayMostRecent function
//createUserDiv function

 
//Setup firebase
 var config = {
    apiKey: "AIzaSyALDp2zMkp3pNlKNijboxNV1Rmho09sj_M",
    authDomain: "employee-data-management-7c2e7.firebaseapp.com",
    databaseURL: "https://employee-data-management-7c2e7.firebaseio.com",
    projectId: "employee-data-management-7c2e7",
    storageBucket: "employee-data-management-7c2e7.appspot.com",
    messagingSenderId: "478472806940"
  };
  firebase.initializeApp(config);
//variables for differant field values
var empName 
var role
var startDate
var dateAdded
var monthlyRate
var monthsWorked
var totalBilled


var database = firebase.database().ref('recentUserList');



	

$("#add-user").on("click", function(event) {
event.preventDefault()



database.push({
    
  
empName: $("#employee-name").val().trim(),
role: $("#employee-role").val().trim(),
startDate: $("#employee-date").val().trim(),
monthlyRate: $("#employee-rate").val().trim()


  });

/*

var convertedMonthsWorked = moment(startDate).diff(moment().unix("X"), "months") + ' months'

console.log(convertedMonthsWorked)

console.log(moment(dateEntered).diff(moment(), "months") + ' months')*/





//console.log() the snapshot


database.on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
  const newEmp = snapshot.val() 
console.log(moment(newEmp.startDate))
 console.log(newEmp.startDate)

 newEmp.monthsWorked = moment().diff(moment(newEmp.startDate, "YYYY/MM/DD"), "months");
 
 console.log(newEmp.monthsWorked)
 


newEmp.totalBilled = newEmp.monthsWorked * newEmp.monthlyRate
console.log(newEmp.totalBilled)

    console.log(snapshot.val());
 $(".full-member-list").append(createUserDiv(newEmp))
}, function(err) {
    // Handle errors
    console.log("Error: ", err.code);
});

//clear 
$("#employee-name, #employee-role, #employee-date, #employee-rate").val("")

});

function createUserDiv(user) {

var container = $("tbody").addClass("full-member-list") 

var row = $("<tr>")

var nameRow = $("<td>").text(user.empName)

var roleRow = $("<td>").text(user.role)

var startDateRow = $("<td>").text(user.startDate)

var monthsWorkedRow = $("<td>").text(user.monthsWorked)

var MonthlyRateRow = $("<td>").text(user.monthlyRate)

var totalBilledRow = $("<td>").text(user.totalBilled)

row.append(nameRow, roleRow, startDateRow, monthsWorkedRow, MonthlyRateRow, totalBilledRow);

container.append(row);

};

