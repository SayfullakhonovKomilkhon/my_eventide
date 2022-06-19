window.addEventListener('load', function(){
   var tabsHeader = document.querySelector('.tabs-header');
   tabsHeader.addEventListener('click', function(e){
       
       if(e.target.classList.contains('tab')){
          var tabs = document.querySelectorAll('.tab');
          for(var i = 0; i < tabs.length; i++){
              tabs[i].classList.remove('active');
          } 
          e.target.classList.add('active');
       }
       var dataTab = e.target.getAttribute('data-tab');
       var content = document.querySelectorAll('.content');
       for(var i = 0; i < content.length; i++){
           if (dataTab == i) {
               content[i].style.display = 'block';
           } else {
                content[i].style.display = 'none';
           }
       }
   });
   
   var tabHeader2 = document.querySelector('.tabs__header');
   tabHeader2.addEventListener('click', function (event){
       if(event.target.classList.contains('tab__panell')){
           var tabPanell = document.querySelectorAll('.tab__panell');
           for(var i = 0; i < tabPanell.length; i++){
            tabPanell[i].classList.remove('active');
           }
           event.target.classList.add('active');
       }
       var dataTab2 = event.target.getAttribute('data-tab2');
       var tabContent = document.querySelectorAll('.tab__content');
       for(var j = 0; j < tabContent.length; j++){
           if(dataTab2 == j){
            tabContent[j].style.display = 'block';
           } else {
            tabContent[j].style.display = 'none';
           }
       }
   });
});