;(function($,window,document,undefined){
    var airport = {
        init : function(){
            var that = this;
                that.mobileFn();
                that.popupFn();
                that.headerFn();
                that.section01Fn();
                //that.section02Fn();
                //that.section03Fn();
                //that.footerFn();
        },
        mobileFn :function(){
            
            var _mobile = $("#mobile");
            var _mobileTitle = _mobile.find(".mobile-title");
            var _mobileSide = _mobile.find(".mobile-side");
            var _closeBtn = _mobile.find(".closeBtn");
            var _mobileMenuBtn = _mobile.find(".mMenuBtn");
            var _wholeWrap = _mobile.find(".whole-wrap");
            var _mMenuMain = $(".mMenu-main");
            var _mMenuMainCon = $(".mMenu-main").find("content");
            var _mMenuMainW = _mMenuMain.innerWidth();
            var _moblieMenu = _mobile.find("#mobile-menu");
            var _html = $("html");
            var _content = _moblieMenu.find(".content");
            var _contentH = _content.innerHeight();
            var _contentRate = 1.222222222;
            var _window = $(window);
            var _popUp = $(".pop-up");
            var _windowH = _window.innerHeight();
            var t = 0;
            
            //아코디언메뉴 -> 오류수정확인! 토글변수사용시 조건문에 논리형으로 쓰는것!
            _mobileTitle.each(function(idx){
                var _this = $(this);
                _this.on("click", function(e){
                    e.preventDefault();
                    // console.log(_this);
                    _mobileTitle.removeClass("addSide");
                    if(t==0){
                        t=1;
                        _this.addClass("addSide");
                    }
                    else if(t==1){
                        _this.removeClass("addSide");
                        t=0;
                    }
                    //alert(t);
                    _mobileSide.stop().slideUp(100);
                    _this.next().stop().slideToggle(100);
                })
            })

            //모바일 메뉴(햄버거버튼) 클릭이벤트
            _mobileMenuBtn.on("click", function(){
                _wholeWrap.stop().animate({ left:0 },300);
                _mobile.addClass("addMoMenu");
                _moblieMenu.css({zIndex : 3});
                _popUp.css({zIndex : 2});

                _html.addClass("addScroll");
            })

            //모바일 메뉴 닫기버튼 클릭이벤트
            _closeBtn.on("click", function(){
                _wholeWrap.stop().animate({ left:-1000 },300);
                _mobile.removeClass("addMoMenu");
                _moblieMenu.css({zIndex : 1});
                _popUp.css({zIndex : 4});
                _html.addClass("removeScroll");
            })

            //모바일 메뉴 높이 반응형 조정
            function resizeFn(){
                _mMenuMainCon.css({ marginBottom : _mMenuMainW * 0.823 });
                //console.log( _contentH );
            } 

            _window.resize(function(){
                resizeFn();
            })
        },

        popupFn : function(){
            
            var _window = $(window);
            var _winW = $(window).innerWidth();
            var popUp = $(".pop-up");
            var slideWrap = popUp.find(".slide-wrap");

            var popCloseBtn = $(".pop-close-btn")
            var closeBtn = popCloseBtn.find(".closeBtn");
            var _header = $("#header");

            var cnt = 0;
            var leftBtn = popUp.find(".left-btn");
            var rightBtn = popUp.find(".right-btn");
            
           setTimeout(resizeFn,100);
            // 창넓이 1200이하부터 팝업창 자동없어짐
            function resizeFn(){
                if( _winW <= 1200 )
                popUp.addClass("addClose");
            }
            
            _window.resize(function(){
                resizeFn();
            });


            // 팝업창 닫기 버튼
            closeBtn
            .on("click", function(){
                var _this = $(this);
                _this.toggleClass("addClose");
                popUp.toggleClass("addClose");
                _header.toggleClass("addClose");
            });

            //팝업창 슬라이드
            function popNextSlideFn(){
                cnt++;
                popMainSlideFn();
                console.log(cnt);
            };

            function popPrevSlideFn(){
                cnt--;
                popMainSlideFn();
            };

            setTimeout( popMainSlideFn,100 );
            function popMainSlideFn(){

                slideWrap.stop().animate({ left : (-1004*cnt/2)},600,function(){
                    if(cnt>2){cnt=0};
                    if(cnt<0){cnt=2};
                    slideWrap.stop().animate({ left : (-1004*cnt/2) },0);
                });
            };
            
            rightBtn.on("click",function(){
                popNextSlideFn();
            });
            
            leftBtn.on("click",function(){
                popPrevSlideFn();
            });

        },

        headerFn : function(){
            var _header = $("#header");
            var _language = $("#header .languageBtn");
            var _multi = $("#header .multi");
            var _nav = $("#header .mainBtn");
            var _subBg = $("#header .sub-bg");
            var _navSubBg = $("#header .mainBtn, #header .sub-bg");

            //헤더 오른쪽 다국어 select 클릭이벤트
            _language.on("click", function(){
                _multi.toggleClass("addLang");
            });

            // 메인메뉴에 hover시 서브메뉴 보이고 없어지기
            _nav
            .on("mouseenter", function(){
                _header.addClass("addSub");
            })
            .on("focusin", function(){
                _header.addClass("addSub");
            });
            
            _subBg.on("mouseenter", function(){
                _header.addClass("addSub");
            })
            
            _navSubBg.on("mouseleave", function(){
                _header.removeClass("addSub");
            })
            .on("focusout", function(){
                _header.removeClass("addSub");
            });
        },

        section01Fn : function(){

            var _window = $(window);
            var _section01 = $("#section01");
            var _winH = _window.innerHeight();
            var cnt = 0;
            var setId = null;
            var _slide = $("#section01 .slide");
            var _nextBtn = $("#section01 .nextBtn");
            var _prevBtn = $("#section01 .prevBtn");
            var n = _slide.length-1;
            //console.log(n);
            var _pageBtn = $("#section01 .pageBtn");
            var imsi = null;

            setTimeout(resizeFn, 10);
            function resizeFn(){
                _winH = _window.innerHeight();
                _section01.css({ height : _winH });
            }
            
            /* function autoTimerfn(){
                setId = setInterval(nextSlideFn,10);
            } */

            function mainNextSlideFn(){ //현재 cnt가 나타난다 | opacity 0에서 1로
                _slide.css({ zIndex:1 })//초기화
                _slide.eq(cnt==0?n:cnt-1).css({ zIndex:2 });
                _slide.eq(cnt).css({ zIndex:3 }).stop().animate({ opacity : 0 },0).stop().animate({ opacity : 1 },800);
                pageBtnFn();
            }
            function mainPrevSlideFn(){ //현재 cnt가 사라진다 | opacity 1에서 0으로
                _slide.css({ zIndex:1 }).stop().animate({ opacity : 1 },0); //초기화
                _slide.eq(cnt).css({ zIndex:2 });
                _slide.eq(cnt==n?0:cnt+1).css({ zIndex:3 }).stop().animate({ opacity : 0 },800);
                pageBtnFn();
            }
            //3 0 0 1 | 2 1 1 0

            function nextSlideFn(){
                cnt++;
                if(cnt>n) cnt=0;
                console.log(cnt);
                mainNextSlideFn();
            }

            function prevSlideFn(){
                cnt--;
                if(cnt<0) cnt=n;
                console.log(cnt);
                mainPrevSlideFn();
            }

            function pageBtnFn(z){
                _pageBtn.removeClass("addHover");
                _pageBtn.eq(z).addClass("addHover");
                //console.log(z);
            }

            _pageBtn.each(function(i){
                var _this = $(this);
                _this.on("click",function(e){
                    e.preventDefault();
                    //console.log("전:i", i);
                    //console.log("전:cnt", cnt);
                    // 클릭한 i 값은 0 1 2 3으로 계속 변화하지만 현재 슬라이드 cnt의 값은 0으로 변하지 않음
                        //근데 현재 슬라이드의 값이 클릭한 i의 값과 동일하게 변화해야 하기때문에
                        //본래의 cnt의 값은 imsi라는 변수에 저장해서 cnt의 값을 비워 놓은 후
                        // cnt = i로 설정하여 cnt와 i값이 같아지게 함
                            //근데 다음 슬라이드에선 임시는 무조건 현재슬라이드보다 작아야하고
                                // 이전 슬라이드에선 임시는 무조건 현재슬라이드보다 커야함

                        imsi = cnt;
                        cnt = i; //내가 클릭한 값 = 현재 이동하는 슬라이드의 값
                            if( imsi < i ){
                                mainNextSlideFn();
                            }
                            else if( imsi > i ){
                                mainPrevSlideFn();
                            }

                        console.log("i", i);
                        console.log("cnt", cnt);    
                        console.log("imsi", imsi); 
                })  
            })

            _nextBtn.on("click",function(){
                if( !_slide.is(":animated") )
                nextSlideFn();
            })
            _prevBtn.on("click",function(){ 
                if( !_slide.is(":animated") )
                prevSlideFn();
            })

            _window.resize(function(){
                resizeFn();
            })
        }
    }

    airport.init();
})(jQuery,window,document);