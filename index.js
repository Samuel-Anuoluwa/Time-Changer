let  count = 0;

document.getElementById("tn").addEventListener("click", function () {
   count = count + 1;

   document.getElementById("home").innerHTML = count;
});

document.getElementById("btn").addEventListener("click", function () {
    count = count - 1;

    document.getElementById("home").innerHTML = count;
});

