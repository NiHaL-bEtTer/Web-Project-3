const toggleSwitch = document.getElementById('toggle'); 
// this finds the html ellement with the id toggle and saves it in a variable

        
        toggleSwitch.addEventListener('click', () => { //this means when the button is clicked
            if (document.body.classList.contains('dark-mode')) { //checks if the page is in dark mode
                document.body.classList.remove('dark-mode'); // if it is then it removes dark mode
                localStorage.setItem('mode', 'light'); // sets up light mode
            } else {
                document.body.classList.add('dark-mode'); // if the button is clicked and dark-mode is not there then 
                localStorage.setItem('mode', 'dark'); // make it dark mode
            }
        });

        // On page load, check localStorage and restore mode accordingly
        window.addEventListener('DOMContentLoaded', () => {
            const savedMode = localStorage.getItem('mode'); //this checks local storage for mode and saves it in a variable
            if (savedMode === 'dark') {
                document.body.classList.add('dark-mode');// if the saved mode is dark, then it will add dark mode
            }
        });

                
        const sections = document.querySelectorAll('.section'); //find all elements with .section class and save in variable 

        // here wer are using intersection oberserver, creating and instanve making funtion
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                
                    entry.target.classList.add('in-view');
                    
                } else { // if the section is not in view, remove the in-view class from css so it shrinks back 
                    
                    entry.target.classList.remove('in-view')
                }
            });
        }, {
            threshold: 0.7 // when its 70% visible 
        });

        // calling the function to obeserve the sections
        sections.forEach(section => observer.observe(section)); //put section in the parameter




