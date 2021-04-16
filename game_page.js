player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name + " : " ;
document.getElementById("player2_name").innerHTML = player2_name + " : " ;
document.getElementById("player_question").innerHTML = "Question Turn " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn " + player2_name;

function send() {
    get_Word = document.getElementById("word").value;
    word = get_Word.toLowerCase();
    char1 = word.charAt(1);
    console.log(char1);
    len = Math.floor(word.length / 2);
    char2 = word.charAt(len);
    console.log(char2);
    last = word.length - 1;
    char3 =word.charAt(last);
    rem1 = word.replace(char1 , "_");
    rem2 = rem1.replace(char2 , "_");
    rem3 = rem2.replace(char3 , "_");
    quest_word ="<h4 id='word_display'>Q " + rem3 + "</h4>";
    inputbox = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = quest_word + inputbox + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""; 
}
quest_turn = "player_1";
answer_turn = "player_2";
function check() {
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    if (answer == word){
        if(answer_turn == "player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(quest_turn == "player_1"){
        quest_turn = "player_2";
        document.getElementById("player_question").innerHTML = "question Turn " + player2_name;
    }else {
        quest_turn = "player_1";
        document.getElementById("player_question").innerHTML = "question Turn " + player1_name;
    }
    if(answer_turn == "player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn " + player2_name;
    }else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn " + player1_name;
    }
    document.getElementById("output").innerHTML = '';
}