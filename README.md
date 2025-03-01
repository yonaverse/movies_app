# [Movies_App](https://movies-blush-nine.vercel.app/)

## Overview
The **Movies_App** is a simple React frontend application that fetches and displays popular movies from an external API. Users can browse trending movies and search for specific titles.

## Features
- Display a list of popular movies
- Search for movies by title
- Responsive UI for seamless browsing
- Fetches real-time data from an external movie API

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yonaverse/movies_app.git
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the API Key:**
   - Create a `.env` file in the root directory.
   - Add your access token:
     ```env
     VITE_TMDB=your_api_key_here
     ```

4. **Run the app:**
   ```bash
   npm run dev
   ```

## Usage
- Open `http://localhost:5173/` in your browser.
- Browse through the list of popular movies.
- Use the search bar to find specific movies.

## API Information
This app fetches data from [The Movie Database (TMDb)](https://www.themoviedb.org/). Make sure to sign up and generate an API key to use the service.

