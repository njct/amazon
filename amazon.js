var x=[];

//For Tooltip
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip();
});
//
function valselected(){
document.getElementById('selectedItem').style.visibility="hidden";
document.getElementById('rndpayment').style.visibility="hidden";
document.getElementById('alert1').style.visibility="hidden";
}
//
function addItem(){
    
    var item=document.getElementById('item').value;
    if (item.length<3){
        document.getElementById('alert1').style.visibility="visible";
        document.getElementById('alert1').innerHTML="<strong>Alert! </strong> Not a Valid Item.<br>Required Minimum 3 Char";
      
    }
       else{
    item=item.toUpperCase();
    x.push(item);
    document.getElementById('rndpayment').style.visibility="hidden";
    document.getElementById('selectedItem').style.visibility="visible";
    document.getElementById('alert1').style.visibility="hidden";
    return document.getElementById('itemList').innerHTML=x;
    }
 
}
//
function removeItem(){
    var item=document.getElementById('item').value;
    
    x.pop();
    
    
    document.getElementById('itemList').innerHTML=x;
    document.getElementById('rndpayment').style.visibility="hidden";
    document.getElementById('alert1').style.visibility="hidden";
    if (x==""){
        document.getElementById('selectedItem').style.visibility="hidden";
    }
    
}
//
function firstadd(){
    var item=document.getElementById('item').value;
    if (item.length<3){
        document.getElementById('alert1').style.visibility="visible";
        document.getElementById('alert1').innerHTML="<strong>Alert! </strong> Not a Valid Item.<br>Required Minimum 3 Char";
    }
       else{
    
    item=item.toUpperCase();
    x.unshift(item);
    document.getElementById('selectedItem').style.visibility="visible";
    document.getElementById('rndpayment').style.visibility="hidden";
    document.getElementById('alert1').style.visibility="hidden";
    return document.getElementById('itemList').innerHTML=x;
    }
}
//
function firstremove(){
    var item=document.getElementById('item').value;
    x.shift(item);
    document.getElementById('itemList').innerHTML=x;
    document.getElementById('rndpayment').style.visibility="hidden";
    document.getElementById('alert1').style.visibility="hidden";
    if (x==""){
    document.getElementById('selectedItem').style.visibility="hidden";
    
    }
}
//
function randomPay(){
    var item=document.getElementById('item').value;
    if (x!=""){
    
    var y=Math.floor(Math.random() * 101);
    document.getElementById('rndpayment').style.visibility="visible";
    return document.getElementById('itempay').innerHTML=y;
    }
    else{
        document.getElementById('alert1').style.visibility="visible";
        document.getElementById('alert1').innerHTML="Add Item First<br>No Item Selected";
        
    }
}
//
function chkvalidation(){
    var item=document.getElementById('item').value;
    if (item.length<3){
        document.getElementById('alert1').style.visibility="visible";
        document.getElementById('alert1').innerHTML="<strong>Alert! </strong> Not a Valid Item.<br>Required Minimum 3 Char";
    }
       else{
        document.getElementById('alert1').style.visibility="visible";
        document.getElementById('alert1').innerHTML="This is Valid entry";

    }        
}

    
   
// validation - item must be minimum 3 characters in length;
// all items should show in capital letters only.
// if no items are added then element with id selectedItem should not be visible at all.
// only integer in random number