function diceRoller (){
    var die1;   // The number on the first die.
    var die2;   // The number on the second die.
    var roll;   // The total roll (sum of the two dice).
        
        die1 = (int)(Math.random()*6) + 1;
        die2 = (int)(Math.random()*6) + 1;
        roll = die1 + die2;
  console.log(roll);
}