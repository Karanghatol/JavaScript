<?php
class Std
{
    public $name = "";
    public $email = "";
    public $class = "";
    public $roll = "";
    public $number = "";
}

$obj = new Std();
$obj->name = "Karan";
$obj->email = "Karanghatol31@gmail.com";
$obj->class = "III";
$obj->roll = "14";
$obj->number = "9284560987";

$tojson = json_encode($obj);
if (
    file_put_contents(
        "C:\\Users\\lenovo\\Documents\\JavaScript\\JSON\\JSON-PHP\\JSON-php-object-to-json.txt",
        $tojson,
        JSON_PRETTY_PRINT | JSON_FORCE_OBJECT
    )
) {
    echo "contents put SUCESSFULLY";
}
echo "<hr />";

$json = '{"a":1,"b":2,"c":3,"d":4,"e":5}';

print_r(json_decode($json));
print_r(json_decode($json, true));
?>
