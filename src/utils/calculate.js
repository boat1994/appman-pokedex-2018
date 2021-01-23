const calHP = (hp) => hp < 100 ? Number(hp) : 100

const calStr = (str) => str * 50 > 100 ? str * 50 : 100

const calWeak = (weak) => weak * 100 > 100 ? weak * 100 : 100

const calDamage = (attacks) => attacks.reduce((acc, attack) => Number(attack.damage.replace(/\D/g,'')) + acc, 0)

const calHappiness = (hp, damage, weak) =>  Number(((Number(hp) / 10) + (Number(damage) / 10) + 10 - (Number(weak))) / 5)

export const cardCalculate = (card) => {
    const hp = calHP(card.hp)
    const str = calStr(card.attacks ? card.attacks.length : 0)
    const weak = calWeak(card.weaknesses ? card.weaknesses.length : 0)
    const damage = calDamage(card.attacks || [])
    const happiness = calHappiness(hp, damage, weak)

    return {
        hp,
        str,
        weak,
        happiness,
        damage
    }
}