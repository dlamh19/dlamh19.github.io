
// Show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#aboutPage');
    const aboutMenu = document.querySelector('#projectsPage');
    const serviceMenu = document.querySelector('#expPage');

    let scrollPosition = window.scrollY;
    
    // adds highlight class to my menu items
    if(window.innerWidth > 960 && scrollPosition < 500)
    {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPosition < 1200)
    {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPosition < 2200)
    {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
        return;
    }
    else if(window.innerWidth > 960 && scrollPosition < 3000)
    {
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.add('highlight');
        return;
    }
    else
    {
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        serviceMenu.classList.remove('highlight');
    }

    if((element && windows.innerWidth < 960 && scrollPosition < 600) || element)
    {
        element.classList.remove('highlight');
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
