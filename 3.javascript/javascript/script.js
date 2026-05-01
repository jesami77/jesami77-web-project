document.addEventListener('DOMContentLoaded', () => {
    
    
    const userForm = document.getElementById('userForm');
    const greeting = document.getElementById('greeting');

   
    userForm.addEventListener('submit', function(event) {
        
      
        event.preventDefault();

       
        const name = document.getElementById('userName').value;

      
        if (name.trim() !== "") {
            greeting.textContent = `Hello, ${name}! Thanks for checking out my travel photos.`;
            
         
            greeting.style.color = "white"; 
            greeting.style.fontWeight = "bold";
            greeting.style.marginTop = "15px";
        }
    });
});