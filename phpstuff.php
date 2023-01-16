<html>
<head><title>Hello World</title></head>
<body>
<?php
    $build = "build a website";
    $build = str_replace("build", "create", $build);
    echo "You can " . $build;
    echo "<br/>";
    echo strtoupper($build);
    echo "<br/>";
    echo ucwords($build);
    echo "<br/>";
    $cut = substr($build, 9, 3);
    echo $cut;
    //strtolower()

    $htmlstuff = "<font>";//need to do htmlentities("html prefixs here");
    echo $htmlstuff;
    echo "<br/>";

    $nuts = "candy";
    switch ($nuts) {
        case "sugma":
            echo "Sug ma nuts";
            break;
        case "love":
            echo "You are going to love my nuts";
            break;
        case "candy":
            echo "Candyeez nuts fit";
            break;
        default:
            echo "No nuts";
            break;
    }
echo "<br/>";

    $arr = array("Sugon", "Sugma", "Ligon", "Ligma");
    foreach ($arr as $key => $value){
        echo "Key: ". $key . "&rarr; ". $value . "<br/>";
    }
?>
</body>
</html>
