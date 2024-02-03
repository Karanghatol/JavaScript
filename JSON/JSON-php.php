<?php
$myobj = array(
    "student" => true,
    "name" => "karanghatol",
    "class" => "BCS",
    "roll" => 14,
    "projects" => null,
);
// stdClass
//                                              flags
//                                     __________|_________
//                                     |                  |
$myjson = json_encode($myobj, JSON_FORCE_OBJECT | JSON_PRETTY_PRINT);  // shows index, most readable form
file_put_contents("C:\\Users\\lenovo\\Documents\\JavaScript\\JSON\\JSON-PHP\\JSON-php.txt", $myjson);  // Escape backslashes
$fileContent = file_get_contents("C:\\Users\\lenovo\\Documents\\JavaScript\\JSON\\JSON-PHP\\JSON-php.txt");  // Escape backslashes
$decodedData = json_decode($fileContent, true);  // Set the second parameter to true to get an associative array
print_r($decodedData);
?>
