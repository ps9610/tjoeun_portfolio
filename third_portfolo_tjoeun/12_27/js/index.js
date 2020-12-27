;(function($,window,document,undefined){
    var airport = {
        init : function(){
            var that = this;
                that.popupFn();
                //that.headerFn();
                //that.section01Fn();
                //that.section02Fn();
                //that.section03Fn();
                //that.footerFn();
        },
        
        popupFn : function(){
            
            var _window = $(window);
            var _winW = $(window).innerWidth();
            var popUp = $(".pop-up");
            var slide = popUp.find(".slide");
            var slideCon = popUp.find(".slide-container");
            var slideWrap = popUp.find(".slide-wrap");
            var slideConW = slideCon.innerWidth();
            var slideRate  = 0.199203187250996;
            var slideH = slide*slideRate;

            var closeBtn = $(".pop-close-btn .closeBtn");

            var cnt = 0;
            var leftBtn = popUp.find(".left-btn");
            var rightBtn = popUp.find(".right-btn");
            
            // 반응형 넓이/높이
            function resizeFn(){
                if( _winW < 1200 )
                slide.css({ width : slideConW, height : slideH });
            };

            _window.resize(function(){
                resizeFn();
            });

            // closebtn
            closeBtn.on({
                click : function(){
                var _this = $(this);
                _this.toggleClass("addClose");
                popUp.toggleClass("addClose");
            }
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
                    console.log(cnt);

                });
            };
            
            rightBtn.on("click",function(){
                popNextSlideFn();
            });
            
            leftBtn.on("click",function(){
                popPrevSlideFn();
            });
            
            
            
            
        }




    }
    airport.init();
})(jQuery,window,document);