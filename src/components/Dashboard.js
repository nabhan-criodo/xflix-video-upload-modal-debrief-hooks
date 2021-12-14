import Grid from "@mui/material/Grid";
import React, { useEffect } from "react";
import Explore from "./Explore";
import GenreList from "./GenreList";

const Dashboard = ({
  videoList,
  allGenres,
  selectedGenres,
  handleGenreChange,
  fetchVideos
}) => {
  useEffect(() => {
    fetchVideos();
  }, [selectedGenres]);

  return (
    <div>
      <Grid container>
        <GenreList
          handleGenreChange={handleGenreChange}
          selectedGenres={selectedGenres}
          allGenres={allGenres}
        ></GenreList>

        <Grid item xs={12}>
          <Explore videoList={videoList} parent="Dashboard" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
