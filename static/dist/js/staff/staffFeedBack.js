$(document).ready(function() {
    $("#submit_feedback_btn").click(function() {
        var feedback_message = $("#feedback_message").val();

        // Validation: Check if feedback message is entered
        if (feedback_message.trim() === "") {
            alert("Please enter feedback message.");
            return;
        }

        // Submit the form if validation passes
        $("#feedbackForm").submit();
    });
});