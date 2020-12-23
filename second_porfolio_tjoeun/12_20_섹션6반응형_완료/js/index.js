;(function(window,document,$,undefined){
        /* $(), jQuery(); 
        jQuery 는 생성자 함수다.
        즉, jQuery 부모에 접근하여 모든 자식들이 상속받도록 하는 것이다. */
var hongo = {

    init : function(){
        var that = this;
            that.scrollMoveFn();
            that.headerFn();
            that.section01Fn();
            that.section02Fn();
            that.section03Fn();
            that.section04Fn();
            that.section05Fn();
            that.section06Fn();
            //that.modalFn();
    },
    scrollMoveFn : function(){

        var _delta = null;
        var _htmlBody = $("html, body");
        var _wheelEvent = $(".wheelEvent");
        var n = _wheelEvent.length;

        _wheelEvent.each(function(i){
            $(this).on("mousewheel DOMMouseScroll", function(event){
                
                event.preventDefault();
                if(event.detail){
                    _delta = event.detail*(-1*40);
                }
                else{
                    _delta = event.originalEvent.wheelDelta;
                }
                if(_delta<0){
                    if(i<n-1){  
                        if(i==n-2){
                            _htmlBody.stop().animate({scrollTop : $("#footer").offset().top-50},800);
                        }
                        else{
                            if(!_htmlBody.is(":animated")){
                                _htmlBody.stop().animate({scrollTop : $(this).next().offset().top-50},800);
                                //console.log($("#section04").offset().top)
                            }
                        }
                    }
                }
                else{
                    if(i>0){
                        if(i==9){
                            _htmlBody.stop().animate({scrollTop : $("#section09").offset().top-50},800);
                        }
                        else{
                            if(!_htmlBody.is(":animated")){
                            _htmlBody.stop().animate({scrollTop : $(this).prev().offset().top-50},800);
                            }
                        }
                    }
                }
            })
        })
    },
        
    headerFn : function(){  
        var win_dow = $(window);
        var winW = $(window).innerWidth();
        var simpleHeartMenu = $("#header .simple-menu li").eq(2);
        var t=0;

        var menuWrap = $("#header .menu-wrap");
        var asideSide1 = $("#header .asideSideMenu1");
        var asideSide2 = $("#header .asideSideMenu2");
        var asideSide3 = $("#header .asideSideMenu3");
        var aside4Btn1 = $("#header .aside4Btn1");
        var aside4Btn2 = $("#header .aside4Btn2");
        var aside4Btn3 = $("#header .aside4Btn3");

        var mobileMenuBar = $("#header .mobile");
        var mobileMenu = $("#header .mobile-menu")
        var i = 0;
        var _delta = null;
        
        var url = null;

        var htmlRoot = $("html");
        
        
        //smooth-scrolling
        $(".smooth-btn").on("click",function(e){
            e.preventDefault();
                url = $(this).attr("href");
                $("html, body").stop().animate({ scrollTop:$(url).offset().top },800,"easeInOutCubic");
                $(".goTop").stop().fadeOut(500);
                $("#header").css({top:-100},1000);
        })
        
        //mousewheel 스크롤 다운 = 헤더없어짐 / 스크롤 업 = 헤더 검정배경으로 생김
        $("html,body").on("mousewheel DOMMouseScroll", function(event){
            event.preventDefault();
            if(event.detail){ 
                _delta = event.detail*(-1*40);   
            }
            else{
                _delta = event.originalEvent.wheelDelta;
            }
            if(_delta<0){
                $("#header").stop().css({top:-100});
                $(".goTop").stop().fadeIn(500);
            }
            else{
                $("#header").stop().css({top:0});
                $(".goTop").stop().fadeOut(500);
                
            }
        })

        $(window).scroll(function(){
            if( $(this).scrollTop() > $("#header").innerHeight() ){
                $("#header").addClass("addBackground");
            }
            else{
                $("#header").removeClass("addBackground");
            }
        })

        // 헤더 모달창 -> 돋보기 버튼 누르면 검색창 나오기
        $(".search-btn").on("click", function(){
            $(".search-modal").slideDown(200);
            htmlRoot.addClass("addScroll");
        })
        $(".close .close-btn").on("click", function(){
            $(".search-modal").slideUp(200);
            htmlRoot.removeClass("addScroll");
            ("#header").show();
        })

        // 헤더; 장바구니 호버 시 팝업창 생성
        $(".shopping-cart, .cartNum").on({
            mouseenter : function(){
            $(".list").stop().fadeIn(400);
            },
            mouseleave : function(){
                $(".list").stop().fadeOut(800);
            }
        })

        // 헤더 반응형 -> 오른쪽 하트 아이콘 없애기
        setTimeout(resizeFn,100);

        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#main #section01 #header .simple-menu li").eq(2);
            t=0;
            menuWrap = $("#main #section01 #header .menu-wrap");
            mobileMenuBar = $(".mobile");
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.stop().fadeOut(0);
                    menuWrap.stop().fadeOut(0);
                    mobileMenuBar.show();
                }
            }
            else{
                t=0;
                simpleHeartMenu.stop().fadeIn(0);
                menuWrap.stop().fadeIn(0);
                mobileMenuBar.hide();
                $(".mobile-menu").hide();

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });

        // 모바일 메뉴 클릭시 메뉴보이고 닫기버튼 생성
        mobileMenuBar.on({
            click:function(e){
                e.preventDefault();
                if(i==0){
                    i=1;
                    mobileMenu.slideDown(500);
                    $(this).addClass("addClose");
                }
                else{
                    i=0;
                    mobileMenu.slideUp(500);
                    mobileMenuBar.removeClass("addClose");
                }
            }
        })

        // 모바일 메뉴 -> 사이드 메뉴 보이게하기
        $(".sideMenuBtn").each(function(index){

            $(this).on({
                click:function(){
                    if(i==1){
                        i=0;
                        $(this).prev().css({color:("#8d8d8d")});
                        $(".mobile-menu ul").eq(index).slideDown(500);
                    }
                    else{
                        i=1;
                        $(this).prev().css({color:("#fff")});
                        $(".mobile-menu ul").eq(index).slideUp(200);
                    }
                }
            })

        })

        //모바일메뉴4번의 1, 10, 11번메뉴 fadein,out
        aside4Btn1.on({
            mouseenter:function(){
                asideSide1.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide1.stop().fadeIn(400);
            }
        })
        aside4Btn1.on({
            mouseleave : function(){
                asideSide1.stop().fadeOut(400);
                
            }
        })       
        aside4Btn2.on({
            mouseenter:function(){
                asideSide2.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide2.stop().fadeIn(400);
            }
        })
        aside4Btn2.on({
            mouseleave : function(){
                asideSide2.stop().fadeOut(400);
            }
        })

        aside4Btn3.on({
            mouseenter:function(){
                asideSide3.stop().fadeIn(400);
            },
            focusin:function(){
                asideSide3.stop().fadeIn(400);
            }
        })
        aside4Btn3.on({
            mouseleave : function(){
                asideSide3.stop().fadeOut(400);
            }
        })
        
        //헤더 메뉴 하나씩 보이게하기
        $(".li-wrap").on({
            mouseenter:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
                //❓ 여기서 왜 next()가 들어가는지 모르겠어요😭
                // $(this)는 console.log(this)를 입력해서, li-wrap의 a 링크라는 건 알았는데요,
                // $(this).next()면 해당 클래스의 다음 요소여야 하지 않나요..?
            },
            focusin:function(){
                $(".aside").stop().slideUp(0);
                $(this).next().stop().slideDown(500);
            }
        }) 
        $(".nav").on({
            mouseleave:function(){
                $(".aside").stop().slideUp(300);
            }
        });

        //퀵메뉴 호버시 글씨 보이기, 마우스 벗어나면 다시 원상태
        if(winW>991){
        $(".cart").on("mouseenter",function(){
            $(".h-cart").stop().animate({ right:0 },300);
        })
        $(".h-cart").on("mouseleave",function(){
            $(this).stop().animate({ right:-200 },300);
        })
        $(".mail").on("mouseenter",function(){
            $(".h-mail").stop().animate({ right:0 },300);
        })
        $(".h-mail").on("mouseleave",function(){
            $(this).stop().animate({ right:-200 },300);
        })
        }
        else{
            $(".cart").hide();
            $(".h-cart").hide();
            $(".mail").hide();
            $(".h-mail").hide();
        }
    },
    /*
    // 모달창
    modalFn : function(){

        var htmlRoot = $("html");
        var modal = $(".modal");
        var closeBtn = $(".close-btn");

        setTimeout(countFn,5000);

        function countFn(){
            modal.stop().fadeIn(0);
            htmlRoot.addClass("addScroll");
        }

        closeBtn.on({
            click : function(){
                modal.stop().fadeOut(300);
                htmlRoot.removeClass("addScroll");
            }
        });
    },
        */

    section01Fn : function(){
        var winH = $(window).innerHeight();
        var contentWrapH = $(".content-wrap").innerHeight();
        var contentWrapTop = (winH-contentWrapH)/2;
        
        var winW = $(window).innerWidth();
        var section01 = $("#section01");
        var textWrap = $(".text-wrap");
        var imageWrap = $(".image-wrap");
        var textW = textWrap.innerWidth();
        var textH = textW*0.538888889;
        var imageW = imageWrap.innerWidth();
        var imageH = imageW*0.996969697;

        var fontSizeH4 = textW*rateH4;
        var textWrapH4 = $(".text-wrap h4");
        var rateH4 = 0.02037037;

        var fontSizeH2 = textW*rateH2;
        var textWrapH2 = $(".text-wrap h2");
        var rateH2 = 0.098148148;

        var fontSizeP = textW*rateP;
        var textWrapP = $(".text-wrap p");
        var rateP = 0.037037037;

        //슬라이드 배경 포인터 반대쪽으로 자동이동시키기
        $("#section01 .li-bg").on({
            mousemove : function(event){
                $(this).css({backgroundPosition: -event.clientX*0.025+"px " + -event.clientY*0.025+"px"},1000,"swing")  
            },
            mouseleave : function(event){
                $(this).css({backgroundPosition: event.clientX*0.025+"px " + event.clientY*0.025+"px"},1000,"swing")
            }
        })
        setTimeout(resizeFn,100);
        //섹션01화면 반응형
        //1. 창을 늘리고 줄일때마다 가운데 시계랑 문구의 높이가 같이 늘어나고 줄어들어야함
        function resizeFn(){
            winH = ($(window).innerHeight())+72;
            contentWrapH = $(".content-wrap").innerHeight();
            contentWrapTop = (winH-contentWrapH)/2;

            winW = $(window).innerWidth();
            section01 = $("#section01");
            textWrap = $(".text-wrap");
            imageWrap = $(".image-wrap");
            textW = textWrap.innerWidth();
            textH = textW*0.538888889;
            imageW = imageWrap.innerWidth();
            imageH = imageW*0.996969697;
            
            fontSizeH4 = textW*rateH4;
            fontSizeH2 = textW*rateH2;
            fontSizeP = textW*rateP;

            if(winW<1200){
                textWrapH4.css({fontSize:fontSizeH4});
                textWrapH2.css({fontSize:fontSizeH2});
                textWrapP.css({fontSize:fontSizeP});
            }
        }
        $(window).resize(function(){
            resizeFn()
        })
    },

    section02Fn : function(){
        
        // parallax
        setTimeout(sectionScrollFn,100);

        function sectionScrollFn(){

            $(window).scroll(function(){
                if( $(window).scrollTop() > $("#section02").offset().top-140 ){
                    $("#section02").addClass("addEvent");
                }
                else{
                    $("#section02").removeClass("addEvent");
                }
            })
        }  
    },

    section03Fn : function(){

        var _win = $(window);

        var sec03 = $("#section03");
        var sec03Ul = $("#section03 ul");
        var sec03TextWrap = $("#section03 .text-wrap");
        var sec03TextWrapW = $("#section03 .text-wrap").innerWidth();
        var sec03TextWrapR = 0.956488459;

        var _winW = $(window).innerWidth();
        var fontH2 = $("#section03 .text-wrap h2");
        var fontH2W = $("#section03 .text-wrap h2").innerWidth();
        var rateH2 = 0.035740879;
        var fontA = $("#section03 .text-wrap .sec03-txt");
        var fontAW = $("#section03 .text-wrap .sec03-txt").innerWidth();
        var rateA = 0.114519427;

        // parallax
       setTimeout(sectionScrollFn,100);

        function sectionScrollFn(){

            $(window).scroll(function(){
                if( $(window).scrollTop() > $("#section03").offset().top-120 ){
                    $("#section03").addClass("addEvent");
                }
                else{
                    $("#section03").removeClass("addEvent");
                }
            })
        }
        
        setTimeout(resizeFn(),100);

        function resizeFn(){
            _winW = $(window).innerWidth();
            //섹션03 반응형 높이 잡기
            sec03 = $("#section03");
            sec03Li = $("#section03 li");
            sec03TextWrap = $("#section03 .text-wrap");
            sec03TextWrapW = $("#section03 .text-wrap").innerWidth();
            
            sec03TextWrap.css({ height:sec03TextWrapW*sec03TextWrapR });

            if( _winW < 992 ){
                sec03.css({ height: sec03Ul.height() });
            }
            
            //반응형 폰트 사이즈만 조정
            fontH2 = $("#section03 .text-wrap h2");
            fontH2W = $("#section03 .text-wrap h2").innerWidth();
            rateH2 = 0.035740879;;
            fontA = $("#section03 .text-wrap .sec03-txt");
            fontAW = $("#section03 .text-wrap .sec03-txt").innerWidth();
            rateA = 0.114519427;

            fontH2.css({ fontSize:fontH2W*rateH2 });
            fontA.css({ fontSize:fontAW*rateA });
        }
        
        _win.resize(function(){
            resizeFn();
        })
    },

    section04Fn : function(){
        var _winW = $(window).innerWidth();

        // parallax
        setTimeout(sectionScrollFn,100);

        function sectionScrollFn(){

            $(window).scroll(function(){
                if( $(window).scrollTop() > $("#section04").offset().top-120 ){
                    $("#section04").addClass("addEvent");
                }
                else{
                    $("#section04").removeClass("addEvent");
                }
            })
        }

        //시계 하나 하나에 호버 시 이미지 변경
        $("#section04 .content").each(function(idx){

            $(this).on({
                mouseenter : function(){
                    //console.log(idx)
                    $("#section04 .content").eq(idx).find("img").attr("src","./img/watch-home-feature-products-"+ idx +"-a-768x979.jpg");
                    //console.log("src","./img/watch-home-feature-products-"+ idx +"-a-768x979.jpg")
                    if( _winW>=1200 ){
                        $(".button-wrap").eq(idx).stop().animate({top:0},300);
                    }   
                },
                mouseleave : function(){
                    $("#section04 .content").eq(idx).find("img").attr("src","./img/watch-home-feature-products-"+ idx +"-768x979.jpg");
                    
                    if( _winW>=1200 ){
                    $(".button-wrap").eq(idx).stop().animate({top:50},300);
                    }
                }
            })
        })

    },

    section05Fn : function(){

        // parallax
        setTimeout(sectionScrollFn,100);

        function sectionScrollFn(){

            $(window).scroll(function(){
                if( $(window).scrollTop() > $("#section05").offset().top-120 ){
                    $("#section05").addClass("addEvent");
                }
                else{
                    $("#section05").removeClass("addEvent");
                }
            })
        }

        var _winW = $(window).innerWidth();

        var content = $("#section05 .content");
        var contentW = $("#section05 .content").innerWidth();
        var contentRate = 0.227162668;
        var contentH = contentW*contentRate;

        var sec05Right = $("#section05 .right-wrap, #section05 .right-wrap .gap");
        var sec05LeftH= $("#section05 .left-wrap").innerHeight();

        var sec05RightH2 = sec05Right.find("h2");
        var sec05H2Rate = 0.013350371;
        var sec05RightSpan = sec05Right.find("span");
        var sec05SpanRate = 0.011443;
        var sec05RightA = sec05Right.find("a");
        var sec05ARate =0.026700742;
        var sec05RightFontW = sec05Right.find(".content").innerWidth();
        
        var sec05RightFont = sec05Right.find(".text-wrap");
        var sec05RightFontH = sec05Right.find(".text-wrap").innerHeight();


        //섹션05 콘텐츠박스, 반응형 높이, 폰트잡기
        setTimeout(resizeFn, 100);
        function resizeFn(){
            
            
            //반응형 높이
            sec05Right = $("#section05 .right-wrap, #section05 .right-wrap .gap");
            sec05LeftH= $("#section05 .left-wrap").innerHeight();

            sec05Right.css({ height:sec05LeftH });

            //콘텐츠 박스 높이 잡기
            content = $("#section05 .content");
            contentW = $("#section05 .content").innerWidth();
            contentRate = 0.227162668;
            contentH = contentW*contentRate;
            
            content.css({ height:contentH });

            //폰트 잡기
            sec05RightH2 = sec05Right.find("h2");
            sec05H2Rate = 0.013350371;
            sec05RightSpan = sec05Right.find("span");
            sec05SpanRate = 0.011443;
            sec05RightA = sec05Right.find("a");
            sec05ARate =0.026700742;
            sec05RightFontW = sec05Right.find(".content").innerWidth();
            
            sec05RightH2.css({ fontSize:sec05RightFontW*sec05H2Rate });
            sec05RightSpan.css({ fontSize:sec05RightFontW*sec05SpanRate });
            sec05RightA.css({ fontSize:sec05RightFontW*sec05ARate });

            //폰트 수직가운데정렬
            sec05RightFont = sec05Right.find(".text-wrap");
            sec05RightFontH = sec05Right.find(".text-wrap").innerHeight();
            if( _winW>767 ){
                sec05RightFont.css({ marginTop:(contentH-sec05RightFontH)/2 });
            }
        }

        $(window).resize(function(){
            resizeFn();
        })

    },

    section06Fn : function(){

        //섹션6 넓이 반응형
        var _win = $(window);
        var _winW = $(window).innerWidth();

        var leftWrap = $("#section06 .left-wrap");
        var rightWrap = $("#section06 .right-wrap");
        var leftGap = $("#section06 .left-gap").offset().top;
        var rightGap = $("#section06 .right-gap").offset().top;

        var blacktopImgW = $("#section06 .blacktopImg").innerWidth();
        var blacktopRate = 1.220568902;
        var blacktop = $("#section06 .blacktopImg");

        var voyagerImgW = $("#section06 .voyagerImg").innerWidth();
        var voyagerRate = 1.220568902;
        var voyager = $("#section06 .voyagerImg");

        var coronadaImgW = $("#section06 .coronadaImg").innerWidth();
        var coronadaRate = 0.623610836;
        var coronada = $("#section06 .coronadaImg");

        var monochromeImgW = $("#section06 .monochromeImg").innerWidth();
        var monochromeRate = 1.274735141;
        var monochrome = $("#section06 .monochromeImg");

        //창 넓이 1200 이상일 때만 호버 시 전체 보이고, 아니면 이미지만 보이기
        if(_winW>=1200){

            $(".blacktop, .blacktop-btn").on("mouseenter",function(){
                $(".blacktop-cart").stop().animate({top:300, opacity:1},400);
                $(".blacktop-white2").stop().animate({bottom:45, opacity:1},500);
                $(".blacktop-white1").stop().animate({bottom:45, opacity:1},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-01-a-768x979.jpg")
                })
            
            $(".blacktop").on("mouseleave",function(){
                $(".blacktop-cart").stop().animate({top:400, opacity:0},400);
                $(".blacktop-white2").stop().animate({bottom:0, opacity:0},500);
                $(".blacktop-white1").stop().animate({bottom:0, opacity:0},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-01-768x979.jpg")
                });
    
            $(".voyager, .voyager .cart-btn").on("mouseenter",function(){
                $(".voyager-cart").stop().animate({top:300, opacity:1},400);
                $(".voyager-white2").stop().animate({bottom:45, opacity:1},500);
                $(".voyager-white1").stop().animate({bottom:45, opacity:1},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-02-a-768x979.jpg")
                })
            
            $(".voyager").on("mouseleave",function(){
                $(".voyager-cart").stop().animate({top:400, opacity:0},400);
                $(".voyager-white2").stop().animate({bottom:0, opacity:0},500);
                $(".voyager-white1").stop().animate({bottom:0, opacity:0},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-02-768x979.jpg")
                });
    
            $(".coronada, .coronada .cart-btn").on("mouseenter",function(){
                $(".coronada-cart").stop().animate({top:340, opacity:1},400);
                $(".coronada-white2").stop().animate({bottom:45, opacity:1},500);
                $(".coronada-white1").stop().animate({bottom:45, opacity:1},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-04-a-768x490.jpg")
                })
            
            $(".coronada").on("mouseleave",function(){
                $(".coronada-cart").stop().animate({top:400, opacity:0},400);
                $(".coronada-white2").stop().animate({bottom:0, opacity:0},500);
                $(".coronada-white1").stop().animate({bottom:0, opacity:0},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-04-768x490.jpg")
                });
    
            $(".monochrome, .monochrome .cart-btn").on("mouseenter",function(){
                $(".monochrome-cart").stop().animate({bottom:60, opacity:1},400);
                $(".monochrome-white2").stop().animate({bottom:45, opacity:1},500);
                $(".monochrome-white1").stop().animate({bottom:45, opacity:1},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-03-a-768x979.jpg")
                })
            
            $(".monochrome").on("mouseleave",function(){
                $(".monochrome-cart").stop().animate({bottom:0, opacity:0},400);
                $(".monochrome-white2").stop().animate({bottom:0, opacity:0},500);
                $(".monochrome-white1").stop().animate({bottom:0, opacity:0},700);
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-03-768x979.jpg")
                });
        }
        else if(_winW<1200){

            $(".blacktop, .blacktop-btn").on("mouseenter",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-01-a-768x979.jpg")
                })
            
            $(".blacktop").on("mouseleave",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-01-768x979.jpg")
                });
    
            $(".voyager, .voyager .cart-btn").on("mouseenter",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-02-a-768x979.jpg")
                })
            
            $(".voyager").on("mouseleave",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-02-768x979.jpg")
                });
    
            $(".coronada, .coronada .cart-btn").on("mouseenter",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-04-a-768x490.jpg")
                })
            
            $(".coronada").on("mouseleave",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-04-768x490.jpg")
                });
    
            $(".monochrome, .monochrome .cart-btn").on("mouseenter",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-03-a-768x979.jpg")
                })
            
            $(".monochrome").on("mouseleave",function(){
                $(this).find("img").attr("src","./img/watch-home-best-seller-products-03-768x979.jpg")
                });
        }
    
        //blacktop, voyager, coronada, monochrome lefrWrap 반응형 높이 
        setTimeout(resizeFn, 100);
        function resizeFn(){

        _winW = $(window).innerWidth();
        
        leftWrap = $("#section06 .left-wrap");
        rightWrap = $("#section06 .right-wrap");
        leftGap = $("#section06 .left-gap").height();
        rightGap = $("#section06 .right-gap").innerHeight();

        blacktopImgW = $(".blacktopImg").innerWidth();
        blacktopRate = 1.220568902;
        blacktop = $("#section06 .blacktopImg");

        voyagerImgW = $(".voyagerImg").innerWidth();
        voyagerRate = 1.220568902;
        voyager = $("#section06 .voyagerImg");

        coronadaImgW = $(".coronadaImg").innerWidth();
        coronadaRate = 0.623610836;
        coronada = $("#section06 .coronadaImg");

        monochromeImgW = $(".monochromeImg").innerWidth();
        monochromeRate = 1.274735141;
        monochrome = $("#section06 .monochromeImg");
        
        if(_winW>=1200){
        //blacktop, voyager, coronada, monochrome 반응형으로 높이 맞추기
        blacktop.css({height : blacktopImgW*blacktopRate });
        voyager.css({height : voyagerImgW*voyagerRate });
        coronada.css({height : coronadaImgW*coronadaRate });
        monochrome.css({height : monochromeImgW * monochromeRate });
        }

        //lefrWrap,rightWrap 높이 
        if(_winW<=1199){
        leftWrap.css({height : leftGap*2});
        rightWrap.css({height : rightGap });
        console.log(leftGap)
        }
        if(_winW<767){
        leftWrap.css({height : leftGap+50});
        }

        //창넓이 767이하일때, 버튼 위치조정
        if(_winW<=767){
           $(".cart-btn").css({top:90+"%",left:-( ($("#section06 img").innerWidth() )/2)+80});
           $(".white-btn .white-btn2").css({bottom:0,right: -( ($("#section06 img").innerWidth() )/2)+45 });
           $(".white-btn .white-btn1").css({bottom:0,right: -( ($("#section06 img").innerWidth() )/2)+40 });

           $(".coronada .cart-btn").css({top:$(".coronadaImg img").innerHeight()-45,left:-( ($("#section06 img").innerWidth() )/2)+80});
           $(".coronada .white-btn1").css({top:$(".coronadaImg img").innerHeight()-45,right: -( ($(".coronadaImg img").innerWidth() )/2)+43 });
           $(".coronada .white-btn2").css({top:$(".coronadaImg img").innerHeight()-45,right: -( ($(".coronadaImg img").innerWidth() )/2)+47 });
            console.log($(".coronadaImg img").innerHeight())
        }

            //가로 사진 높이 잡기
        if(_winW<=1190){
        $("#section06 .left-row2").css({height:$(".coronadaImg img").innerHeight()});
        console.log($(".coronadaImg img").innerHeight())
        }

        }
        _win.resize(function(){
            resizeFn();
        })
    },






}

hongo.init();

})(window,document,jQuery);
