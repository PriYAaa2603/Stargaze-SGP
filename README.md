
## StarGaze

![logo](https://github.com/sliitcsse/se3040-assignment02-SarangaSiriwardhana9/assets/99233703/29c6bc8e-95a1-4b09-973b-a043c86dfb9c)
| Screenshot | Screenshot |
|------------|------------|
| ![Screenshot 2024-05-16 214735](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/7e09c768-661f-4395-829c-2d95abe90f5c) | ![Screenshot 2024-05-16 214809](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/d24635b2-26cb-4640-bf54-a75d76bf7732) |
| ![Screenshot 2024-05-16 214851](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/daa4362e-f5fc-4291-87a3-dd9e5d8bff5e) | ![Screenshot 2024-05-16 214910](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/ffc0e716-95ca-4fbb-8004-9d4c56bfee0f) |
| ![Screenshot 2024-05-16 214933](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/3499c0f2-50fe-4704-b9bb-12583ef1f8a4) | ![Screenshot 2024-05-16 214959](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/b5de2f2b-b405-4dba-89a5-2583bc50d072) |
| ![Screenshot 2024-05-16 215022](https://github.com/SarangaSiriwardhana9/StarGraze/assets/99233703/6dda1623-1d4c-49be-a6a3-4e80040a7058) |              |


StarGaze is a web application that allows users to explore astronomy-related data and imagery. The application utilizes several NASA APIs to provide a rich and informative experience for users interested in space and celestial objects.

## Features

- **EPIC Imagery**: View daily imagery of Earth captured by DSCOVR's Earth Polychromatic Imaging Camera (EPIC).
- **Near Earth Objects**: Explore information about Near Earth Objects (NEOs) such as asteroids, including their size, velocity, and potential hazard level.
- **Astronomy Picture of the Day**: Discover the astronomy picture of the day along with detailed explanations and keywords.
- **Asteroids**: Fetch information about asteroids using the NASA Asteroids API.

## Technologies Used

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: Firebase Authentication (Google Login)
- Jest:testing

## Installation

1. Clone the repository:

   ```bash
   https://github.com/sliitcsse/se3040-assignment02-SarangaSiriwardhana9.git
   ```

2.Install dependencies:

  ```bash
    cd StarGaze/client
    npm install

    cd ../server
    npm install
  ```

3.Set up environment variables:

   ```bash

    REACT_APP_NASA_API=your_nasa_api_key
 ```
4.Create a .env file in the server folder and add your Firebase config

  ```bash
    FIREBASE_API_KEY=your_firebase_api_key
    FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    FIREBASE_PROJECT_ID=your_firebase_project_id
  ```
5.Start the frontend and backend servers:

   ```bash
    
    cd client
    npm start

    cd ../server
    npm start

   ```
6.Access the application at http://localhost:3000.


# Demo Site 
[Use this Link](https://stargraze-deploy.onrender.com)
