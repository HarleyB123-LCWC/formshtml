<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form values
    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $email = $_POST['email'];
    $allergies = $_POST['allergies'];
    $currentDoctor = $_POST['currentDoctor'];

    // Create CSV content
    $csvContent = "$name,$dob,$email,$allergies,$currentDoctor\n";

    // Append to the existing CSV file
    file_put_contents('user_signup.csv', $csvContent, FILE_APPEND);

    echo "Data appended successfully!";
} else {
    echo "Invalid request!";
}
?>