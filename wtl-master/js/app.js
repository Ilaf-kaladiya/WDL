$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value))
		{
			alert("Inavlid Roll No.");
			this.value="";
			$(this).focus();
		}
	});
	$('#sname').on('keypress',function(e){

		if(/[^a-zA-Z ]/.test(e.key)){
			alert("Invalid Name.Only alphabets and spaces is allowed");
			this.value="";
			$(this).focus();
			return false;
		}
	});
	$('#address').on('blur',function(){
		this.value.length<=50&&>=150;
	})
});