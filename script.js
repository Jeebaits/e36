let round = 10;

var fighter1= {
    hp: 100,
    strength: 15,
    attack: function(o) {
        const dmg = Math.floor(Math.random() * this.strength + 1);
        o.hp -= dmg;
        console.log(`Fighter 1 attacks and does ${dmg}!`)
    }
}
var fighter2= {
    hp: 150,
    strength: 10,
    attack: function(o) {
        const dmg = Math.floor(Math.random() * this.strength + 1);
        o.hp -= dmg;
        console.log(`Fighter 2 attacks and does ${dmg}!`)
    }
}

for(i = 1; i <= round; i ++){
    console.log(`Round ${i}`)
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    console.log(`Fighter 1 HP: ${fighter1.hp} | Fighter 2 HP: ${fighter2.hp}`)
};

if(fighter1.hp > fighter2.hp){
    console.log("Player 1 wins!");
} else if(fighter2.hp > fighter1.hp){
    console.log("Player 2 wins!");
} else{
    console.log("Draw!");
}