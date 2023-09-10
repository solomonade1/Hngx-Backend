const express = require("express");
const app = express();
const getCurrentUTCWithValidation = require('./timeUtils');
const port = 4000;

// Define the endpoint
app.get("/api", (req, res) => {
  // Parse query parameters
  const slackName = req.query.slack_name || "example_name";
  const track = req.query.track || "backend";

  // Get the current date and time
  const currentDate = new Date();
  const currentDay = currentDate.toLocaleString("en-US", { weekday: "long" });
  const currentUTCTime = new Date().toISOString();

  // Construct the response JSON
  const response = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: getCurrentUTCWithValidation(),
    track: track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  };

  // Send the JSON response
  res.status(200).json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
