{/* <script> */}
  const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
    }

    else {
      document.documentElement.setAttribute('data-theme', 'noir');
    }

  function switchTheme(e) {
    var selectTheme = document.getElementById("theme-switcher").value;

    switch(selectTheme ) {

    case "gemstone":
      document.documentElement.setAttribute('data-theme', 'gemstone');
      localStorage.setItem('theme', 'gemstone');    
      break;
    
    case "maroon":
      document.documentElement.setAttribute('data-theme', 'maroon');
      localStorage.setItem('theme', 'maroon');    
      break;
  
    case "jackdaw":
      document.documentElement.setAttribute('data-theme', 'jackdaw');
      localStorage.setItem('theme', 'jackdaw');    
      break;
    
    default:
      document.documentElement.setAttribute('data-theme', 'noir');
      localStorage.setItem('theme', 'noir');        
      break;              
    }
  }
{/* </script> */}