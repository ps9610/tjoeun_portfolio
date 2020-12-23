;(function(window,document,$,undefined){

var hongo = {

    init : function(){
        var that = this;
            that.headerFn();
            that.modalFn();
    },
    headerFn : function(){  
        var win_dow = $(window);
        var winW = $(window).innerWidth();
        var simpleHeartMenu = $("#header .simple-menu li").eq(2);
        var t=0;

        function resizeFn(){
            
            winW = $(window).innerWidth();
            simpleHeartMenu = $("#header .simple-menu li");
            t=0;
            
            if (winW < 992){
                if(t==0){
                    t=1;
                    simpleHeartMenu.removeClass("addHeader");
                }
            }
            else{
                t=0;
                simpleHeartMenu.addClass("addHeader");

            }
        };

        win_dow.resize(function(){
            resizeFn();
        });
    },

    /*
    modalFn : function(){

        setTimeout(countFn,5000);

        function countFn(){
            $(".modal").stop().fadeIn(0);
        }

        $(".close-btn").on({
            click : function(){
                $(".modal").stop().fadeOut(300);
            }
        });
    }
    */
        
}

hongo.init();

})(window,document,jQuery);
