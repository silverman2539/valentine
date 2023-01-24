var column = 4;
var row = 3;

addEventListener('keydown', e => { if (37 === e.keyCode) { Left(); } }, false);
addEventListener('keydown', e => { if (39 === e.keyCode) { Right(); } }, false);
addEventListener('keydown', e => { if (38 === e.keyCode) { Up(); } }, false);
addEventListener('keydown', e => { if (40 === e.keyCode) { Down(); } }, false);

function Left()
{
	column = column - 1;
	
	if (column == "0")
	{
		Left0();
		column = 7;
	}
	else if (column == "1")
	{
		Left1();
	}
	else if (column == "2")
	{
		Left2();
	}
	else if (column == "3")
	{
		Left3();
	}
	else if (column == "4")
	{
		Left4();
	}
	else if (column == "5")
	{
		Left5();
	}
	else if (column == "6")
	{
		Left6();
	}
}

function Right()
{
	column = column + 1;
	
	if (column == "2")
	{
		Right2();
	}
	else if (column == "3")
	{
		Right3();
	}
	else if (column == "4")
	{
		Right4();
	}
	else if (column == "5")
	{
		Right5();
	}
	else if (column == "6")
	{
		Right6();
	}
	else if (column == "7")
	{
		Right7();
	}
	else if (column == "8")
	{
		Right8();
		column = 1;
	}
}

function Up()
{
	row = row - 1;
	
	if (row == "0")
	{
		Up0();
		row = 5;
	}
	else if (row == "1")
	{
		Up1();
	}
	else if (row == "2")
	{
		Up2();
	}
	else if (row == "3")
	{
		Up3();
	}
	else if (row == "4")
	{
		Up4();
	}
}

function Down()
{
	row = row + 1;
	
	if (row == "2")
	{
		Down2();
	}
	else if (row == "3")
	{
		Down3();
	}
	else if (row == "4")
	{
		Down4();
	}
	else if (row == "5")
	{
		Down5();
	}
	else if (row == "6")
	{
		Down6();
		row = 1;
	}
}

function Left0()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "063.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "064.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "064.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "065.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "065.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "066.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "066.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "067.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "067.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "068.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "068.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "069.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "069.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "070.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "070.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "071.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "071.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "072.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "072.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "073.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "073.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "074.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "074.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "075.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "075.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "076.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "076.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "077.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "077.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "078.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "078.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "079.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "079.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "080.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "080.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "081.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "081.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "082.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "082.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "083.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "083.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-63.0%"; }, 2050);
}

function Left1()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "42.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "43.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "43.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "44.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "44.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "45.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "45.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "46.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "46.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "47.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "47.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "48.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "48.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "49.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "49.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "50.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "50.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "51.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "51.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "52.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "52.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "53.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "53.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "54.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "54.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "55.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "55.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "56.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "56.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "57.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "57.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "58.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "58.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "59.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "59.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "60.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "60.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "61.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "61.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "62.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "62.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "63.0%"; }, 2050);
}

function Left2()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "21.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "22.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "22.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "23.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "23.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "24.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "24.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "25.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "25.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "26.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "26.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "27.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "27.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "28.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "28.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "29.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "29.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "30.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "30.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "31.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "31.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "32.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "32.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "33.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "33.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "34.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "34.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "35.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "35.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "36.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "36.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "37.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "37.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "38.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "38.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "39.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "39.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "40.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "40.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "41.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "41.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "42.0%"; }, 2050);
}

function Left3()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "00.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "01.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "01.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "02.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "02.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "03.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "03.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "04.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "04.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "05.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "05.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "06.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "06.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "07.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "07.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "08.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "08.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "09.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "09.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "10.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "10.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "11.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "11.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "12.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "12.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "13.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "13.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "14.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "14.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "15.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "15.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "16.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "16.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "17.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "17.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "18.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "18.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "19.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "19.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "20.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "20.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "21.0%"; }, 2050);
}

