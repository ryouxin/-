$(function() {
    cssVal();
    moveCar();
    // initAnimate();
    setInterval(function() {
        _TIMER += 1;
    }, 10);

});
var _TIMER = 0;
var moveCar = function() {
    setTimeout(function() {
        var _left = $('#_carAn').position().left;
        var _top = $('#_carAn').position().top;
        if (_TIMER < 440 && _left <= 970) {
            // console.log(_TIMER);

            $('#_carAn').css({
                'left': $('#_carAn').position().left + 4
            });

            var _a = $('#_carAn').position().top * 1.002;
            if (_left >= 650) {
                $('#_carAn').css({
                    // 'top': $('#_carAn').position().top + 0.5
                    'top': _a
                });
            };
            if (_left >= 850) {
                var _a = $('#_carAn').position().top * 1.003;
                $('#_carAn').css({
                    // 'top': $('#_carAn').position().top + 2
                    'top': _a
                });
            };
            if (_left >= 940) {
                var _a = $('#_carAn').position().top * 1.003;
                $('#_carAn').css({
                    // 'top': $('#_carAn').position().top + 2
                    'top': _a
                });
            };
            // console.log($('#_carAn').position().left);

        };
        if (_left == 972 && _top < 787 && _TIMER <= 450) {
            $('#_carAn').css({
                'top': $('#_carAn').position().top + 1.5
            });
        }

        if (_TIMER >= 450 && _TIMER < 525) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1.5,
                'top': $('#_carAn').position().top + 1.5
            });
        }
        if (_TIMER >= 525 && _TIMER < 587) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1.5,
                'top': $('#_carAn').position().top + 0.5
            });
        }
        if (_TIMER >= 587 && _TIMER < 830) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1.5,

            });
        }
        if (_TIMER >= 830 && _TIMER < 950) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1.5,
                'top': $('#_carAn').position().top + 1
            });
        }
        if (_TIMER >= 950 && _TIMER < 1070) {
            $('#_carAn').css({
                // 'left': $('#_carAn').position().left - 1.5,
                'top': $('#_carAn').position().top + 1
            });
        }
        if (_TIMER >= 1070 && _TIMER < 1270) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left + 1,
                'top': $('#_carAn').position().top + 1
            });
        }
        if (_TIMER >= 1270 && _TIMER < 1400) {
            $('#_carAn').css({
                // 'left': $('#_carAn').position().left + 1,
                'top': $('#_carAn').position().top + 1
            });
        }
        if (_TIMER >= 1400 && _TIMER < 1530) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1,
                'top': $('#_carAn').position().top + 1
            });
        }
		if (_TIMER >= 1530 && _TIMER < 1930) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1,
                'top': $('#_carAn').position().top + 0.1
            });
        }
		if (_TIMER >= 1930 && _TIMER < 2030) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left - 1,
                'top': $('#_carAn').position().top + 1
            });
        }
		if (_TIMER >= 2030 && _TIMER < 2130) {
            $('#_carAn').css({
                // 'left': $('#_carAn').position().left + 1,
                'top': $('#_carAn').position().top +1
            });
        }
		if (_TIMER >= 2130 && _TIMER < 2230) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left + 1,
                'top': $('#_carAn').position().top +1
            });
        }
		if (_TIMER >= 2230 && _TIMER < 3250) {
            $('#_carAn').css({
                'left': $('#_carAn').position().left + 1,
                // 'top': $('#_carAn').position().top +1
            });
        }
        // if (_TIMER> 273 && _TIMER < 500 && _left <= 970) {
        //     console.log(_TIMER);
        //     $('#_carAn').css({
        //         'top': $('#_carAn').position().top + 0.5
        //     });
        //
        //     if (_left >= 650) {
        //         $('#_carAn').css({
        //             'top': $('#_carAn').position().top + 0.5
        //         });
        //     };
        //     if (_left >= 740) {
        //         $('#_carAn').css({
        //             'top': $('#_carAn').position().top + 2
        //         });
        //     };
        //
        // };
        console.log('time: ' + _TIMER + ' top: ' + $('#_carAn').position().top + ' left: ' + $('#_carAn').position().left);
        moveCar();
    }, 10);
}

