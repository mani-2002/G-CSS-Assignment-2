document.addEventListener("DOMContentLoaded", function() 
{
	var datepicker = document.getElementById("datepicker");
    var displayDate = document.getElementById("displayDate");
    datepicker.addEventListener("input", function() 
	{
      var selectedDate = datepicker.value;
      displayDate.textContent = selectedDate;
    });
  });

var tele = document.querySelector('#telle');
tele.addEventListener('keyup', function(e){
    if (event.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
        tele.value += '-';
    }
});