function Left4()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-20.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-20.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-19.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-19.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-18.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-18.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-17.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-17.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-16.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-16.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-15.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-15.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-14.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-14.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-13.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-13.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-12.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-12.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-11.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-11.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-10.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-10.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-09.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-09.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-08.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-08.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-07.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-07.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-06.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-06.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-05.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-05.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-04.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-04.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-03.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-03.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-02.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-02.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-01.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-01.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-00.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-00.0%"; }, 2050);
}

function Left5()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-41.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-41.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-40.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-40.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-39.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-39.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-38.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-38.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-37.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-37.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-36.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-36.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-35.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-35.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-34.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-34.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-33.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-33.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-32.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-32.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-31.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-31.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-30.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-30.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-29.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-29.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-28.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-28.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-27.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-27.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-26.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-26.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-25.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-25.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-24.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-24.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-23.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-23.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-22.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-22.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-21.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-21.0%"; }, 2050);
}

function Left6()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-62.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-62.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-61.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-61.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-60.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-60.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-59.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-59.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-58.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-58.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-57.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-57.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-56.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-56.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-55.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-55.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-54.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-54.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-53.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-53.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-52.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-52.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-51.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-51.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-50.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-50.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-49.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-49.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-48.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-48.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-47.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-47.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-46.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-46.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-45.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-45.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-44.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-44.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-43.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-43.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-42.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-42.0%"; }, 2050);
}

function Right2()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "62.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "62.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "61.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "61.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "60.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "60.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "59.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "59.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "58.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "58.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "57.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "57.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "56.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "56.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "55.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "55.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "54.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "54.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "53.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "53.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "52.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "52.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "51.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "51.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "50.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "50.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "49.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "49.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "48.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "48.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "47.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "47.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "46.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "46.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "45.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "45.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "44.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "44.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "43.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "43.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "42.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "42.0%"; }, 2050);
}

function Right3()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "41.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "41.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "40.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "40.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "39.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "39.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "38.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "38.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "37.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "37.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "36.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "36.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "35.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "35.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "34.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "34.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "33.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "33.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "32.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "32.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "31.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "31.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "30.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "30.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "29.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "29.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "28.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "28.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "27.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "27.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "26.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "26.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "25.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "25.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "24.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "24.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "23.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "23.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "22.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "22.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "21.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "21.0%"; }, 2050);
}

function Right4()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "20.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "20.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "19.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "19.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "18.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "18.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "17.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "17.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "16.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "16.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "15.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "15.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "14.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "14.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "13.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "13.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "12.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "12.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "11.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "11.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "10.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "10.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "09.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "09.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "08.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "08.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "07.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "07.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "06.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "06.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "05.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "05.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "04.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "04.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "03.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "03.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "02.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "02.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "01.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "01.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "00.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "00.0%"; }, 2050);
}

function Right5()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-00.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-01.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-01.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-02.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-02.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-03.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-03.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-04.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-04.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-05.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-05.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-06.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-06.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-07.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-07.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-08.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-08.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-09.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-09.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-10.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-10.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-11.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-11.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-12.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-12.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-13.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-13.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-14.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-14.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-15.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-15.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-16.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-16.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-17.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-17.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-18.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-18.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-19.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-19.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-20.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-20.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-21.0%"; }, 2050);
}

function Right6()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-21.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-22.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-22.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-23.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-23.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-24.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-24.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-25.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-25.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-26.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-26.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-27.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-27.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-28.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-28.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-29.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-29.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-30.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-30.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-31.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-31.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-32.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-32.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-33.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-33.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-34.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-34.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-35.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-35.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-36.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-36.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-37.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-37.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-38.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-38.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-39.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-39.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-40.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-40.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-41.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-41.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-42.0%"; }, 2050);
}

