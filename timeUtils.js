function getCurrentUTCWithValidation() {
    const currentUTC = new Date().toISOString();
    const currentUTCDate = new Date(currentUTC);
    const now = new Date();
  
    // Calculate the time difference in minutes
    const timeDifferenceMinutes = Math.abs((now - currentUTCDate) / 60000);
  
    // Check if the time difference is within +/-2 minutes
    if (timeDifferenceMinutes <= 2) {
      return currentUTC;
    } else {
      return "Time is not within the +/-2 minute window.";
    }
  }

  module.exports = getCurrentUTCWithValidation;