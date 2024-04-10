$(document).ready(function () {
    // Add event listener to delete session buttons
    $(".delete-session").on("click", function () {
        // Get the URL from data-url attribute
        var url = $(this).data("url");

        // Ask for confirmation before deleting
        if (confirm("Are you sure you want to delete this session?")) {
            // If user confirms, redirect to the delete URL
            window.location.href = url;
        }
    });
});