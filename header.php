<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Athlexia</title>
    <!-- sunflower fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sunflower:wght@300&display=swap" rel="stylesheet">
    <!-- bootstap links -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
    <!-- slick slider -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css"
        integrity="sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
        integrity="sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- aos aniamtion -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <!-- lenis -->
    <link rel="stylesheet" href="https://unpkg.com/lenis@1.3.8/dist/lenis.css">
    <!-- fontawesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css"
        integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- select-2 -->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
    <!-- Isotope CSS (optional, but improves layout) -->
    <link rel="stylesheet" href="https://unpkg.com/isotope-layout@3/dist/isotope.css">
    <!-- custom css -->
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">
</head>

<body>

    <header>
        <div class="container-fluid">
            <div class="header_wrapper">
                <div class="head_left">
                    <div class="hamburger" id="hamburger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <div class="logo">
                        <a href="index.php">
                            <img src="./images/header/head_logo.svg" alt="athlexia" class="img-fluid">
                        </a>
                    </div>
                </div>
                <div class="head_center">
                    <div class="d-flex gap-2">
                        <img src="./images/header/head_loc.png" alt="pin" height="50px" width="41px">
                        <div class="d-flex flex-column">
                            <p>Location</p>
                            <select class="head_state" name="state">
                                <option value="AL">Alabama</option>
                                <option value="WY">Rajasthan</option>
                            </select>
                        </div>
                    </div>
                    <div class="search-container">
                        <div class="head_pro_search">
                            <input type="text" placeholder="Search.." name="search" class="head_search">
                            <span><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                </div>
                <div class="head_right">
                    <div>
                        <img src="./images/header/help.svg" alt="help">
                    </div>
                    <div>
                        <img src="./images/header/sign.svg" alt="sign">
                        <select name="" id="" class="signin_select">
                            <option value="">Sign Up</option>
                            <option value="">Sign In</option>
                        </select>
                    </div>
                </div>
            </div>
    </header>
    <?php include('menu.php') ?>
