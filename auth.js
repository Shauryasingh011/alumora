const users = [];

function login(req, res) {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

function signup(req, res) {
    const { username, password } = req.body;
    const userExists = users.some(u => u.username === username);
    if (userExists) {
        res.status(409).json({ message: 'User already exists' });
    } else {
        users.push({ username, password });
        res.status(201).json({ message: 'Signup successful' });
    }
}

module.exports = { login, signup };