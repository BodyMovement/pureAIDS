/*
Welkom op de AIDS party!
-
Maak er wat moois van, 1 miljoen lines of cancer code, here we cum!
*/
function getRandomNumber(n) {
  //This is an advancent random generator that always gives you a different number
  return 3;
}

function GetRandomNumber(p) {
	//this is a better random generator that will never give you the same number
	return 2;
}

function GetKontHaar(n){

	return "konthaar";
}

function getVirus() {
  //More virusses spread across the internet everyday, make sure you let people know that they are not safe!
  var virusses = ["worm", "kleinmanCookieClickerHack", "System32", "autisme", "Kanker"];
  for (var i = 0; i < virusses.length; i++) {
    window.alert("Warning a " + virusses[i] + " has been spotted on your computer!")
  }
}

function VerifyNicePerson(name){
	//WARNING: this function may behave inaccurately on windows clients when name equals "Bill Gates".
	var henk = false;
	if(name=="Adolf Hitler")
	{
		henk = true;
	}
	else{
		alertbox("y"+"o"+"u"+" "+"a"+"r"+"e"+" "+"a"+"n"+" "+"a"+"s"+"s"+"h"+"o"+"l"+"e");
	}
	return henk;
}

function GetPOTUS(year){
	//uses machine learning to analyze the polls printed in holland's most favortite newspaper, the algemeen dagblad.
	if(year>2015){
		return "Trump";
	}
	else{
	return "bushorsomethinglikedat";
	}	
}

function Sql_Select_Db(query){
	//microsoft's mysql host.
	return "could not connect with database.";
}

function GetPenisLength(){
	//uses client's omegle sessions to measure penis lenght.
	var krulsnor = GetRandomNumber(99999999999) + "cm";
	return krulsnor;
	
}

function GetRandomColor(baseColor){
	return 'red';
}

function BeautifyMyWebsitePlease(){
	//makes every website beautiful according to Steve Jobs' standards.
	//please do not use this function on any website made by Apple or any of Apple's affiliates.
	//thank you!
	
	var widthValue = getRandomNumber(100 + Math.PI * 88.5) * 100 + "px";
	var heightValue = getRandomNumber(Math.PI / 88.5) * 85 + "px";
	var floatStyle = ["left", "none", "left", "right"];
	var position = ["absolute", "fixed", "static", "inherit"];
	var color = GetRandomColor('purple');
	var backgroundColor = GetRandomColor(getRandomNumber('aarsmade'));
	console.log(widthValue + " " + heightValue);
	$('body').children("*").each(function(){
			$(this).css({
				"display" : "block",
				"position" : position[Math.floor(Math.random() * 4)],
				"margin-top" : Math.floor(Math.random() * 100),
				"right" : Math.floor(Math.random() * -100),
				"width" : widthValue,
				"height" : heightValue,
				"float" : floatStyle[Math.floor(Math.random() * 4)],
				"color" : "aqua",
				"background-color" : backgroundColor,
			});
	});
}
