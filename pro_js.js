document.getElementById('btn_home').addEventListener('click', function() {
    document.querySelector('.cube').style.transform = 'translateY(0)';

    document.getElementById('btn_me').classList.remove("active");
    document.getElementById('btn_lover').classList.remove("active");
    document.getElementById('btn_contact').classList.remove("active");

    document.getElementById('btn_home').classList.add("active");
});

document.getElementById('btn_me').addEventListener('click', function() {
    document.querySelector('.cube').style.transform = 'translateY(-100%)';

    document.getElementById('btn_home').classList.remove("active");
    document.getElementById('btn_lover').classList.remove("active");
    document.getElementById('btn_contact').classList.remove("active");

    document.getElementById('btn_me').classList.add("active");
});

document.getElementById('btn_lover').addEventListener('click', function() {
    document.querySelector('.cube').style.transform = 'translateY(-200%)';

    document.getElementById('btn_home').classList.remove("active");
    document.getElementById('btn_me').classList.remove("active");
    document.getElementById('btn_contact').classList.remove("active");

    document.getElementById('btn_lover').classList.add("active");
});

document.getElementById('btn_contact').addEventListener('click', function() {
    document.querySelector('.cube').style.transform = 'translateY(-300%)';

    document.getElementById('btn_home').classList.remove("active");
    document.getElementById('btn_lover').classList.remove("active");
    document.getElementById('btn_me').classList.remove("active");

    document.getElementById('btn_contact').classList.add("active");
});
