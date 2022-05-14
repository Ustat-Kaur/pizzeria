menu_list_array = ["Veg Margherita Pizza",
                    "Plain Cheese Pizza",
                    "Paneer Tikka Pizza",
                    "Chicken Tandoori Pizza",
                    "Veg Supreme Pizza",
                    "Green Pepper Pizza",
                    "Mushroom Pizza",
                    ];

function getmenu(){
var htmldata;
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
       menu_list_array.sort();
        htmldata="menu_list_array";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
