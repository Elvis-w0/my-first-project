
        var themeLight = document.getElementById("light");
        var themeDark = document.getElementById("dark");

        // th body theme of all pages variable declatation and assignsion
        var navbarClass = document.getElementById("navbar");

        themeLight.addEventListener("click", themeLightFunction);
        themeDark.addEventListener("click", themeDarkFunction);

        function themeLightFunction() {
            document.getElementById("theme").style.background = "white";
            document.getElementById("theme").style.black = "white";
            document.getElementById("light").style.display = "none";
            document.getElementById("dark").style.display = "";

            // working on background

            navbarClass.classList.remove("bg-secondary");
            navbarClass.classList.add("bg-primary");

            document.getElementsByClassName("nav-link").style.color = "black";
            document.getElementsByClassName("txt-color").style.color = "";

        }
        function themeDarkFunction() {
            document.getElementById("theme").style.background = "black";    //backgroundImage = "linear-gradient(-75deg, rgba(55, 55, 55, 5), rgba(0, 0, 0, 0.45), rgba(55, 55, 55, 5))";
            document.getElementById("theme").style.color = "white";    //backgroundImage = "linear-gradient(-75deg, rgba(55, 55, 55, 5), rgba(0, 0, 0, 0.45), rgba(55, 55, 55, 5))";
            document.getElementById("dark").style.display = "none";
            document.getElementById("light").style.display = "";

            // working on background
            navbarClass.classList.remove("bg-primary");
            navbarClass.classList.add("bg-secondary");

            document.getElementsByClassName("nav-link").style.color = "white";
            document.getElementsByClassName("txt-color").style.color = "white";

        }
    