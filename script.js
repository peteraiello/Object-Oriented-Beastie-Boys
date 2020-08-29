/* 
    Beastie Boys class with a constructor,
    and the fightForYourRight method
*/

function BeastieBoy(name, MCname, style, toParty) {
    this.name = name
    this.MCname = MCname
    this.style = style
    this.fightForYourRight = function() {
        return toParty
    }
};

/* 
    Initiate Beastie Boys objects using different props
*/

let MCA = new BeastieBoy('Adam Yauch', 'MCA', 'Leather Jacket', 
    'Smash TV with sledgehammer!')

let adRock = new BeastieBoy('Adam Horovitz', 'Ad Rock', ['baseball cap',
    'red t-shirt'], 'Pie fight!')

let mikeD = new BeastieBoy('Michael Diamond', 'Mike D', ['Denim Jacket', 
    'Fedora', 'VW Chain', ], 'Spike the punch!' )

/* 
    Add the selector element with the id 
    of #beastie-boys to the selectElement
    constant variable
*/

const selectElement = document.querySelector('#beastie-boys')

/* 
    Listen for change to the select element
    use a switch statement to check if the 
    selected field matches the objects name 
    and if so assign a new object property 
    for selected that is set to 'true'
*/

selectElement.addEventListener('change', (event) => {
    let selected = event.target.value
    switch (selected) {
        case 'MCA':
            MCA.selected = true;
        break;
        case 'Ad Rock':
            adRock.selected = true;
        case 'Mike D':
            mikeD.selected = true;
        break;
      default:
    }
})

/* 
    The function to handle the button click that uses 
    a conditional statement to check which of the
    objects is currently selected and then changes 
    the headline with the `innerHTML` method
*/

document.getElementById("party").onclick = function changeContent() {
    if (adRock.selected === true) {
        document.getElementById('headline').innerHTML = adRock.fightForYourRight()
       
        /*
            Set selected to false for each object 
            (otherwise selected would be true for more 
            than one Beastie Boys and the text won't change)
        */

        adRock.selected = false
    } else if (MCA.selected === true) {
        document.getElementById('headline').innerHTML = MCA.fightForYourRight()
        MCA.selected = false
    } else if (mikeD.selected === true) {
        document.getElementById('headline').innerHTML = mikeD.fightForYourRight()
        mikeD.selected = false
    } 
}


