$(document).ready(function () {
    // Add event listener to delete student buttons
    $(".delete-student").on("click", function () {
        // Get the URL from data-url attribute
        var url = $(this).data("url");

        // Ask for confirmation before deleting
        if (confirm("Are you sure you want to delete this student?")) {
            // If user confirms, redirect to the delete URL
            window.location.href = url;
        }
    });
});