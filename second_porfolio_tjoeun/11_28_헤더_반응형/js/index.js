;(function(window,document,$,undefined){

var hongo = {

    init : function(){
        var that = this;
            that.headerFn();
            //that.modalFn();
    },
    headerFn : function(){  
        var win_dow = $(window);
        var winW = $(window).innerWidth();
        var simpleHeartMenu = $("#header .simple-menu li").eq(2);
        var t=0;
        //var li = $("#header .nav li")
        //var aside = $("#header .aside");

        setTimeout(resizeFn,100);

        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#header .simple-menu li").eq(2);
            t=0;
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.fadeOut(0);
                    $("#header .menu-wrap").fadeOut(0);
                    $(".mobile-menu").show();
                }
            }
            else{
                t=0;
                simpleHeartMenu.fadeIn(0);
                $("#header .menu-wrap").fadeIn(0);
                $(".mobile-menu").hide();

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });

        $(".aside4-btn1, .aside-side1").on({
            mouseenter:function(){
                $(".aside-side1").stop().fadeIn(400);
            },
            focusin:function(){
                $(".aside-side1").stop().fadeIn(400);
            }
        })
        $(".aside4-btn1, .aside-side1").on({
            mouseleave : function(){
                $(".aside-side1").stop().fadeOut(400);
                
            }
        })       

        $(".aside4-btn2").on({
            mouseenter:function(){
                $(".aside-side2").stop().fadeIn(400);
            },
            focusin:function(){
                $(".aside-side2").stop().fadeIn(400);
            }
        })
        $(".aside4-btn2").on({
            mouseleave : function(){
                $(".aside-side2").stop().fadeOut(400);
            }
        })

        $(".aside4-btn3").on({
            mouseenter:function(){
                $(".aside-side3").stop().fadeIn(400);
            },
            focusin:function(){
                $(".aside-side3").stop().fadeIn(400);
            }
        })
        $(".aside4-btn3").on({
            mouseleave : function(){
                $(".aside-side3").stop().fadeOut(400);
            }
        })

        /*
        li.each(function(i) {
            $(this).on({
                mouseenter : function(){
                    $(".aside").eq(i).stop().slideDown(300,"easeInQuad");
                    $(".aside").eq(i).next().slideUp(300);
                },
                focusin : function(){
                    $(".aside").eq(i).stop().slideDown(300,"easeInQuad");
                    //     $(".aside").next().slideDown(300);
                },
            })
            $(".nav").on({
                mouseleave : function(){
                    $(".aside").eq(i).stop().slideUp(300);
                }  
            })
        })
        */
    },

    /*
    modalFn : function(){

        var htmlRoot = $("html");
        var modal = $(".modal");
        var closeBtn = $(".modal .close-btn");

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
    }
    */
}

hongo.init();

})(window,document,jQuery);
