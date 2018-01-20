//test
// dbRef.set()
//dbRef.push()
//on("child_added", function (snapshot) {

//	console.log(snapshot.val())						}) 
//

 
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


var database = firebase.database().ref()


$(".test").on("click", function(event) {
event.preventDefault()

var testNumb = 2
database.push({
    
  
empName: /*$("#empPlaceholder").val().trim()*/ testNumb
/*role:*/ /*$("#empPlaceholder").val().trim()*/
/*startDate:*/ /*$("#empPlaceholder").val().trim()*/
/*monthlyRate:*/ /*$("#empPlaceholder").val().trim()*/


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



})

