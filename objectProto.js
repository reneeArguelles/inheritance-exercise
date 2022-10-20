var character = {
    attack: function (target) {
        console.log(target.name + " takes damage")
    },
    heal: function (target) {
        console.log(`${this.name} healed ${target ? target.name : this.name}`)
    }
}

const player1 = Object.create(character, {
    name: { value: 'Player 1'}
})

const player2 = Object.create(character, {
    name: { value: 'Player 2'}
})

player1.attack(player2)
player2.heal(player1)
player2.heal()
