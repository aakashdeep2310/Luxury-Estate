
document.addEventListener('DOMContentLoaded', function() {
    
    const stripe = Stripe('pk_test_your_stripe_publishable_key'); 
    let elements;
    let card;
    
  
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
   
    const properties = [
        {
            id: 1,
            title: "Luxury Penthouse in Manhattan",
            price: "$3,250,000",
            bedrooms: 3,
            bathrooms: 3.5,
            area: "2,800 sq ft",
            location: "New York, NY",
            type: "Penthouse",
            description: "Stunning penthouse with panoramic views of Central Park and the Manhattan skyline. Features floor-to-ceiling windows, a gourmet kitchen, and a private rooftop terrace.",
            amenities: ["Pool", "Gym", "Concierge", "Parking", "Terrace", "Smart Home"],
            images: [
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 2,
            title: "Oceanfront Villa in Malibu",
            price: "$12,500,000",
            bedrooms: 5,
            bathrooms: 6,
            area: "6,800 sq ft",
            location: "Malibu, CA",
            type: "Villa",
            description: "Luxury beachfront estate with infinity pool, private beach access, and panoramic ocean views from every room.",
            amenities: ["Infinity Pool", "Private Beach", "Home Theater", "Wine Cellar"],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 3,
            title: "Skyline Penthouse in Miami",
            price: "$4,750,000",
            bedrooms: 4,
            bathrooms: 4.5,
            area: "3,500 sq ft",
            location: "Miami, FL",
            type: "Penthouse",
            description: "Ultra-modern penthouse with 360-degree views of Miami Beach and Biscayne Bay. Features smart home automation and a private rooftop pool.",
            amenities: ["Rooftop Pool", "Smart Home", "Concierge", "Gym"],
            images: [
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 4,
            title: "Historic Brownstone in Brooklyn",
            price: "$2,800,000",
            bedrooms: 4,
            bathrooms: 3,
            area: "3,200 sq ft",
            location: "Brooklyn, NY",
            type: "Townhouse",
            description: "Beautifully restored 19th-century brownstone with original details, modern kitchen, and private garden.",
            amenities: ["Private Garden", "Hardwood Floors", "Fireplace", "Parking"],
            images: [
                "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752229-250ed79470a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 5,
            title: "Modern Hillside Mansion in Los Angeles",
            price: "$9,500,000",
            bedrooms: 6,
            bathrooms: 7,
            area: "8,500 sq ft",
            location: "Los Angeles, CA",
            type: "Mansion",
            description: "Architectural masterpiece with floor-to-ceiling glass walls, home theater, and panoramic city views.",
            amenities: ["Home Theater", "Infinity Pool", "Wine Cellar", "Smart Home"],
            images: [
                "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 6,
            title: "Waterfront Estate in The Hamptons",
            price: "$15,000,000",
            bedrooms: 7,
            bathrooms: 8,
            area: "10,000 sq ft",
            location: "The Hamptons, NY",
            type: "Estate",
            description: "Luxury waterfront compound with private dock, tennis court, and guest houses on 5 acres.",
            amenities: ["Private Dock", "Tennis Court", "Guest House", "Home Gym"],
            images: [
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 7,
            title: "Downtown Loft in Chicago",
            price: "$1,950,000",
            bedrooms: 2,
            bathrooms: 2,
            area: "2,100 sq ft",
            location: "Chicago, IL",
            type: "Loft",
            description: "Industrial-chic loft with exposed brick, concrete floors, and skyline views in the heart of downtown.",
            amenities: ["Open Floor Plan", "High Ceilings", "Concierge", "Parking"],
            images: [
                "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752229-250ed79470a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 8,
            title: "Desert Modern in Scottsdale",
            price: "$3,800,000",
            bedrooms: 4,
            bathrooms: 4,
            area: "4,200 sq ft",
            location: "Scottsdale, AZ",
            type: "Modern Home",
            description: "Minimalist desert retreat with floor-to-ceiling windows showcasing mountain views and a resort-style pool.",
            amenities: ["Infinity Pool", "Outdoor Kitchen", "Home Office", "Smart Home"],
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 9,
            title: "Luxury Condo in San Francisco",
            price: "$3,500,000",
            bedrooms: 3,
            bathrooms: 3,
            area: "2,600 sq ft",
            location: "San Francisco, CA",
            type: "Condo",
            description: "Sophisticated high-rise condo with bay views, chef's kitchen, and access to building amenities.",
            amenities: ["Doorman", "Gym", "Rooftop Deck", "Wine Storage"],
            images: [
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 10,
            title: "Mountain Retreat in Aspen",
            price: "$7,200,000",
            bedrooms: 5,
            bathrooms: 5,
            area: "5,500 sq ft",
            location: "Aspen, CO",
            type: "Mountain Home",
            description: "Luxury ski-in/ski-out chalet with heated floors, hot tub, and panoramic mountain views.",
            amenities: ["Hot Tub", "Fireplace", "Ski Access", "Garage"],
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 11,
            title: "Modern Townhouse in Washington DC",
            price: "$2,300,000",
            bedrooms: 4,
            bathrooms: 3.5,
            area: "3,000 sq ft",
            location: "Washington, DC",
            type: "Townhouse",
            description: "Elegant townhouse with rooftop terrace, gourmet kitchen, and walking distance to national monuments.",
            amenities: ["Rooftop Terrace", "Gourmet Kitchen", "Parking", "Smart Home"],
            images: [
                "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752229-250ed79470a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 12,
            title: "Luxury High-Rise in Toronto",
            price: "$3,100,000",
            bedrooms: 3,
            bathrooms: 3,
            area: "2,700 sq ft",
            location: "Toronto, Canada",
            type: "Condo",
            description: "Ultra-luxury condo with lake views, premium finishes, and access to 5-star building amenities.",
            amenities: ["Concierge", "Pool", "Gym", "Parking"],
            images: [
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 13,
            title: "Beach House in Cape Cod",
            price: "$4,500,000",
            bedrooms: 5,
            bathrooms: 4,
            area: "4,000 sq ft",
            location: "Cape Cod, MA",
            type: "Beach House",
            description: "Charming coastal home with wraparound porch, private beach access, and nautical-inspired interiors.",
            amenities: ["Private Beach", "Outdoor Shower", "Fireplace", "Boat Dock"],
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 14,
            title: "Modern Farmhouse in Austin",
            price: "$2,900,000",
            bedrooms: 4,
            bathrooms: 3.5,
            area: "3,800 sq ft",
            location: "Austin, TX",
            type: "Farmhouse",
            description: "Contemporary farmhouse with open floor plan, chef's kitchen, and resort-style backyard with pool.",
            amenities: ["Pool", "Outdoor Kitchen", "Smart Home", "Guest House"],
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 15,
            title: "Penthouse in Las Vegas",
            price: "$5,500,000",
            bedrooms: 4,
            bathrooms: 4.5,
            area: "4,200 sq ft",
            location: "Las Vegas, NV",
            type: "Penthouse",
            description: "Luxury high-rise penthouse with Strip views, private elevator, and access to casino/resort amenities.",
            amenities: ["Private Elevator", "Concierge", "Pool", "Gym"],
            images: [
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 16,
            title: "Waterfront Cottage in Seattle",
            price: "$2,100,000",
            bedrooms: 3,
            bathrooms: 2,
            area: "2,400 sq ft",
            location: "Seattle, WA",
            type: "Cottage",
            description: "Charming waterfront cottage with dock, mountain views, and cozy fireplace.",
            amenities: ["Private Dock", "Fireplace", "Waterfront", "Deck"],
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 17,
            title: "Luxury Ranch in Montana",
            price: "$6,800,000",
            bedrooms: 6,
            bathrooms: 5,
            area: "7,500 sq ft",
            location: "Bozeman, MT",
            type: "Ranch",
            description: "Sprawling ranch property with equestrian facilities, mountain views, and rustic luxury interiors.",
            amenities: ["Horse Stable", "Barn", "Hot Tub", "Fireplace"],
            images: [
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: true
        },
        {
            id: 18,
            title: "Art Deco Apartment in Miami",
            price: "$2,400,000",
            bedrooms: 2,
            bathrooms: 2,
            area: "2,100 sq ft",
            location: "Miami Beach, FL",
            type: "Apartment",
            description: "Renovated Art Deco gem with original details, ocean views, and walk-to-beach location.",
            amenities: ["Pool", "Concierge", "Parking", "Balcony"],
            images: [
                "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 19,
            title: "Mountain View Cabin in Colorado",
            price: "$1,800,000",
            bedrooms: 3,
            bathrooms: 2,
            area: "2,600 sq ft",
            location: "Denver, CO",
            type: "Cabin",
            description: "Rustic-modern cabin with panoramic mountain views, hot tub, and hiking trails from the property.",
            amenities: ["Hot Tub", "Fireplace", "Mountain Views", "Deck"],
            images: [
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607688969-a5bfa64630e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        },
        {
            id: 20,
            title: "Modern Loft in Brooklyn",
            price: "$2,100,000",
            bedrooms: 2,
            bathrooms: 2,
            area: "1,900 sq ft",
            location: "Brooklyn, NY",
            type: "Loft",
            description: "Industrial-chic loft in trendy Brooklyn neighborhood. Features exposed brick, high ceilings, and open floor plan.",
            amenities: ["Hardwood Floors", "Exposed Brick", "High Ceilings", "Parking"],
            images: [
                "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600566752229-250ed79470a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ],
            featured: false
        }
    ];
    



    const routes = {
        '/': homeRoute,
        '/properties': propertiesRoute,
        '/property/:id': propertyDetailsRoute
    };
    
    const app = document.getElementById('app');
    
   
    router();
  
    window.addEventListener('popstate', router);
    
    function router() {
        const path = window.location.pathname;
        
     
        const propertyMatch = path.match(/^\/property\/(\d+)$/);
        if (propertyMatch) {
            const propertyId = parseInt(propertyMatch[1]);
            propertyDetailsRoute(propertyId);
            return;
        }
        
       
        const routeHandler = routes[path] || homeRoute;
        routeHandler();
    }
    
    function navigateTo(path) {
        window.history.pushState({}, '', path);
        router();
    }
    

    function homeRoute() {
        const template = document.getElementById('home-template');
        app.innerHTML = '';
        app.appendChild(template.content.cloneNode(true));
        
        initFeaturedPropertiesSlider();
        
     
        initContactForm();
        
        initSearch();
        initAnimations();
    }
    
  
    function propertiesRoute() {
        const template = document.getElementById('properties-template');
        app.innerHTML = '';
        app.appendChild(template.content.cloneNode(true));
        
       
        displayAllProperties();
        
  
        initPropertyFilter();
     
        initLoadMore();
    }
    
  
    function propertyDetailsRoute(propertyId) {
        const template = document.getElementById('property-details-template');
        app.innerHTML = '';
        app.appendChild(template.content.cloneNode(true));
        
    
        const property = properties.find(p => p.id === propertyId);
        if (!property) {
            navigateTo('/properties');
            return;
        }
    
        displayPropertyDetails(property);
        
       
        initBookingForm(property);
    }
    

    function initFeaturedPropertiesSlider() {
        const featuredProperties = properties.filter(p => p.featured);
        const featuredContainer = document.getElementById('featured-properties-container');
        
        featuredProperties.forEach(property => {
            featuredContainer.innerHTML += `
                <div class="swiper-slide">
                    ${createPropertyCard(property).outerHTML}
                </div>
            `;
        });
        
      
        const featuredSwiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }
        });
        
      
        document.querySelectorAll('.swiper-slide .view-details').forEach(button => {
            button.addEventListener('click', function() {
                const propertyId = parseInt(this.getAttribute('data-id'));
                navigateTo(`/property/${propertyId}`);
            });
        });
    }
    
 
    function displayAllProperties(propertiesToShow = properties) {
        const container = document.getElementById('all-properties-container');
        container.innerHTML = '';
        
        propertiesToShow.forEach(property => {
            container.appendChild(createPropertyCard(property));
        });
        
     
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const propertyId = parseInt(this.getAttribute('data-id'));
                navigateTo(`/property/${propertyId}`);
            });
        });
    }
 
    function createPropertyCard(property) {
        const propertyElement = document.createElement('div');
        propertyElement.className = 'property-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300';
        propertyElement.innerHTML = `
            <div class="relative h-64 overflow-hidden">
                <img class="w-full h-full object-cover transition duration-500 hover:scale-110" src="${property.images[0]}" alt="${property.title}">
                <div class="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ${property.type}
                </div>
                <div class="absolute bottom-4 left-4 bg-white text-indigo-600 px-3 py-1 rounded-full text-sm font-bold">
                    ${property.price}
                </div>
            </div>
            <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">${property.title}</h3>
                <p class="text-gray-600 mb-4"><i class="fas fa-map-marker-alt text-indigo-600 mr-2"></i>${property.location}</p>
                <div class="flex justify-between text-gray-700 mb-4">
                    <span><i class="fas fa-bed text-indigo-600 mr-2"></i>${property.bedrooms} Beds</span>
                    <span><i class="fas fa-bath text-indigo-600 mr-2"></i>${property.bathrooms} Baths</span>
                    <span><i class="fas fa-ruler-combined text-indigo-600 mr-2"></i>${property.area}</span>
                </div>
                <button class="view-details w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md transition duration-300" data-id="${property.id}">
                    View Details
                </button>
            </div>
        `;
        return propertyElement;
    }
    
  
    function initPropertyFilter() {
        const searchBtn = document.getElementById('properties-search-btn');
        searchBtn.addEventListener('click', function() {
            const location = document.getElementById('properties-location').value;
            const type = document.getElementById('properties-type').value;
            const price = document.getElementById('properties-price').value;
            
            // Filter properties
            const filteredProperties = properties.filter(property => {
                return (location === '' || property.location.includes(location)) &&
                       (type === '' || property.type === type) &&
                       (price === '' || checkPriceRange(property.price, price));
            });
            
            displayAllProperties(filteredProperties);
        });
    }
    
    // Check price range
    function checkPriceRange(propertyPrice, range) {
        const price = parseFloat(propertyPrice.replace(/[^0-9.]/g, ''));
        
        if (range === '$100,000 - $300,000') return price >= 100000 && price <= 300000;
        if (range === '$300,000 - $500,000') return price >= 300000 && price <= 500000;
        if (range === '$500,000 - $1,000,000') return price >= 500000 && price <= 1000000;
        if (range === '$1,000,000+') return price >= 1000000;
        
        return true;
    }
    
  
    function initLoadMore() {
        const loadMoreBtn = document.getElementById('load-more');
        let displayedCount = 9; 
        
        function loadMore() {
           
            displayAllProperties(properties);
            loadMoreBtn.style.display = 'none';
        }
        
        loadMoreBtn.addEventListener('click', loadMore);
    }
    
  
    function displayPropertyDetails(property) {
        document.getElementById('property-title').textContent = property.title;
        document.getElementById('property-price').textContent = property.price;
        document.getElementById('property-location').textContent = property.location;
        document.getElementById('property-bedrooms').textContent = property.bedrooms;
        document.getElementById('property-bathrooms').textContent = property.bathrooms;
        document.getElementById('property-area').textContent = property.area;
        document.getElementById('property-type').textContent = property.type;
        document.getElementById('property-description').textContent = property.description;
        
     
        const amenitiesContainer = document.getElementById('property-amenities');
        amenitiesContainer.innerHTML = '';
        property.amenities.forEach(amenity => {
            const amenityElement = document.createElement('div');
            amenityElement.className = 'flex items-center';
            amenityElement.innerHTML = `
                <i class="fas fa-check text-indigo-600 mr-2"></i>
                <span>${amenity}</span>
            `;
            amenitiesContainer.appendChild(amenityElement);
        });
        
    
        const propertySwiper = new Swiper('.swiper-container-property', {
            loop: true,
            pagination: {
                el: '.swiper-pagination-property',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next-property',
                prevEl: '.swiper-button-prev-property',
            },
        });
        

        const swiperWrapper = document.querySelector('.swiper-wrapper');
        property.images.forEach(image => {
            swiperWrapper.innerHTML += `
                <div class="swiper-slide">
                    <img class="w-full h-96 object-cover" src="${image}" alt="${property.title}">
                </div>
            `;
        });
        
     
        propertySwiper.update();
    }
    
   
    function initBookingForm(property) {
        const bookNowBtn = document.getElementById('book-now-btn');
        const bookingModal = document.getElementById('booking-modal');
        const closeBookingModal = document.getElementById('close-booking-modal');
        const bookingForm = document.getElementById('booking-form');
        
        bookNowBtn.addEventListener('click', function() {
            document.getElementById('property-id').value = property.id;
            bookingModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeBookingModal.addEventListener('click', function() {
            bookingModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        bookingModal.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                bookingModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('booking-name').value;
            const email = document.getElementById('booking-email').value;
            const phone = document.getElementById('booking-phone').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const notes = document.getElementById('booking-notes').value;
            
         
            console.log('Booking submitted:', { 
                propertyId: property.id,
                name, 
                email, 
                phone, 
                date, 
                time, 
                notes 
            });
            
         
            bookingModal.classList.add('hidden');
            showPaymentModal(property, date, time);
        });
    }
  
    function showPaymentModal(property, date, time) {
        const paymentModal = document.getElementById('payment-modal');
        const closePaymentModal = document.getElementById('close-payment-modal');
        const closeAfterPayment = document.getElementById('close-after-payment');
        const paymentForm = document.getElementById('payment-form');
        const paymentSuccess = document.getElementById('payment-success');
        
    
        document.getElementById('payment-property').textContent = property.title;
        document.getElementById('payment-date').textContent = new Date(date).toLocaleDateString();
        document.getElementById('payment-time').textContent = time;
        
  
        initStripeElements();
        
        paymentModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        
        closePaymentModal.addEventListener('click', function() {
            paymentModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        closeAfterPayment.addEventListener('click', function() {
            paymentModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            navigateTo('/properties');
        });
        
        paymentModal.addEventListener('click', function(e) {
            if (e.target === paymentModal) {
                paymentModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        
       
        document.getElementById('submit-payment').addEventListener('click', async function(e) {
            e.preventDefault();
            
            const {error, paymentMethod} = await stripe.createPaymentMethod({
                type: 'card',
                card: card,
                billing_details: {
                    name: document.getElementById('booking-name').value,
                    email: document.getElementById('booking-email').value
                }
            });
            
            if (error) {
                document.getElementById('card-errors').textContent = error.message;
            } else {
               
                console.log('Payment method created:', paymentMethod);
                
               
                paymentForm.classList.add('hidden');
                paymentSuccess.classList.remove('hidden');
                
             
            }
        });
    }
    
   
    function initStripeElements() {
        elements = stripe.elements();
        card = elements.create('card');
        card.mount('#card-element');
        
        card.on('change', function(event) {
            const displayError = document.getElementById('card-errors');
            if (event.error) {
                displayError.textContent = event.error.message;
            } else {
                displayError.textContent = '';
            }
        });
    }
    
 
    function initContactForm() {
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;
            
       
            console.log('Contact form submitted:', { name, email, phone, message });
            
            alert('Thank you for your message! An agent will contact you shortly.');
            contactForm.reset();
        });
    }
    

    function initSearch() {
        const searchBtn = document.getElementById('search-btn');
        searchBtn.addEventListener('click', function() {
            const location = document.getElementById('location').value;
            const propertyType = document.getElementById('property-type').value;
            const priceRange = document.getElementById('price-range').value;
            
          
            navigateTo('/properties');
            
      
            alert(`Searching for ${propertyType} properties in ${location} within ${priceRange}`);
        });
    }
    
    
    function initAnimations() {
        const animateOnScroll = function() {
            const elements = document.querySelectorAll('.fade-in');
            
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                
                if (elementPosition < screenPosition) {
                    element.style.animation = 'fadeIn 1s ease-in forwards';
                }
            });
        };
        
        window.addEventListener('scroll', animateOnScroll);
        animateOnScroll();
    }
    
 
    document.querySelectorAll('a[href^="/"], a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
             
                return;
            }
            
            e.preventDefault();
            navigateTo(this.getAttribute('href'));
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
       
        const swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
         
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
       
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          },
        
          init: true,
        });
        
      
        const propertiesContainer = document.getElementById('featured-properties-container');
        if (propertiesContainer && propertiesContainer.children.length <= 1) {
          console.log('Checking if properties loaded properly');
        
          swiper.update();
        }
      });

      document.addEventListener('DOMContentLoaded', function() {
        const propertySwiper = new Swiper('.swiper-container-property', {
          loop: true,
          pagination: {
            el: '.swiper-pagination-property',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next-property',
            prevEl: '.swiper-button-prev-property',
          },
        });
      });
});