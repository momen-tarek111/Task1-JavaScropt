var s1=document.querySelector("#btn11")
var s2=document.querySelector("#btn12")
var s3=document.querySelector("#btn13")
var s4=document.querySelector("#btn14")
var r1=document.querySelector("#btn21")
var r2=document.querySelector("#btn22")
var r3=document.querySelector("#btn23")
var r4=document.querySelector("#btn24")
var o1=document.querySelector("#btn31")
var o2=document.querySelector("#btn32")
var o3=document.querySelector("#btn33")
var o4=document.querySelector("#btn34")

var td11n=document.querySelector(".Product-Name1")
var td11p=document.querySelector(".Product-price1")
var td11q=document.querySelector(".Product-Quantity1")
var td11t=document.querySelector(".Product-Total1")
////////////////////////////////////////////////////////////
var td12n=document.querySelector(".Product-Name2")
var td12p=document.querySelector(".Product-price2")
var td12q=document.querySelector(".Product-Quantity2")
var td12t=document.querySelector(".Product-Total2")
////////////////////////////////////////////////////////////
var td13n=document.querySelector(".Product-Name3")
var td13p=document.querySelector(".Product-price3")
var td13q=document.querySelector(".Product-Quantity3")
var td13t=document.querySelector(".Product-Total3")
////////////////////////////////////////////////////////////
var td14n=document.querySelector(".Product-Name4")
var td14p=document.querySelector(".Product-price4")
var td14q=document.querySelector(".Product-Quantity4")
var td14t=document.querySelector(".Product-Total4")
////////////////////////////////////////////////////////////
var td21n=document.querySelector(".Product-Name5")
var td21p=document.querySelector(".Product-price5")
var td21q=document.querySelector(".Product-Quantity5")
var td21t=document.querySelector(".Product-Total5")
////////////////////////////////////////////////////////////
var td22n=document.querySelector(".Product-Name6")
var td22p=document.querySelector(".Product-price6")
var td22q=document.querySelector(".Product-Quantity6")
var td22t=document.querySelector(".Product-Total6")
////////////////////////////////////////////////////////////
var td23n=document.querySelector(".Product-Name7")
var td23p=document.querySelector(".Product-price7")
var td23q=document.querySelector(".Product-Quantity7")
var td23t=document.querySelector(".Product-Total7")
////////////////////////////////////////////////////////////
var td24n=document.querySelector(".Product-Name8")
var td24p=document.querySelector(".Product-price8")
var td24q=document.querySelector(".Product-Quantity8")
var td24t=document.querySelector(".Product-Total8")
////////////////////////////////////////////////////////////
var td31n=document.querySelector(".Product-Name9")
var td31p=document.querySelector(".Product-price9")
var td31q=document.querySelector(".Product-Quantity9")
var td31t=document.querySelector(".Product-Total9")
////////////////////////////////////////////////////////////
var td32n=document.querySelector(".Product-Name10")
var td32p=document.querySelector(".Product-price10")
var td32q=document.querySelector(".Product-Quantity10")
var td32t=document.querySelector(".Product-Total10")
////////////////////////////////////////////////////////////
var td33n=document.querySelector(".Product-Name11")
var td33p=document.querySelector(".Product-price11")
var td33q=document.querySelector(".Product-Quantity11")
var td33t=document.querySelector(".Product-Total11")
////////////////////////////////////////////////////////////
var td34n=document.querySelector(".Product-Name12")
var td34p=document.querySelector(".Product-price12")
var td34q=document.querySelector(".Product-Quantity12")
var td34t=document.querySelector(".Product-Total12")
////////////////////////////////////////////////////////////
var tr1=document.querySelector(".samsung-p1")
var tr2=document.querySelector(".samsung-p2")
var tr3=document.querySelector(".samsung-p3")
var tr4=document.querySelector(".samsung-p4")
var tr5=document.querySelector(".realme-p1")
var tr6=document.querySelector(".realme-p2")
var tr7=document.querySelector(".realme-p3")
var tr8=document.querySelector(".realme-p4")
var tr9=document.querySelector(".oppo-p1")
var tr10=document.querySelector(".oppo-p2")
var tr11=document.querySelector(".oppo-p3")
var tr12=document.querySelector(".oppo-p4")
var count1=0
var count2=0
var count3=0
var count4=0
var count5=0
var count6=0
var count7=0
var count8=0
var count9=0
var count10=0
var count11=0
var count12=0
var div=document.querySelector(".total-price")
var span=document.querySelector(".total-price span")
var btn=document.querySelector("#btn")
var totalPrice=0
var flag=false
s1.onclick=function(){
    count1+=1
    if(count1>=1){
        tr1.style.display="table-row"
        div.style.display="block"
    }
    td11n.innerHTML=s1.getAttribute("name")
    td11p.innerHTML=+(s1.getAttribute("price"))+"$"
    td11q.innerHTML=count1
    td11t.innerHTML=(+(s1.getAttribute("price"))*count1)+"$"
    totalPrice+=+(s1.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
s2.onclick=function(){
    count2+=1 
    if(count2>=1){
        tr2.style.display="table-row"
        div.style.display="block"
    }
    td12n.innerHTML=s2.getAttribute("name")
    td12p.innerHTML=+(s2.getAttribute("price"))+"$"
    td12q.innerHTML=count2
    td12t.innerHTML=(+(s2.getAttribute("price"))*count2)+"$"
    totalPrice+=+(s2.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
s3.onclick=function(){
    count3+=1
    if(count3>=1){
        tr3.style.display="table-row"
        div.style.display="block"
    }
    td13n.innerHTML=s3.getAttribute("name")
    td13p.innerHTML=+(s3.getAttribute("price"))+"$"
    td13q.innerHTML=count3
    td13t.innerHTML=(+(s3.getAttribute("price"))*count3)+"$"
    totalPrice+=+(s3.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
s4.onclick=function(){
    count4+=1
    if(count4>=1){
        tr4.style.display="table-row"
        div.style.display="block"
    }
    td14n.innerHTML=s4.getAttribute("name")
    td14p.innerHTML=+(s4.getAttribute("price"))+"$"
    td14q.innerHTML=count4
    td14t.innerHTML=(+(s4.getAttribute("price"))*count4)+"$"
    totalPrice+=+(s4.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
r1.onclick=function(){
    count5+=1
    if(count5>=1){
        tr5.style.display="table-row"
        div.style.display="block"
    }
    td21n.innerHTML=r1.getAttribute("name")
    td21p.innerHTML=+(r1.getAttribute("price"))+"$"
    td21q.innerHTML=count5
    td21t.innerHTML=(+(r1.getAttribute("price"))*count5)+"$"
    totalPrice+=+(r1.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
r2.onclick=function(){
    count6+=1
    if(count6>=1){
        tr6.style.display="table-row"
        div.style.display="block"
    }
    td22n.innerHTML=r2.getAttribute("name")
    td22p.innerHTML=+(r2.getAttribute("price"))+"$"
    td22q.innerHTML=count6
    td22t.innerHTML=(+(r2.getAttribute("price"))*count6)+"$"
    totalPrice+=+(r2.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
r3.onclick=function(){
    count7+=1 
    if(count7>=1){
        tr8.style.display="table-row"
        div.style.display="block"
    }

    td23n.innerHTML=r2.getAttribute("name")
    td23p.innerHTML=+(r2.getAttribute("price"))+"$"
    td23q.innerHTML=count7
    td23t.innerHTML=(+(r2.getAttribute("price"))*count7)+"$"
    totalPrice+=+(r3.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
r4.onclick=function(){
    count8+=1
    if(count8>=1){
        tr1.style.display="table-row"
        div.style.display="block"
    }
    td24n.innerHTML=r2.getAttribute("name")
    td24p.innerHTML=+(r2.getAttribute("price"))+"$"
    td24q.innerHTML=count8
    td24t.innerHTML=(+(r2.getAttribute("price"))*count8)+"$" 
    totalPrice+=+(r4.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
o1.onclick=function(){
    count9+=1
    if(count9>=1){
        tr9.style.display="table-row"
        div.style.display="block"
    }
    td31n.innerHTML=o1.getAttribute("name")
    td31p.innerHTML=+(o1.getAttribute("price"))+"$"
    td31q.innerHTML=count9
    td31t.innerHTML=(+(o1.getAttribute("price"))*count9)+"$"
    totalPrice+=+(o1.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
o2.onclick=function(){
    count10+=1
    if(count10>=1){
        tr10.style.display="table-row"
        div.style.display="block"
    }
    td32n.innerHTML=o2.getAttribute("name")
    td32p.innerHTML=+(o2.getAttribute("price"))+"$"
    td32q.innerHTML=count10
    td32t.innerHTML=(+(o2.getAttribute("price"))*count10)+"$"
    totalPrice+=+(o2.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
o3.onclick=function(){
    count11+=1
    if(count11>=1){
        tr11.style.display="table-row"
        div.style.display="block"
    }
    td33n.innerHTML=o3.getAttribute("name")
    td33p.innerHTML=+(o3.getAttribute("price"))+"$"
    td33q.innerHTML=count11
    td33t.innerHTML=(+(o3.getAttribute("price"))*count11)+"$"
    totalPrice+=+(o3.getAttribute("price"))
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}

o4.onclick=function(){
    count12+=1
    if(count12>=1){
        tr12.style.display="table-row"
        div.style.display="block"
    }
    td34n.innerHTML=o4.getAttribute("name")
    td34p.innerHTML=+(o4.getAttribute("price"))+"$"
    td34q.innerHTML=count12
    td34t.innerHTML=(+(o4.getAttribute("price"))*count12)+"$"
    totalPrice+=(+(o4.getAttribute("price"))*count12)
    if(flag){
        span.innerHTML=+(totalPrice)+"$"
    }
}
btn.onclick=function(){
    span.innerHTML=+(totalPrice)+"$"
    flag=true
}