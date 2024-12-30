# Public Design Jobs

**Public Design Jobs** is a platform designed to help creatives find work locally and globally. The application enables users to search, apply, and post creative job opportunities seamlessly.

---

## Features

- **Global Job Search:** Discover creative work opportunities around the world.
- **Local Opportunities:** Find jobs near you with location-based filtering.
- **Account Management:** Secure sign-up and account creation using Google Authentication.
- **Email Notifications:** Stay updated with job alerts and notifications via SendGrid.
- **Modern UI:** Built with Next.js and React for a fast, responsive, and user-friendly experience.
- **Realtime Data:** Firebase integration for seamless data handling.

---

## Technologies Used

- **Next.js**: For server-side rendering and optimized performance.
- **React**: For building dynamic user interfaces.
- **Firebase**: For backend services including database and authentication.
- **SendGrid**: For handling transactional and notification emails.
- **Google Sign-In**: To simplify account creation and management.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v16 or later)
- npm or yarn
- Firebase account and project setup
- SendGrid API key
- Google API credentials for OAuth

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/public-design-jobs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd public-design-jobs
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

4. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

5. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Your application will be available at `http://localhost:3000`.

---
