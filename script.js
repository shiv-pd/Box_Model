document.addEventListener("DOMContentLoaded", function() {
    const contentData1 = document.querySelector('.content-data1');
    const contentData2 = document.querySelector('.content-data2');
    const contentData3 = document.querySelector('.content-data3');
    
    const box = document.querySelector('.box');
    const section = document.querySelector('.section');

    contentData1.addEventListener('mouseover', function() {
        contentData1.classList.add('hover-effect1');
        box.classList.add('hover-effect1');
    });

    contentData1.addEventListener('mouseout', function() {
        contentData1.classList.remove('hover-effect1');
        box.classList.remove('hover-effect1');
    });
    contentData2.addEventListener('mouseover', function() {
        // contentData2.classList.add('hover-effect2');
        box.classList.add('hover-effect2');
    });

    contentData2.addEventListener('mouseout', function() {
        // contentData2.classList.remove('hover-effect2');
        box.classList.remove('hover-effect2');
    });

    contentData3.addEventListener('mouseover', function() {
        contentData3.classList.add('hover-effect1');
        section.classList.add('hover-effect1');
    });

    contentData3.addEventListener('mouseout', function() {
        contentData3.classList.remove('hover-effect1');
        section.classList.remove('hover-effect1');
    });
});
