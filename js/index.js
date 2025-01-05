const NewLaunch = [
  {
    image: "images/adani-samsara-ivana-1.jpg",
    href: "#",
    title: "Adani Samsara Ivana",
    location: "Sector 63 Gurugram",
  },
  {
    image: "images/navraj-the-antalyas-1.jpg",
    href: "navraj-the-antalyas",
    title: "Navraj The Antalyas",
    location: "Sector 37D Gurugram",
  },
  {
    image: "images/-1.jpg",
    href: "godrej-miraya",
    title: "Godrej Miraya",
    location: "Sector 43 Gurugram",
  },
  {
    image: "images/dlf-the-dahlias-1.jpg",
    href: "dlf-the-dahlias",
    title: "DLF The Dahlias",
    location: "Sector 54, Gurugram",
  },
  {
    image: "images/m3m-soulitude-1.jpg",
    href: "m3m-soulitude",
    title: "M3M Soulitude",
    location: "Sector 89 Gurugram",
  },
  {
    image: "images/m3m-opus-at-m3m-merlin-1.jpg",
    href: "m3m-opus-at-m3m-merlin",
    title: "M3M Opus at M3M Merlin",
    location: "Sector 67 Gurugram",
  },
  {
    image: "images/eldeco-fairway-1.jpg",
    href: "eldeco-fairway-reserve",
    title: "Eldeco Fairway Reserve",
    location: "Sector 80, Gurugram",
  },
  {
    image: "images/4s-the-aurrum-1.jpg",
    href: "4s-the-aurrum",
    title: "4S The Aurrum",
    location: "Sector 59 Gurugram",
  },
];

// Function to render properties in the swiper-wrapper
function renderProperties(res) {
  const swiperWrapper = document.querySelector(".swiper-wrapper"); // Select the swiper-wrapper element
  res.forEach((property) => {
    const propertyCol = document.createElement("div"); // Create a new div for each property
    propertyCol.className = "property-col item-md swiper-slide"; // Set class names
  
    propertyCol.innerHTML = `
    <a href="#" class="figure">
      <img
        src="${property.image}"
        alt="${property.title}"
      />
    </a>
    <figcaption>
      <div class="fig-top">
        <h6>${property.title}</h6>
        <p class="lctn">${property.location}</p>
      </div>
      <div style="display: flex; align-items: center;" class="fig-bottom">
        <button
          type="button"
          class="btn white medium bitu"
          data-model=".ModelEnquiry-callback"
        >
          Enquire Now
        </button> 
        <a
          href="https://api.whatsapp.com/send?phone=9717552910&text=Hello,%20I%20am%20interested%20in%20${property.title}%20!%20Please%20get%20in%20touch…"
          class="wtsp-btn btn white box"
          ><svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.005 0.3136C5.6452 0.3136 0.461837 5.49696 0.461837 11.8568C0.461837 13.8952 0.997645 15.8753 1.99937 17.6225L0.368652 23.6096L6.48386 22.0022C8.17282 22.9224 10.0714 23.4116 12.005 23.4116C18.3648 23.4116 23.5482 18.2282 23.5482 11.8684C23.5482 8.7817 22.3484 5.88135 20.1703 3.70317C19.1022 2.62469 17.8302 1.76956 16.4284 1.18762C15.0265 0.605684 13.5228 0.308572 12.005 0.3136ZM12.0167 2.25882C14.5792 2.25882 16.9787 3.26055 18.7958 5.07764C19.6873 5.96931 20.3942 7.02811 20.8759 8.19338C21.3576 9.35866 21.6047 10.6075 21.603 11.8684C21.603 17.1566 17.2932 21.4547 12.005 21.4547C10.2811 21.4547 8.59215 21.0005 7.1245 20.1152L6.77506 19.9172L3.14088 20.8723L4.10766 17.3313L3.8747 16.9586C2.91321 15.4309 2.40434 13.6619 2.40705 11.8568C2.4187 6.56858 6.71682 2.25882 12.0167 2.25882ZM7.91656 6.52199C7.73019 6.52199 7.4157 6.59188 7.14779 6.88308C6.89154 7.17428 6.13442 7.88481 6.13442 9.29422C6.13442 10.7153 7.17109 12.0781 7.29922 12.2761C7.46229 12.4741 9.34927 15.3861 12.2496 16.6208C12.9369 16.9353 13.4727 17.11 13.892 17.2382C14.5792 17.4595 15.2082 17.4245 15.7091 17.3546C16.2682 17.2731 17.4097 16.6558 17.6543 15.9802C17.8989 15.3046 17.8989 14.7338 17.829 14.6057C17.7475 14.4892 17.5611 14.4193 17.2699 14.2912C16.9787 14.1281 15.5577 13.4293 15.3014 13.3361C15.0335 13.2429 14.8704 13.1963 14.6491 13.4759C14.4627 13.7671 13.9036 14.4193 13.7406 14.6057C13.5658 14.8037 13.4028 14.827 13.1232 14.6872C12.8204 14.5358 11.8885 14.233 10.7936 13.2545C9.93167 12.4858 9.36092 11.5423 9.1862 11.2511C9.04642 10.9715 9.17455 10.7968 9.31432 10.6687C9.44245 10.5406 9.62882 10.3309 9.7453 10.1562C9.89672 9.9931 9.94332 9.86497 10.0365 9.6786C10.1297 9.48059 10.0831 9.31751 10.0132 9.17774C9.94332 9.04961 9.36092 7.60525 9.11631 7.0345C8.88335 6.4754 8.65039 6.54529 8.46402 6.53364C8.30095 6.53364 8.11458 6.52199 7.91656 6.52199Z"
              fill="black"
            ></path></svg
        ></a>
      </div>
    </figcaption>
        `;

    swiperWrapper.appendChild(propertyCol); // Append the new property to the swiper-wrapper

  });
}

