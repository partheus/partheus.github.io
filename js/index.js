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




// <script>
//   let swatch_bg = window.getComputedStyle(document.documentElement).getPropertyValue('--irevamp-color-background');
// document.getElementById("swatch-bg").innerHTML = swatch_bg;
//   let swatch_primary = window.getComputedStyle(document.documentElement).getPropertyValue('--irevamp-color-primary');
// document.getElementById("swatch-primary").innerHTML = swatch_primary;
//   let swatch_secondary = window.getComputedStyle(document.documentElement).getPropertyValue('--irevamp-color-secondary');
// document.getElementById("swatch-secondary").innerHTML = swatch_secondary;
//   let swatch_secondary_light = window.getComputedStyle(document.documentElement).getPropertyValue('--irevamp-color-secondary-light');
// document.getElementById("swatch-secondary-light").innerHTML = swatch_secondary_light;
//   let swatch_tertiary = window.getComputedStyle(document.documentElement).getPropertyValue('--irevamp-color-tertiary');
// document.getElementById("swatch-tertiary").innerHTML = swatch_tertiary;
// </script>