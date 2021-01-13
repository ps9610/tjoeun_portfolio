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
            
            var _window = $(window);
            var _windowH = _window.innerHeight();
            
            var _mobile = $("#mobile");
            var _wholeWrap = _mobile.find(".whole-wrap");
            var _mobileTitle = _mobile.find(".mobile-title");
            var _mobileSide = _mobile.find(".mobile-side");
            var _closeBtn = _mobile.find(".closeBtn");
            var _mobileMenuBtn = _mobile.find(".mMenuBtn");
            var _moblieMenu = $("#mobile-menu");
            var _mMenuMain = _moblieMenu.find(".mMenu-main");
            var _mMenuMainH = _windowH - 98;
            console.log(_mMenuMainH)
            var _popUp = $(".pop-up");
            var _html = $("html");
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

            setTimeout(resizeFn,10);
            function resizeFn(){
                _mMenuMain.css({ height : _mMenuMainH });
            }
        
            _window.resize(function(){
                resizeFn();
            })
        },

        popupFn : function(){
            
            var _window = $(window);
            var _winW = $(window).innerWidth();
            var _popUp = $(".pop-up");
            var _slideWrap = _popUp.find(".slide-wrap");
            var _pageWrap = _popUp.find(".page-wrap");

            var _popCloseBtn = $(".pop-close-btn")
            var _closeBtn = _popCloseBtn.find(".closeBtn");
            var _pageBtn = _pageWrap.find(".pageBtn");
            var _header = $("#header");

            var cnt = 0;
            var setId = null;
            var _slideCon = $(".pop-up .slide-container");
            var _slideView = $(".pop-up .slide-view");
            var _slide = $(".pop-up .slide");
            var n = _slide.length;
            var _slideW = _slide.innerWidth();
            var _leftBtn = _slideCon.find(".leftBtn");
            var _rightBtn = _slideCon.find(".rightBtn");
            var _addPage = _pageWrap.find(".addPage");
            var _playBtn = _pageWrap.find(".pagePlay");
            var _stopBtn = _pageWrap.find(".pageStop");
            var cnt2 = 0;
            var setId2 = 0;
            
            setTimeout(resizeFn,100);
            function resizeFn(){

                // 창넓이 1200이하부터 팝업창 자동없어짐
                if( _winW <= 1200 ){
                    _popUp.addClass("addClose");
                    _slide.css({ maxWidth : _winW });
                    _slideWrap.css({ width : _winW*n, marginLeft:-_winW });
                    _slideView.css({ maxWidth : _winW});
                }
            }
            
            _window.resize(function(){
                resizeFn();
            });


            // 팝업창 닫기 버튼
            _closeBtn
            .on("click", function(e){
                e.preventDefault();
                var _this = $(this);
                    _this.toggleClass("addClose");
                    _popUp.toggleClass("addClose");
                    _header.toggleClass("addClose");
            });

            //팝업창 슬라이드
            function popMainSlideFn(){
                _slideWrap.stop().animate({ left : -(_slideW*cnt) },600,function(){
                    if(cnt>1){cnt=0};
                    if(cnt<0){cnt=1};
                    _slideWrap.stop().animate({ left : -(_slideW*cnt) },0);
                });
                if (_winW <= 1200){
                    _slideW = _winW;
                }
                paginationFn();
            };

            function popNextSlideFn(){
                cnt++;
                popMainSlideFn();
            };

            function popPrevSlideFn(){
                cnt--;
                popMainSlideFn();
            };
            
            _rightBtn
            .on("click", function(e){
                e.preventDefault();
                TimerFn();
                if( !_slideWrap.is(":animated") ){
                    popNextSlideFn();
                }
            
            });
            
            _leftBtn
            .on("click", function(e){
                e.preventDefault();
                TimerFn();
                if( !_slideWrap.is(":animated") ){
                    popPrevSlideFn();
                }
            });

            _slideCon.swipe({
                swipeRight : function(e){
                    e.preventDefault();
                    TimerFn();
                    if( !_slideWrap.is(":animated") ){
                        popPrevSlideFn();
                    }
                },
                swipeLeft : function(e){
                    e.preventDefault();
                    TimerFn();
                    if( !_slideWrap.is(":animated") ){
                        popNextSlideFn();
                    }
                }
            })

            _stopBtn.on("click", function(e){
                e.preventDefault();
                TimerFn();
            });

            _playBtn.on("click", function(e){
                e.preventDefault();
                clearInterval(setId2);
                autoTimerFn();
                popNextSlideFn();
            });

            setTimeout( autoTimerFn,100 );
            function autoTimerFn(){
                setId = setInterval(popNextSlideFn,8000)
            }

            function paginationFn(){
                var z = cnt;
                z > 1 ? z=0 : z;
                z < 0 ? z=1 : z;
                //console.log(z+1);
                _pageBtn.eq(0).addClass("addPage");
                _addPage.text(z+1);
            }

            function TimerFn(){
                clearInterval(setId);
                clearInterval(setId2);
                cnt2 = 0;
                setId2 = setInterval(function(){
                    cnt2++;
                    if(cnt2 > 7){
                        clearInterval(setId2);
                        autoTimerFn();
                        popNextSlideFn();
                    }
                },1000)
            }
        },

        headerFn : function(){
            var _header = $("#header");
            var _language = $("#header .languageBtn");
            var _multi = $("#header .multi");
            var _nav = $("#header .mainBtn");
            var _subBg = $("#header .sub-bg");
            var _navSubBg = $("#header .mainBtn, #header .sub-bg");
            var _window = $(window);


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
            
            _navSubBg
            .on("mouseleave", function(){
                _header.removeClass("addSub");
            })
            .on("focusout", function(){
                _header.removeClass("addSub");
            });

            _window.scroll(function(){
                if( _window.scrollTop()>30 ){
                    header.addClass("addHeader");
                }
                else{
                    header.removeClass("addHeader");
                }
            })
        },

        section01Fn : function(){

            var _window = $(window);
            var _section01 = $("#section01");
            var _winH = _window.innerHeight();
            var cnt = 0;
            var setId = null;
            var _slide = $("#section01 .slide");
            var _slideH2 = _slide.find("h2");
            var _slideH3 = _slide.find("h3");

            setTimeout(resizeFn, 10);
            function resizeFn(){
                _winH = _window.innerHeight();
                _section01.css({ height : _winH });
            }

            _window.resize(function(){
                resizeFn();
            })

            setTimeout(titleMovingFn,800);
            function titleMovingFn(){
                _slideH2.stop().animate({ marginTop : -60, opacity : 1 },800,function(){
                    _slideH3.stop().animate({ marginTop : -20, opacity : 1 },900)
                })
            }
        }
    }

    airport.init();
})(jQuery,window,document);