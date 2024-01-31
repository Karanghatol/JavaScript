<?php
if (isset($_GET['data'])) {
    $jsonString = $_GET['data'];
    $jsonData = json_decode($jsonString, true);

    if ($jsonData !== null) {
        // Extracting values from the JSON data
        $name = isset($jsonData['name']) ? $jsonData['name'] : '';
        $roll = isset($jsonData['roll']) ? $jsonData['roll'] : '';
        $emp = isset($jsonData['emp']) ? $jsonData['emp'] : '';

        // Outputting the formatted messroll
        echo "Hello, your name is: $name, your roll is: $roll, your emp is: $emp";
        ?>
        <script>
            // Accessing the values in JavaScript
            let name = '<?php echo $name; ?>';
            let roll = '<?php echo $roll; ?>';
            let emp = '<?php echo $emp; ?>';

            // Using the values in JavaScript (you can modify this part as needed)
            console.log("Hello, your name is: " + name + ", your roll is: " + roll + ", your emp is: " + emp);
        </script>
        <?php
    } else {
        echo "Error decoding JSON data.";
    }
} else {
    echo "No JSON data received.";
}
?>