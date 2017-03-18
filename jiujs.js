  window.onload = function() {

          function threeCubic() { //得到三个随机方框
             // var li_array=document.getElementsByTagName('li');
             // var cubic=[];
             // for(var i=0;i<li_array.length;i++){
             //    cubic[cubic.length]=li_array[i].getElementsByTagName('div');//
             // }
             var num1, num2, num3;
             var num = [];
             num1 = Math.ceil(Math.random() * 9); //得到0-9的随机数
             num2 = Math.ceil(Math.random() * 9);
             num3 = Math.ceil(Math.random() * 9);
             var eq = true;
             do {

                if (num1 == num2 || num2 == num3 || num1 == num3) {
                   num2 = Math.ceil(Math.random() * 9);
                   num3 = Math.ceil(Math.random() * 9);
                   
                } else {
                   eq = false;
                   num[0] = document.getElementById('d' + num1);             
                   num[1] = document.getElementById('d' + num2);
                   num[2] = document.getElementById('d' + num3);
                }
             } while (eq);
             console.log(num1,num2,num3);
             console.log(num);
             return num;
          }
         var getRandomColor = function() {//生成随机颜色

            return (function(m, s, c) {
               return (c ? arguments.callee(m, s, c - 1) : '#') +
                  s[m.floor(m.random() * 16)]
            })(Math, '0123456789abcdef', 5)
         }

          function changeColor(){//得到颜色
            var num=threeCubic();
            for(var i in num){
               num[i].style.backgroundColor=getRandomColor();
            }
            return num;
          }
          var time;
          var lastnun=[];
          document.getElementsByClassName('start')[0].onclick=function(){
            time=setInterval(function(){
               for(var i in lastnun){
                  lastnun[i].style.backgroundColor='';
               }
              lastnun=changeColor();

            },1000);
          }
          document.getElementsByClassName('stop')[0].onclick=function(){
             
            clearInterval(time);
             for(var i in lastnun){
                     lastnun[i].style.backgroundColor='';
                  }
          }
       }