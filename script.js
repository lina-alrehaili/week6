const btn = document.getElementById('normal');

btn.addEventListener('click', function onClick(event) {
    const boxes = document.querySelectorAll('#box');
    boxes.forEach(box => {
      box.style.fontSize = '32px';
    });
});

const btn2 = document.getElementById('large');

btn2.addEventListener('click', function onClick(event) {
  const boxes = document.querySelectorAll('#box');
  boxes.forEach(box => {
    box.style.fontSize = '40px';
  });
});