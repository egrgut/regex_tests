export function checkNumber(number) {
    const numberPattern = /^(\d{1,2}|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/
    return numberPattern.test(number)
}
