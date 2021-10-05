<?php
session_start();
if (isset($_SESSION['pseudo'])) {
    $json_response = json_encode($_SESSION['pseudo']);
    echo $_SESSION['pseudo'];
} else {
    $json_response = json_encode("not connected");
    echo $json_response;
}
