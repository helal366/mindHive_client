<img width="483" height="296" alt="mindHive_mockup" src="https://github.com/user-attachments/assets/07147bd1-e18d-46fd-acf4-b68c62756536" />

# Project Name: mindHive

# Live URL: 
https://mind-hive-9313b.web.app

# Purpose: 
The goal of "Mind Hive" is to provide a digital space where students can:
- Share their thoughts and knowledge through articles.
- Discover and read articles posted by others.
- Participate in discussions through comments.
- Like and appreciate valuable content.
- Connect through academic interests and categories.

# Key Features:
### Public Features
- View all articles
- Filter by categories or search keywords
- Read full article details
### Authenticated Features
- Register/Login using Firebase (Email + Google Login)
- Post new articles
- Edit or delete your own articles
- Like and comment on articles
- View your posted articles (My Articles)
- JWT-based protected routes
### User Experience
- Responsive layout for mobile & desktop
- Light/Dark theme toggle
- Rich text editor for writing articles
- Toast notifications for actions
- Custom 404 Not Found page

# Tech Stack
###  Frontend
- React
- React Router 
- Tailwind CSS + DaisyUI
- Firebase Authentication
- Axios
- Framer Motion  
- AOS for animations

###  Backend
- Node.js
- Express.js
- MongoDB Atlas
- JSON Web Tokens (JWT)
- CORS & Dotenv

# NPM Packages Used
### Frontend:
- react
- react-router
- axios
- firebase
- tailwindcss
- daisyui
- framer-motion`
- aos
- react-icons
- react-toastify
- sweetalert2
- react-tooltip

### Backend:
- express
- cors
- dotenv
- jsonwebtoken
- mongodb











# Setup & Installation
#### 1. Clone the repo:

```
git clone https://github.com/helal366/mindHive_client.git
cd mindHive_client
```


#### 2. Install dependencies:
```
npm install
```

#### 3. Create a .env file with required environment variables (see below).
```
VITE_apiKey="YOUR API KEY"
VITE_authDomain="YOUR AUTH DOMAIN"
VITE_projectId="YOUR PROJECT ID"
VITE_storageBucket="YOUR STORAGE BUCKET"
VITE_messagingSenderId="YOUR MESSAGING SENDER"
VITE_appId="YOUR APP ID"
VITE_API_URL="YOUR DEPLOYMENT API URL"
```

#### 4. Run the server:
```
npm start
```
