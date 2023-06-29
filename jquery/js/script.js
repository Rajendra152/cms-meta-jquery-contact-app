//basic syntax of jquery
//$(selector).action();

//with selector as paragraph
//$('p').click();

//with selector as button and id as text
// $('button').click(function() {
//     $('#text').hide();
// });


//ready() method called so that the execution of the function will start after document loaded
// $(document).ready(function() {
//     $('button').click(function() {
//         $('h1').hide();
//         $('p').hide();
//     });
// });


//hiding the element in some duration of speed/time
// $(document).ready(function() {
//     $('p').click(function() {
//         $(this).hide(4000);
//     })

// })


//hiding the list element
// $(document).ready(function(){
//     $('button').click(function() {
//         $('ul li:first-child').hide();
//     })

// })


//for input elements
// $(document).ready(function(){
//    $('button').click(function() {
//     //  $('[href]').hide(1000); //if no target is specified
//     $('a[target="_blank"]').hide(1000);
//   });
// }); 



// $(document).ready(function(){
//     $('button').click(function() {
//      $(':text').hide(1000);
//    });
//  }); 



//Printing the data content of the h1 tag in the console
// $(document).ready(function(){
//     $('button').click(function() {
//      console.log($('h1').html());
//    });
//  }); 


//Changing the content of the h1 element
// $(document).ready(function(){
//     $('button').click(function() {
//      $('h1').html("Good Morning");
//    });
//  }); 



//empty() method removes the content of the paragraph and 
//leaves it empty p tag

// $(document).ready(function(){
//     $('button').click(function() {
//      $('p').empty();
//    });
//  }); 



//it removes completely even tags also

// $(document).ready(function(){
//     $('button').click(function() {
//      $('p').remove();
//    });
//  }); 



//for adding and removing classes
// $(document).ready(function(){
//     $('button').click(function() {
//      $('h1').addClass("Heading");
//      $('h1').removeClass("Heading");
//    });
//  }); 


//For getting the css styles on the element
// $(document).ready(function(){
//     $('button').click(function() {
//        console.log($('p').css('color'));
//        console.log($('p').css('text-align'));
//     })
// })


//For setting the css styles on the element
// $(document).ready(function(){
//     $('button').click(function() {
//      $('p').css('color','green');
//      $('p').css('background-color','yellow');
//     })
// })

 
//Setting background for table
// $(document).ready(function(){
//     $('button').click(function() {
//      $('tr:even').css('background-color','yellow');
//      $('tr:odd').css('background-color','green');
//     })
// })


//Events in Jquery
//1.mouseenter event

// $(document).ready(function(){
//     $('button').mouseenter(function() {
//            console.log("Mouse enter event")
//     })
// })



//2.mouseleave event

// $(document).ready(function(){
//     $('button').mouseleave(function() {
//            console.log("Mouse leave event")
//     })
// }) 



//3.mousedown event

// $(document).ready(function(){
//     $('button').mousedown(function() {
//            console.log("Mouse down event")
//     })
// })


//4.mouseup event

// $(document).ready(function(){
//     $('button').mouseup(function() {
//            console.log("Mouse up event")
//     })
// })


//5.hover event

// $(document).ready(function(){
//     $('button').hover(function() {
//            console.log("entered");
//     },function(){
//         alert("Hurrah Left")
//     })
// })


//Input focus and blur events

// $(document).ready(function(){
//     $('input').focus(function() {
//         $(this).css('background-color','orange')    
//     })
//     $('input').blur(function() {
//         $(this).css('background-color','blue')     
//     })
// })


//on() method
//sample example

// $(document).ready(function(){
//     $('p').on('click',function(){
//         $('p').hide(1000);
//     })
// })


//on() method with more handlers

// $(document).ready(function(){
//     $('p').on(
//         {
//             click:function() {
//                 $('p').css('font-size','30px');
//             },
//             mouseleave:function() {
//                 $('p').css('font-size','20px');
//             },
//             mouseenter:function() {
//                 $('p').css('background-color','orange');
//             }
//         }
//     )
// })



// jQuery Effects

//1.hide effect

// $(document).ready(function(){
//     $('selector').hide(speed,callback)
// })

// $(document).ready(function(){
//     $('button').click(function() {
//         $('p').hide(1000);
//         $('p').show(5000);
//          $('p').toggle(2000);
//         $('p').fadeOut(3000);
//         $('p').fadeIn(3000);
//         $('p').fadeToggle(3000);
//         $('#one').fadeTo('1000',0.4);
//         $('#two').fadeTo('2000',0.2);
//         $('#three').fadeTo('4000',0.7);
//         $('#four').fadeTo('6000',1);
//         $('#one').slideUp(3000);
//         $('#one').slideDown(3000);
//         $('#one').slideToggle(3000);
//     })
// }) 


//Animate methods in jQuery


// $(document).ready(function(){
//     $('button').click(function() {
//         $('#one').animate(
//             {
//                    left: "100px",
//                    height: "150px",
//                    width: '150px'
//             },3000
//         );
//     })
// }) 



// $(document).ready(function(){
//     $('button').click(function() {
//         $('#one').animate(
//             {
//                    height: "+=150px",
//                    width: '150px'
//             },2000
//         );
//         $('#one').animate(
//             {
//                    height: "-=200px",
//                    width: '300px'
//             },4000
//         );
//         $('#one').animate(
//             {
//                    height: "200px",
//                    width: '500px'
//             },7000
//         );
//         $('#two').animate(
//             {
//                    right:"1000px"
//             },"slow"
//         );
//         $('#two').animate(
//             {
//                    fontSize:"30px"
//             },"slow"
//         );
//         $('#two').stop();
//     })
// })


