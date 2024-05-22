const $imgBox = document.querySelector('#imgBox');
const $qrImage = document.querySelector('#qrImage');
const $qrText = document.querySelector('#qrText');
const $btnGenerate = document.querySelector('#btnGenerate');

function generateQR() {
  const qrTextValue = $qrText.value;
  if (qrTextValue.trim().length > 0) {
    $qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTextValue}`;
    $imgBox.classList.add('show-img');
  } else {
    $qrText.classList.add('error');
    setTimeout(() => {
      $qrText.classList.remove('error');
    }, 1000);
  }
}

$btnGenerate.addEventListener('click', generateQR);