var initAnimate = function() {
    $("._listTxt li").addClass("_animatedTxt _effect-opacity");
    // $("._listTxt li").eq(6).addClass("_anDelay1");

    setTimeout(function() {
        remoreAnimate();
    }, 2000);
};

var remoreAnimate = function() {
    $("._animatedTxt").removeClass("_animatedTxt");
};


var _objName = $("._top ._listPic li");
var _objName2 = $("._top ._listTxt li");

var cssStyle = function(i, _w, _h, _picName, _xName, _yName, _x, _y) {
    $(_objName).eq(i).css("width", _w + "px");
    $(_objName).eq(i).css("height", _h + "px");
    $(_objName).eq(i).css("background", "url(images/" + _picName + ".png) no-repeat center");
    $(_objName).eq(i).css("background-size", "100% auto");
    $(_objName).eq(i).css(_xName, _x + "px");
    $(_objName).eq(i).css(_yName, _y + "px");
    switch (i) {
        case 10:
            $(_objName).eq(i).css('animationDelay', '0.6s');
            break;
        case 11:
            $(_objName).eq(i).css('animationDelay', '0s');
            break;
        case 12:
            $(_objName).eq(i).css('animationDelay', '0.3s');
            break;
        case 13:
            $(_objName).eq(i).css('animationDelay', '0.9s');
            break;
        case 14:
            $(_objName).eq(i).css('animationDelay', '1.2s');
            break;
        case 28:
            $(_objName).eq(i).css('animationDelay', '0.3s');
            break;
        case 27:
            $(_objName).eq(i).css('animationDelay', '0.6s');
            break;
        default:

    }
};

var cssStyle2 = function(i, _txtSize, _txtColor, _txtSpacing, _xName, _yName, _x, _y) {
    $(_objName2).eq(i).css("font-size", _txtSize + "px");
    $(_objName2).eq(i).css("color", _txtColor);
    $(_objName2).eq(i).css("letter-spacing", _txtSpacing + "px");
    $(_objName2).eq(i).css(_xName, _x + "px");
    $(_objName2).eq(i).css(_yName, _y + "px");
    if (i >= 21 && i < 26) {
        $(_objName2).eq(i).css('animationDelay', '0.6s');
    }
    if (i >= 26 && i < 31) {
        $(_objName2).eq(i).css('animationDelay', '0.3s');
    }
};


