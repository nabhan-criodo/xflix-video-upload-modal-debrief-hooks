import Grid from "@mui/material/Grid";
import moment from "moment";
import React from "react";

const Explore = ({ videoList }) => {
  return (
    <div className="container">
      <Grid container className="video-grid">
        {videoList.length > 0 ? (
          videoList.map((video) => (
            <Grid
              key={video._id}
              item
              xs={12}
              md={3}
              style={{ padding: "20px" }}
            >
              <Grid container className="video-tile">
                <Grid item xs={12}>
                  <img
                    src={video.previewImage}
                    alt="PREVIEW_IMAGE"
                    className="preview-image"
                  />
                </Grid>
                <Grid item xs={12}>
                  <p className="video-title">{video.title}</p>
                  <p className="video-sub-title">
                    {moment(video.releaseDate).fromNow()}
                  </p>
                </Grid>
                <Grid item xs={12}>
                  <p className="video-sub-title">
                    {video.genre}
                    {" | "}
                    {video.contentRating}
                  </p>
                </Grid>
              </Grid>
            </Grid>
          ))
        ) : (
          <div className="no-videos">
            <p>No videos found.</p>
          </div>
        )}
      </Grid>
    </div>
  );
};

export default Explore;
