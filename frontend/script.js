// API Configuration
const API_BASE_URL = window.location.origin;

// Authentication Functions
async function login(username, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Login failed');
        }

        localStorage.setItem('user', JSON.stringify({ userId: data.userId, username }));
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

async function signup(username, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Signup failed');
        }

        localStorage.setItem('user', JSON.stringify({ userId: data.userId, username }));
        window.location.href = 'home.html';
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}

async function logout() {
    try {
        await fetch(`${API_BASE_URL}/api/auth/logout`, {
            method: 'POST'
        });
        
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    } catch (error) {
        console.error('Logout error:', error);
        // Still redirect even if logout fails
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    }
}

// Check if user is authenticated
async function checkAuth() {
    // Check if we're on a page that doesn't require auth
    const publicPages = ['index.html', 'about.html'];
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (publicPages.includes(currentPage)) {
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/api/auth/me`);
        
        if (!response.ok) {
            window.location.href = 'index.html';
            return;
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Auth check error:', error);
        window.location.href = 'index.html';
    }
}

// Initialize auth forms
function initAuthForms() {
    const loginTab = document.getElementById('login-tab');
    const signupTab = document.getElementById('signup-tab');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginTab && signupTab) {
        loginTab.addEventListener('click', () => {
            loginTab.classList.add('active');
            signupTab.classList.remove('active');
            loginForm.classList.add('active');
            signupForm.classList.remove('active');
        });

        signupTab.addEventListener('click', () => {
            signupTab.classList.add('active');
            loginTab.classList.remove('active');
            signupForm.classList.add('active');
            loginForm.classList.remove('active');
        });
    }

    // Handle login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            const errorDiv = document.getElementById('login-error');

            try {
                errorDiv.textContent = '';
                await login(username, password);
            } catch (error) {
                errorDiv.textContent = error.message;
            }
        });
    }

    // Handle signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const username = document.getElementById('signup-username').value;
            const password = document.getElementById('signup-password').value;
            const passwordConfirm = document.getElementById('signup-password-confirm').value;
            const errorDiv = document.getElementById('signup-error');

            errorDiv.textContent = '';

            if (password !== passwordConfirm) {
                errorDiv.textContent = 'Passwords do not match';
                return;
            }

            if (password.length < 6) {
                errorDiv.textContent = 'Password must be at least 6 characters';
                return;
            }

            try {
                await signup(username, password);
            } catch (error) {
                errorDiv.textContent = error.message;
            }
        });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initAuthForms();
});
