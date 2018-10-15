function response() {
  var question = document.getElementById("question").value;

  var list = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Maybe...",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
  ];

// VALIDATE THAT A QUESTION IS ENTERED

  if (question == "") {
    document.getElementById("response").innerHTML = "You need to ask a question.";
  } else {
    var number = Math.floor(Math.random()*20);
    document.getElementById("response").innerHTML = list[number];
  }

}

// CLICK "ASK" WHEN HIT ENTER KEY

var input = document.getElementById("question");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        document.getElementById("submit").click();
    }
});
