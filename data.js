

$(document).ready(function(){
  
  var y,addcountry;
fetch('https://api.covid19api.com/summary',{
mode:"cors"

}).then(res=> res.json()).then((d)=>
{
console.log(d.Global);
var t=d.Global;
$("#glo").html("<u1> <li style='background-color:red'>  Total Confirmed "+t.TotalConfirmed+"</li><li style='color:black'> Total Recovered "+t.TotalRecovered
  +"</li>  <li style='background-color:red'> Total Deaths "+t.TotalDeaths   
+"</li><li style='color:black'>New Confirmed "+t.NewConfirmed+"</li><li style='background-color:red'>  New Deaths "
+t.NewDeaths+"</li><li style='color:black'> New Recovered "+t.NewRecovered+"</li></u1>");
console.log(d.Countries);
function display(arr){
  addcountry="";
for(i=0;i<arr.length;i++){
   y+='<tr>';
    y+='<td>'+(i+1)+'</td>';
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
    addcountry+=`<li>${arr[i].Country}</li>`;
}
$("#run").html(y);
$("#myUL").html(addcountry);
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
    h+='<td>'+(i+1)+'</td>';
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
       if(d.Countries[i].Country.includes(z))
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
        
       }}
       $("#run").html(s);
        

      });
      
      
      
      $(document).on('click', 'li', function(){
        var ans;
        ans=$(this).text();
        $("#loading").delay(800).fadeIn();
        $("#loading").fadeOut('fast',function(){
        
        $("#myInput").val(ans);
        dashboardvalue(ans);
        });
   });
   function dashboardvalue(ans){
    var countryname=ans;

    
  for(i=0;i<d.Countries.length;i++)
        {
         if(d.Countries[i].Country==countryname)
         {
           var t=d.Countries[i];
          $("#countrycard").text(`${t.Country}(${t.CountryCode})`);
          $("#newconfirmed").text(t.NewConfirmed);
           $("#newdeaths").text(t.NewDeaths);
            $("#newrecovered").text(t.NewRecovered);
            $("#totalconfirmed").text(t.TotalConfirmed);
             $("#totaldeaths").text(t.TotalDeaths); 
      $("#totalrecovered").text(t.TotalRecovered);
      $("#countrycard2").text(`${t.Country}(${t.CountryCode})`);
      $("#newconfirmed2").text(t.NewConfirmed);
       $("#newdeaths2").text(t.NewDeaths);
        $("#newrecovered2").text(t.NewRecovered);
        $("#totalconfirmed2").text(t.TotalConfirmed);
         $("#totaldeaths2").text(t.TotalDeaths); 
  $("#totalrecovered2").text(t.TotalRecovered);
    
          break;
         }}
        }

      $("#myInput").keyup(function(){
        $("#myUL").empty();
        var lk=$("#myInput").val();
        var fc="";
        for(i=0;i<d.Countries.length;i++)
      {
       if(d.Countries[i].Country.toLowerCase().indexOf(lk.toLowerCase())==0)
       {
         var t=d.Countries[i];
         
    fc+='<li>'+t.Country+'</li>';
    
        
       }}
       $("#myUL").html(fc);

      });

      
}).catch((err)=>
{
console.log(err);
});
});
