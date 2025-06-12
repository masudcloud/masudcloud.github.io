function showPopup() {
  document.getElementById('popup').classList.add('active');
}

function closePopup() {
  document.getElementById('popup').classList.remove('active');
}

function downloadPDF() {
  const link = document.createElement('a');
  link.href = '/cv.pdf'; 
  link.download = 'cv.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function printPDF() {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = '/cv.pdf'; 
  iframe.onload = function () {
    setTimeout(() => {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    }, 100);
  };
  document.body.appendChild(iframe);
}