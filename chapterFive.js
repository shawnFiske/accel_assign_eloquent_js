//Flattening
var twoDementionArray = [[1, 2, 3],[4, 5, 6],[7, 8, 9],[10, 11, 12]];

var oneDementionArray = twoDementionArray.reduce(function (prev, next) {
  return prev.concat(next) 
});

console.log(oneDementionArray);

//load ancestry file
var ancestry = JSON.parse(ANCESTRY_FILE);
//console.log(ancestry.length);

//Mother Child age difference
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function average(array) {
  function plus(a, b) {return a + b};
  return array.reduce(plus) / array.length;
}

var ageList = [];
ancestry.forEach(function (person) {
  if(person.mother != null){
    if(byName[person.mother] != undefined) {
      ageList.push(person.born - byName[person.mother].born);
    }
  }
});

console.log("Average Mothers Age: " + average(ageList));

//Historical Life Expectancy
// Math.ceil(person.died/100)
// 
function byCentury(century) {

  var ageList = [];
  ancestry.forEach(function (person) {
    var personCentury = Math.ceil(person.died/100);
    if(century == personCentury){
      ageList.push(person.died - person.born);
    }
  });

  if(ageList.length <= 0){
    return "No data for the " + century + "th century";
  }

  return average(ageList);
}

console.log("15th Century: " + byCentury(15));
console.log("16th Century: " + byCentury(16));
console.log("17th Century: " + byCentury(17));
console.log("18th Century: " + byCentury(18));
console.log("19th Century: " + byCentury(19));
console.log("20th Century: " + byCentury(20));