// Function to render properties in the swiper-wrapper
function renderCommercialProperties(res) {
    const swiperWrapper = document.querySelector("#CommercialPropertiesCame"); // Select the swiper-wrapper element
    res.forEach((property) => {
      const propertyCol = document.createElement("div"); // Create a new div for each property
      propertyCol.className = "property-col item-md swiper-slide"; // Set class names
    
      propertyCol.innerHTML = `
      <a href="#" class="figure">
        <img
          src="${property.image}"
          alt="${property.title}"
        />
      </a>
      <figcaption>
        <div class="fig-top">
          <h6>${property.title}</h6>
          <p class="lctn">${property.location}</p>
        </div>
        <div style="display: flex; align-items: center;" class="fig-bottom">
          <button
            type="button"
            class="btn white medium bitu"
            data-model=".ModelEnquiry-callback"
          >
            Enquire Now
          </button> 
          <a
            href="https://api.whatsapp.com/send?phone=9717552910&text=Hello,%20I%20am%20interested%20in%20${property.title}%20!%20Please%20get%20in%20touch…"
            class="wtsp-btn btn white box"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.005 0.3136C5.6452 0.3136 0.461837 5.49696 0.461837 11.8568C0.461837 13.8952 0.997645 15.8753 1.99937 17.6225L0.368652 23.6096L6.48386 22.0022C8.17282 22.9224 10.0714 23.4116 12.005 23.4116C18.3648 23.4116 23.5482 18.2282 23.5482 11.8684C23.5482 8.7817 22.3484 5.88135 20.1703 3.70317C19.1022 2.62469 17.8302 1.76956 16.4284 1.18762C15.0265 0.605684 13.5228 0.308572 12.005 0.3136ZM12.0167 2.25882C14.5792 2.25882 16.9787 3.26055 18.7958 5.07764C19.6873 5.96931 20.3942 7.02811 20.8759 8.19338C21.3576 9.35866 21.6047 10.6075 21.603 11.8684C21.603 17.1566 17.2932 21.4547 12.005 21.4547C10.2811 21.4547 8.59215 21.0005 7.1245 20.1152L6.77506 19.9172L3.14088 20.8723L4.10766 17.3313L3.8747 16.9586C2.91321 15.4309 2.40434 13.6619 2.40705 11.8568C2.4187 6.56858 6.71682 2.25882 12.0167 2.25882ZM7.91656 6.52199C7.73019 6.52199 7.4157 6.59188 7.14779 6.88308C6.89154 7.17428 6.13442 7.88481 6.13442 9.29422C6.13442 10.7153 7.17109 12.0781 7.29922 12.2761C7.46229 12.4741 9.34927 15.3861 12.2496 16.6208C12.9369 16.9353 13.4727 17.11 13.892 17.2382C14.5792 17.4595 15.2082 17.4245 15.7091 17.3546C16.2682 17.2731 17.4097 16.6558 17.6543 15.9802C17.8989 15.3046 17.8989 14.7338 17.829 14.6057C17.7475 14.4892 17.5611 14.4193 17.2699 14.2912C16.9787 14.1281 15.5577 13.4293 15.3014 13.3361C15.0335 13.2429 14.8704 13.1963 14.6491 13.4759C14.4627 13.7671 13.9036 14.4193 13.7406 14.6057C13.5658 14.8037 13.4028 14.827 13.1232 14.6872C12.8204 14.5358 11.8885 14.233 10.7936 13.2545C9.93167 12.4858 9.36092 11.5423 9.1862 11.2511C9.04642 10.9715 9.17455 10.7968 9.31432 10.6687C9.44245 10.5406 9.62882 10.3309 9.7453 10.1562C9.89672 9.9931 9.94332 9.86497 10.0365 9.6786C10.1297 9.48059 10.0831 9.31751 10.0132 9.17774C9.94332 9.04961 9.36092 7.60525 9.11631 7.0345C8.88335 6.4754 8.65039 6.54529 8.46402 6.53364C8.30095 6.53364 8.11458 6.52199 7.91656 6.52199Z"
                fill="black"
              ></path></svg
          ></a>
        </div>
      </figcaption>
          `;
  
      swiperWrapper.appendChild(propertyCol); // Append the new property to the swiper-wrapper
  
    });
  }

  // Function to render properties in the swiper-wrapper
