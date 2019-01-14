//DrinkAbout = function(){
    function whatCanIDrink(age){
        if(age >= 0 && age < 130){
            if(age < 14 ){
                return "Drink Toddy";
            } else if(age < 18){
                return "Drink Coke";
            } else if (age < 21) {
                return "Drink Beer";
            } else {
                return "Drink Whisky"
            }
        } else {
            return "Sorry. I can’t tell what drink because that age is incorrect!";
        }
    };
//}