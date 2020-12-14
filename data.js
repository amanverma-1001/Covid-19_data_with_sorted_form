$(document).ready(function(){
    $("button").click(function(){
       var x=$("#case").val();
        console.log(x);
       var y;
fetch('https://api.covid19api.com/summary').then((res)=>
{
console.log(res);
return res.json();
}).then((d)=>
{
  console.log(d.Countries);
  d.Countries.sort(function(a,b){
    if(a[x]<b[x])
    return 1;
    if(a[x]>b[x])
    return -1;
    return 0;
  });
  for(i=0;i<d.Countries.length;i++){
     y+='<tr>';
      y+='<td>'+i+'</td>';
      y+='<td>'+d.Countries[i].Country+'</td>';
      y+='<td>'+d.Countries[i].Slug+'</td>';
      y+='<td>'+d.Countries[i].CountryCode+'</td>';
      y+='<td>'+d.Countries[i].NewConfirmed+'</td>';
      y+='<td>'+d.Countries[i].NewDeaths+'</td>';
      y+='<td>'+d.Countries[i].NewRecovered+'</td>';
      y+='<td>'+d.Countries[i].TotalConfirmed+'</td>';
      y+='<td>'+d.Countries[i].TotalDeaths+'</td>';
      y+='<td>'+d.Countries[i].TotalRecovered+'</td>';
      y+='</tr>';
  }
  $("#run").html(y);

  }).catch((err)=>
{
console.log(err);
});
});
});