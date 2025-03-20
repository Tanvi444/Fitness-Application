export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_EXERCISE_API_KEY,
    "x-rapidapi-host": process.env.REACT_APP_EXERCISE_API_HOST,
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": process.env.REACT_APP_YOUTUBE_API_HOST,
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}}`, {
        cause: response,
      });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data: ", { error });
    return null;
  }
};
