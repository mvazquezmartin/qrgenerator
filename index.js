const $imgBox = document.querySelector('#imgBox');
const $qrImage = document.querySelector('#qrImage');
const $qrText = document.querySelector('#qrText');
const $btnGenerate = document.querySelector('#btnGenerate');
const $btnDownload = document.querySelector('#btnDownload');

const defaultQR =
  'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://github.com/mvazquezmartin';

function generateQR() {
  const qrTextValue = $qrText.value;
  if (qrTextValue.trim().length !== 0) {
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${qrTextValue}`;
    $qrImage.src = qrURL;
    $btnDownload.dataset.url = qrURL;
  } else {
    $qrText.classList.add('error');
    setTimeout(() => {
      $qrText.classList.remove('error');
    }, 700);
  }
}

function downloadQR() {
  let qrUrl = $btnDownload.dataset.url;
  if (!qrUrl) {
    qrUrl = defaultQR;
  }
  fetch(qrUrl)
    .then((response) => response.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    })
    .catch((error) => console.error('Error downloading QR code:', error));
}

$btnGenerate.addEventListener('click', generateQR);
$btnDownload.addEventListener('click', downloadQR);
