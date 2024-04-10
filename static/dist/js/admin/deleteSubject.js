$(document).ready(function () {
    // Add event listener to delete subject buttons
    $(".delete-subject").on("click", function () {
        // Get the URL from data-url attribute
        var url = $(this).data("url");

        // Ask for confirmation before deleting
        if (confirm("Are you sure you want to delete this subject?")) {
            // If user confirms, redirect to the delete URL
            window.location.href = url;
        }
    });
});