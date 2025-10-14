//Nav Bar
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#Nav a");

  links.forEach(link => {
    let timer;

    link.addEventListener("mouseenter", (event) => {
      // Prevent instant jump to anchor
      event.preventDefault();

      timer = setTimeout(() => {
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }, 400); // wait 400ms before scrolling
    });

    link.addEventListener("mouseleave", () => {
      clearTimeout(timer); // cancel if mouse leaves too quickly
    });
  });
});


window.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
        });
     

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("slideshowModal");
    const closeBtn = document.getElementById("closeSlideshow");

    modal.style.display = "flex";

    closeBtn.addEventListener("click", () => modal.style.display = "none");
    modal.addEventListener("click", (e) => { if(e.target === modal) modal.style.display = "none"; });

    const videos = document.querySelectorAll("#slideshow video");
    let current = 0;

    if (videos.length > 0) {
        videos[current].classList.add("active");
        setInterval(() => {
            const prev = current;
            current = (current + 1) % videos.length;
            videos[current].classList.add("active");
            setTimeout(() => {
                videos[prev].classList.remove("active");
            }, 5000); 
        }, 10000);
    }
});



function getReceipt() {
    //This initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>Order placed:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "") {
      alert("Please select a pizza size before ordering!");
      return;
    }

if (selectedSize === "Personal Pizza") {
    sizeTotal = 6;
} else if (selectedSize === "Small Pizza") {
    sizeTotal = 8;
} else if (selectedSize === "Medium Pizza") {
    sizeTotal = 10;
} else if (selectedSize === "Large Pizza") {
    sizeTotal = 14;
} else if (selectedSize === "Extra Large Pizza") {
    sizeTotal = 16;
}
runningTotal = sizeTotal;
console.log(selectedSize + " = $" + sizeTotal + " .00");
console.log("size text1: " + text1);
console.log("subtotal: $" + runningTotal + ".00");
getTopping(runningTotal, text1);//These variables will be passed on to each function
};

function getTopping(runningTotal, text1) {
  var toppingTotal = 0;
  var selectedTopping = [];
  var toppingArray = document.getElementsByClassName("toppings");

  for (var j = 0; j < toppingArray.length; j++) {
    if (toppingArray[j].checked) {
      selectedTopping.push(toppingArray[j].value);
      text1 += toppingArray[j].value + "<br>";
    }
  }

  var toppingCount = selectedTopping.length;
  toppingTotal = toppingCount > 1 ? toppingCount - 1 : 0;
  runningTotal += toppingTotal;

  // Display order summary
  document.getElementById("showText").innerHTML = text1;
  document.getElementById("totalPrice").innerHTML =
    "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";

  // ✅ Show the modal
  var modal = document.getElementById("popupForm");
  var modalContent = document.querySelector(".modal-content h2");

    var oldSummary = modalContent.querySelector(".order-summary");
    if (oldSummary) oldSummary.remove();

    modalContent.insertAdjacentHTML(
      "afterbegin",
      `<div class="order-summary">
      <p><strong>Your Order:</strong><br>${text1}<br>
      <strong>Total: $${runningTotal}.00</strong></p>
      </div>`
    );
    
  modal.style.display = "block";

  // Close modal when clicking the "X"
  var closeBtn = document.querySelector(".close");
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // ✅ Corrected window click handler
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}