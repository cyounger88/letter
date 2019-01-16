$(document).ready(function(){
  $("#formLetter").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();


    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);

    $(".theLetter").show();

    event.preventDefault();
  });
});
