
const birthdaySelector = document.getElementById("birthday-decorations")
const anniversarySelector = document.getElementById("anniversary-decorations")
const babyShowerSelector = document.getElementById("baby-shower-welcome")
const haldiMehndiSelector = document.getElementById("haldi-mehndi")
const firstNightSelector = document.getElementById("first-night")
const gallerySelector = document.getElementById("gallery")

const birthdayHomeSelector = document.getElementById("birthday-decorations-home")
const anniversaryHomeSelector = document.getElementById("anniversary-decorations-home")
const babyShowerHomeSelector = document.getElementById("baby-shower-welcome-home")
const banquetHallHomeSelector = document.getElementById("banquet-hall-home")
const haldiMehndiHomeSelector = document.getElementById("haldi-mehndi-home")
const firstNightHomeSelector = document.getElementById("first-night-home")


const formatAmount = (amount) => {
    if (amount) {
        return new Intl.NumberFormat("en-In", {
            style: "currency",
            currency: "INR"
        }).format(Number(amount))
    } else {
        return ""
    }
}


const share = (imageURL) => {
    window.location = 'whatsapp://send?text=' + encodeURIComponent(imageURL);
}



function getBirthdayDecorations() {
    birthdaySelector.innerHTML = "";
    birthdayDecorations.map((item, index) => {
        birthdaySelector.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="item rounded-30 overflow-hidden">
              <img src="${item.image}" alt="Course One" style="height:250px; object-fit: cover;">
              <div class="down-content">
                <h4 class="p-2 pb-0 border-0">${item.title}</h4>
                <div class="info p-2">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-center">

                       <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
                  <div ><p>Book Now</p></div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
                `
    })
}

// <small>Price: ${formatAmount(item.price)}</small>

function getAnniversaryDecorations() {
    anniversarySelector.innerHTML = "";
    anniversaryDecorations.map((item, index) => {
        anniversarySelector.innerHTML += `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="item rounded-30 overflow-hidden">
              <img src="${item.image}" alt="Course One" style="height:250px; object-fit: cover;">
              <div class="down-content">
                <h4 class="p-2 pb-0 border-0">${item.title}</h4>
                <div class="info p-2">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-center">

                       <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
                  <div ><p>Book Now</p></div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        `
    })
}

function getBabyShowerDecorations() {
    babyShowerSelector.innerHTML = "";
    babyDecorations.map((item, index) => {
        babyShowerSelector.innerHTML += `
       <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="item rounded-30 overflow-hidden">
              <img src="${item.image}" alt="Course One" style="height:250px; object-fit: cover;">
              <div class="down-content">
                <h4 class="p-2 pb-0 border-0">${item.title}</h4>
                <div class="info p-2">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-center">

                       <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
                  <div ><p>Book Now</p></div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        `
    })
}


// function getHaldiMehndi() {
//     haldiMehndiSelector.innerHTML = "";
//     haldiMehndiDecoration.map((item, index) => {
//         haldiMehndiSelector.innerHTML += `
//         <div class="col-lg-4 col-xl-3 col-md-6 col-6 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="team-item">
//             <div class="position-relative overflow-hidden">
//                 <img class="img-fluid product-image"  src="${item.image}" alt="">
//                 <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
//                     <a class="btn mx-1" onclick="handleBookNowButtonClick('${item.image}')">Book Now</a>
                    
//                 </div>
//             </div>
//             <div class="bg-light text-center p-4 product-details">
//                 <h5 class="fw-bold mb-0 product-title">${item.title}</h5>
                
//                 <button class="btn btn-primary mx-1 mt-3 product-btn" onclick="handleBookNowButtonClick('${item.image}')" >Book Now</button>
//                 </div>
//                 </div>
//                 </div>
//         `
//     })
// }

// function getFirstNight() {
//     firstNightSelector.innerHTML = "";
//     firstNightDecoration.map((item, index) => {
//         firstNightSelector.innerHTML += `
//         <div class="col-lg-4 col-xl-3 col-md-6 col-6 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="team-item">
//             <div class="position-relative overflow-hidden">
//                 <img class="img-fluid product-image"  src="${item.image}" alt="">
//                 <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
//                     <a class="btn mx-1" onclick="handleBookNowButtonClick('${item.image}')">Book Now</a>
                    
//                 </div>
//             </div>
//             <div class="bg-light text-center p-4 product-details">
//                 <h5 class="fw-bold mb-0 product-title">${item.title}</h5>
                
//                 <button class="btn btn-primary mx-1 mt-3 product-btn" onclick="handleBookNowButtonClick('${item.image}')" >Book Now</button>
//                 </div>
//                 </div>
//                 </div>
//         `
//     })
// }


function getGallery() {
    gallerySelector.innerHTML = "";
    [...birthdayDecorations, ...anniversaryDecorations, ...babyDecorations, ...haldiMehndiDecoration, ...firstNightDecoration].map((item, index) => {
        gallerySelector.innerHTML += `
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div class="item rounded-30 overflow-hidden">
              <img src="${item.image}" alt="Course One" style="height:250px; object-fit: cover;">
            </div>
            </div>
        `
    })
}


function getBirthdayDecorationsHome() {
    birthdayHomeSelector.innerHTML = "";
    birthdayDecorations.slice(0, 4).map((item, index) => {
        birthdayHomeSelector.innerHTML += `
        <div class="item rounded-30 overflow-hidden">
        <img src="${item.image}" alt="Course One">
        <div class="down-content">
          <h4 class="p-2 pb-0 border-0">${item.title}</h4>
          <div class="info p-2">
            <div class="row">
              <div class="col-12 d-flex justify-content-center align-items-center">

                 <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
            <div ><p>Book Now</p></div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                `
    })
}

// <small>Price: ${formatAmount(item.price)}</small>

function getAnniversaryDecorationsHome() {
    anniversaryHomeSelector.innerHTML = "";
    anniversaryDecorations.slice(0, 4).map((item, index) => {
        anniversaryHomeSelector.innerHTML += `
        <div class="item rounded-30 overflow-hidden">
              <img src="${item.image}" alt="Course One">
              <div class="down-content">
                <h4 class="p-2 pb-0 border-0">${item.title}</h4>
                <div class="info p-2">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-center align-items-center">

                       <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
                  <div ><p>Book Now</p></div>
              </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `
    })
}

function getBabyShowerDecorationsHome() {
    babyShowerHomeSelector.innerHTML = "";
    babyDecorations.slice(0, 4).map((item, index) => {
        babyShowerHomeSelector.innerHTML += `
        <div class="item rounded-30 overflow-hidden">
        <img src="${item.image}" alt="Course One">
        <div class="down-content">
          <h4 class="p-2 pb-0 border-0">${item.title}</h4>
          <div class="info p-2">
            <div class="row">
              <div class="col-12 d-flex justify-content-center align-items-center">

                 <div class="main-button-red" onclick="handleBookNowButtonClick('${item.image}')">
            <div ><p>Book Now</p></div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    })
}


// function getHaldiMehndiHome() {
//     haldiMehndiHomeSelector.innerHTML = "";
//     haldiMehndiDecoration.slice(0, 4).map((item, index) => {
//         haldiMehndiHomeSelector.innerHTML += `
//          <div class="col-lg-4 col-xl-3 col-md-6 col-6 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="team-item">
//             <div class="position-relative overflow-hidden">
//                 <img class="img-fluid product-image"  src="${item.image}" alt="">
//                 <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
//                     <a class="btn mx-1" onclick="handleBookNowButtonClick('${item.image}')">Book Now</a>
                    
//                 </div>
//             </div>
//             <div class="bg-light text-center p-4 product-details">
//                 <h5 class="fw-bold mb-0 product-title">${item.title}</h5>
                
//                 <button class="btn btn-primary mx-1 mt-3 product-btn" onclick="handleBookNowButtonClick('${item.image}')" >Book Now</button>
//                 </div>
//                 </div>
//                 </div>
//         `
//     })
// }

// function getFirstNightHome() {
//     firstNightHomeSelector.innerHTML = "";
//     firstNightDecoration.slice(0, 4).map((item, index) => {
//         firstNightHomeSelector.innerHTML += `
//          <div class="col-lg-4 col-xl-3 col-md-6 col-6 wow fadeInUp" data-wow-delay="0.1s">
//         <div class="team-item">
//             <div class="position-relative overflow-hidden">
//                 <img class="img-fluid product-image"  src="${item.image}" alt="">
//                 <div class="team-overlay position-absolute start-0 top-0 w-100 h-100" style="width:278px; height: 278px;">
//                     <a class="btn mx-1" onclick="handleBookNowButtonClick('${item.image}')">Book Now</a>
                    
//                 </div>
//             </div>
//             <div class="bg-light text-center p-4 product-details">
//                 <h5 class="fw-bold mb-0 product-title">${item.title}</h5>
                
//                 <button class="btn btn-primary mx-1 mt-3 product-btn" onclick="handleBookNowButtonClick('${item.image}')" >Book Now</button>
//                 </div>
//                 </div>
//                 </div>
//         `
//     })
// }

if (birthdaySelector) {
    getBirthdayDecorations();
}

if (anniversarySelector) {
    getAnniversaryDecorations();
}

if (babyShowerSelector) {
    getBabyShowerDecorations();
}

if (haldiMehndiSelector) {
    getHaldiMehndi();
}

if (firstNightSelector) {
    getFirstNight();
}


if (birthdayHomeSelector) {
    getBirthdayDecorationsHome();
}

if (anniversaryHomeSelector) {
    getAnniversaryDecorationsHome();
}

if (babyShowerHomeSelector) {
    getBabyShowerDecorationsHome();
}

if (haldiMehndiHomeSelector) {
    getHaldiMehndiHome();
}

if (firstNightHomeSelector) {
    getFirstNightHome();
}

if (gallerySelector) {
    getGallery();
}


function convertImageToBase64(imageUrl, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            var base64 = reader.result.split(',')[1];
            callback(base64);
        };
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', imageUrl);
    xhr.responseType = 'blob';
    xhr.send();
}

function sendWhatsAppMessage(phoneNumber, message, imageBase64) {
    var sanitizedPhoneNumber = phoneNumber.replace(/\D/g, '');
    var encodedMessage = `${message}\n\nProduct Image: \n${imageBase64}`;
    console.log(sanitizedPhoneNumber, encodedMessage, message, imageBase64)
    var deepLinkUrl = `https://wa.me/${sanitizedPhoneNumber}/?text=${encodedMessage}`;
    window.open(deepLinkUrl);
}

function handleBookNowButtonClick(productImage) {
    var phoneNumber = '919079627186';
    var message = 'Hello, I want to book this decoration.';
    var imageUrl = productImage;

    sendWhatsAppMessage(phoneNumber, message, `https://sumoevent.com${imageUrl}`);
    // convertImageToBase64(imageUrl, function(imageBase64) {
    // });
}
