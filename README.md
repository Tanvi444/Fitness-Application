# Fitness Application

![image](https://github.com/user-attachments/assets/98007030-83f5-4c4d-8297-953d0c5d7a03)

A simple application for displaying and searching different exercise for different body parts. This project uses an external API (Rapid API) and using Fetch API it fetches different types of exercises, for over 20 exercises. Users can also search and apply filters for 10 body part categories, and search for specific exercise that best suits their need.

## ⚙️ Tech Stack

![reactjs](https://img.shields.io/badge/-React_JS-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![nextdotjs](https://img.shields.io/badge/-CSS_3-black?style=for-the-badge&logoColor=white&logo=css&color=663399)
![appwrite](https://img.shields.io/badge/-Material_UI-black?style=for-the-badge&logoColor=white&logo=mui&color=0073E6)
![tailwindcss](https://img.shields.io/badge/-Rapid_API-black?style=for-the-badge&logoColor=white&logo=rapid&color=0055DA)

## Getting started

Follow these steps to set up the project locally on your machine.

1. **Cloning the Repository**

   ```bash
   # using HTTP
   git clone https://github.com/Tanvi444/Fitness-Application.git

   # using SSH
   git clone git@github.com:Tanvi444/Fitness-Application.git

   cd Fitness-Application
   ```

2. **Installation**

   Install the project dependencies using npm:

   ```bash
   # using NPM
   npm install --save

   # using YARN
   yarn
   ```

3. **Get Your API Keys from RapidAPI**

   - [ExerciseDB API Key and Host Endpoint](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
   - [YouTube Search and Download API Key and Host Endpoint](https://rapidapi.com/h0p3rwe/api/youtube-search-and-download)

4. **Set Up Environment Variables**

   Create a new file named `.env` in the root of your project and add the following content:

   ```bash
   REACT_APP_EXERCISE_API_KEY = "<your-api-key-for-exerciseDB>"
   REACT_APP_EXERCISE_API_HOST = "<your-host-endpoint-for-exerciseDB>"
   REACT_APP_YOUTUBE_API_KEY = "<your-api-key-for-youtube-search-and-download>"
   REACT_APP_YOUTUBE_API_HOST = "<your-host-endpoint-for-youtube-search-and-download>"
   ```

   Replace the values with your actual RapidAPI credentials.

5. **Running the Project**

   ```bash
   # using NPM
   npm run start

   # using YARN
   yarn start
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
