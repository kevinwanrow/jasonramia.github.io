$(document).ready(function(){
    // $("button").click(function(){
    //   $("p").toggle();
    // });

    var checkbox = document.querySelector('input[name=theme]');
    var iconSwap = document.querySelector('img[class=themeicon]');
    
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans();
            document.documentElement.setAttribute('data-theme', 'dark');
            iconSwap.setAttribute('src', 'assets/icons/001-sunny.svg');
        } else {
            trans();
            document.documentElement.setAttribute('data-theme', 'light');
            iconSwap.setAttribute('src', 'assets/icons/002-moon.svg');
        }
    })
    
    
    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }


});

