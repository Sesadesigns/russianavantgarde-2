(document.addEventListener("DOMContentLoaded", () => {

const navLinks = document.querySelectorAll(".nav-horizontal a"); 
const artists = document.querySelectorAll(".artist"); 
const artworks = document.querySelectorAll(".artwork"); 
const allDetails = document.querySelectorAll(".artist details");
    
//-- waits navigations to be clicked--//
    navLinks.forEach(link => { 
        link.addEventListener("click", e => { 
            e.preventDefault();
//--reads which movement nav is beign clicked--//
    const selectedMovement = link.dataset.movements.toLowerCase();
//--shows and hides artworks depending on the movement nav--//       
    artworks.forEach(img => { 
        const movements = img.dataset.movement 
            .toLowerCase() 
            .split(" ");
            
        img.style.display = 
        movements.includes(selectedMovement) ? "block" : "none"; });
//-- shows and hides artists depending on the movement nav--//        
        artists.forEach(artist => { const movements = artist.dataset.movement .toLowerCase() .split(" ");
            if (movements.includes(selectedMovement)) { 
                artist.style.display = "block"; 
            } else { 
                artist.style.display = "none";
            } 
        });
//--reads which discipline nav is beign clicked--//
            const selectedDiscipline = link.dataset.disciplines.toLowerCase();
                
 //--shows and hides artworks depending on the discipline nav--//        
            artworks.forEach(img => { 
                const disciplines = img.dataset.discipline 
                .toLowerCase() 
                .split(" ");

            img.style.display = disciplines.includes(selectedDiscipline) 
                ? "block" : "none"; 
            });
 //-- shows and hides artists depending on the discipline nav--//        
           
            artists.forEach(artist => {        
                const movements = artist.dataset.movement 
                .toLowerCase() .split(" ");
                    
                if (movements.includes(selectedMovement)) { 
                    artist.style.display = "block"; 
                } else { 
                    artist.style.display = "none"; 
                } 
                });
//--closes items when new one is clicked--//
            allDetails.forEach(details => { 
                details.open = false; 
            }); 
        }); 
    });
//--only one artist biois open at a time--//
            allDetails.forEach(details => { 
                details.addEventListener("toggle", () => { 
                    if (details.open) { 
                        allDetails.forEach(other => { 
                    if (other !== details) { 
                        other.open = false; 
                    } 
                }); 
            } 
        }); 
    }); 
})); 
artworks.forEach(img => details.open = false);