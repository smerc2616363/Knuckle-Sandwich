# Knuckle Sandwich – Complete Product Requirements Document (PRD)
## Version 2.0 - Comprehensive Edition

**Document Status**: ✅ COMPLETE - 22 sections, 100+ components specified  
**Implementation Status**: ⚠️ ~40-50% of frontend complete (JavaScript logic incomplete, responsive design incomplete)  
**Testing Status**: Testing gates integrated - See TESTING_GATE_CHECKLIST.md for verification requirements

---

## IMPORTANT NOTE FOR DEVELOPERS & QA

**This PRD is now linked to a detailed testing framework:**
- Every component in this PRD has corresponding test criteria in **TESTING_GATE_CHECKLIST.md**
- All tests must pass (✅ PASS) before ANY component can be marked complete
- Track progress daily in TESTING_GATE_CHECKLIST.md
- Current completion: ~40-50% (see critical blockers in Section 14)

---

## TABLE OF CONTENTS
1. Executive Summary
2. User Personas & Audience
3. Product Overview
4. Milestones & Acceptance Criteria
5. Success Metrics
6. User Flows
7. Functional Requirements
8. Technology Stack
9. API Specifications
10. UI/UX Requirements
11. Data Management & Privacy
12. Compliance Requirements
13. Security Requirements
14. Testing Requirements
15. Accessibility Standards
16. Risk Assessment
17. Deployment Strategy
18. Support & Maintenance
19. Glossary
20. Error Codes Reference
21. Assumptions & Dependencies
22. Future Enhancements

---

## COMPANION DOCUMENTS

**⚠️ IMPORTANT**: This PRD is accompanied by the following critical documents:

1. **TESTING_GATE_CHECKLIST.md** - Detailed step-by-step testing requirements for every component specified in this PRD. This is the master reference for verification before production release.

2. **IMPLEMENTATION_REVIEW_AND_COMPLIANCE_AUDIT.md** - Review of specification completeness and current implementation status.

**How to Use**: Developers build to these specifications. QA team uses TESTING_GATE_CHECKLIST.md to verify each component works. All tests must pass (✅ PASS) before M1 release.

---

## SECTION 1: Executive Summary

**Knuckle Sandwich** is a web-based incident reporting platform designed for schools and educational institutions. It provides a safe, confidential way for students to report bullying, harassment, discrimination, and other concerning incidents, while ensuring proper routing to support resources and compliance with mandatory reporting laws.

**Target Users**: Students (12-18), Parents, Teachers, School Administration, Counselors, Support Staff

**Core Value Proposition**: 
- Safe, anonymous reporting for vulnerable students
- Intelligent routing to appropriate support resources
- Secure data handling with compliance built-in
- Real-time notifications for support staff

---

## SECTION 2: User Personas & Audience

### Primary Personas

**1. Sarah - Student Reporter (Age 15)**
- Experiencing bullying from peers
- Prefers anonymous reporting to avoid retaliation
- Wants confirmation that her report was received
- Needs relevant resources (crisis lines, counselor info)
- Goals: Report safely, get help
- Pain: Fear of exposure, concern report won't matter

**2. Miguel - Parent (Age 45)**
- Child reports something troubling at school
- Wants to report on behalf of child
- Needs to track what was reported
- Requires notification/follow-up
- Goals: Get child help, communicate with school
- Pain: Doesn't know if report reached right person

**3. Jennifer - Teacher (Age 38)**
- Notices student behavioral changes/reports from class
- Needs to submit report or forward student report
- Wants to see follow-up actions
- Goals: Document incident, support student, follow protocol
- Pain: Unclear reporting process, worried about mandatory reporting compliance

**4. David - School Counselor (Age 52)**
- Receives routed reports about students
- Must assess severity and follow mandatory reporting rules
- Needs clear incident details
- May need to escalate to administration/authorities
- Goals: Help students, ensure compliance, document actions
- Pain: Incomplete reports waste time, compliance risks

**5. Admin - School Administrator (Age 55)**
- Oversees incident response
- Tracks patterns across school
- Ensures compliance and legal obligations
- Generates reports for school board
- Goals: Safe school environment, regulatory compliance
- Pain: Manual processes, data silos

---

## SECTION 3: Product Overview

### What is Knuckle Sandwich?

Knuckle Sandwich is a web-based platform that allows users to:

* Create accounts and securely log in
* Report incidents with structured details
* Select or receive suggested routing for support
* Receive confirmation and relevant resources after submission
* (M2) View report status and receive follow-up communications

### Core Features

**M1 - Basic Reporting**
- Account creation and authentication
- Anonymous or named incident reporting
- Form validation and error handling
- Report confirmation with resources
- CAPTCHA protection against spam

**M2 - Intelligence & Routing**
- AI-assisted severity verification
- Intelligent routing suggestions
- Admin dashboard for report management
- Automated notifications
- Data encryption and audit logging

### Disclaimer (Required on All Reporting Pages)

**MUST DISPLAY**: "This is not an emergency service. If you are in immediate danger, call 911."

---

## SECTION 4: Milestones & Acceptance Criteria

### Milestone 1 (M1): Foundation & Authentication
**Timeline**: 4-6 weeks
**Focus**: Authentication, navigation, and basic reporting access

#### M1 Acceptance Criteria

**Authentication**
- [ ] Users can sign up with username + password
- [ ] Passwords validated: 6+ chars, hashed with bcryptjs
- [ ] Users can log in with existing credentials
- [ ] Session persists across page navigation
- [ ] Session expires after 24 hours of inactivity
- [ ] Users can log out successfully
- [ ] Password stored as hash, never in plaintext

**Navigation & Pages**
- [ ] Login/Sign-up page accessible without authentication
- [ ] About page accessible without authentication
- [ ] Logged-in users redirected to homepage
- [ ] Unauthenticated users attempting to access report form are redirected to login
- [ ] Navigation bar displays context-appropriate links

**Report Form & Submission**
- [ ] Form contains all required fields: incident type, description, urgency, routing
- [ ] Optional fields: name, anonymous toggle
- [ ] Form validation prevents submission with blank required fields
- [ ] Clear error messages display for each validation failure
- [ ] reCAPTCHA required before submission (Google reCAPTCHA v2)
- [ ] CAPTCHA verified on server-side, not just client-side
- [ ] Form resets after successful or failed submission
- [ ] No sensitive data logged to console

