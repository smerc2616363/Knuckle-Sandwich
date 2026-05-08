# Knuckle Sandwich - Milestone 1 Implementation

## Project Structure

```
Knuckle-Sandwich/
├── backend/                  # Node.js/Express server
│   ├── db/
│   │   └── database.js       # SQLite database setup
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── reports.js       # Report submission routes (M1 basic)
│   ├── server.js            # Main server file
│   ├── package.json         # Dependencies
│   ├── .env                 # Environment variables
│   └── .gitignore
│
├── frontend/                # Static HTML/CSS/JS
│   ├── index.html           # Login/Sign-up page
│   ├── home.html            # Dashboard (after login)
│   ├── about.html           # About page (public)
│   ├── report.html          # Report form
│   ├── confirmation.html    # Confirmation page
│   ├── style.css            # Global styles
│   └── script.js            # Client-side logic
│
└── README.md               # This file
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create/verify `.env` file:**
   ```
   PORT=3000
   SESSION_SECRET=your_session_secret_change_in_production
   NODE_ENV=development
   ```

4. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

### Frontend Setup

The frontend is served automatically by the backend. Navigate to:
```
http://localhost:3000
```

## Milestone 1 (M1) - Complete Features

### ✅ Authentication System
- **Sign-up**: Create new account with username + password
- **Login**: Authenticate with credentials
- **Session Management**: Secure session handling with httpOnly cookies
- **Password Security**: Passwords are hashed using bcryptjs

### ✅ Navigation
- **Login/Sign-up Page**: Public access for authentication
- **About Page**: Public access, provides info about the platform
- **Homepage**: Protected, appears after successful login
- **Report Form**: Protected, accessible from homepage
- **Confirmation Page**: Protected, shows after successful report submission

### ✅ User Flows
- Account creation and login workflow
- Navigation between pages
- Report incident access (form structure ready)

### ✅ Pages Implemented
1. **index.html** - Login/Sign-up (public)
2. **about.html** - Information page (public)
3. **home.html** - Dashboard (protected)
4. **report.html** - Incident report form (protected)
5. **confirmation.html** - Submission confirmation (protected)

### ✅ UI/UX Features
- Clean, modern responsive design
- Mobile-friendly layout
- Tab-based auth form (Login/Sign-up toggle)
- Color-coded urgency levels (Red/Orange/Blue)
- Clear error messaging
- Emergency disclaimer on all relevant pages

### ✅ Form Features (M1)
- Required field validation
- Form error display
- Name field toggle based on anonymous mode
- Urgency level visualization
- Routing option selection
- Auto-route checkbox

### ✅ Backend API Endpoints
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user
- `POST /api/reports/submit` - Submit report (basic)
- `GET /api/reports/my-reports` - Get user's reports

## Security Features Implemented (M1)

✅ Password hashing with bcryptjs
✅ Session-based authentication
✅ httpOnly cookies
✅ CORS enabled
✅ Input validation
✅ Secure password requirements (6+ characters)

## Testing the Application

### 1. Sign Up
```
1. Go to http://localhost:3000
2. Click "Sign Up" tab
3. Enter username and password (6+ chars)
4. Click "Create Account"
```

### 2. Login
```
1. Click "Login" tab
2. Enter credentials
3. Click "Login"
4. Should redirect to home.html
```

### 3. Navigation
```
1. From home, click "About" to view public info
2. Click "Report an Incident" to access form
3. Fill out form and submit
```

### 4. Report Submission
```
1. Fill all required fields
2. Try leaving fields blank to see validation errors
3. Toggle "Submit Anonymously" to see name field hide/show
4. Submit to see confirmation screen
```

## Milestone 2 (M2) - Coming Next

- AI-assisted severity verification
- AI-suggested routing
- Report data encryption
- Enhanced validation and error handling
- Admin dashboard for reviewing reports
- Real-time notifications
- Integration with external support systems

## Environment Variables

Create a `.env` file in the backend folder:

```env
# Server configuration
PORT=3000
NODE_ENV=development

# Session security
SESSION_SECRET=change_me_in_production

# Database (SQLite - local file based)
# No additional config needed
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Reports Table
```sql
CREATE TABLE reports (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  incident_type TEXT,
  description TEXT,
  urgency_level TEXT,
  routing_option TEXT,
  is_anonymous BOOLEAN DEFAULT 0,
  name TEXT,
  submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## API Response Examples

### Sign Up - Success
```json
{
  "message": "Account created successfully",
  "userId": 1
}
```

### Login - Success
```json
{
  "message": "Logged in successfully",
  "userId": 1
}
```

### Submit Report - Success
```json
{
  "message": "Report submitted successfully",
  "reportId": 1
}
```

### Error Response
```json
{
  "error": "Username already exists"
}
```

## Development Notes

- Backend runs on port 3000 by default
- Frontend is served from `frontend/` directory
- Database is SQLite (local file: `knuckle_sandwich.db`)
- Sessions are stored in-memory (suitable for development)
- For production, consider session store alternatives

## Troubleshooting

### Port already in use
```bash
# Kill process on port 3000 or change PORT in .env
lsof -i :3000
kill -9 <PID>
```

### Database errors
```bash
# Delete the database and restart (will recreate)
rm backend/knuckle_sandwich.db
npm start
```

### CORS errors
- Ensure frontend is accessed from http://localhost:3000
- Check that API_BASE_URL in frontend/script.js matches

## Next Steps

1. Test the authentication flow
2. Verify report submission works
3. Check database for stored data
4. Review M2 requirements for next phase
