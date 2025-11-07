<style>
    /* Mega Menu Container */
    .mega-menu {
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100vh;
        z-index: 998;
        transition: left 0.3s ease;
    }

    .mega-menu.active {
        left: 0;
    }

    .menu-content {
        display: flex;
        border-radius: 20px;
        padding-top: 90px;
    }

    .menu-left {
        width: 80%;
        padding: 2rem;
        background-color: #f8f8f8;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }

    .menu-right {
        width: 20%;
        background-color: #2d2d2d;
        padding: 2rem;
        color: #fff;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .menu-left .nav-tabs {
        border: none;
        border-radius: 0;
        gap: 60px;
        margin-bottom: 35px;
        border-bottom: 1px solid var(--black-333);
        flex-wrap: nowrap;
    }

    .menu-left .nav-link {
        padding: 0 0 10px;
        border: none;
        border-bottom: 2px solid transparent;
        border-radius: 0;
        color: var(--black-333);
        font-size: 22px;
        font-weight: 500;
        transition: all 0.3s;
    }

    .menu-left .nav-link.active {
        padding: 0 0 10px;
        border: none;
        border-bottom: 2px solid var(--red-c3);
        border-radius: 0;
        color: var(--red-c3);
        background-color: transparent;
        font-weight: 600;
        transition: all 0.3s;
    }

    .nav-link:hover {
        border-color: transparent !important;
    }

    .nav-link:focus-visible {
        box-shadow: none;
    }

    /* Menu Content */
    /* Category Sections */
    .category-section {
        margin-bottom: 2.5rem;
    }

    .submenu_head {
        font-size: 20px;
        color: var(--black-333);
        margin-bottom: 10px;
        font-weight: 600;
    }

    .submenu_list {
        list-style: none;
        padding: 0;
    }

    .submenu_list li:not(:last-child) {
        margin-bottom: 5px;
    }

    .submenu_list a {
        color: var(--black-333);
        transition: color 0.3s;
    }

    .submenu_list a:hover {
        color: var(--red-c3);
    }

    /* Right Sidebar */
    .menu-right a {
        display: block;
        color: #fff;
        text-decoration: none;
        padding: 1rem 0;
        border-bottom: 1px solid #444;
        transition: all 0.3s;
    }

    .menu-right a:hover {
        padding-left: 10px;
        color: #e31837;
    }
</style>
</head>

<body>
    <!-- Mega Menu -->
    <div class="mega-menu" id="megaMenu">
        <div class="container-fluid">
            <!-- Menu Content -->
            <div class="menu-content">
                <div class="menu-left">
                    <div class="container">
                        <ul class="nav nav-tabs" id="sportsTabs" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-bs-toggle="tab" href="#allSports">All Sports</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#men">Men</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#women">Women</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#kids">Kids</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#accessories">Sports Accessories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-bs-toggle="tab" href="#gym">Gym Activewear & Equipment</a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <!-- All Sports Tab -->
                            <div class="tab-pane fade show active" id="allSports">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Outdoor Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Hiking and Trekking</a></li>
                                                <li><a href="#">Skiing and Snowboarding</a></li>
                                                <li><a href="#">Rock Climbing & Mountaineering</a></li>
                                                <li><a href="#">Horse Riding</a></li>
                                                <li><a href="#">Javelin Throw</a></li>
                                                <li><a href="#">Wildlife Watching</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Running & Cycling</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Running</a></li>
                                                <li><a href="#">Walking</a></li>
                                                <li><a href="#">Triathlon</a></li>
                                                <li><a href="#">Cycling</a></li>
                                                <li><a href="#">Cycle Servicing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Fitness Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Fitness Cardio</a></li>
                                                <li><a href="#">Body Building and Cross Training</a></li>
                                                <li><a href="#">Soft Training and Pilates</a></li>
                                                <li><a href="#">Gymnastics</a></li>
                                                <li><a href="#">Yoga</a></li>
                                                <li><a href="#">Kids Sports</a></li>
                                                <li><a href="#">Boxing and Martial Arts</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Team Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Football</a></li>
                                                <li><a href="#">Cricket</a></li>
                                                <li><a href="#">Basketball</a></li>
                                                <li><a href="#">Volleyball</a></li>
                                                <li><a href="#">Hockey</a></li>
                                                <li><a href="#">Rugby</a></li>
                                                <li><a href="#">Baseball</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Water Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Swimming</a></li>
                                                <li><a href="#">Surfing and Bodyboarding</a></li>
                                                <li><a href="#">Snorkeling and Diving</a></li>
                                                <li><a href="#">Kayaking and Stand Up Paddle</a></li>
                                                <li><a href="#">Sailing</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Target Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Carom</a></li>
                                                <li><a href="#">Golf</a></li>
                                                <li><a href="#">Archery</a></li>
                                                <li><a href="#">Darts</a></li>
                                                <li><a href="#">Billiards</a></li>
                                                <li><a href="#">Chess</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Racket Sports</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Badminton</a></li>
                                                <li><a href="#">Tennis</a></li>
                                                <li><a href="#">Table Tennis</a></li>
                                                <li><a href="#">Squash</a></li>
                                                <li><a href="#">Racket Stringing Service</a></li>
                                                <li><a href="#">Padel</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-3 col-sm-6">
                                        <div class="category-section">
                                            <h3 class="submenu_head">Skating</h3>
                                            <ul class="submenu_list">
                                                <li><a href="#">Roller Skating</a></li>
                                                <li><a href="#">In Line Roller Skates</a></li>
                                                <li><a href="#">Protective Kit</a></li>
                                                <li><a href="#">Scooter</a></li>
                                                <li><a href="#">SkateBoard</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Other tabs -->
                            <div class="tab-pane fade" id="men">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Men's Sports Collection</h2>
                                        <p>Browse our complete range of men's sports equipment and apparel.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="women">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Women's Sports Collection</h2>
                                        <p>Discover our women's sports equipment and activewear.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="kids">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Kids Sports Collection</h2>
                                        <p>Quality sports gear designed for young athletes.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="accessories">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Sports Accessories</h2>
                                        <p>Complete your sports kit with our range of accessories.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="gym">
                                <div class="row">
                                    <div class="col-12">
                                        <h2>Gym Activewear & Equipment</h2>
                                        <p>Everything you need for your fitness journey.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Sidebar -->
                <div class="menu-right">
                    <a href="#">Top Brands</a>
                    <a href="#">Hire a Expert Coaches</a>
                    <a href="#">About Us</a>
                    <a href="#">Careers</a>
                    <a href="#">Business Alliance</a>
                    <a href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </div>