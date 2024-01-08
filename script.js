function showMenu(category) {
    var categories = document.getElementsByClassName("menuCategory");
    for (var i = 0; i < categories.length; i++) {
      categories[i].style.display = "none";
    }
    document.getElementById(category).style.display = "block";
  }
  // JavaScript for smooth scrolling effect
function smoothScroll(target, duration) {
    var targetElement = document.querySelector(target);
    var targetPosition = targetElement.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      var targetId = link.getAttribute('href');
      smoothScroll(targetId, 1000); // You can adjust the duration (in milliseconds) as needed
    });
  });
  