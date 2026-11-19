export function checkPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\+\d{2}\(\d{2}\)\d{4}-\d{4}$/;
    return phoneNumberPattern.test(phoneNumber)
}