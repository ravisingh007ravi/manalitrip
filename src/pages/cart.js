const trip = () => {
    const data = [
        { name: "Mall Road", des: "The bustling heart of Manali with shops and cafes", images: 'https://discoverkullumanali.in/wp-content/uploads/2020/01/Aerial-view-of-mall-road-of-Manali-town-936x530.jpg' },
        { name: "Club House", des: "Recreation center with indoor games and activities", images: 'https://i.ytimg.com/vi/Rj2E4jf0TXY/maxresdefault.jpg' },
        { name: "Hadimba Temple", des: "Ancient wooden temple dedicated to Hidimba Devi", images: 'https://i0.wp.com/weekendyaari.in/wp-content/uploads/2024/09/hadimba-devi-temple-weekend-yaari-.webp?fit=810%2C540&ssl=1' },
        { name: "Vashishtha Temple", des: "Ancient temple with hot springs", images: 'https://www.go2india.in/himachal/images/b-vashisht.jpg' },
        { name: "Manu Temple", des: "Historic temple dedicated to sage Manu", images: 'https://wandersky.in/wp-content/uploads/2024/12/manu-temple-near-manali.jpg' },
        { name: "Solang Valley", des: "Adventure sports and scenic mountain views", images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Solang_Valley.jpg/1200px-Solang_Valley.jpg' },
        { name: "Atal Tunnel", des: "World's longest highway tunnel above 10,000 feet", images: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2020/11/Feature-image-Atal-Tunnel.jpg' },
        { name: "Sissu", des: "Picturesque village with waterfall views", images: 'https://www.manaliworldtravel.com/images/manali/650X500/sissu-manali-view.webp' },
        { name: "Rohtang Pass", des: "High mountain pass with snow views", images: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEuT2x1g70hSSNSMpw2T4a6tVtM7Qq-UcIA&s' }
    ];

    let bag = '';

    data.forEach((place) => {
        if (place.images && place.des) { // Only show cards with both images and descriptions
            bag += `
                <div class="place-card bg-gray-700 rounded-lg overflow-hidden">
                    <img src="${place.images}"
                        alt="${place.name}"
                        class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
                    <div class="p-4">
                        <h3 class="text-xl font-bold text-teal-300 mb-2">${place.name}</h3>
                        <p class="text-gray-300">${place.des}</p>
                    </div>
                </div>
            `;
        }
    });
    return bag;
};

document.getElementById('trips').innerHTML = trip();