class Form{
    constructor(){

    }


display(){
    var title = createElement("h3");
    title.html("Car Racing Game");
    title.position(480,100);

    var input = createInput("Name");
    var button = createButton("Play");
    var greeting = createElement("h3");

    input.position(480,300);
    button.position(480,350);

    button.mousePressed(function(){
        input.hide();
        button.hide();

        var name = input.value();
        playerCount+=1;
        //player.index = playerCount;
        
        player.update(name);
        player.updateCount(playerCount);

        var greeting = createElement("h3");
        greeting.html("Hello" + name)
        greeting.position(480,300);
    })


    
}


}