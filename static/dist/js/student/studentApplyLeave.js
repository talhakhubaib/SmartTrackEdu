$(document).ready(function() {
    $('#leaveForm').submit(function(event) {
        // Get the selected leave date
        var selectedDate = new Date($('#leaveDate').val());
        // Get the current date
        var currentDate = new Date();

        // Check if the selected date is before the current date
        if (selectedDate < currentDate) {
            event.preventDefault();
            alert('Please select a date after today for leave application.');
        }

        // Check if the selected date is a weekend (Saturday or Sunday)
        var dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            event.preventDefault();
            alert('You cannot apply for leave on a weekend (Saturday/Sunday).');
        }
    });
});