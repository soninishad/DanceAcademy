
(function(){
    
    let session = window.localStorage.getItem('session');
    if((session ==  null) && (typeof(session) == 'object')){
        console.log('session does not exist');

        secureRoutes.forEach(function(pagename,index){
            if(page_location == getBaseurl(pagename+'.html')){
                window.location.href = getBaseurl('login.html#session-expired');
            }
        });
        

    
   }else{
        console.log('session exist');

        if(page_location == getBaseurl('login.html')){
            // window.location.href = getBaseurl('login.html#welcome-back');
        }
        


        //SessionRoutes[index]+'.html'

        SessionRoutes.forEach(function(pagename,index){

            if(page_location ==  getBaseurl(pagename+'.html')){
                let myinfo = $("#myinfo");  
                let session = JSON.parse(window.localStorage.getItem('session'));
                let name = session.data.name;
                let email = session.data.email;
               myinfo.innerHTML = "<b> Name :"+name+" <br/> Email :"+email+"</b>";

            }

        });
}
})();