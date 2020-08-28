function BeastieBoy(name, mcName, style, toParty) {
    this.name = name
    this.mcName = mcName
    this.style = style
    this.party = function() {
        return toParty
    }
};

let MCA = new BeastieBoy('Adam Yauch', 'MCA', 'Leather Jacket', 
    'Smash TV with sledgehammer')

let adRock = new BeastieBoy('Adam Horovitz', 'Ad Rock', ['baseball cap', 'red t-shirt'], 'Pie fight!')

let mikeD = new BeastieBoy('Michael Diamond', 'Mike D', ['Denim Jacket', 'Fedora', 'VW Chain', ], 'Spike the punch!' )

const selectElement = document.querySelector('.beastie-boys')

selectElement.addEventListener('change', (event) => {
    let selected = event.target.value
    switch (selected) {
      case 'MCA':
        MCA.selected = true;
        break;
      case 'AD Rock':
          adRock.selected = true;
      case 'Mike D':
          mikeD.selected = true;
        break;
      default:
    }
})

document.getElementById("party").onclick = function changeContent() {
    if (adRock.selected === true) {
        document.getElementById('headline').innerHTML = adRock.party()
        adRock.selected = false
    } else if (MCA.selected === true) {
        document.getElementById('headline').innerHTML = MCA.party()
        MCA.selected = false
    } else if (mikeD.selected === true) {
        document.getElementById('headline').innerHTML = mikeD.party()
        mikeD.selected = false
    } 
}


