<script>
    let i = 0;
    let text = "Into the Unknown...";
    let speed = 100;

    let typeWriting = () => {
        if (i < text.length) {
            document.getElementById("header").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriting, speed);
        }
    }

    window.addEventListener("load", typeWriting);
</script>

<header class="header">
    <div class="header-background">
        <i class="fa-solid fa-mug-saucer"></i>
    </div>

    <div class="header-content">
        <h5>Ready yourselves to venture</h5>
        <h1 id="header">&nbsp;</h1>
        <h4>Are you... <span class="header-prepared">prepared?</span></h4>
    </div>
</header>