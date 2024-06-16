# PressLink

PressLink is a comprehensive Newspaper FullStack Website, designed to offer a seamless user experience for both news readers and contributors. The project is built using modern technologies including React, Firebase, React Router, Node.js, Express.js, and MongoDB. It focuses on delivering trending articles, premium features, and a dynamic user interface.

## Admin Credentials
- **Username:** presslink@admin.com
- **Password:** 123456@Aa

## Live Site URL
PressLink Live: https://preink-51cab.web.app/

## Features

1. **Responsive Design**: PressLink is fully responsive and optimized for mobile, tablet, and desktop views. The dashboard is also responsive to ensure a seamless experience across all devices.

2. **Role-Based Navigation**: The navigation bar dynamically shows links based on the user's role (admin or regular user) and subscription status. For instance, only admins see the "Dashboard" link, and only subscribed users see "Premium Articles".

3. **Trending Articles Slider**: The home page features a slider displaying the top 6 trending articles, calculated based on total article views.

4. **Publisher Listings**: All publishers added by the admin are displayed on the home page, allowing users to filter articles by publisher.

5. **Real-Time Statistics**: The statistics section shows real-time counts of total users, normal users, and premium users, implemented with react-countup.

6. **Subscription Plans**: Users can view different subscription plans and their features. The plans section guides users to the subscription page for more details.

7. **Article Management**: Users can add new articles, which remain pending until approved by an admin. Articles can be filtered by publisher and tags, and searched by title. 

8. **Premium Content**: Premium articles are clearly differentiated and accessible only to subscribed users. Users can subscribe to access these articles.

9. **Dynamic User Dashboard**: Admin users have access to a dashboard with various management tools, including user management, article approval, and publisher addition. The dashboard features dynamic charts for visual data representation.

10. **Enhanced Authentication**: The website supports email and password-based authentication with additional login options like Google. It also includes comprehensive error handling for registration and login processes.

11. **Profile Management**: Users can view and update their profile information, ensuring that they can keep their details up-to-date.

12. **CRUD Operations with Notifications**: All create, read, update, and delete operations are accompanied by sweet alerts or notifications, providing a better user experience compared to default browser alerts.

13. **Environment Variables**: Sensitive information such as Firebase configuration keys and MongoDB credentials are securely managed using environment variables.

14. **Secure Routes**: Private routes are protected, ensuring that users are not redirected to the login page upon page reload, maintaining their session seamlessly.

15. **Article View Count**: Each time an article is viewed, the view count is incremented, contributing to the calculation of trending articles.

## Installation

1. **Clone the repository Client side**: 
    ```bash
    git clone https://github.com/programming-hero-web-course1/b9a12-client-side-SopnilSwapon
    cd press-link-client
    ```
2. **Install client dependencies**: 
    ```bash
    cd client
    npm install
    ```

3. **Install server dependencies**: 
    ```bash
    cd server
    npm install
    ```

4. **Set up environment variables**: 
    Create a `.env` file in both the client and server directories and add your Firebase config keys and MongoDB credentials.

5. **Run the development server**: 
    ```bash
    cd server
    npm start
    ```

6. **Run the client**: 
    ```bash
    cd client
    npm start
    ```

## Usage

1. **Registration and Login**: Users can register and log in using email and password or Google authentication.
2. **Add Articles**: Logged-in users can add new articles through the "Add Articles" page.
3. **View Articles**: Users can view all approved articles on the "All Articles" page and filter them by publisher or tags.
4. **Subscription**: Users can subscribe to access premium articles through the "Subscription" page.
5. **Admin Actions**: Admins can manage users, approve or decline articles, and add new publishers through the admin dashboard.

## Contributions

We welcome contributions from the community. Please fork the repository and create a pull request with your changes.

---

Feel free to explore PressLink and enjoy a premium news reading experience!