function cssVal() {
    var _picLoc = [{
            _w: 544,
            _h: 101,
            _picName: 'txt_1',
            _xName: 'top',
            _yName: 'right',
            _x: 35,
            _y: 46
        },
        {
            _w: 134,
            _h: 36,
            _picName: 'txt_2',
            _xName: 'top',
            _yName: 'left',
            _x: 107,
            _y: 59
        },
        {
            _w: 134,
            _h: 36,
            _picName: 'txt_2',
            _xName: 'top',
            _yName: 'left',
            _x: 551,
            _y: 59
        },
        {
            _w: 134,
            _h: 36,
            _picName: 'txt_2',
            _xName: 'top',
            _yName: 'left',
            _x: 986,
            _y: 59
        },
        {
            _w: 134,
            _h: 36,
            _picName: 'txt_2',
            _xName: 'bottom',
            _yName: 'right',
            _x: 899,
            _y: 378
        },
        {
            _w: 134,
            _h: 36,
            _picName: 'txt_2',
            _xName: 'bottom',
            _yName: 'left',
            _x: 405,
            _y: 59
        },
        {
            _w: 972,
            _h: 1270,
            _picName: 'pic_road',
            _xName: 'top',
            _yName: 'left',
            _x: 502,
            _y: 57
        },
        {
            _w: 283,
            _h: 189,
            _picName: 'pic_circle',
            _xName: 'top',
            _yName: 'left',
            _x: 242,
            _y: 101
        },
        {
            _w: 133,
            _h: 170,
            _picName: 'icon_houseBlue',
            _xName: 'top',
            _yName: 'right',
            _x: 258,
            _y: 304
        },
        {
            _w: 133,
            _h: 170,
            _picName: 'icon_houseBlue',
            _xName: 'top',
            _yName: 'right',
            _x: 258,
            _y: 304
        },
        {
            _w: 27,
            _h: 25,
            _picName: 'icon_circle1',
            _xName: 'bottom',
            _yName: 'right',
            _x: 683,
            _y: 378
        },
        {
            _w: 27,
            _h: 25,
            _picName: 'icon_circle2',
            _xName: 'bottom',
            _yName: 'right',
            _x: 788,
            _y: 436
        },
        {
            _w: 27,
            _h: 25,
            _picName: 'icon_circle2',
            _xName: 'bottom',
            _yName: 'right',
            _x: 737,
            _y: 407
        },
        {
            _w: 27,
            _h: 25,
            _picName: 'icon_circle2',
            _xName: 'bottom',
            _yName: 'right',
            _x: 630,
            _y: 349
        },
        {
            _w: 27,
            _h: 25,
            _picName: 'icon_circle2',
            _xName: 'bottom',
            _yName: 'right',
            _x: 577,
            _y: 320
        },
        {
            _w: 168,
            _h: 305,
            _picName: 'pic_dottelLine',
            _xName: 'bottom',
            _yName: 'right',
            _x: 519,
            _y: 296
        },
        {
            _w: 102,
            _h: 173,
            _picName: 'txt_3',
            _xName: 'bottom',
            _yName: 'right',
            _x: 563,
            _y: 383
        },
        {
            _w: 81,
            _h: 46,
            _picName: 'txt_4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 585,
            _y: 421
        },
        {
            _w: 217,
            _h: 263,
            _picName: 'icon_ferrisWheel',
            _xName: 'bottom',
            _yName: 'left',
            _x: 540,
            _y: 87
        },
        {
            _w: 211,
            _h: 92,
            _picName: 'icon_house_deepPink',
            _xName: 'bottom',
            _yName: 'right',
            _x: 714,
            _y: 78
        },
        {
            _w: 112,
            _h: 147,
            _picName: 'icon_house1',
            _xName: 'bottom',
            _yName: 'left',
            _x: 174,
            _y: 194
        },
        {
            _w: 112,
            _h: 147,
            _picName: 'icon_house2',
            _xName: 'bottom',
            _yName: 'left',
            _x: 174,
            _y: 394
        },
        {
            _w: 112,
            _h: 147,
            _picName: 'icon_house3',
            _xName: 'bottom',
            _yName: 'left',
            _x: 174,
            _y: 597
        },
        {
            _w: 112,
            _h: 147,
            _picName: 'icon_house4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 174,
            _y: 820
        },
        {
            _w: 139,
            _h: 254,
            _picName: 'pic_grayLine',
            _xName: 'top',
            _yName: 'right',
            _x: 214,
            _y: 195
        },
        {
            _w: 81,
            _h: 63,
            _picName: 'icon_car',
            _xName: 'top',
            _yName: 'left',
            _x: 485,
            _y: 136
        },
        {
            _w: 112,
            _h: 28,
            _picName: 'pic_grayArrow',
            _xName: 'top',
            _yName: 'left',
            _x: 376,
            _y: 498
        },
        {
            _w: 236,
            _h: 236,
            _picName: 'icon_circleRed',
            _xName: 'top',
            _yName: 'left',
            _x: 608,
            _y: 240
        },
        {
            _w: 271,
            _h: 271,
            _picName: 'icon_circleGreen',
            _xName: 'top',
            _yName: 'left',
            _x: 590,
            _y: 395
        },
        {
            _w: 236,
            _h: 236,
            _picName: 'icon_circleOrange',
            _xName: 'top',
            _yName: 'left',
            _x: 608,
            _y: 612
        },
        {
            _w: 414,
            _h: 84,
            _picName: 'pic_bench',
            _xName: 'bottom',
            _yName: 'left',
            _x: 520,
            _y: 109
        }
    ];


    var _txtLoc = [{
            _txtSize: 20,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.36',
            _xName: 'top',
            _yName: 'left',
            _x: 105,
            _y: 83
        },
        {
            _txtSize: 20,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.36',
            _xName: 'top',
            _yName: 'left',
            _x: 550,
            _y: 77
        },
        {
            _txtSize: 20,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.36',
            _xName: 'top',
            _yName: 'left',
            _x: 984,
            _y: 82
        },
        {
            _txtSize: 20,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.36',
            _xName: 'bottom',
            _yName: 'right',
            _x: 913,
            _y: 347
        },
        {
            _txtSize: 20,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.36',
            _xName: 'bottom',
            _yName: 'left',
            _x: 419,
            _y: 86
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'top',
            _yName: 'left',
            _x: 159,
            _y: 399
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'top',
            _yName: 'right',
            _x: 163,
            _y: 338
        },
        {
            _txtSize: 35,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 188,
            _y: 397
        },
        {
            _txtSize: 35,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 194,
            _y: 653
        },
        {
            _txtSize: 35,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 292,
            _y: 397
        },
        {
            _txtSize: 35,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'right',
            _x: 311,
            _y: 86
        },
        {
            _txtSize: 46,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'right',
            _x: 323,
            _y: 72
        },
        {
            _txtSize: 35,
            _txtColor: '#2099BF',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'right',
            _x: 342,
            _y: 58
        },
        {
            _txtSize: 33,
            _txtColor: '#656565',
            _txtSpacing: '0.59',
            _xName: 'top',
            _yName: 'right',
            _x: 336,
            _y: 116
        },
        {
            _txtSize: 22,
            _txtColor: '#9B1938',
            _txtSpacing: '0.4',
            _xName: 'top',
            _yName: 'left',
            _x: 357,
            _y: 529
        },
        {
            _txtSize: 15,
            _txtColor: '#656565',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 270,
            _y: 398
        },
        {
            _txtSize: 15,
            _txtColor: '#E24267',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 232,
            _y: 401
        },
        {
            _txtSize: 15,
            _txtColor: '#E24267',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 239,
            _y: 656
        },
        {
            _txtSize: 15,
            _txtColor: '#656565',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 207,
            _y: 492
        },
        {
            _txtSize: 15,
            _txtColor: '#656565',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 211,
            _y: 749
        },
        {
            _txtSize: 15,
            _txtColor: '#656565',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 446,
            _y: 129
        },
        {
            _txtSize: 66,
            _txtColor: '#fff',
            _txtSpacing: '0.35',
            _xName: 'top',
            _yName: 'left',
            _x: 634,
            _y: 290
        },
        {
            _txtSize: 20,
            _txtColor: '#fff',
            _txtSpacing: '0.15',
            _xName: 'top',
            _yName: 'left',
            _x: 707,
            _y: 271
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 732,
            _y: 297
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 754,
            _y: 328
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 775,
            _y: 312
        },
        {
            _txtSize: 66,
            _txtColor: '#fff',
            _txtSpacing: '0.35',
            _xName: 'top',
            _yName: 'left',
            _x: 634,
            _y: 480
        },
        {
            _txtSize: 20,
            _txtColor: '#fff',
            _txtSpacing: '0.15',
            _xName: 'top',
            _yName: 'left',
            _x: 709,
            _y: 493
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 736,
            _y: 502
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 757,
            _y: 510
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 778,
            _y: 510
        },
        {
            _txtSize: 66,
            _txtColor: '#fff',
            _txtSpacing: '0.35',
            _xName: 'top',
            _yName: 'left',
            _x: 630,
            _y: 712
        },
        {
            _txtSize: 20,
            _txtColor: '#fff',
            _txtSpacing: '0.15',
            _xName: 'top',
            _yName: 'left',
            _x: 688,
            _y: 683
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 714,
            _y: 680
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 736,
            _y: 680
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 758,
            _y: 703
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'top',
            _yName: 'left',
            _x: 780,
            _y: 703
        },
        {
            _txtSize: 37,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.5',
            _xName: 'top',
            _yName: 'left',
            _x: 878,
            _y: 321
        },
        {
            _txtSize: 20,
            _txtColor: '#CAD5D8',
            _txtSpacing: '0.15',
            _xName: 'bottom',
            _yName: 'right',
            _x: 786,
            _y: 370
        },
        {
            _txtSize: 20,
            _txtColor: '#89BBCB',
            _txtSpacing: '0.15',
            _xName: 'bottom',
            _yName: 'right',
            _x: 740,
            _y: 343
        },
        {
            _txtSize: 35,
            _txtColor: '#0E4C93',
            _txtSpacing: '1.27',
            _xName: 'bottom',
            _yName: 'right',
            _x: 671,
            _y: 285
        },
        {
            _txtSize: 20,
            _txtColor: '#C6DCE3',
            _txtSpacing: '0.15',
            _xName: 'bottom',
            _yName: 'right',
            _x: 623,
            _y: 294
        },
        {
            _txtSize: 20,
            _txtColor: '#C6DCE3',
            _txtSpacing: '0.15',
            _xName: 'bottom',
            _yName: 'right',
            _x: 578,
            _y: 253
        },
        {
            _txtSize: 26,
            _txtColor: '#0E4C93',
            _txtSpacing: '2.37',
            _xName: 'bottom',
            _yName: 'right',
            _x: 675,
            _y: 85
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'right',
            _x: 647,
            _y: 88
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'right',
            _x: 618,
            _y: 107
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'right',
            _x: 589,
            _y: 88
        },
        {
            _txtSize: 16,
            _txtColor: '#fff',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'right',
            _x: 765,
            _y: 153
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'right',
            _x: 719,
            _y: 208
        },
        {
            _txtSize: 30,
            _txtColor: '#fff',
            _txtSpacing: '0.23',
            _xName: 'bottom',
            _yName: 'right',
            _x: 715,
            _y: 145
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'right',
            _x: 719,
            _y: 114
        },
        {
            _txtSize: 24,
            _txtColor: '#11696F',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'left',
            _x: 627,
            _y: 421
        },
        {
            _txtSize: 30,
            _txtColor: '#11696F',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'left',
            _x: 488,
            _y: 162
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 782,
            _y: 99
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 802,
            _y: 225
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 703,
            _y: 295
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 597,
            _y: 272
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 611,
            _y: 77
        },
        {
            _txtSize: 16,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.29',
            _xName: 'bottom',
            _yName: 'left',
            _x: 684,
            _y: 48
        },
        {
            _txtSize: 30,
            _txtColor: '#fff',
            _txtSpacing: '0.23',
            _xName: 'bottom',
            _yName: 'left',
            _x: 677,
            _y: 145
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'left',
            _x: 681,
            _y: 229
        },
        {
            _txtSize: 15,
            _txtColor: '#fff',
            _txtSpacing: '0.27',
            _xName: 'bottom',
            _yName: 'left',
            _x: 653,
            _y: 176
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 326,
            _y: 205
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 326,
            _y: 405
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 326,
            _y: 576
        },
        {
            _txtSize: 22,
            _txtColor: '#656565',
            _txtSpacing: '0.4',
            _xName: 'bottom',
            _yName: 'left',
            _x: 326,
            _y: 798
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 120,
            _y: 216
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 120,
            _y: 428
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 89,
            _y: 428
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 58,
            _y: 428
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 29,
            _y: 428
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 120,
            _y: 636
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 89,
            _y: 636
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 58,
            _y: 636
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 29,
            _y: 636
        },
        {
            _txtSize: 18,
            _txtColor: '#0E4C93',
            _txtSpacing: '0.42',
            _xName: 'bottom',
            _yName: 'left',
            _x: 120,
            _y: 846
        }
    ];


    _picLoc.forEach(function(k, i) {
        // console.log(k._picName);
        if (k._picName == 'icon_circleGreen') {
            // console.log(i + ' ' + k._picName);
        }
        cssStyle(i, k._w, k._h, k._picName, k._xName, k._yName, k._x, k._y);
    });

    _txtLoc.forEach(function(k, i) {
        cssStyle2(i, k._txtSize, k._txtColor, k._txtSpacing, k._xName, k._yName, k._x, k._y);
    });
};
