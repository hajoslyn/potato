var myBody = document.querySelector('body');
var scrollPosition = myBody.scrollTop

var aboutLink = document.querySelector("a[href='#about']");
var target = document.getElementByd('about');

aboutLink.addEventListener("click", function (event) {
    if (window.scrollTo) {
      event.preventDefault();
      window.scollto("behavior": "smooth", "top": target.offsetTop});
    }
})
