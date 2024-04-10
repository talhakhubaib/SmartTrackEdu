$(document).ready(function() {
    $('#feedbackForm').submit(function(event) {
        // Check if the feedback message is empty
        if ($('#feedbackMessage').val().trim() === '') {
            event.preventDefault();
            alert('Please enter a feedback message before submitting.');
        }
    });
});