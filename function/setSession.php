<?php
if (isset($_POST['pseudo'])) {
    session_start();
    $_SESSION['pseudo'] = $_POST['pseudo'];
    http_response_code(200);
} else {
    echo "Error php session";
    http_response_code(400);
}