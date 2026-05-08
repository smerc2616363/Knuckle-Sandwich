**Knuckle Sandwich – Product Requirements Document (PRD)**

**1\. Product Overview**

Knuckle Sandwich is a web-based platform that allows users to:

\* Create accounts and securely log in  
\* Report incidents with structured details  
\* Select or receive suggested routing for support  
\* Receive confirmation and relevant resources after submission

Disclaimer (Required)  
The application must display:

“This is not an emergency service. If you are in immediate danger, call 911.”

\---

**2\. Milestones**

Milestone 1 (M1)

Focus: Authentication, navigation, and basic reporting access

Milestone 2 (M2)

Focus: Data storage, encryption, report handling, validation, and routing logic

\---

**3\. User Flows**

**3.1 Account Creation & Login**

1\. User visits login/sign-up page  
2\. User:

   \* Creates account (username \+ password), OR  
   \* Logs in with existing credentials  
3\. Credentials are securely stored on the server (encrypted)  
4\. Upon successful login → user is redirected to homepage

\---

**3.2 Navigation**

\* User can access \*\*About page\*\* without logging in  
\* Logged-in users land on homepage  
\* Homepage includes “Report an Incident” button

\---

**3.3 Report Submission (Success Flow)**

1\. User clicks “Report an Incident”  
2\. User fills out form:

   \* Type of incident  
   \* Description  
   \* Urgency level  
   \* Routing option  
3\. User submits report  
4\. System:

   \* Saves report (database \+ optional local storage)  
   \* Redirects to confirmation screen  
5\. Confirmation screen displays:

   \* Submission success message  
   \* Selected routing info  
   \* Relevant support resources

\---

**3.4 Validation (Failure Flow)**

1\. User opens report form  
2\. Leaves required fields blank  
3\. Attempts to submit  
4\. System:

   \* Displays validation errors  
   \* Prevents submission  
   \* Does NOT save report

\---

**4\. Functional Requirements**

**4.1 Authentication**

\* Users can:

  \* Sign up (username \+ password)  
  \* Log in with valid credentials  
\* Passwords must be \*\*hashed (not stored in plain text)\*\*

\---

**4.2 Report Form**

Required Fields

\* Incident Type (dropdown)  
\* Description (text input)  
\* Urgency Level (selection)  
\* Routing Option (selection)

Optional / Conditional Fields

\* Name (required unless anonymous mode is enabled)  
\* Anonymous Mode (checkbox)

\---

4.3 Severity Levels

User selects urgency level:

High Priority (Red)\*\*

  \* Life-threatening situations

Medium Priority (Orange)\*\*

  \* Possible bodily harm or severe distress

Low Priority (Blue)\*\*

  \* Non-immediate concerns

\---

**4.4 AI-Assisted Features**

Severity Verification

\* AI analyzes report and suggests a severity level  
\* AI does NOT override user input  
\* If mismatch occurs:

  \* Notify user and allow manual confirmation

Routing Suggestions

\* AI suggests best routing option based on report content  
\* User must confirm final routing choice

Auto-Routing Option (User-Controlled)

\* User may enable:

  \* “Automatically select best help option”  
\* System suggests:

  \* Closest or most relevant support resource  
\* User must approve before submission

\---

**5\. Routing System**

Available Routing Options

\* Parent  
\* Teacher  
\* School Administration  
\* Local support services  
\* Emergency services (manual selection only)

Requirements

\* User must explicitly choose routing OR confirm AI suggestion  
\* System may display:

  \* Recommended option  
  \* Alternative options

Future Consideration (Optional)

\* Show availability/load (“how busy”) of services  
  \*(Note: requires external data integration)\*

\---

**6\. Anonymous Mode**

Behavior

\* Checkbox: “Submit Anonymously”

If enabled:

\* User identity is not attached to report  
\* Name field is not required

If disabled:

\* Name is required  
\* Identity stored securely

Visibility Rules

\* Only authorized personnel (e.g., admins) may view identity  
\* Anonymous reports remain fully anonymous

\---

**7\. Data Storage**

User Data

\* Stored in database  
\* Passwords hashed (e.g., encrypt)

Report Data

\* Stored in:

  \* Server database (primary)  
  \* Local storage (optional backup)

\---

**8\. Validation & Error Handling**

 Required Field Enforcement

\* All required fields must be completed before submission

Error Behavior

\* Show clear error messages:

  \* “Field is required”  
  \* “Please select an option”  
\* Prevent submission if validation fails  
\* Do not store incomplete reports

\---

**9\. Security Requirements**

\* Password hashing (decrypt or equivalent)  
\* No plain-text credential storage  
\* HTTPS required  
\* Input validation and sanitization  
\* CAPTCHA required before submission  
  (e.g., Google reCAPTCHA)

\---

**10\. UI/UX Requirements**

 Pages

\* Login / Sign-Up Page  
\* Homepage  
\* About Page  
\* Report Form Page  
\* Confirmation Page

 Core Elements

\* “Report an Incident” button (homepage)  
\* Form validation feedback  
\* Anonymous mode toggle  
\* Severity color indicators (Red, Orange, Blue)

\---

**11\. Confirmation Screen**

After successful submission, display:

\* Confirmation message  
\* Summary of report (non-sensitive)  
\* Selected routing option  
\* Relevant support resources based on severity

\---

**12\. Non-Functional Requirements**

\* Responsive design (mobile \+ desktop)  
\* Fast load times  
\* Basic accessibility compliance

\---

**13\. Constraints & Safety Rules**

\* AI cannot automatically contact emergency services  
\* All routing decisions require user confirmation  
\* System must include emergency disclaimer  
\* Sensitive data must be handled securely

\---

 **14\. Future Enhancements (Post-M2)**

\* AI confidence scoring  
\* Smart severity classification improvements  
\* Admin dashboard for reviewing reports  
\* Real-time notifications  
\* Integration with external support systems  
