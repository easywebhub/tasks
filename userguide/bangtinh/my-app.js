// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    domCache: true, //enable inline pages    
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

myApp.onPageInit('calculator', function (page) {
    console.log('Go To Calculator')
});
$$('.ac-1').on('click', function () {
    var trongluongmap = [

    ]
    var list = ["1, 0.02,50000,2,,,,","2,0.1,10000,2.2,,,,,,","3,0.18,5556,2.4,,,,,","4,0.26,3846,2.7,,,,,","5,0.34,2941,2.9,,,,","6,0.42,2381,3.2,,,,","7,0.5,2000,3.5,,,,","8,0.58,1724,3.9,,,,","9,0.66,1515,4.2,,,,",
    "10,0.8,1250,4.6,,,,","11,0.9,1111,5.1,,,,","12,1,1000,5.6,,,,","13,1.1,909,6.1,,,", "14,1.2,833,6.5,,,", "15,1.3,769,7.1,,,", 
    "16,1.4,714,7.9,,,", "17,1.52,658,8.8,,,","18,1.65,606,9.8,,,", "19,1.79,559,10.5,,,", 
     "20,1.92,521,11.4,,,", "21,2.06,485,12,,,", "22,2.2,455,12.8,,,", "23,2.35,426,13.7,,,", "24,2.51,398,14.6,,,", "25,2.67,375,15.6,1.5,0.23,120", 
     "26,2.85,351,16.5,1.5,0.25,120", "27,3.05,328,17.3,1.5,0.26,120", "28,3.25,308,18.2,1.5,0.27,120", "29,3.46,289,18.9,1.5,0.28,120", 
     "30,3.71,270,19.5,1.5,0.29,120", "31,3.96,253,20.1,1.5,0.30,120", "32,4.21,238,20.8,1.5,0.31,120", "33,4.46,224,21.4,1.5,0.32,120", "34,4.71,212,22,1.5,0.33,120", "35,4.96,202,22.7,1.5,0.34,120", 
     "36,5.21,192,23.3,1.5,0.35,120", "37,5.46,183,23.9,1.5,0.36,120", "38,5.72,175,24.5,1.5,0.37,120", "39,5.98,167,25.1,2,0.50,120", "40,6.24,160,25.7,2,0.51,120", 
     "41,6.5,154,26.3,2,0.53,120", "42,6.76,148,26.9,2,0.54,120", "43,7.02,142,27.5,2,0.55,120", "44,7.28,137,28.1,2,0.56,120", "45,7.55,132,28.7,2.5,0.72,120",
      "46,7.82,128,29.2,2.5,0.73,120", "47,8.08,124,29.8,2.5,0.75,120", "48,8.34,120,30.4,2.5,0.76,90", "49,8.6,116,31,2.5,0.78,90", "50,8.87,113,31.5,2.5,0.79,90", 
      "51,9.15,109,32.1,2.5,0.80,90", "52,9.42,106,32.6,2.5,0.82,90", "53,9.7,103,33.2,2.5,0.83,90", "54,9.98,100,33.7,2.5,0.84,90", "55,10.27,97,34.3,2.5,0.86,90", 
      "56,10.56,95,34.8,3,1.04,90", "57,10.85,92,35.4,3,1.06,90", "58,11.15,90,35.9,3,1.08,90", "59,11.45,87,36.4,3,1.09,90", "60,11.75,85,37,3,1.11,90", 
      "61,12.06,83,37.5,3,1.13,60", "62,12.37,81,38,3,1.14,60", "63,12.69,79,38.5,3,1.16,60", "64,13,77,39,3,1.17,60", "65,13.32,75,39.5,3.5,1.38,60", 
      "66,13.65,73,40,3.5,1.40,60", "67,13.98,72,40.5,3.5,1.42,60", "68,14.31,70,41,3.5,1.44,60", "69,14.64,68,41.5,3.5,1.45,60", "70,14.98,67,42,3.5,1.47,60", 
      "71,15.3,65,42.5,3.5,1.49,60", "72,15.63,64,43,3.5,1.51,60", "73,15.95,63,43.5,4,1.74,60", "74,16.27,61,43.9,4,1.76,60", "75,16.6,60,44.4,4,1.78,60", 
      "76,16.92,59,44.9,4,1.80,60", "77,17.24,58,45.3,4,1.81,60", "78,17.56,57,45.8,4,1.83,60", "79,17.89,56,46.3,4,1.85,60", "80,18.21,55,46.7,4.5,2.10,60", 
      "81,18.53,54,47.2,4.5,2.12,60", "82,18.86,53,47.6,4.5,2.14,60", "83,19.18,52,48,4.5,2.16,60", "84,19.5,51,48.5,4.5,2.18,60", "85,19.83,50,48.9,4.5,2.20,60",
       "86,20.15,50,49.3,4.5,2.22,60", "87,20.47,49,49.8,4.5,2.24,60", "88,20.79,48,50.2,4.5,2.26,60", "89,21.12,47,50.6,4.5,2.28,60", "90,21.44,47,51,4.5,2.30,60",
        "91,21.76,46,51.4,4.5,2.31,60", "92,22.09,45,51.8,4.5,2.33,60", "93,22.41,45,52.2,4.5,2.35,60", "94,22.73,44,52.6,4.5,2.37,60", "95,23.06,43,53,4.5,2.39,60", 
        "96,23.38,43,53.4,4.5,2.40,60", "97,23.7,42,53.8,4.5,2.42,60", "98,24.02,42,54.2,4.5,2.44,60", "99,24.35,41,54.6,4.5,2.46,60", "100,24.67,41,54.9,4.5,2.47,60", 
        "101,24.99,40,55.3,4.5,2.49,60", "102,25.32,39,55.7,4.5,2.51,60", "103,25.64,39,56,4.5,2.52,60", "104,25.96,39,56.4,4.5,2.54,60", "105,26.29,38,56.7,4.5,2.55,60",
         "106,26.61,38,57.1,4.5,2.57,60", "107,26.93,37,57.4,4.5,2.58,60", "108,27.25,37,57.8,4.5,2.60,60", "109,27.58,36,58.1,4.5,2.61,60", "110,27.9,36,58.5,4.5,2.63,60", 
         "111,28.22,35,58.8,4.5,2.65,60", "112,28.55,35,59.1,4.5,2.66,60"]


    var luonggiongtha = $$('#luonggiongtha').val();
    var ngaytuoi = $$('#ngaynuoi').val();
    var luongThucAnThucTe = $$('#luongThucAnThucTe').val();

    var b1 = 100000;
    var trongluong = 0;
    var size = 0;

    var luongThucAn = 0;
    var tiLeBoNha = 0;
    var luongBoNha = 0;
    var thoiGianKiemTra = 0;
    var tiLeSong = 0;
    var sanLuong = 0;

    list.forEach(function (item) {
        if (ngaytuoi == item.split(',')[0]) {
            trongluong = item.split(',')[1];
            size = item.split(',')[2];
            luongThucAn = (item.split(',')[3] * luonggiongtha) / b1
            tiLeBoNha = item.split(',')[4];
            luongBoNha = item.split(',')[5];
            thoiGianKiemTra = item.split(',')[6];
            tiLeSong = luongThucAnThucTe / (100 * luongThucAn / 80) * 100
            sanLuong = (luonggiongtha * tiLeSong / 100) / size

            console.log(item)
        }
    })

    console.log('Kết quả tính toán')
    console.log('trongluong: ' + trongluong)
    console.log('size: ' + size)
    console.log('luongThucAn: ' + luongThucAn)
    console.log('luongThucAnThucTe: ' + luongThucAnThucTe)
    console.log('tiLeBoNha: ' + tiLeBoNha)
    console.log('luongBoNha: ' + luongBoNha)
    console.log('thoiGianKiemTra: ' + thoiGianKiemTra)
    console.log('tiLeSong: ' + tiLeSong)
    console.log('sanLuong: ' + sanLuong)


    $$('#trongluong').val(trongluong)
    $$('#size').val(size)
    $$('#luongThucAn').val(luongThucAn)
    $$('#tiLeBoNha').val(tiLeBoNha)
    $$('#luongBoNha').val(luongBoNha)
    $$('#thoiGianKiemTra').val(thoiGianKiemTra)
    $$('#tiLeSong').val(Math.round(tiLeSong))
    $$('#sanLuong').val(Math.round(sanLuong))
 
});
$$('.ac-2').on('click', function () {
    var buttons = [
        {
            text: 'Button1',
            bold: true
        },
        {
            text: 'Button2'
        }
    ];
    myApp.actions(buttons);
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
    mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
    return;
}