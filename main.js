
/*ประกาศตัวแปรเพื่อใช้งาน*/
const bodyElement = document.querySelector('body');
const menuToggle = document.querySelector('.hamburger-menu');
const hiroToggle = document.querySelector('.hiro');
const navlist = document.querySelector('.nav-list');

function sendEmail(params) {
    let tempParams ={
        from_name:document.getElementById("fromName").Value,
        to_name:document.getElementById("name").Value,
        message:document.getElementById("message").Value,
    };

    emailjs.send('gmail','template_rzz6m3f',tempParams)
    .then(function(res){
        console.log("ส่งข้อความไปที่เมลล์แล้ว", res.status);
    })
}


/*เวลากดที่เมนูย่อแล้วจะเลื่อนหน้าเมนูออกมาให้ใช้งาน*/
menuToggle.addEventListener('click', function(){
    bodyElement.classList.toggle('is-open');
    hiroElement.classList.add('is-open');
});

/*เวลากด Click เลือกเมนูแล้ว เมนูจะหายไป*/
navlist.addEventListener('click', function(e){
    let clickedElement = e.target;

    if(clickedElement.classList[0] === "nav-link"){
        bodyElement.classList.remove('is-open');
    }
});

/*เวลากด Click ที่เครื่องหมาย X แล้วเมนูบาร์จะสไลด์ออกไป*/
window.addEventListener('click', function(e){
    let clickedElement = e.target;

    if(clickedElement.matches('is-open')){
        bodyElement.classList.remove('is-open');
        hiroElement.classList.remove('is-open');
    }
});