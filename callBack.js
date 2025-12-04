// function getUserDetails(id,getUserSubjects){
//     console.log("getting user details by user Id:",id);
//     getUserSubjects({userroll:6181})
// };
// function getUserSubjects(userRoll,getUserMarks){
//     console.log("getting user subjects by user roll:",userRoll);
//     getUserMarks({SubId:"eng-1"})
// };
// function getUserMarks(userSubId){
//     console.log("geeting user marks by sub id",userSubId);
// };
// getUserDetails("123",function(userRoll){
//     getUserSubjects(userRoll,funcion(userSubId){
//         getUserMarks(userSubId)
//     })
// });
function getUserDetails(id, getUserSubjects) {
    console.log("getting user details by user Id:", id);
    getUserSubjects({ userroll: 6181 });
}

function getUserSubjects(userRoll, getUserMarks) {
    console.log("getting user subjects by user roll:", userRoll);
    getUserMarks({ SubId: "eng-1" });
}

function getUserMarks(userSubId) {
    console.log("getting user marks by sub id:", userSubId);
}

getUserDetails("123", function (userRoll) {
    getUserSubjects(userRoll, function (userSubId) {
        getUserMarks(userSubId);
    });
});
