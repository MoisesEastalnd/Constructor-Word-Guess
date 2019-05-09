function Letter(letterVal){
 this.letter=letterVal;
 this.guess = false;



this.incorrect = function(){
    if(this.letter){
        console.log ("Incorrect!!!")
    this.guess = false; 
    return this.letter;
    }
}
}