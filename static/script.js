$( document ).ready(function($){
  
  var rangeSlider= document.getElementById('montant');
  var value =rangeSlider.value-rangeSlider.getAttribute('min')
  value=value/(rangeSlider.getAttribute('max')-rangeSlider.getAttribute('min'));
  rangeSlider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    +'color-stop(' +value+ ',#FF7300),'
    + 'color-stop(' +value+ ',#ffffff)' +')';
})
$( document ).ready(function($){
  
  var rangeSlider= document.getElementById('taux');
  var value =rangeSlider.value-rangeSlider.getAttribute('min')
  value=value/(rangeSlider.getAttribute('max')-rangeSlider.getAttribute('min'));
  rangeSlider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    +'color-stop(' +value+ ',#FF7300),'
    + 'color-stop(' +value+ ',#ffffff)' +')';
})
$( document ).ready(function($){
  
  var rangeSlider= document.getElementById('duree');
  var value =rangeSlider.value-rangeSlider.getAttribute('min')
  value=value/(rangeSlider.getAttribute('max')-rangeSlider.getAttribute('min'));
  rangeSlider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    +'color-stop(' +value+ ',#FF7300),'
    + 'color-stop(' +value+ ',#ffffff)' +')';
})
$( document ).ready(function($){
  
  var rangeSlider= document.getElementById('annuite');
  var value =rangeSlider.value-rangeSlider.getAttribute('min')
  value=value/(rangeSlider.getAttribute('max')-rangeSlider.getAttribute('min'));
  rangeSlider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    +'color-stop(' +value+ ',#FF7300),'
    + 'color-stop(' +value+ ',#ffffff)' +')';
})
  function onRangeChange(x){
  var rangeSlider= document.getElementById(x);
  var value =(rangeSlider.value-rangeSlider.getAttribute('min'))/(rangeSlider.getAttribute('max')-rangeSlider.getAttribute('min'));
  rangeSlider.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    +'color-stop(' +value+ ',#FF7300),'
    + 'color-stop(' +value+ ',#ffffff)' +')';
}
function round_up ( $value, $precision ) { 
  $pow = Math.pow ( 10, $precision ); 
  return ( Math.ceil ( $pow * $value ) + Math.ceil ( $pow * $value - Math.ceil ( $pow * $value ) ) ) / $pow; 
} 
function make_datalist ( ) { 
  var list=[]
  for(i=$("#duree").attr("min");i<=$("#duree").attr("max");i++){
                    var sum=0;
                    var minsum=0;
                    var maxsum=0;
                    var sum2=0;
                    sum+= +$('#montantbox').val()*$('#tauxbox').val();
                    sum=sum/12;
                    sum=sum*$('#typeduree').val();
                    sum2=$('#tauxbox').val()/12;
                    sum2=sum2*$('#typeduree').val()
                    sum2=parseFloat('1')+parseFloat(sum2);
                    sum2=Math.pow(sum2,$('#dureebox').val())
                    sum2=1/sum2;
                    minsum=1/minsum
                    maxsum=1/maxsum
                    sum2=parseFloat('1')-parseFloat(sum2)
                    sum=sum/sum2
                    sum=round_up(sum,2);
                    list.push(sum);
  }
 var str='';
 for(i=$("#duree").attr("min");i<=$("#duree").attr("max");i++){
  str += '<option value="'+list[i]+'" />';
 
} 
  var my_list=document.getElementById("annuitevalues");
  my_list.innerHTML = str;
}
function update_list(list){
  for(i=12/$("#typeduree").val();i<=84/$("#typeduree").val();i++){
  var sum=0;
  var sum2=0;
  sum+= +$('#montantbox').val()*$('#tauxbox').val();
  sum=sum/12;
  sum=sum*$('#typeduree').val();
  sum2=$('#tauxbox').val()/12;
  sum2=sum2*$('#typeduree').val()
  sum2=parseFloat('1')+parseFloat(sum2);
  sum2=Math.pow(sum2,i)
  sum2=1/sum2;
  sum2=parseFloat('1')-parseFloat(sum2)
  sum=sum/sum2
  sum=round_up(sum,2);
  list.push(sum);
}
}