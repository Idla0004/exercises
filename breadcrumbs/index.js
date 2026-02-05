const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const generateBtn = document.querySelector("button");
const breadcrumbList = document.querySelector("ul");

generateBtn.addEventListener("click", klik);

function klik() {
  breadcrumbList.innerHTML = ""; // sørger for at listen af links er tom, hver gang man trykker på knappen

  // her starter jeg funktionen med at vælge alle breadcrumbs (altså bc) og looper igennem dem.
  bc.forEach((breadCrumb, index) => {
    const listItem = document.createElement("li"); // her laver jeg en variabel, der hedder listItem til <li> liste element

    if (index === bc.length - 1) {
      // med if tjekker jeg om det er det sidste element

      listItem.textContent = breadCrumb.name; // Hvis det er det sidste element tilføjer jeg kun teksten og ikke noget link
    } else {
      // med else opretter jeg link på alle elementerne.
      const linkItem = document.createElement("a"); // her laver jeg en variabel, der siger linkItem skal lave a-link elementer, altså som et a-tag i html
      linkItem.href = breadCrumb.link; // her siger jeg at linkItem.href er breadcrumbs' links.
      linkItem.textContent = breadCrumb.name; // her siger jeg at linkItem.textContent er lig med breadcrumbs' navne.
      listItem.appendChild(linkItem); // her tilføjer jeg <a> til <li>
    }

    // // her tilføjer jeg <li> til <ul>
    breadcrumbList.appendChild(listItem);
  });
}

// Kan skrive /&nbsp; - er et non breaking space, der sørger for der er spacing mellem / og elementerne.
