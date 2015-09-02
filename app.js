var color = 'white'
var brushes = {
  wideLine : [-1,0,1],
  tallLine : [-100, 0, 100],
  square : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,114,214,314,414,514,614,714,814,914,1014,1114,1214,1314],
  pixel: [0],
  smiley : [205,305,405,505,605,803,904,1005,1006,1007,1008,1009,910,811,209,309,409,509,609,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,100,200,300,400,500,600,700,800,900,1000,1100,1200,1300,1400,1401,1402,1403,1404,1405,1406,1407,1408,1409,1410,1411,1412,1413,1414,114,214,314,414,514,614,714,814,914,1014,1114,1214,1314],
  threeXthree : [-101,-100,-99,-1,0,1,99,100,101],
};

brush = 'threeXthree';
$('#brush-select').html(brush);

function usePallet(boxElem, brushArray){
  for (var i=0;i<brushArray.length;i++){
    colorBox(boxElem, brushArray[i]);
  }
}

function getNextBrush(){
  var firstBrush = ""
  var useNext = false;
  for (brushi in brushes){
    if (firstBrush===""){
      firstBrush = brushi;
    }
    if (useNext){
      return brushi;
    }
    if (brushi === brush){
      useNext = true;
    }
  }
  return firstBrush;
}

function colorBox(boxElem, index){
  var func = (index>0?'next':'prev');
  index = Math.abs(index);
  for (var i=0;i<index;i++){
    boxElem = boxElem[func]();
  }
  boxElem.addClass(color);
}

$(document).ready(function(){
  $('.box').on('mousedown', function(e){
    usePallet($(this), brushes[brush]);
  });

  $('.box').on('mouseover', function(e){
    if(e.buttons ===1){
      usePallet($(this), brushes[brush]);
    }
  });

  $('.box').on('dblclick', function() {
    $(this).removeClass();
    $(this).addClass('box');
  });

  $('#reset').on('click' , function(){
    console.log("Here");
    $('.box').removeClass().addClass('box');
    
  });

  $('#red').on('click', function(){
    color = 'red';
  });
  $('#green').on('click', function(){
    color = 'green';
  });
  $('#yellow').on('click', function(){
    color = 'yellow';
  });
  $('#blue').on('click', function(){
    color = 'blue';
  });
  $('#white').on('click', function(){
    color = 'white';
  });

   $('#red').on('dblclick', function(){
    color = 'red';
  });
  $('#green').on('dblclick', function(){
    color = 'green';
  });
  $('#yellow').on('dblclick', function(){
    color = 'yellow';
  });
  $('#blue').on('dblclick', function(){
    color = 'blue';
  });
  $('#white').on('dblclick', function(){
    color = 'white';
  });

  $('#brush-select').on('click', function(){
    brush = getNextBrush();
    $(this).html(brush);
    //brush = brushes[brush];
  })

})