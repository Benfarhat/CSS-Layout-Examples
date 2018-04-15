/* Collapsible élement 
Just add class="closuere" and a data-target that point to the element(s) you want to hide/show
*/
var closures = document.querySelectorAll('.closure')
for(let i = 0; i < closures.length; i++){
   closures[i].addEventListener('click', function(event) {
        let target = this.getAttribute("data-target")
        let expand = this.getAttribute("data-expand")
        let className = this.getAttribute("data-expand-class")

        if (document.querySelector(target).style.display == "none"){
            document.querySelector(target).style.display = "block";
            document.querySelector(expand).classList.remove(className);
        } else {
            document.querySelector(target).style.display = "none";
            document.querySelector(expand).classList.add(className);
        }

        event.defaultPrevented;
    }); 
}
