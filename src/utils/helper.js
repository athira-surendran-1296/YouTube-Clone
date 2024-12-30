export const generateRandomId = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

export const  generateRandomMessage = () => {
    const messages = [
        "Keep pushing forward!",
        "Believe in yourself!",
        "You are capable of amazing things.",
        "Every day is a new beginning.",
        "Success is just around the corner.",
        "Dream big and dare to fail.",
        "Stay positive and work hard.",
        "Make today count!",
        "You're doing great, keep it up!",
        "Stay focused and never give up."
    ];
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

export const getRandomName = () => {
    const names = [
        "Emma",
        "Liam",
        "Olivia",
        "Noah",
        "Ava",
        "Elijah",
        "Sophia",
        "Lucas",
        "Isabella",
        "Mason",
        "Charlotte",
        "Ethan",
        "Amelia",
        "Logan",
        "Mia",
        "James",
        "Harper",
        "Benjamin",
        "Evelyn",
        "Oliver"
    ];
    
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

