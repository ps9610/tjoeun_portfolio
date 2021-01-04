;(function($,window,document,undefined){
    var airport = {
        init : function(){
            var that = this;
                that.mobileFn();
                that.popupFn();
                that.headerFn();
                //that.section01Fn();
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
            var _moblieMenu = _mobile.find("#mobile-menu");
            var _html = $("html");
            var _content = _moblieMenu.find(".content");
            var _contentH = _content.innerHeight();
            var _contentRate = 1.222222222;
            var _window = $(window);
            var _popUp = $(".pop-up");
            
            _mobileTitle.each(function(idx){
                var _this = $(this);
                _this.on("click", function(e){
                    e.preventDefault();
                    console.log(_this);
                    _mobileTitle.removeClass("addSide");
                    _mobileSide.removeClass("addSide");
                    _mobileTitle.eq(idx).addClass("addSide");
                    _mobileSide.eq(idx).addClass("addSide");

                })
            })

            _mobileMenuBtn.on("click", function(){
                _wholeWrap.stop().animate({ left:0 },300);
                _mobile.addClass("addMoMenu");
                _moblieMenu.css({zIndex : 3});
                _popUp.css({zIndex : 2});

                _html.addClass("addScroll");
            })
            _closeBtn.on("click", function(){
                _wholeWrap.stop().animate({ left:-1000 },300);
                _mobile.removeClass("addMoMenu");
                _moblieMenu.css({zIndex : 1});
                _popUp.css({zIndex : 4});
                _html.addClass("removeScroll");
            })

            function resizeFn(){
                _content.css({ marginBottom : _contentH*_contentRate });
            };

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


            // closebtn
            closeBtn
            .on("click", function(){
                var _this = $(this);
                _this.toggleClass("addClose");
                popUp.toggleClass("addClose");
                _header.toggleClass("addClose");
            });

            //슬라이드
            function popNextSlideFn(){
                cnt++;
                popMainSlideFn();
            };

            function popPrevSlideFn(){
                cnt--;
                popMainSlideFn();
            };

            setTimeout( popMainSlideFn,100 );
            function popMainSlideFn(){

                slideWrap.stop().animate({ left : -1004*cnt },600,function(){
                    if(cnt>1){cnt=0};
                    if(cnt<0){cnt=1};
                    slideWrap.stop().animate({ left : -1004*cnt },0);
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

            _language.on("click", function(){
                _multi.toggleClass("addLang");
            });

            _nav
            .on("mouseenter", function(){
                _header.addClass("addSub");
            })
            .on("focusin", function(){
                _header.addClass("addSub");
            })
            .on("mouseleave", function(){
                _header.removeClass("addSub");
            })
            .on("focusout", function(){
                _header.removeClass("addSub");
            });
        }
    }

    airport.init();
})(jQuery,window,document);