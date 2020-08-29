/* 
    Beastie Boys class with a constructor,
    and the partyTime method which replaces the 
    html headline with value of the party property
*/

class BeastieBoy {
    constructor(real, emcee, style, party) {
        this.name = {
            real : real,
            emcee : emcee
        }
        this.emcee = emcee
        this.style = style
        this.party = party
        this.partyTime = function() {
            return document.getElementById('headline').innerHTML = party 
        }
    }
}

/* 
    Initiate Beastie Boys objects using different props
*/

let mca = new BeastieBoy
    (
        real = 'Adam Yauch', 
        emcee = 'MCA',
        style = 'Leather Jacket', 
        party = 'Smash TV with sledgehammer!'
    )

let adRock = new BeastieBoy
    (
        real = 'Adam Horovitz',
        emcee = 'Ad Rock', 
        style = ['baseball cap', 'red t-shirt'], 
        party = 'Pie fight!'
    )

let mikeD = new BeastieBoy
    (
        real = 'Michael Diamond',
        emcee = 'Mike D', 
        style = ['Denim Jacket', 'Fedora', 'VW Chain'],
        party = 'Spike the punch!' 
    )

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
            mca.selected = true;
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
        
        adRock.partyTime()       
        /*
            Set selected to false for each object 
            (otherwise selected would be true for more 
            than one Beastie Boys and the text won't change)
        */

        adRock.selected = false
    } else if (mca.selected === true) {
        mca.partyTime()
        mca.selected = false
    } else if (mikeD.selected === true) {
        mikeD.partyTime()
        mikeD.selected = false
    } 
}


