/*
YQ== a
"Yg== b
Yw== c
ZA== d
RmFsc2U= False
VHJ1ZQ== True
*/

console.log("BR's FindAns has been loaded!");

var answers = [];
for (var i = 1; i < 61; ++i) {
  answers[i] = document.getElementById(`correct_${i}`).value;
}
console.log(answers);

for (var i = 1; i < 61; ++i) {
  var ans = answers[i];
  if (ans == "YQ==") var selector = 1;
  else if (ans == "Yg==") var selector = 2;
  else if (ans == "Yw==") var selector = 3;
  else if (ans == "ZA==") var selector = 4;
  else if (ans == "VHJ1ZQ==") var selector = 1;
  else if (ans == "RmFsc2U=") var selector = 2;
  var highlight = (document.getElementById(`${i}_${selector}`).checked = true);
}
