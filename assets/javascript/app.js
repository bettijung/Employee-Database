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

/*$( document ).ready( 
	database.on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    $(".full-member-list").append(createUserDiv(snapshot.val()));
}, function(err) {
    // Handle errors
    console.log("Error: ", err.code);
}
)
	);*/

$("#add-user").on("click", function(event) {
event.preventDefault()


database.push({
    
  
empName: $("#employee-name").val().trim(),
role: $("#employee-role").val().trim(),
startDate: $("#employee-date").val().trim(),
monthlyRate: $("#employee-rate").val().trim()


  });

/*empName = $("#employee-name").val().trim(),
role = $("#employee-role").val().trim(),
startDate = $("#employee-date").val().trim(),
monthlyRate = $("#employee-rate").val().trim();*/

//console.log() the snapshot
database.on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    /*$("#full-member-list").append(createUserDiv(snapshot.val()));*/
}, function(err) {
    // Handle errors
    console.log("Error: ", err.code);
});

database.on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    $(".full-member-list").append(createUserDiv(snapshot.val()));
}, function(err) {
    // Handle errors
    console.log("Error: ", err.code);
});

//calculate months worked function

//calculate total billed function

//append user info to display div






/*empName = $("#empPlaceholder").val().trim()
role = $("#empPlaceholder").val().trim()
empName = $("#empPlaceholder").val().trim()
empName = $("#empPlaceholder").val().trim()
empName = $("#empPlaceholder").val().trim()
empName = $("#empPlaceholder").val().trim()*/



});

function createUserDiv(user) {

var container = $("tbody").addClass("full-member-list") 

var row = $("<tr>")

var nameRow = $("<td>").text(user.empName)

var roleRow = $("<td>").text(user.role)

var startDateRow = $("<td>").text(user.startDate)

var monthsWorkedRow = $("<td>").text(user.startDate)

var MonthlyRateRow = $("<td>").text(user.monthlyRate)

row.append(nameRow, roleRow, startDateRow, monthsWorkedRow, MonthlyRateRow);

container.append(row);

};