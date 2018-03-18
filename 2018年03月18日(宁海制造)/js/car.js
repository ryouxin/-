$(function() {
    moveCar();
});
var moveCar = function() {
    setTimeout(function() {

        // var _left = $('#_carAn').position().left;
        if(_TIMER<200){
            console.log($('#_carAn').position().left);
            // $('#_carAn').css({'left':$('#_carAn').position().left+_TIMER,'top':$('#_carAn').position().top+_TIMER});
        }
		$('#_carAn').css({'left':_left});
		if(_left>500){
			$('#_carAn').css({'left':$('#_carAn').position().left+_TIMER,'top':$('#_carAn').position().top+_TIMER});
		}

		console.log($('#_carAn').position());
        moveCar();
    }, 10);
}
