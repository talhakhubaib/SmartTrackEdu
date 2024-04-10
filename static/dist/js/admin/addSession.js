$(document).ready(function () {
    $('#addSessionForm').submit(function (event) {
        var startYear = new Date($('#session_start_year').val());
        var endYear = new Date($('#session_end_year').val());
        var currentDate = new Date();

        // Check if start year and end year are filled out
        if (!startYear || !endYear) {
            event.preventDefault();
            alert('Please fill in all fields.');
            return;
        }

        // Check if end year is greater than start year
        if (endYear <= startYear) {
            event.preventDefault();
            alert('End year must be greater than start year.');
            return;
        }

        // Check if end year is before the current date
        if (endYear < currentDate) {
            event.preventDefault();
            alert('End year cannot be before the current date.');
            return;
        }
    });
});