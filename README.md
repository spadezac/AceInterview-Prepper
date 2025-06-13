# AceInterview Prepper

**AceInterview Prepper** is an AI-powered web application designed to simulate mock interviews and help users prepare confidently for real-world job interviews. It offers a personalized experience using state-of-the-art AI models like **Gemini 2.0 Flash**, voice interactions with **Vapi**, and scalable backend via **Firebase**.


---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)


---

## Features

-  Real-time AI-powered mock interviews
-  Voice interaction via **Vapi**
-  Smart question generation using **Gemini 2.0 Flash**
-  Firebase authentication and database integration
-  Personalized question flow based on user profile
-  Interview session logs and feedback
-  Fully responsive and accessible design with Tailwind CSS

---


## Tech Stack

| Category        | Technology                        |
|----------------|------------------------------------|
| Frontend       | Next.js, React, Tailwind CSS       |
| Backend        | Firebase (Auth, Firestore)         |
| AI Integration | Gemini 2.0 Flash, Vapi SDK         |
| Deployment     | Vercel                             |
| Dev Tools      | Git, GitHub, VS Code               |

---


## Getting Started


### Prerequisites

- Node.js (v18 or later)
- Firebase account & project
- [Vapi.ai](https://www.vapi.ai/) account with API Key
- [Gemini API Key](https://makersuite.google.com/app)


### Clone the Repository

```bash
git clone https://github.com/spadezac/AceInterview-Prepper.git
cd AceInterview-Prepper
```


### Install Dependencies

```bash
npm install
```


### Set Up Environment Variables
Create a file named .env.local in the root directory and add the following keys:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
```
You may also create a .env.example to show default structure (not committed).


### Run the App Locally
```bash
npm run dev
```
Visit http://localhost:3000 in your browser.

---


## Usage
1. Register or log in.
2. Start a mock interview session.
3. Answer the questions asked by the AI Interviewer.
4. Get real-time feedback powered by AI.
5. View past interviews, suggestions, and progress.

---


## License
You are free to share and adapt this project, even for commercial use, but you must give appropriate credit by linking back to this repository:
https://github.com/spadezac/AceInterview-Prepper
https://github.com/adrianhajdin/ai_mock_interviews

---


## Contributing

Thank you for considering contributing to **AceInterview Prepper**! We welcome all kinds of contributions that improve the project — from bug fixes and new features to documentation and design.


### Guidelines

To contribute:

1. **Fork** the repository
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/your-username/AceInterview-Prepper.git
   cd AceInterview-Prepper
  `
3. **Create a new branch** for your feature or fix:
  ```bash
  git checkout -b feature/your-feature-name
  ```
4. **Make your changes**, and test locally.
5. **Commit** your changes:
  ```bash
  git commit -m "Add: your meaningful commit message"
  ```
6. **Push** to your fork:
  ```bash
  git push origin feature/your-feature-name
  ```
7. **Open a Pull Request** to the main branch of this repo.
  Add a clear and concise **description** of:
     - What your PR does
     - Why it is valuable
     - Any relevant screenshots or references (if applicable)

---



### Code Standards

- Use meaningful commit messages.
- Follow the existing code style and structure.
- Test your changes before submitting.
- Keep pull requests focused on one change at a time.



### Contributor Code of Conduct
All contributors are expected to adhere to the Contributor Covenant. By participating, you agree to:
- Be respectful and inclusive to all contributors
- Collaborate constructively and courteously
- Avoid any discriminatory or disrespectful behavior

---


We appreciate your effort in improving this project 💙
