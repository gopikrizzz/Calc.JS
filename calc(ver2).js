//getting inputs/
$('.value').on('click', function(evt) {
    if($(this).attr('data-role')!='operator'){
      $("#CV").val($("#CV").val()+$(this).val());
    }
    else{
      if($("#CV").val()!=''){
        $("#CV").val($('#CV').val()+$(this).val());
      }
    }
  });

//equal to function(calculation part)./
  $(".calculate-btn").on('click',function(){
    var expression = $("#CV").val();

    //Expressions without squareroot and % symbol usig AND operator/
    if((($("#CV").val()).indexOf('√') === -1) && (expression.indexOf('%') === -1) && (expression.indexOf('π') == -1) && (expression.indexOf('n!') == -1)&& (expression.indexOf('x²') == -1) && (expression.indexOf('cot') == -1) && (expression.indexOf('sec') == -1) && (expression.indexOf('mod') == -1) && (expression.indexOf('log') == -1) && (expression.indexOf('sin') == -1) && (expression.indexOf('cos') == -1) && (expression.indexOf('tan') == -1) && (expression.indexOf('exp') == -1) && (expression.indexOf('tanh') === -1)  && (expression.indexOf('coth') === -1)  && (expression.indexOf('sinh') === -1)  && (expression.indexOf('cosh') === -1) ){
      console.log("The output of expression "+"("+ expression+")" + " is " + eval(expression));
      $('#CV').val(eval(expression));
    }
    //Calculating percentage/
    //when refactoring try ternary operator/
    else if(($("#CV").val()).indexOf('%') != -1) {
      var firstVal = expression.split('%')[0];
      var secondVal = expression.split("%").pop();
      var finalVal = (secondVal*(firstVal/100));
      console.log("The value of "+ expression + " is " +(finalVal));
      $("#CV").val((finalVal));
    }
    //Calculating square root/
    else if(($("#CV").val().indexOf('√') !== -1)){
        var element = $("#CV").val().replace('√','');
      console.log("Square root of " + $('#CV').val() + " is " + Math.sqrt(element));
     $("#CV").val(Math.sqrt(element));
    }
    //Claculating square root/
    else if (expression.indexOf('x²') !== -1){
       var element = expression.replace('x²','');
       console.log("The Square of " + element + " is " +(element*element));
       $("#CV").val(element * element);
    }
    //Calculating mod/
    else if(expression.indexOf('mod') !== -1){
      var firstVal = expression.split('mod')[0];
      var secondVal = expression.split("mod").pop();
      var modVal = (firstVal/secondVal);
      var strVal = modVal.toString(8)
      if(strVal.indexOf(".") == -1){
        $("#CV").val('0');
      }
        else {
          var IntVal = Math.floor(modVal);
          var finalVal = (firstVal-(IntVal*secondVal));
          console.log("The value of "+ expression + " is " +(finalVal));
          $("#CV").val((finalVal));
        }
      }
      //Calculating Factorial of a number/
    else if(expression.indexOf('n!') !== -1 ){
       var element = $("#CV").val().replace('n!','');
       var tempvalue = 1;
       for(var i = element; i>0 ; i--){
        {
           tempvalue *=  i ;
        // this is same as the   tempvalue =  tempvalue * i ;
        }
        $("#CV").val((tempvalue));
        console.log("Factorial of "+element+" is :"+tempvalue);
        }
      }
//Calculating log expression/      
      else if(expression.indexOf('log') !== -1 ){
        var element = $("#CV").val().replace('log','');
        console.log("The log value of "+ " (" +element + ") " +" is " + (Math.log(element)));
        $("#CV").val(Math.log(element));
      }
//Calculating  hyperblic sine value/
      else if(expression.indexOf('sinh') !== -1 ){
        var element = $("#CV").val().replace('sinh','');
        console.log("The hyperblic sine value of "+  " (" +element + ") " + " is " + (Math.sinh(element)));
        $("#CV").val(Math.sinh(element));
      }
//Calculating  hyperblic cosine value/
      else if(expression.indexOf('cosh') !== -1 ){
        var element = $("#CV").val().replace('cosh','');
        console.log("The hyperblic cosine value of "+  " (" +element + ") " + " is " + (Math.cosh(element)));
        $("#CV").val(Math.cosh(element));
      }
//Calculating  hyperblic tangent value/
      else if(expression.indexOf('tanh') !== -1 ){
        var element = $("#CV").val().replace('tanh','');
        console.log(element);
        console.log("The hyperblic tangent value of "+  " (" +element + ") " + " is " + (Math.tanh(element)));
        $("#CV").val(Math.tanh(element));
      }
//Calculating  hyperblic cotangent value/
      else if(expression.indexOf('coth') !== -1 ){
        var element = $("#CV").val().replace('coth','');
        $("#CV").val(Math.cosh(element)/Math.sinh(element));
        console.log("The hyperbolic cotangent value of "+  " (" +element + ") " + " is " + $("#CV").val());
      }
//Calculating  sine value/
      else if(expression.indexOf('sin') !== -1 ){
        var element = $("#CV").val().replace('sin','');
        console.log("The sine value of "+  " (" +element + ") " + " is " + (Math.sin(element)));
        $("#CV").val(Math.sin(element));
      }
//Calculating  cosine value/
      else if(expression.indexOf('cos') !== -1 ){
        var element = $("#CV").val().replace('cos','');
        console.log("The cosine value of "+  " (" +element + ") " + " is " + (Math.cos(element)));
        $("#CV").val(Math.cos(element));
      }
//Calculating  exponential value (e^)./
      else if(expression.indexOf('exp') !== -1 ){
        var element = $("#CV").val().replace('exp','');
        console.log("The e power of "+  " (" +element + ") " + " is " + (Math.exp(element)));
        $("#CV").val(Math.exp(element));
      }
//Calculating  hyperblic tangent value/
      else if(expression.indexOf('tan') !== -1 ){
        var element = $("#CV").val().replace('tan','');
        console.log("The tangent value of "+  " (" +element + ") " + " is " + (Math.tan(element)));
        $("#CV").val(Math.tan(element));
      }
//Calculating  cotangent sine value/
      else if(expression.indexOf('cot') !== -1 ){
        var element = $("#CV").val().replace('cot','');
        $("#CV").val(Math.cos(element)/Math.sin(element));
        console.log("The cotangent value of "+  " (" +element + ") " + " is " + $("#CV").val());
      }
//Calculating  secant value/
      else if(expression.indexOf('sec') !== -1 ){
        var element = $("#CV").val().replace('sec','');
        $("#CV").val(1/Math.cos(element));
        console.log("The secant value of "+  " (" +element + ") " + " is " + $("#CV").val());
      }
      
 //Calculating  pi (π) value/   
    else{
      var element = $("#CV").val().replace('π','');
      $("#CV").val(element * 3.141592653589793238);
    }
    
  });


//hyp functions
  $(".col-3").on("click","#hyp",function(event){
    $("#CV").val("");
    $(".hyp").fadeToggle();
  });

//delete key function/
  $("#delete-btn").on('click',function(){
    $("#CV").val($('#CV').val().substring(0,($('#CV').val().length - 1)));
  });
  
//clear-ALl (CE) function/
  $("#Clear-All").on('click',function(){
    $('#CV').val("");
    $("#LV").val("");
  });
  
//clear botton function/
 $("#clear-btn").on('click',function(){
    $("#LV").val($('#CV').val());
    $('#CV').val("");
  });

  //selecting mode/
  $("h3").on("click",".fa-bars",function(event){
    $("ul").fadeToggle();
  })
//Toggling modes
  $("ul").on("click","li",function(event){
    $(this).parent().fadeOut(600);
    event.stopPropagation(); // this line removes event bubbling./
  });

  //making Standard mode active/
  $("ul").on("click","#std",function(event){
     $("section").fadeOut(500);
  });

  //making Scientific mode active/
  $("ul").on("click","#sci",function(event){
    $(".hyp").fadeOut();
    $("section").fadeIn(1500);
  })

 
  
  
  
  