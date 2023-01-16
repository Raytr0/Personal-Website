<?php
    $fileHandler = fopen("waluigi.txt", "w") or die("No file :(");
    fwrite($fileHandler, "waluigi");//changes text in .txt file
    fclose($fileHandler);