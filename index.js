const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(records){
//   debugger
console.log("I am here", football)
console.log("This is records", records)
const football = records.find(record => {return record.result === "W"} )
return !!football ? football.year : undefined
};
// superbowlWin = (records) => {console.log("records")}
// [1,3,5,6,8].find(function(e) { return e % 2 === 0 })
