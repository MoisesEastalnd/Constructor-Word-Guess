function Letter(letterVal){
 this.letter=letterVal;
 this.guess = false;



this.incorrect = function(){
    if(this.letter === "_"){
        console.log ("Incorrect!!!")
    this.guess = false; 
    return "_";
    }
}


this.correct = function(){
    if(this.guess === this.letter ){
        console.log("Correct!!")
        this.guess = true;
        return this.letter;
    }
}
};