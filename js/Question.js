class Question {
    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
    }
    
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }

    display(){
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question:- What starts with letter'E',but has only 1 letter?");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);

        this.input1.position(150,230);
     }


}
















