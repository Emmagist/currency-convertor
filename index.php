<?php require "api.php"; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Convertor</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Currency Convertor</h1>
        <div class="box">
            <div class="box-left">
                <select name="currency" id="" class="currency"></select>
                <input type="text" id="num">
            </div>
            <div class="box-right">
                <select name="currency" id="" class="currency"></select>
                <input type="text" id="ans" disabled>
            </div>
        </div>
        <button class="btn" id="btn">Convert</button>
    </div>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="script.js"></script>
</body>
</html>