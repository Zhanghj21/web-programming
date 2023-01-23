function UserName() {
    var username = document.getElementById('username');
    if (username.value === "") {
        alert("User name cannot be blank, please re-enter")
        // Judge whether the user name is empty. If it is empty, a prompt will pop up
    }
}
function Password() {
    var password = document.getElementById('password');
    if (password.value.length < 6 || password.value.length > 10) {
        alert("Password length is greater than 6 and less than 10, please re-enter");
        // Judge whether the password is between 6-10. If not, a prompt will pop up
    }
}
function Passwordcf() {
    var passwordcf = document.getElementById('passwordcf');
    if (password.value != passwordcf.value) {
        alert("The two passwords are inconsistent, please re-enter");
        // Judge whether the two passwords are consistent. If not, a prompt will pop up
    }
}
function Tell() {
    var tell = document.getElementById('tell');
    if (isNaN(tell.value)) {
        alert("Phone must be a number, please re-enter");
        // Judge whether the phone number is a number. If not, a prompt will pop up
    }
}
function Mail() {
    var mail = document.getElementById('mail');
    var email = /^([a-zA-Z\d])(\w|\-)+@[a-zA-Z\d]+\.[a-zA-Z]{2,4}$/;
    // regular expression
    if (!email.test(mail.value)) {
        alert("Email must have @, please re-enter");
        // Judge whether there is @ in the mailbox. If not, a prompt will pop up
    }
}
function gmcp() {
    var mySelect = document.getElementById("select");   //get select
    var index = mySelect.selectedIndex;   //Select the index (what is selected by the user)
    var text = mySelect.options[index].text; //Get Selected Text
    var value = mySelect.options[index].value;   //Get the selected value
    document.getElementById("show_index").innerHTML = index;//Indexes
    document.getElementById("show_text").innerHTML = text;//text
    document.getElementById("show_value").innerHTML = value;//value
    if (mySelect.options[2].selected) {  //If the third option "Perimeter" is selected
        document.getElementById("show_isSelected").innerHTML = "Selected";//Print Selected
    } else {
        document.getElementById("show_isSelected").innerHTML = "Unchecked";//Print Unchecked
    }
}