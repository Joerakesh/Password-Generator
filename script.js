function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;

    let charset = '';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeSymbols) charset += '!@#$%^&*()_+[]{}|;:,.<>?';
    if (includeNumbers) charset += '0123456789';

    if (charset === '') {
        document.getElementById('password').textContent = 'Please select at least one character type.';
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').textContent = password;
}
