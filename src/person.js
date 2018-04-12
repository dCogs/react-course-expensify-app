export const canDrink = (age) => {
    if (!age.isNaN) {
        return age >= 21;
    }
}

export const isAdult = (age) => {
    if (!age.isNaN) {
        return age >= 18;
    }
}

const isSenior = (age) => {
    if (!age.isNaN) {
        return age >= 65;
    }
}

export default isSenior;