function renderResidentialProperties(res) {
    const swiperWrapper = document.querySelector("#ResidetialPropertiesCame"); // Select the swiper-wrapper element
    res.forEach((property) => {
      const propertyCol = document.createElement("div"); // Create a new div for each property
      propertyCol.className = "property-col item-md swiper-slide"; // Set class names
    
      propertyCol.innerHTML = `
      <a href="#" class="figure">
        <img
          src="${property.image}"
          alt="${property.title}"
        />
      </a>
      <figcaption>
        <div class="fig-top">
          <h6>${property.title}</h6>
          <p class="lctn">${property.location}</p>
        </div>
        <div style="display: flex; align-items: center;" class="fig-bottom">
          <button
            type="button"
            class="btn white medium bitu"
            data-model=".ModelEnquiry-callback"
          >
            Enquire Now
          </button> 
          <a
            href="https://api.whatsapp.com/send?phone=9717552910&text=Hello,%20I%20am%20interested%20in%20${property.title}%20!%20Please%20get%20in%20touch…"
            class="wtsp-btn btn white box"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.005 0.3136C5.6452 0.3136 0.461837 5.49696 0.461837 11.8568C0.461837 13.8952 0.997645 15.8753 1.99937 17.6225L0.368652 23.6096L6.48386 22.0022C8.17282 22.9224 10.0714 23.4116 12.005 23.4116C18.3648 23.4116 23.5482 18.2282 23.5482 11.8684C23.5482 8.7817 22.3484 5.88135 20.1703 3.70317C19.1022 2.62469 17.8302 1.76956 16.4284 1.18762C15.0265 0.605684 13.5228 0.308572 12.005 0.3136ZM12.0167 2.25882C14.5792 2.25882 16.9787 3.26055 18.7958 5.07764C19.6873 5.96931 20.3942 7.02811 20.8759 8.19338C21.3576 9.35866 21.6047 10.6075 21.603 11.8684C21.603 17.1566 17.2932 21.4547 12.005 21.4547C10.2811 21.4547 8.59215 21.0005 7.1245 20.1152L6.77506 19.9172L3.14088 20.8723L4.10766 17.3313L3.8747 16.9586C2.91321 15.4309 2.40434 13.6619 2.40705 11.8568C2.4187 6.56858 6.71682 2.25882 12.0167 2.25882ZM7.91656 6.52199C7.73019 6.52199 7.4157 6.59188 7.14779 6.88308C6.89154 7.17428 6.13442 7.88481 6.13442 9.29422C6.13442 10.7153 7.17109 12.0781 7.29922 12.2761C7.46229 12.4741 9.34927 15.3861 12.2496 16.6208C12.9369 16.9353 13.4727 17.11 13.892 17.2382C14.5792 17.4595 15.2082 17.4245 15.7091 17.3546C16.2682 17.2731 17.4097 16.6558 17.6543 15.9802C17.8989 15.3046 17.8989 14.7338 17.829 14.6057C17.7475 14.4892 17.5611 14.4193 17.2699 14.2912C16.9787 14.1281 15.5577 13.4293 15.3014 13.3361C15.0335 13.2429 14.8704 13.1963 14.6491 13.4759C14.4627 13.7671 13.9036 14.4193 13.7406 14.6057C13.5658 14.8037 13.4028 14.827 13.1232 14.6872C12.8204 14.5358 11.8885 14.233 10.7936 13.2545C9.93167 12.4858 9.36092 11.5423 9.1862 11.2511C9.04642 10.9715 9.17455 10.7968 9.31432 10.6687C9.44245 10.5406 9.62882 10.3309 9.7453 10.1562C9.89672 9.9931 9.94332 9.86497 10.0365 9.6786C10.1297 9.48059 10.0831 9.31751 10.0132 9.17774C9.94332 9.04961 9.36092 7.60525 9.11631 7.0345C8.88335 6.4754 8.65039 6.54529 8.46402 6.53364C8.30095 6.53364 8.11458 6.52199 7.91656 6.52199Z"
                fill="black"
              ></path></svg
          ></a>
        </div>
      </figcaption>
          `;
  
      swiperWrapper.appendChild(propertyCol); // Append the new property to the swiper-wrapper
  
    });
  }

async function data() {
  // Changed to async function
  const response = await fetch(
    "https://the-capital-drab.vercel.app/api/properties"
  ); // Await the fetch call
  const res = await response.json(); // Await the json conversion
  console.log("Fetched Data: ", res); // Log the fetched data
  // Call the function to render properties
  renderProperties(res);
  renderCommercialProperties(res);
  renderResidentialProperties(res);
  return res;
}

const AllData = data(); // Ensure this is awaited
