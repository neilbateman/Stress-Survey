
$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();
    // var values = $("input:checkbox[name=stress-signs]:checked").val()
    // alert(values);

    var SignResponses= [];
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var values = $(this).val();
      SignResponses.push(values);
    });
    var pointsigns = SignResponses.length;

    var SymptomResponses = [];
    $("input:checkbox[name=stress-symptoms]:checked").each(function(){
      var values = $(this).val();
      SymptomResponses.push(values);
    });
    var pointsymptoms = SymptomResponses.length;

    var CopingResponses = [];
    $("input:checkbox[name=stress-coping]:checked").each(function(){
      var values = $(this).val();
      CopingResponses.push(values);
    });
    var pointcoping = CopingResponses.length;

    var resultpoints = pointsigns + pointsymptoms - pointcoping;

    if (resultpoints >= 5 ) {
      var reply = "You need some help!";
    } else if (resultpoints > 2 && resultpoints < 5 ) {
      var reply = "You are a little stressed";
    } else  {
      var reply = "Keep doing what you are doing!";
    }
    $('#response').append(reply + "<br>");
  });
});
