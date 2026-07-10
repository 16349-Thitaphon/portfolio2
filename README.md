<!DOCTYPE html>
<html lang="th">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Portfolio | หน้าแรก</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;600&display=swap" rel="stylesheet">

<link rel="stylesheet" href="style.css">
</head>

<body>

<nav>
    <div class="logo">My Portfolio</div>

    <ul>
        <li><a href="index.html">หน้าแรก</a></li>
        <li><a href="profile.html">ประวัติส่วนตัว</a></li>
        <li><a href="education.html">ประวัติการศึกษา</a></li>
        <li><a href="portfolio.html">ผลงานและกิจกรรม</a></li>
        <li><a href="skills.html">ทักษะและการติดต่อ</a></li>
    </ul>
</nav>

<section class="hero">

    <img src="images/profile.jpg" class="profile">

    <h1>สวัสดีค่ะ 👋</h1>

    <h2>ชื่อ-นามสกุล</h2>

    <p>
        ยินดีต้อนรับเข้าสู่เว็บไซต์ Portfolio ของฉัน
        เว็บไซต์นี้จัดทำขึ้นเพื่อรวบรวมประวัติส่วนตัว
        ประวัติการศึกษา ผลงาน กิจกรรม และทักษะต่าง ๆ
    </p>
   <a href="profile.html" class="btn">
        เข้าสู่ Portfolio
    </a>

</section>

</body>
</html>
ไฟล์ตกแต่งทั้งหมด (style.css)

สร้างไฟล์ชื่อ

style.css

แล้วใส่

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Kanit',sans-serif;
}

body{

    background:linear-gradient(135deg,#FFE4F2,#FFF6FB);
    color:#555;
}

/* ---------- Navbar ---------- */

nav{

    display:flex;
    justify-content:space-between;
    align-items:center;

    padding:15px 8%;

    background:#FFC1DA;

    box-shadow:0 4px 15px rgba(0,0,0,.1);

    position:sticky;
    top:0;
}

.logo{

    font-size:28px;
    font-weight:bold;
    color:white;
}

nav ul{

    display:flex;
    list-style:none;
}

nav ul li{

    margin-left:25px;
}

nav ul li a{

    color:white;
    text-decoration:none;
    font-size:18px;
    transition:.3s;
}

nav ul li a:hover{

    color:#ff5c9e;
}

/* ---------- Hero ---------- */

.hero{

    width:80%;
    max-width:900px;

    margin:70px auto;

    background:white;

    border-radius:20px;

    text-align:center;

    padding:50px;

    box-shadow:0 10px 30px rgba(0,0,0,.1);
}

.profile{

    width:180px;
    height:180px;

    border-radius:50%;

    border:6px solid #FFD6E8;

    object-fit:cover;

    margin-bottom:20px;
}

.hero h1{

    color:#ff5c9e;
    font-size:40px;
}

.hero h2{

    margin:15px 0;
}

.hero p{

    line-height:1.8;
    margin-top:20px;
}

.btn{

    display:inline-block;

    margin-top:30px;

    background:#ff82b2;

    color:white;

    text-decoration:none;

    padding:15px 35px;

    border-radius:30px;

    transition:.3s;
}

.btn:hover{

    background:#ff5c9e;
}

/* ---------- Responsive ---------- */

@media(max-width:768px){

nav{

flex-direction:column;

}

nav ul{

margin-top:15px;

flex-wrap:wrap;

justify-content:center;

}

nav ul li{

margin:10px;

}

.hero{

width:95%;

padding:30px;

}

}