function Right7()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-42.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-43.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-43.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-44.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-44.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-45.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-45.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-46.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-46.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-47.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-47.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-48.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-48.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-49.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-49.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-50.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-50.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-51.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-51.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-52.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-52.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-53.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-53.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-54.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-54.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-55.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-55.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-56.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-56.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-57.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-57.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-58.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-58.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-59.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-59.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-60.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-60.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-61.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-61.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-62.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-62.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-63.0%"; }, 2050);
}

function Right8()
{
	setTimeout(function(){ document.getElementById("screen").style.left = "-63.5%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-64.0%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-64.5%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-65.0%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-65.5%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-66.0%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-66.5%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-67.0%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-67.5%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-68.0%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-68.5%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-69.0%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-69.5%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-70.0%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-70.5%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-71.0%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-71.5%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-72.0%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-72.5%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-73.0%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-73.5%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.left = "-74.0%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.left = "-74.5%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.left = "-75.0%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.left = "-75.5%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.left = "-76.0%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.left = "-76.5%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.left = "-77.0%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.left = "-77.5%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.left = "-78.0%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.left = "-78.5%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.left = "-79.0%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.left = "-79.5%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.left = "-80.0%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.left = "-80.5%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.left = "-81.0%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.left = "-81.5%"; }, 1800);
	setTimeout(function(){ document.getElementById("screen").style.left = "-82.0%"; }, 1850);
	setTimeout(function(){ document.getElementById("screen").style.left = "-82.5%"; }, 1900);
	setTimeout(function(){ document.getElementById("screen").style.left = "-83.0%"; }, 1950);
	setTimeout(function(){ document.getElementById("screen").style.left = "-83.5%"; }, 2000);
	setTimeout(function(){ document.getElementById("screen").style.left = " 63.0%"; }, 2050);
}

function Up0()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "075%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "076%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "077%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "078%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "079%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "080%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "081%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "082%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "083%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "084%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "085%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "086%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "087%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "088%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "089%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "090%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "091%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "092%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "093%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "094%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "095%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "096%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "097%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "098%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "099%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "100%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "101%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "102%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "103%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "104%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "105%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "106%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "107%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "108%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "109%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "110%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-74%"; }, 1800);
}

function Up1()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "38%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "39%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "40%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "41%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "42%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "43%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "44%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "45%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "46%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "47%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "48%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "49%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "50%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "51%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "52%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "53%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "54%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "55%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "56%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "57%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "58%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "59%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "60%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "61%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "62%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "63%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "64%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "65%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "66%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "67%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "68%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "69%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "70%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "71%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "72%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "73%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "74%"; }, 1800);
}

function Up2()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "01%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "02%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "03%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "04%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "05%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "06%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "07%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "08%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "09%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "10%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "11%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "12%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "13%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "14%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "15%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "16%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "17%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "18%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "19%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "20%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "21%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "22%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "23%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "24%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "25%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "26%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "27%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "28%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "29%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "30%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "31%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "32%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "33%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "34%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "35%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "36%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "37%"; }, 1800);
}

function Up3()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "-36%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-35%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-34%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-33%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-32%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-31%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-30%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-29%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-28%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-27%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-26%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-25%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-24%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-23%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-22%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-21%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-20%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "-19%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "-18%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "-17%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "-16%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-15%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-14%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-13%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-12%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-11%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-10%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-09%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-08%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-07%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-06%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-05%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-04%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-03%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-02%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-01%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-00%"; }, 1800);
}

function Up4()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "-73%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-72%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-71%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-70%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-69%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-68%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-67%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-66%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-65%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-64%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-63%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-62%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-61%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-60%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-59%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-58%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-57%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "-56%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "-55%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "-54%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "-53%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-52%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-51%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-50%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-49%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-48%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-47%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-46%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-45%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-44%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-43%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-42%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-41%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-40%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-39%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-38%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-37%"; }, 1800);
}

function Down2()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "73%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "72%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "71%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "70%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "69%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "68%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "67%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "66%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "65%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "64%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "63%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "62%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "61%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "60%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "59%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "58%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "57%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "56%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "55%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "54%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "53%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "52%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "51%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "50%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "49%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "48%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "47%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "46%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "45%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "44%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "43%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "42%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "41%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "40%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "39%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "38%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "37%"; }, 1800);
}

