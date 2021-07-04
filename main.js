name_of_my_friend=[];
    function submit (){
        display_name_of_friend=[];
        for(var loop=1;loop<=4;loop++){
            var name=document.getElementById("name_of_the_student_"+loop).value;
            console.log(name);  

            name_of_my_friend.push(name);
        }
        console.log("@@@");
        console.log(name_of_my_friend);

        document.getElementById("display_name_with_commas").innerHTML=name_of_my_friend;
            
        var no_commma=name_of_my_friend.join("###");
        document.getElementById("display_name_without_commas").innerHTML=no_commma;
        document.getElementById("submit_button").style.display="none";
        document.getElementById("sort_button").style.display="inline-block";
        
    }
    function sorting() {
        name_of_my_friend.sort();
        console.log(name_of_my_friend );
        var no_commma=name_of_my_friend.join("###");
        document.getElementById("display_name_without_commas" ).innerHTML=no_commma;
        document.getElementById("display_name_with_commas" ).innerHTML=name_of_my_friend;

    }