import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { endpoint } from "../App";
import Dashboard from "./Dashboard";
import "./Home.css";

const Home = () => {
  const allGenres = [
    { label: "All", value: "All" },
    { label: "Education", value: "Education" },
    { label: "Sports", value: "Sports" },
    { label: "Comedy", value: "Comedy" },
    { label: "Lifestyle", value: "Lifestyle" }
  ];
  const [videoList, setVideoList] = useState([]);
  const [genres, setGenres] = useState(["All"]);
  const { enqueueSnackbar } = useSnackbar();

  const performAPICall = async () => {
    const URL = endpoint + `?genres=${genres.join(",")}`;
    console.log("Fetch Called with", URL);

    try {
      const response = await axios.get(URL);
      const videos = response.data.videos;
      setVideoList(videos);
      return videos;
    } catch (e) {
      if (e.response) {
        enqueueSnackbar(e.response.data.message, { variant: "error" });
      } else {
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          { variant: "error" }
        );
      }
      return [];
    }
  };

  const toggleGenreArrayMembership = (array, value) => {
    let newArray;

    if (array.includes(value)) {
      newArray = array.filter((ele) => ele !== value);
    } else {
      newArray = [...array, value];
    }
    return newArray;
  };

  const handleGenreChange = (genre) => {
    const all = "All";

    const newGenreValue = genre.value;

    // If "All" is selected, show all videos
    if (newGenreValue === all) {
      setGenres([all]);
    } else {
      // Selecting an non "All" option should remove the "All" genre selection
      const genresWithoutAll = genres.filter((ele) => ele !== all);

      // Add genre if not already present, otherwise remove
      const nextGenres = toggleGenreArrayMembership(
        genresWithoutAll,
        newGenreValue
      );

      // If no other genres are selected now, show all videos
      if (nextGenres.length === 0) {
        setGenres([all]);
      } else {
        setGenres(nextGenres);
      }
    }
  };

  useEffect(() => {
    console.log(genres);
  }, [genres]);

  return (
    <div>
      <Dashboard
        videoList={videoList}
        allGenres={allGenres}
        selectedGenres={genres}
        handleGenreChange={handleGenreChange}
        fetchVideos={performAPICall}
      />
    </div>
  );
};

export default Home;
