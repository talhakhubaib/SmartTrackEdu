$(document).ready(function() {
    $("#apply_leave_btn").click(function() {
        var leave_date = $("#leave_date").val();
        var leave_message = $("#leave_message").val();

        // Validation: Check if leave date is entered
        if (leave_date === null || leave_date === "") {
            alert("Please enter leave date.");
            return;
        }

        // Validation: Check if leave reason is entered
        if (leave_message === null || leave_message === "") {
            alert("Please enter leave reason.");
            return;
        }

        // Check if leave date is before current date
        var currentDate = new Date();
        var selectedDate = new Date(leave_date);

        if (selectedDate < currentDate) {
            alert("Leave date cannot be before the current date.");
            return;
        }

        // Check if leave date is on a weekend (Saturday or Sunday)
        var dayOfWeek = selectedDate.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            alert("Leave date cannot be on a weekend (Saturday or Sunday).");
            return;
        }

        // Submit the form if all validations pass
        $("#leaveForm").submit();
    });
});