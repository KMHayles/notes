(() => {
    // let btn = document.querySelector('#btn1');
    // let btn2 = document.querySelector('#btn2');
    // //add event listener to btn1
    //
    // btn.addEventListener('click', () => {
    //    alert('Great job!');
    // });
    //
    // //add event listener to btn2
    // btn2.addEventListener('click', () => {
    //     //remove all buttons on the page.
    //     btn.remove();
    //     btn2.remove();
    //     let video = document.createElement("video");
    //     video.src = "images/bomb.mp4";
    //     video.autoplay = true;
    //     document.querySelector('.page-wrapper').appendChild(video);
    // });
    //

    let header = document.querySelector('#header');
    window.addEventListener('scroll', () => {
       if(window.pageYOffset > 0){
           header.classList.add('sticky');
       } else {
           header.className.remo
       }

    });
    header.remove();


})();