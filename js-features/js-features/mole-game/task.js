const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
let time = 1000;
let place = 1;
let replaceMole = () => {
    let newPlace = Math.floor( Math.random() * 5 )+1;
    if ( newPlace == place ) {
        replaceMole();
        return;
    }
    document.getElementById(`hole${place}`).classList.remove('hole_has-mole');
    document.getElementById(`hole${newPlace}`).classList.add('hole_has-mole');
    place = newPlace;
    setTimeout( function(){replaceMole();}, time );
};

let counterDead = 0;
let counterLost = 0;
getHole = index => document.getElementById(`hole${index}`);
for ( holeIndex = 1; holeIndex < 10; holeIndex++ ) {
    let hole = getHole(holeIndex);
    
    hole.addEventListener( 'click', function() {
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterLost++;
            lost.textContent = counterLost;
        }

        if (counterDead === 10) {
            alert ('Вы выиграли');
            counterDead = 0;
            counterLost = 0;
            dead.textContent = counterDead;
        } if (counterLost === 5) {
            alert ('Вы проиграли');
        }
    });

}
replaceMole();