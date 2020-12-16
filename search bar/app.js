function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



// var count = document.getElementById('count');
// var input = document.getElementById('input');

// // input.addEventListener('keyup', function(e) {
// //     wordCounter(e.target.value);
// // });

function countWords(self) {
    var spaces = self.value.match(/\S+/g);
    var words = spaces ? spaces.length : 0;

    document.getElementById("input").innerHTML = words + "words";
}

// const toggle = document.getElementById('toggle');

// toggle.addEventListener("change", (e) => {
//     document.body.classList.toggle("dark", e.target.checked);
// });