**Confirmation Page**
- [ ] Displays success message
- [ ] Shows report ID
- [ ] Displays report summary (incident type, urgency, routing)
- [ ] Shows selected routing option (not placeholder)
- [ ] Displays severity-appropriate resources
- [ ] Anonymous reports don't show name
- [ ] Resources change based on urgency level
- [ ] Link to return to dashboard

**UI/UX**
- [ ] Responsive design (320px mobile to 2560px desktop)
- [ ] Speed: Page load < 3 seconds, form submit < 2 seconds
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] Severity indicators: Red for High, Orange for Medium, Blue for Low
- [ ] Emergency disclaimer displays on all relevant pages

**Security & Data**
- [ ] No hardcoded credentials in code
- [ ] No sensitive data in localStorage except report ID
- [ ] Passwords sent over HTTPS only
- [ ] Session cookies are httpOnly
- [ ] CORS properly configured
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities in forms

**Testing**
- [ ] Unit tests for auth functions (80%+ coverage)
- [ ] Integration tests for full user flows
- [ ] Form validation tests
- [ ] Cross-browser compatibility verified (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing on iOS Safari and Android Chrome

### Milestone 2 (M2): Intelligence & Scaling
**Timeline**: 6-8 weeks
**Focus**: Data storage, encryption, routing logic, admin features

#### M2 Acceptance Criteria (High-Level)

**Data Management**
- [ ] Reports encrypted at rest (AES-256)
- [ ] Database backups automated
- [ ] Data retention policy enforced (1 year for active, 7 years archived)

**AI Features**
- [ ] Severity verification analyzes report and suggests level
- [ ] AI confidence score displayed to user
- [ ] User can confirm or override AI suggestion
- [ ] Routing suggestions working with 80%+ accuracy
- [ ] User must manually confirm routing choice

**Admin Dashboard**
- [ ] View all reports with filtering (status, urgency, date)
- [ ] See report details (blinded if anonymous)
- [ ] Can change report status
- [ ] Cannot see anonymous reporter identity
- [ ] Audit log shows all actions taken

**Notifications**
- [ ] Email sent to routed recipient
- [ ] SMS optional for high-priority
- [ ] Reports prevent duplicate sending

**Compliance**
- [ ] Mandatory reporter flag for certain keywords
- [ ] Audit trail tracks all accesses
- [ ] FERPA compliance verified
- [ ] Data validation for student information

---

## SECTION 5: Success Metrics & KPIs

### Adoption Metrics
- **Account Creation Rate**: % of eligible students with accounts (Target: 60% Y1)
- **Active Users**: Monthly active reporters (Target: 20% of population)
- **Repeat Usage**: % of users submitting 2+ reports (Target: 45%)

### Engagement Metrics
- **Report Submission Rate**: Reports per month (Target: 2-4 per 100 students)
- **Completion Rate**: % of started forms that complete (Target: 85%+)
- **Anonymous Ratio**: % anonymous vs. identified (Target: 60% anonymous)

### Quality Metrics
- **Response Time**: Avg hours from submission to admin review (Target: < 4 hours)
- **Resolution Rate**: % of reports with documented follow-up (Target: 95%)
- **Error Rate**: Failed submissions / total attempts (Target: < 2%)

### Technical Metrics
- **Uptime**: 99.5% minimum availability
- **Page Load Time**: < 2 seconds (95th percentile)
- **API Response Time**: < 500ms (95th percentile)

### User Satisfaction
- **Post-Submission Survey**: "I felt heard" (Target: 4/5 stars)
- **NPS Score**: Net Promoter Score (Target: > 40)
- **Support Satisfaction**: Support team rating (Target: 4+/5)

---

## SECTION 6: User Flows

### 3.1 Account Creation & Login

```
User visits index.html
  ↓
User chooses: Create Account OR Login
  ↓
[CREATE ACCOUNT PATH]
  ├─ Enter username
  ├─ Enter password (6+ chars)
  ├─ Confirm password
  ├─ Click "Create Account"
  ├─ Backend validates & hashes password
  ├─ Account created in database
  └─ Redirected to home.html
  
[LOGIN PATH]
  ├─ Enter username
  ├─ Enter password
  ├─ Click "Login"
  ├─ Backend validates credentials
  ├─ Session created
  └─ Redirected to home.html
```

### 3.2 Navigation

```
Public Access (No Login)
  ├─ index.html (Login/Sign-up)
  └─ about.html (Platform info)

Protected (Login Required)
  ├─ home.html (Dashboard)
  ├─ report.html (Report form)
  └─ confirmation.html (Submission confirmation)
```

### 3.3 Report Submission (Success Flow)

```
User clicks "Report an Incident"
  ↓
Form loads with all required fields
  ├─ Incident Type
  ├─ Description
  ├─ Urgency Level
  ├─ Routing Option
  ├─ Name (if not anonymous)
  └─ reCAPTCHA
  ↓
User fills form
  ↓
User submits
  ↓
Client validates ALL fields
  ├─ reCAPTCHA verified
  └─ No errors? Continue : Show errors
  ↓
Server validates fields again
  ↓
Report saved to database
  ↓
Report data stored in localStorage
  ↓
Redirected to confirmation.html?id={reportId}
  ↓
Confirmation page displays:
  ├─ Success message
  ├─ Report ID
  ├─ Report summary
  ├─ Selected routing
  ├─ Severity-based resources
  └─ Return to dashboard button
```

### 3.4 Validation (Failure Flow)

```
User opens report form
  ↓
User leaves required fields blank
  ↓
User clicks submit
  ↓
Client-side validation runs
  ├─ Required fields empty? → Show error message
  ├─ CAPTCHA empty? → Show error
  └─ All valid? → Proceed to server
  ↓
[IF CLIENT VALIDATION FAILS]
  ├─ Error message displays next to field
  ├─ Form NOT submitted
  └─ Report NOT saved
  
[IF CLIENT VALIDATION PASSES]
  ├─ Server validates again
  ├─ [If invalid] → 400 error response
  ├─ [If valid] → Save & redirect
```

---

## SECTION 7: Functional Requirements

### 7.1 Authentication

**Requirements**
- Users can sign up with username + password
- Users can log in with valid credentials
- Passwords must be hashed (not stored in plain text)
- Session-based authentication with 24-hour expiration
- Logout clears session
- Password requirements: 6+ characters minimum

**Constraints**
- Usernames must be unique
- No email requirement for M1 (future consideration)
- Password recovery not in M1
- Rate limiting on login attempts (5 attempts/15 mins)

### 7.2 Report Form

**Required Fields**
- **Incident Type** (dropdown):
  - Bullying
  - Harassment
  - Discrimination
  - Assault
  - Mental Health Concern
  - Academic Concern
  - Other

- **Description** (textarea):
  - Minimum 10 characters
  - Maximum 5000 characters
  - Free text, no formatting for M1

- **Urgency Level** (radio selection):
  - High Priority (Red) - Life-threatening
  - Medium Priority (Orange) - Bodily harm or severe distress
  - Low Priority (Blue) - Non-immediate concerns

- **Routing Option** (dropdown):
  - Parent
  - Teacher
  - School Administration
  - Local Support Services
  - Emergency Services (manual only, no auto-routing)

**Optional/Conditional Fields**
- **Name** (text):
  - Required unless Anonymous Mode enabled
  - Minimum 2 characters, max 100
  - Only uppercase/lowercase, spaces, hyphens

- **Anonymous Mode** (checkbox):
  - If checked: Name field hidden, name not required
  - If unchecked: Name field visible, name required

- **Auto-Route** (checkbox):
  - For future use (M2)
  - Currently non-functional in M1

### 7.3 Severity Levels & Resources

**High Priority** (Red - Life-threatening)
- Immediate danger to self or others
- Active violence
- Active suicidal ideation
- Resources:
  - National Suicide Prevention Lifeline: 1-800-273-8255
  - Crisis Text Line: Text HOME to 741741
  - 988 Suicide & Crisis Lifeline: Call/Text 988
  - Emergency Services: 911

**Medium Priority** (Orange - Bodily harm or severe distress)
- Sustained bullying campaigns
- Sexual harassment
- Severe anxiety/panic
- Cyberbullying
- Resources:
  - Crisis Text Line: Text HOME to 741741
  - SAMHSA National Helpline: 1-800-662-4357
  - Cyberbullying Resources: cybertipline.org
  - Local counseling services

**Low Priority** (Blue - Non-immediate concerns)
- Academic concerns
- Social conflicts
- Minor bullying instances
- General support needs
- Resources:
  - School counselor/guidance office
  - Mental Health America: mhanational.org
  - School social worker
  - Academic support resources

### 7.4 AI-Assisted Features (M2)

**Severity Verification**
- AI analyzes report description and suggests severity
- AI confidence score (0-100%) displayed
- User can confirm, override, or request manual review
- AI suggestion does NOT override user input
- If mismatch: Notify user with "Are you sure?" prompt

**Routing Suggestions** (M2)
- AI suggests best routing based on report content
- Alternative routing options presented
- User must manually confirm final choice
- No automatic routing to Emergency Services

**Auto-Routing Option** (M2, User-Controlled)
- User may enable: "Automatically select best help option"
- System suggests closest/most relevant support resource
- User must approve before final submission
- Can always override before submitting

---

## SECTION 8: Technology Stack

### M1 Stack

**Frontend**
- HTML5 for semantic structure
- CSS3 for styling (no CSS framework for M1)
- Vanilla JavaScript (no framework for simplicity)
- Google reCAPTCHA v2
- localStorage for client-side data

**Backend**
- Node.js (v16+) runtime
- Express.js (v4.18+) framework
- bcryptjs for password hashing
- express-session for session management
- dotenv for environment variables

**Database**
- SQLite for M1 development (easy setup)
- PostgreSQL recommended for production
- No ORM for M1 (raw SQL statements)

**Hosting (Recommended)**
- AWS EC2 or Render for backend
- Cloudflare or AWS CloudFront for CDN
- AWS RDS for production database

### M2 Stack Additions

**AI/ML**
- OpenAI GPT-4 API (for severity analysis)
- OR: Azure Cognitive Services
- OR: Custom ML model (TBD)

**Email/Notifications**
- SendGrid for email delivery
- Twilio for SMS (optional)

**Monitoring**
- Sentry for error tracking
- DataDog or New Relic for performance

---

## SECTION 9: API Specifications

### Authentication Endpoints

**POST /api/auth/signup**
```
Request:
{
  "username": "string (3-20 chars, alphanumeric + underscore)",
  "password": "string (6+ chars)"
}

Success Response (200):
{
  "message": "Account created successfully",
  "userId": 1,
  "username": "john_doe"
}

Error Responses:
400: { "error": "Username and password required" }
400: { "error": "Password must be at least 6 characters" }
409: { "error": "Username already exists" }
500: { "error": "Database error" }
```

**POST /api/auth/login**
```
Request:
{
  "username": "string",
  "password": "string"
}

Success Response (200):
{
  "message": "Logged in successfully",
  "userId": 1,
  "username": "john_doe"
}

Error Responses:
400: { "error": "Username and password required" }
401: { "error": "Invalid credentials" }
500: { "error": "Server error" }
```

**POST /api/auth/logout**
```
Success Response (200):
{
  "message": "Logged out successfully"
}

Error Response (500):
{ "error": "Logout failed" }
```

**GET /api/auth/me**
```
Success Response (200):
{
  "userId": 1,
  "username": "john_doe"
}

Error Response (401):
{ "error": "Not authenticated" }
```

### Report Endpoints

**POST /api/reports/submit**
```
Request Headers:
{
  "Content-Type": "application/json"
}

Request Body:
{
  "incident_type": "bullying|harassment|discrimination|assault|mental-health|academic|other",
  "description": "string (10-5000 chars)",
  "urgency_level": "high|medium|low",
  "routing_option": "parent|teacher|school-admin|local-services|emergency",
  "is_anonymous": boolean,
  "name": "string or null (if anonymous)"
}

Success Response (200):
{
  "message": "Report submitted successfully",
  "reportId": 42
}

Error Responses:
400: { "error": "Missing required fields" }
401: { "error": "Not authenticated" }
500: { "error": "Failed to submit report" }
```

**GET /api/reports/my-reports**
```
Success Response (200):
[
  {
    "id": 1,
    "incident_type": "bullying",
    "urgency_level": "high",
    "routing_option": "teacher",
    "is_anonymous": false,
    "name": "John Doe",
    "submitted_at": "2024-05-04T10:30:00Z"
  }
]

Error Responses:
401: { "error": "Not authenticated" }
500: { "error": "Failed to fetch reports" }
```

### Admin Endpoints (M2)

**GET /api/admin/reports**
```
Query Parameters:
?status=pending|reviewed|resolved
?urgency=high|medium|low
?start_date=2024-01-01&end_date=2024-12-31
?page=1&limit=20

Success Response (200):
{
  "total": 150,
  "page": 1,
  "reports": [...]
}
```

**GET /api/admin/reports/:id**
```
Success Response (200):
{
  "id": 42,
  "incident_type": "bullying",
  "description": "...",
  "urgency_level": "high",
  "routing_option": "teacher",
  "status": "reviewed",
  "submitted_at": "2024-05-04T10:30:00Z",
  "identity": null // null if anonymous,
  "admin_notes": "Escalated to principal"
}
```

---

## SECTION 10: UI/UX Requirements

### Pages Required

1. **Login / Sign-Up Page** (index.html)
   - Tab interface switching between Login and Sign-Up
   - Professional branding
   - Emergency disclaimer
   - Works on mobile

2. **Homepage / Dashboard** (home.html)
   - Welcome message
   - "Report an Incident" button (primary CTA)
   - How it works explanation
   - Logout button
   - Link to About page

3. **About Page** (about.html)
   - Accessible without login
   - Mission statement
   - Instructions for reporting
   - Routing information
   - FAQ (future)

4. **Report Form Page** (report.html)
   - All form fields laid out logically
   - Progressive disclosure (name field shows/hides)
   - Color-coded urgency levels
   - reCAPTCHA
   - Clear error messaging
   - Submit and Cancel buttons

5. **Confirmation Page** (confirmation.html)
   - Success checkmark icon
   - Report ID displayed
   - Report summary
   - Routing information
   - Severity-based resources
   - Button to return to dashboard
   - Emergency disclaimer

### Core UI Elements

- **Color Scheme**
  - Primary: Blue (#2563eb)
  - High Priority: Red (#dc2626)
  - Medium Priority: Orange (#f97316)
  - Low Priority: Blue (#2563eb)
  - Backgrounds: Light gray (#f9fafb)

- **Typography**
  - System fonts for performance
  - Scalable sizing (rem-based)
  - Clear hierarchy

- **Severity Indicators**
  - Red emoji/color for High
  - Orange emoji/color for Medium
  - Blue emoji/color for Low
  - Emojis: 🔴 🟠 🔵

- **Form Elements**
  - Clear labels and placeholders
  - Inline error messages
  - Focus indicators for keyboard navigation
  - Required field markers (*)

- **Responsive Breakpoints**
  - Mobile: 320px - 768px
  - Tablet: 769px - 1024px
  - Desktop: 1025px+

---

## SECTION 11: Data Management & Privacy

### Data Storage

**User Data**
- Stored in database (SQLite → PostgreSQL)
- Passwords: Hashed with bcryptjs (NOT encrypted, irreversible)
- Usernames: Plain text in database
- Last login: Timestamp

**Report Data**
- Primary storage: Server database
- Optional: localStorage backup (cleared on logout)
- Fields stored: All form data + submission timestamp
- Anonymous reports: No user_id linked

### Data Encryption

**In Transit**
- HTTPS/TLS 1.2+ required
- All API calls encrypted

**At Rest** (M2)
- Report descriptions: AES-256 encryption
- Sensitive fields: Encrypted columns
- Database-level encryption recommended

### Data Retention

- **Active Reports**: 1 year
- **Archived Reports**: 7 years (per school record requirements)
- **Deleted Accounts**: Associated reports retained per retention policy
- **User Session Data**: Cleared on logout
- **Audit Logs**: 1 year minimum

### User Privacy Controls

- Users can request data deletion
- Users can download their reports
- Anonymity safeguards enforced
- Admins cannot see anonymous reporter identity
- Clear privacy policy available

---

## SECTION 12: Compliance Requirements

### Student Data Protection

**FERPA** (Family Educational Rights and Privacy Act)
- Treat reports as educational records
- Limit access to authorized personnel
- Maintain audit logs of access
- Allow parental access to student's own reports

**COPPA** (Children's Online Privacy Protection Act)
- Required if any users under 13
- Parental consent needed for under-13 accounts
- No marketing or data selling
- Age verification at signup

**PPRA** (Pupil Privacy Rights Amendment)
- No psychological/sociological surveys without notice
- District must allow opt-out
- This platform does NOT trigger PPRA (not surveying beliefs)

**State Laws** (varies by location)
- [INSERT STATE-SPECIFIC REQUIREMENTS]
- Mandatory reporting laws
- Data residency requirements
- Student data privacy laws

### Mandatory Reporting

**Trigger Words** (for admin review)
- Suicide, self-harm, abuse, assault, threat, violence, etc.
- System flags reports containing these keywords
- Admin receives urgent notification
- Documented response required

**Reporting Obligations**
- School staff trained on mandatory reporting
- Report to: Child Protective Services, local police, etc.
- Documentation required
- Legal liability managed through protocols

### Audit & Compliance

- **Access Logs**: Track who viewed what report and when
- **Modification Logs**: Track changes to reports (M2)
- **Compliance Audits**: Annual third-party verification
- **Incident Reports**: Document breaches, resolve within 72 hours
- **Policy Updates**: Notify users of privacy/policy changes

---

## SECTION 13: Security Requirements

### Password Security
- Minimum 6 characters (future: stronger requirements)
- Hashed using bcryptjs (salt rounds: 10)
- Never stored or transmitted in plain text
- Never logged or displayed to admins

### No Plain-Text Credential Storage
- Passwords: ONLY hashed values in database
- API keys: Stored in .env file (never in code)
- Session secrets: Environment variable
- Database credentials: Environment variable

### HTTPS Required
- All connections over TLS 1.2+
- HSTS header enabled
- Certificates from trusted CA
- Auto-redirect HTTP → HTTPS

### Input Validation & Sanitization
- Client-side: HTML5 validation
- Server-side: Comprehensive validation (required, type, length)
- XSS Prevention: HTML escape user input
- SQL Injection Prevention: Parameterized queries
- CSRF: Session tokens on state-changing requests

### CAPTCHA
- Google reCAPTCHA v2 (v3 in M2 optional)
- Verified server-side only
- Prevents automated spam/abuse

### Session Security
- Session cookie: httpOnly flag (no JS access)
- Session cookie: Secure flag (HTTPS only)
- Session expiration: 24 hours inactive
- Regenerate session ID on login
- CORS: Restricted to same-origin

### Rate Limiting
- Login: 5 attempts per 15 minutes per IP
- API: 100 requests per minute per user
- Report submission: 10 per day per user (reasonable limit)

---

## SECTION 14: Testing Requirements & Component Testing Gates

### Overview

All components specified in this PRD must pass comprehensive testing gates before production deployment. A detailed testing gate checklist is maintained in a separate document: **TESTING_GATE_CHECKLIST.md**

### Unit Testing

**Test Coverage Goal**: 80%+

**Areas to Test**
- Authentication (signup, login, session)
- Form validation (all fields, error messages)
- Password hashing (correct hash, bcryptjs working)
- Data sanitization (XSS prevention)

**Testing Framework**: Jest or Mocha

### Integration Testing

**End-to-End Flows**
1. Sign up → Login → Report → Confirmation
2. Anonymous vs. named reports
3. Form validation failures
4. Database save/retrieval

**API Testing**
- Auth endpoints: 200, 400, 401 responses
- Report endpoints: Created successfully
- Database transactions

### Security Testing

**Vulnerability Scanning**
- SQL Injection: Test with `'; DROP TABLE--`
- XSS: Test with `<script>alert('xss')</script>`
- CSRF: Verify tokens required
- Session Hijacking: Attempt to reuse old session ID

**Penetration Testing**
- Manual testing of reported vulnerabilities
- Dependency scanning (npm audit)

### Performance Testing

**Load Testing**
- Concurrent users: 100+ simultaneous reports
- PageSpeed Insights: Score > 85
- Database query optimization

**Benchmarks**
- Page load: < 3 seconds (95th percentile)
- Form submit: < 2 seconds
- API response: < 500ms

### Browser Compatibility Testing

**Desktop Browsers**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

**Mobile Browsers**
- iOS Safari (latest)
- Android Chrome (latest)
- Samsung Internet

**Testing Tools**
- BrowserStack for device testing
- Lighthouse for performance audit

### Accessibility Testing

**Manual Testing**
- Keyboard navigation (Tab, Enter, etc.)
- Screen reader (NVDA, JAWS, VoiceOver)

**Automated Tools**
- WAVE by WebAIM
- axe DevTools
- Lighthouse accessibility audit

### User Acceptance Testing (UAT)

- Students test form and submission
- Teachers test about/info pages
- Admin staff test admin features (M2)
- Special needs testing (accessibility focus)

---

## Component Testing Gates (Detailed)

### Reference Document

**See**: `TESTING_GATE_CHECKLIST.md` for comprehensive test-by-test breakdown

This section provides a summary of testing gates for major component categories. Each component requires specific test criteria to be satisfied before quality gates pass.

### M1 Component Testing Summary

| Component Category | # of Tests | Pass Criteria | Current Status |
|-------------------|-----------|---------------|-----------------|
| Authentication System | 10 | All 10 PASS | ⚠️ PARTIAL |
| Pages & Navigation | 8 | All 8 PASS | ⚠️ PARTIAL |
| Report Form - Fields | 10 | All 10 PASS | ✅ PARTIAL (structure ready) |
| Report Form - Validation | 12 | All 12 PASS | ⚠️ PARTIAL (JS needed) |
| reCAPTCHA | 4 | All 4 PASS | ⚠️ PARTIAL (widget loaded, verify needed) |
| Confirmation Page | 14 | All 14 PASS | ⚠️ PARTIAL (structure ready, data mapping needed) |
| UI/UX - Responsive Design | 10 | All 10 PASS | ❌ INCOMPLETE (768px only) |
| UI/UX - Color & Accessibility | 8 | All 8 PASS | ✅ PARTIAL |
| UI/UX - Accessibility | 8 | All 8 PASS | ⚠️ PARTIAL (HTML ready, ARIA missing) |
| Security | 10 | All 10 PASS | ⚠️ PARTIAL (structure ready, implementation needed) |
| Error Handling | 6 | All 6 PASS | ⚠️ PARTIAL (containers ready, JS needed) |
| **TOTAL M1** | **100** | **All 100 PASS** | **~40-50% ready** |

### M1 Critical Testing Gates - Must Pass Before Release

**Authentication Gates** (10 tests required)
- [ ] Signup with valid credentials → account created
- [ ] Login with wrong password → error shown
- [ ] Session persists across pages → user stays logged in
- [ ] Logout → session cleared, user to login page
- [ ] Wrong credentials → "Invalid credentials" message
- [ ] Username already exists → "Username taken" message
- [ ] Password < 6 chars → "Too short" message
- [ ] Session expires after 24hrs → redirected to login
- [ ] Session cookies httpOnly flag → confirmed in server code
- [ ] CORS configured correctly → same-origin only

**Form Validation Gates** (12 tests required)
- [ ] Incident type required → error if blank
- [ ] Description required → error if blank
- [ ] Description min 10 chars → error if < 10
- [ ] Urgency level required → error if not selected
- [ ] Routing required → error if not selected
- [ ] Name required (unless anonymous) → error if blank and not anon
- [ ] Name not required (if anonymous) → allowed without name
- [ ] All error messages inline with fields → not at bottom
- [ ] Error messages clear → user understands issue
- [ ] Form resets after submit → all fields empty
- [ ] Anonymous/named toggle works → name field shows/hides
- [ ] No sensitive data in console → check DevTools

**Confirmation Gates** (8 tests required)
- [ ] Success message displays → "Report Submitted Successfully"
- [ ] Report ID shows → unique ID displayed
- [ ] Report summary displays → incident type, urgency, routing shown
- [ ] Severity-based resources shown → correct resources for urgency
- [ ] Anonymous reports hide name → no identity shown
- [ ] Return to dashboard button works → link to home.html
- [ ] Resources match spec → correct crisis lines/support info
- [ ] Can navigate back without errors → no redirect loops

**UI/UX Gates** (10 tests required)
- [ ] Mobile (768px) responsive → layout readable
- [ ] Tablet (1024px) responsive → layout optimized
- [ ] Desktop (1200px) responsive → max-width applied
- [ ] Color contrast ≥ 4.5:1 → WAVE/axe DevTools pass
- [ ] Severity colors correct → Red/Orange/Blue as specified
- [ ] Disclaimer visible all pages → yellow banner present
- [ ] Form labels clear → all inputs have labels
- [ ] Buttons accessible → keyboard Tab through all
- [ ] Focus indicators visible → outline on focus
- [ ] Page load < 3 seconds → performance acceptable

**Security Gates** (10 tests required)
- [ ] Passwords hashed (bcryptjs) → no plaintext in DB
- [ ] HTTPS only (production) → redirect HTTP to HTTPS
- [ ] Session httpOnly flag → set in server code
- [ ] CORS configured → same-origin only
- [ ] Input sanitized → XSS test fails to execute script
- [ ] SQL queries parameterized → no concatenation
- [ ] reCAPTCHA server-side verified → backend validates token
- [ ] No sensitive data logged → DevTools console clean
- [ ] CSRF tokens on state-changes → POST requests verify session
- [ ] Rate limiting on login → 5 attempts / 15 mins max

### Release Checklist - M1

**All must be ✅ YES before shipping:**

- [ ] All 100 component tests passing (✅ PASS status)
- [ ] 80%+ code coverage achieved
- [ ] All browsers tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile testing completed (iOS Safari, Android Chrome)
- [ ] Accessibility audit passed (WCAG 2.1 AA)
- [ ] Security penetration test completed
- [ ] Performance benchmarks met (load < 3s, submit < 2s)
- [ ] UAT with sample users completed
- [ ] All critical blocking bugs fixed
- [ ] Error codes documented and tested
- [ ] Backup/restore procedures tested
- [ ] Deployment procedure documented
- [ ] Rollback procedure documented
- [ ] Support team trained
- [ ] Admin documentation complete
- [ ] User guide/FAQ prepared

---

## Testing Gate Tracking

### Progress Metrics

**Track daily** during development:

| Week | Total Tests | ✅ PASS | ⚠️ PARTIAL | ❌ FAIL | % Complete |
|------|-----------|--------|-----------|--------|-----------|
| Week 1 (5/6-5/12) | 100 | 20 | 40 | 40 | 20% |
| Week 2 (5/13-5/19) | 100 | 60 | 30 | 10 | 60% |
| Week 3 (5/20-5/26) | 100 | 95 | 5 | 0 | 95% |
| Week 4 (5/27-6/2) | 100 | 100 | 0 | 0 | 100% ✅ |

**Target completion**: Week 4 (June 2, 2026)

### Known Testing Blockers (as of May 5, 2026)

| Blocker | Impact | Resolution |
|---------|--------|-----------|
| Form validation JS not connected to HTML events | HIGH | Implement event listeners in script.js |
| Responsive design incomplete (missing tablet/desktop breakpoints) | HIGH | Add media queries at 769px, 1025px |
| Confirmation page data not mapping from localStorage | HIGH | Implement JS to populate report details |
| Error messages not wired to display | HIGH | Connect validation errors to error containers |
| Accessibility ARIA labels missing | MEDIUM | Add ARIA attributes to form sections |
| Rate limiting not implemented | MEDIUM | Add rate limiting middleware to backend |
| Authentication testing incomplete | MEDIUM | Set up test database and login flows |
| Error code implementation incomplete | MEDIUM | Add error code constants to backend |

### Daily Testing Log Template

```
Date: [DATE]
Tester: [NAME]
Session: Testing gates update

Components Tested Today:
- [Component 1]: [Result] - [Notes]
- [Component 2]: [Result] - [Notes]

Blockers Encountered:
- [Blocker 1]: [Status/Action]
- [Blocker 2]: [Status/Action]

Progress: [X% complete]
Next Steps: [List for tomorrow]
```

---

## SECTION 15: Accessibility Standards

### WCAG 2.1 Level AA Compliance (Minimum)

**1. Perceivable**

- **Color Contrast**: 4.5:1 for normal text, 3:1 for large text
  - Status: ✅ Already met with current color scheme
  
- **Use of Color**: Information conveyed by color alone avoided
  - Status: Labels added in addition to color (e.g., "High Priority (Red)")
  
- **Images**: Alternative text for all meaningful images
  - Status: N/A (mostly text-based)

- **Media**: Captions for audio/video
  - Status: N/A for M1

**2. Operable**

- **Keyboard Navigation**: All functionality available via keyboard
  - Requirement: Tab through all form fields
  - Requirement: Enter to submit forms
  - Requirement: Tab to buttons, Space/Enter to activate
  
- **Focus Visible**: Clear indication of focused element
  - Requirement: 2px outline or border on focused inputs
  - Requirement: Focus order logical (top to bottom)
  
- **No Keyboard Trap**: User not stuck on any element
  - Status: Test all elements

**3. Understandable**

- **Clear Language**: Simple, direct text
  - Status: ✅ Current copy is clear
  
- **Consistent Navigation**: Headers/buttons in same location
  - Status: ✅ Navbar consistent across pages
  
- **Error Identification**: Clear error messages
  - Status: ✅ Inline error messages next to fields
  
- **Form Labels**: All inputs have associated labels
  - Requirement: Use `<label for="id">` for all inputs

**4. Robust**

- **Valid HTML**: All pages validate against HTML5 spec
  - Testing: W3C HTML validator
  
- **ARIA Labels**: Additional semantic info for screen readers
  - Status: Review ARIA in final audit

### Accessibility Testing Tools
- WAVE (Wave.webaim.org)
- axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- NVDA or JAWS screen reader
- Keyboard-only testing

### Accessibility Audit Checklist
- [ ] All form fields have `<label>` elements
- [ ] Focus indicators visible on all interactive elements
- [ ] Page heading hierarchy logical (H1 → H2 → H3)
- [ ] Button text descriptive (not just "Click", "Submit")
- [ ] Form error messages associated with fields
- [ ] Color not the only way to convey information
- [ ] Keyboard navigation works for entire form
- [ ] Screen reader friendly (tested with NVDA/JAWS)

---

## SECTION 16: Risk Assessment

### High-Risk Areas

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|-----------|
| Data Breach / Hacking | Medium | Critical | Encryption, regular security audits, rate limiting, intrusion detection |
| False Emergency Escalation | Medium | Critical | Manual admin review before 911 dispatch, trained staff, escalation protocol |
| Non-Compliance / Legal Liability | Low | Critical | Compliance audits, legal review of policies, staff training |
| System Downtime | Low | High | Redundancy, backups, SLA monitoring, rapid incident response |
| Privacy Leak (Non-Anonymous Toggle Bug) | Low | High | Code review, testing, audit logs, user notification protocol |
| AI Making Poor Recommendations | Medium | Medium | Human-in-loop confirmation, user override, low confidence threshold |
| User Abandonment (Complex Form) | Medium | Medium | Form testing with users, simplification, progress indicators |
| Missing Mandatory Report | Medium | Critical | Keyword flagging, admin training, checklist protocol |

### Mitigation Strategies

**Security**
- Regular penetration testing (quarterly)
- Dependency scanning (npm audit monthly)
- Intrusion detection logging
- Rate limiting on all APIs
- HTTPS everywhere

**Operations**
- Database backups (daily)
- Redundant hosting (multi-region)
- Incident response plan (documented)
- Uptime SLA monitoring (99.5% target)
- Alerting for critical errors

**Compliance**
- Legal review of data policies
- Staff training on mandatory reporting
- Audit log for all report accessing
- Privacy impact assessment annually
- Incident response procedure

**User Safety**
- AI confidence scores transparent
- Always allow user override
- Manual admin review option
- Emergency services contacted manually
- Disclaimer on every page

---

## SECTION 17: Deployment Strategy

### M1 Deployment

**Pre-Deployment Checklist**
- [ ] All acceptance criteria met
- [ ] Security audit completed
- [ ] Performance testing passed
- [ ] Accessibility audit passed
- [ ] CAPTCHA verified working
- [ ] Database backup tested
- [ ] Rollback procedure documented
- [ ] Support team trained

**Deployment Steps**
1. Deploy to staging environment
2. Run complete regression test suite
3. Performance and security scan
4. Admin team UAT approval
5. Deploy to production
6. Monitor error logs for 24 hours
7. User communication sent

**Rollback Plan**
- Previous version available for 48 hours
- Automated rollback if uptime < 95% in first hour
- Database rollback procedure tested
- Notification sent if rollback occurs

**Communication Timeline**
- 1 week before: Announce launch date
- 2 days before: Maintenance window notification
- 1 day before: Final reminder
- Day of: Hourly updates
- After: Retrospective and lessons learned

**Launch Day Support**
- Dedicated support team on standby
- Help desk staffed (extended hours)
- Real-time monitoring dashboard
- Escalation path for critical issues

### M2 Deployment

**Gradual Rollout Strategy**
- Phase 1 (Day 1): 10% of users
- Phase 2 (Day 3): 50% of users
- Phase 3 (Day 7): 100% of users
- Monitoring: Error rates, response times, user feedback

**Feature Flags**
- AI verification: Can be disabled if issues
- Notifications: Can be silent-failed temporarily
- Admin dashboard: Beta release to subset

**Database Migration**
- Existing reports encrypted with old scheme
- Migration script tested on backup
- Rollback procedure: Unencrypted backup
- No data loss acceptable

---

## SECTION 18: Support & Maintenance

### Support Channels

**Email Support**
- Address: support@knucklesandwich.edu
- Response time: 24 hours (business days)
- Ticketing system (optional)

**Help Desk / Chat**
- Availability: School hours + 1 hour after
- Response: 2 hour maximum
- Escalation path to development

**Admin Portal**
- Knowledge base: FAQs, how-to guides
- System status page: Uptime/incidents
- Bulk user import tool

**Emergency Hotline** (M2)
- Critical issues only
- On-call support tech
- 24/7 availability

### Maintenance Windows

**Planned Maintenance**
- Tuesday, 2-4 AM (off-peak hours)
- Advanced notice 1 week minimum
- Approximately 1x per month for M1
- More frequent for M2 as features add

**Emergency Patches**
- Security vulnerabilities: ASAP (within 4 hours)
- Critical bugs: Within 24 hours
- User notification required

### Support Tiers

**Tier 1 - Basic Support** (Email)
- Password reset assistance
- Account questions
- FAQ-level issues
- Response: 24 hours

**Tier 2 - Technical Support** (Phone/Chat)
- Form submission errors
- Browser compatibility issues
- Data questions
- Response: 2-4 hours

**Tier 3 - Development Team** (Critical)
- Security vulnerabilities
- Data loss incidents
- System outages
- Response: 30 minutes

### Maintenance Tasks

**Daily**
- Monitor error logs
- Check uptime (automated)
- Review security alerts

**Weekly**
- Database integrity check
- Backup verification
- User reported issues triage

**Monthly**
- Dependency updates (npm)
- Security patches
- Performance review
- Support ticket analysis

**Quarterly**
- Penetration testing
- Compliance audit
- Capacity planning
- User feedback review

---

## SECTION 19: Glossary & Terminology

**Incident**: Any reportable event (bullying, harassment, assault, etc.)

**Report**: The formal submission containing incident details, submitted by a user

**Routing**: The direction/assignment of a report to an appropriate support resource

**Urgency Level**: Severity classification - High (life-threatening), Medium (harm/distress), Low (non-immediate)

**Anonymous Mode**: Submitting a report without revealing the reporter's identity

**Confirmation**: Display and acknowledgment page after successful submission

**Mandatory Reporting**: Legal requirement for certain professionals to report specific incidents

**FERPA**: Family Educational Rights and Privacy Act - US student data privacy law

**COPPA**: Children's Online Privacy Protection Act - protects online privacy of children under 13

**PPRA**: Pupil Privacy Rights Amendment - protects student privacy

**Audit Trail**: Immutable record of who accessed, modified, or viewed reports

**Session**: Authenticated connection between user and server

**reCAPTCHA**: Google service verifying user is human (prevents bot abuse)

**Hashing**: Irreversible encryption of passwords (bcryptjs)

**XSS**: Cross-site Scripting attack (prevented by input sanitization)

**SQL Injection**: Database attack (prevented by parameterized queries)

**CSRF**: Cross-Site Request Forgery attack (prevented by session tokens)

**SLA**: Service Level Agreement (uptime commitment, e.g., 99.5%)

**KPI**: Key Performance Indicator (success metric)

---

## SECTION 20: Error Codes Reference

### Authentication Errors

- `AUTH_001`: Invalid username/password combination
- `AUTH_002`: Username already exists (signup)
- `AUTH_003`: Password does not meet requirements (6+ chars)
- `AUTH_004`: Session expired (login again)
- `AUTH_005`: Not authenticated (must login)
- `AUTH_006`: Rate limit exceeded (too many login attempts)

### Validation Errors

- `FORM_001`: Required field missing
- `FORM_002`: Field value too short
- `FORM_003`: Field value too long
- `FORM_004`: Invalid field format
- `FORM_005`: Username already taken

### Report Errors

- `REPORT_001`: Invalid incident type
- `REPORT_002`: Description too short (minimum 10 chars)
- `REPORT_003`: CAPTCHA verification failed
- `REPORT_004`: Missing required field
- `REPORT_005`: Unable to save report to database
- `REPORT_006`: User not authenticated
- `REPORT_007`: Could not retrieve report

### Server Errors

- `SERVER_001`: Database connection failed
- `SERVER_002`: Internal server error (check logs)
- `SERVER_003`: Service temporarily unavailable
- `SERVER_004`: Configuration error
- `SERVER_005`: External API failure (e.g., reCAPTCHA)

### HTTP Status Codes

- `200`: Success
- `400`: Bad request (validation error)
- `401`: Unauthorized (not authenticated)
- `403`: Forbidden (authenticated but no permission)
- `404`: Not found
- `429`: Too many requests (rate limited)
- `500`: Internal server error
- `503`: Service unavailable

---

## SECTION 21: Assumptions & Dependencies

### Assumptions

**User Assumptions**
- Students have internet connectivity
- Students can access school devices/networks
- Student accounts authenticated via school directory (future)
- Parents have email addresses on file

**Technical Assumptions**
- School has SSL certificates (HTTPS)
- Hosting environment has SMTP capability (email)
- Database backups managed by hosting provider
- School IT maintains server security

**Organizational Assumptions**
- Admin staff trained before launch
- Integration with SIS (Student Information System) possible
- School has written data policy
- School has incident response procedure
- Staff understand mandatory reporting requirements

**Compliance Assumptions**
- School district legal team has reviewed
- Complies with state student data laws
- Privacy policy approved by district
- Incident response aligns with school procedures

### External Dependencies

**Critical (Must Have)**
- Google reCAPTCHA service (CAPTCHA)
- Email service for notifications (M2)
- SSL certificate provider (HTTPS)
- Hosting provider (EC2, Render, etc)

**Important (Strongly Recommended)**
- Backup service (automated backups)
- Monitoring/alerting (Sentry, DataDog)
- DNS provider (CloudFlare, Route53)

**Optional (Nice to Have)**
- CDN for asset delivery (CloudFront)
- AI API for severity (OpenAI, Azure)
- SMS service for urgent alerts (Twilio)

### Internal Dependencies

**M1 Dependencies**
- Database up and running
- Backend server deployed
- Staging environment for testing
- Production environment for launch

**M2 Dependencies**
- AI/ML model selected and API set up
- Email service integration completed
- Admin UI framework selected
- Notification system designed

---

## SECTION 22: Future Enhancements (Post-M2)

**Phase 3: Advanced Features**
- AI confidence scoring for recommendations
- Smart severity classification improvements
- Predictive analytics (identify at-risk students)
- Peer support matching (connect students with similar experiences)

**Phase 4: Integration & Scale**
- Admin dashboard redesign (analytics, reporting)
- Real-time notifications via push/SMS/email
- Integration with external support systems
- Multi-district support and federation
- Mobile app (iOS, Android)

**Phase 5: Intelligence**
- Behavior pattern analysis
- Predictive intervention recommendations
- AI-powered sentiment analysis of descriptions
- Machine learning model for school-specific routing
- Automated response suggestions for admins

**Phase 6: Community**
- Peer support group features
- Restorative justice facilitation
- Anonymous Q&A forum
- Resource library expansion
- Parent engagement portal

---

## DOCUMENT CHANGE LOG

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2024-05-01 | Original PRD |
| 2.0 | 2024-05-04 | Added missing 15 sections: User Personas, Acceptance Criteria, Success Metrics, Tech Stack, API Specs, Data Management, Compliance, Security Details, Testing, Accessibility, Risk Assessment, Deployment, Support, Glossary, Error Codes, Assumptions, Dependencies |

---

## APPROVALS

- [ ] Product Manager: _________________ Date: _______
- [ ] Engineering Lead: ________________ Date: _______
- [ ] Legal/Compliance: _______________ Date: _______
- [ ] School Administrator: ___________ Date: _______
- [ ] Project Sponsor: ________________ Date: _______

---

**Document Status**: READY FOR IMPLEMENTATION

**Next Steps**:
1. [ ] Get stakeholder sign-off above
2. [ ] Create user stories from requirements
3. [ ] Sprint planning and estimation
4. [ ] Development kickoff
5. [ ] Regular PRD review meetings (bi-weekly)
