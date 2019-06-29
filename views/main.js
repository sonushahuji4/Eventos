'use strict';
$(document).ready(function()
{
    var $slider = $('#slider');
    var $slideContainer = $slider.find('.slides');
    var $slides = $slideContainer.find('.slide');
    var width = 720;
    var animationSpedd = 1000;
    var pause = 3000;
    var currentSlide = 1;
    var interval;

    function startSlder()
    {
        interval = setInterval(function()
        {
            $slideContainer.animate({'margin-left': '-='+width,animationSpedd, function()
            {
                currentSlide++;
                if(currentSlide === $slides.length)
                {
                    currentSlide = 1;
                    $slideContainer.css('margin-left',0);
                                                }
                }
            });
                                      
        },pause);
    }

    function stopSlider()
    {
        clearInterval(interval);
    }
    $slider.on('mouseenter',stopSlider).on('mouseleave',startSlder);
    startSlder();
});

                    