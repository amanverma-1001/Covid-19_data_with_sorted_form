$(document).ready(function(){
  var y;
fetch('https://api.covid19api.com/summary').then((res)=>
{
console.log(res);
return res.json();
}).then((d)=>
{
console.log(d.Global);
var t=d.Global;
$("#glo").html("New Confirmed     "+t.NewConfirmed
+" <br> Total Confirmed "+t.TotalConfirmed+" <br>  New Deaths"
+t.NewDeaths+" <br>  TotalDeaths"+t.TotalDeaths+" <br> New Recovered"+t.NewRecovered);
console.log(d.Countries);
function display(arr){
for(i=0;i<arr.length;i++){
   y+='<tr>';
    y+='<td>'+i+'</td>';
    y+='<td>'+arr[i].Country+'</td>';
    y+='<td>'+arr[i].Slug+'</td>';
    y+='<td>'+arr[i].CountryCode+'</td>';
    y+='<td>'+arr[i].NewConfirmed+'</td>';
    y+='<td>'+arr[i].NewDeaths+'</td>';
    y+='<td>'+arr[i].NewRecovered+'</td>';
    y+='<td>'+arr[i].TotalConfirmed+'</td>';
    y+='<td>'+arr[i].TotalDeaths+'</td>';
    y+='<td>'+arr[i].TotalRecovered+'</td>';
    y+='</tr>';
}
$("#run").html(y);
}
display(d.Countries);

$("#submit2").click(function(){
  $("#run").empty();
  var h="";
  var x=$("#case").val();
  console.log(x);
d.Countries.sort(function(a,b){
  if(a[x]<b[x])
  return 1;
  if(a[x]>b[x])
  return -1;
  return 0;
});

console.log(d.Countries);
for(i=0;i<d.Countries.length;i++){
   h+='<tr>';
    h+='<td>'+i+'</td>';
    h+='<td>'+d.Countries[i].Country+'</td>';
    h+='<td>'+d.Countries[i].Slug+'</td>';
    h+='<td>'+d.Countries[i].CountryCode+'</td>';
    h+='<td>'+d.Countries[i].NewConfirmed+'</td>';
    h+='<td>'+d.Countries[i].NewDeaths+'</td>';
    h+='<td>'+d.Countries[i].NewRecovered+'</td>';
    h+='<td>'+d.Countries[i].TotalConfirmed+'</td>';
    h+='<td>'+d.Countries[i].TotalDeaths+'</td>';
    h+='<td>'+d.Countries[i].TotalRecovered+'</td>';
    h+='</tr>';
}
$("#run").html(h);
});
$("#submit1").click(function(){
  $("#run").empty();
  var s="";
  var z=$("#userfield").val();
for(i=0;i<d.Countries.length;i++)
      {
       if(d.Countries[i].Country==z)
       {
         var t=d.Countries[i];
         s+='<tr>';
    s+='<td>'+i+'</td>';
    s+='<td>'+t.Country+'</td>';
    s+='<td>'+t.Slug+'</td>';
    s+='<td>'+t.CountryCode+'</td>';
    s+='<td>'+t.NewConfirmed+'</td>';
    s+='<td>'+t.NewDeaths+'</td>';
    s+='<td>'+t.NewRecovered+'</td>';
    s+='<td>'+t.TotalConfirmed+'</td>';
    s+='<td>'+t.TotalDeaths+'</td>';
    s+='<td>'+t.TotalRecovered+'</td>';
    s+='</tr>';
         $("#run").html(s);
         break;
       }}
      });
}).catch((err)=>
{
console.log(err);
});
});