function Down3()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "36%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "35%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "34%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "33%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "32%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "31%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "30%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "29%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "28%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "27%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "26%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "25%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "24%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "23%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "22%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "21%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "20%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "19%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "18%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "17%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "16%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "15%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "14%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "13%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "12%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "11%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "10%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "09%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "08%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "07%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "06%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "05%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "04%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "03%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "02%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "01%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "00%"; }, 1800);
}

function Down4()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "-01%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-02%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-03%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-04%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-05%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-06%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-07%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-08%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-09%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-10%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-11%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-12%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-13%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-14%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-15%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-16%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-17%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "-18%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "-19%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "-20%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "-21%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-22%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-23%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-24%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-25%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-26%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-27%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-28%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-29%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-30%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-31%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-32%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-33%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-34%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-35%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-36%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-37%"; }, 1800);
}

function Down5()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "-38%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-39%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-40%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-41%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-42%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-43%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-44%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-45%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-46%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-47%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-48%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-49%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-50%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-51%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-52%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-53%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-54%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "-55%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "-56%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "-57%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "-58%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-59%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-60%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-61%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-62%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-63%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-64%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-65%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-66%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-67%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-68%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-69%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-70%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-71%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-72%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-73%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-74%"; }, 1800);
}

function Down6()
{
	setTimeout(function(){ document.getElementById("screen").style.top = "-075%"; }, 0000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-076%"; }, 0050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-077%"; }, 0100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-078%"; }, 0150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-079%"; }, 0200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-080%"; }, 0250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-081%"; }, 0300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-082%"; }, 0350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-083%"; }, 0400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-084%"; }, 0450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-085%"; }, 0500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-086%"; }, 0550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-087%"; }, 0600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-088%"; }, 0650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-089%"; }, 0700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-090%"; }, 0750);
	setTimeout(function(){ document.getElementById("screen").style.top = "-091%"; }, 0800);
	setTimeout(function(){ document.getElementById("screen").style.top = "-092%"; }, 0850);
	setTimeout(function(){ document.getElementById("screen").style.top = "-093%"; }, 0900);
	setTimeout(function(){ document.getElementById("screen").style.top = "-094%"; }, 0950);
	setTimeout(function(){ document.getElementById("screen").style.top = "-095%"; }, 1000);
	setTimeout(function(){ document.getElementById("screen").style.top = "-096%"; }, 1050);
	setTimeout(function(){ document.getElementById("screen").style.top = "-097%"; }, 1100);
	setTimeout(function(){ document.getElementById("screen").style.top = "-098%"; }, 1150);
	setTimeout(function(){ document.getElementById("screen").style.top = "-099%"; }, 1200);
	setTimeout(function(){ document.getElementById("screen").style.top = "-100%"; }, 1250);
	setTimeout(function(){ document.getElementById("screen").style.top = "-101%"; }, 1300);
	setTimeout(function(){ document.getElementById("screen").style.top = "-102%"; }, 1350);
	setTimeout(function(){ document.getElementById("screen").style.top = "-103%"; }, 1400);
	setTimeout(function(){ document.getElementById("screen").style.top = "-104%"; }, 1450);
	setTimeout(function(){ document.getElementById("screen").style.top = "-105%"; }, 1500);
	setTimeout(function(){ document.getElementById("screen").style.top = "-106%"; }, 1550);
	setTimeout(function(){ document.getElementById("screen").style.top = "-107%"; }, 1600);
	setTimeout(function(){ document.getElementById("screen").style.top = "-108%"; }, 1650);
	setTimeout(function(){ document.getElementById("screen").style.top = "-109%"; }, 1700);
	setTimeout(function(){ document.getElementById("screen").style.top = "-110%"; }, 1750);
	setTimeout(function(){ document.getElementById("screen").style.top = " 074%"; }, 1800);
}



















