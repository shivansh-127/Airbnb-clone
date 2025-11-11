const sampleListings = [
    
  {
    title: "Seaside Serenity Villa",
    description: "Luxurious beachfront villa with private pool and sweeping ocean views.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    price: 1200,
    location: "Calangute, Goa",
    country: "India"
  },
  {
    title: "Mountain Escape Cabin",
    description: "Cozy wooden cabin nestled in the Himalayas with a stunning valley view.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    price: 850,
    location: "Manali, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Urban Chic Apartment",
    description: "Modern apartment in the heart of Mumbai with panoramic skyline views.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 3000,
    location: "Bandra, Mumbai",
    country: "India"
  },
  {
    title: "Desert Mirage Camp",
    description: "Luxury glamping tents under the stars of the Thar Desert.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b",
    price: 950,
    location: "Jaisalmer, Rajasthan",
    country: "India"
  },
  {
    title: "Hilltop Heritage Bungalow",
    description: "Colonial-style bungalow surrounded by lush tea gardens and hills.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 1250,
    location: "Ooty, Tamil Nadu",
    country: "India"
  },
  {
    title: "Lakeview Glass Cottage",
    description: "Modern glass cottage offering panoramic views of the serene Nainital lake.",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
    price: 1350,
    location: "Nainital, Uttarakhand",
    country: "India"
  },
  {
    title: "Luxury Palace Suite",
    description: "Experience royalty in a heritage palace with grand interiors.",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
    price: 5000,
    location: "Jaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Snow Peak Chalet",
    description: "Warm wooden chalet with fireplace and snow-capped mountain views.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 1800,
    location: "Gulmarg, Jammu & Kashmir",
    country: "India"
  },
  {
    title: "Riverside Bamboo Hut",
    description: "Simple yet charming bamboo hut beside the Ganga river.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    price: 750,
    location: "Rishikesh, Uttarakhand",
    country: "India"
  },
  {
    title: "Heritage Haveli Stay",
    description: "Stay in a beautifully restored haveli with traditional decor and courtyards.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    price: 1450,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
  {
    title: "Forest Canopy Lodge",
    description: "Treehouse-style accommodation deep inside lush forest trails.",
    image: "https://images.unsplash.com/photo-1534531688091-a458257992cb",
    price: 980,
    location: "Coorg, Karnataka",
    country: "India"
  },
  {
    title: "Beachfront Bamboo Villa",
    description: "Rustic bamboo villa right on the sandy shores of the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 1250,
    location: "Varkala, Kerala",
    country: "India"
  },
  {
    title: "Colonial Hill Mansion",
    description: "Grand colonial-style mansion offering panoramic mountain views.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
    price: 2300,
    location: "Shillong, Meghalaya",
    country: "India"
  },
  {
    title: "Valley View Homestay",
    description: "Homely stay overlooking lush green valleys and waterfalls.",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
    price: 700,
    location: "Kodaikanal, Tamil Nadu",
    country: "India"
  },
  {
    title: "Urban Luxury Penthouse",
    description: "Penthouse apartment with private jacuzzi and city skyline view.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    price: 4200,
    location: "Gurugram, Haryana",
    country: "India"
  },
  {
    title: "Heritage Cottage by the Lake",
    description: "Stone-built heritage cottage beside a peaceful lake.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    price: 1150,
    location: "Mount Abu, Rajasthan",
    country: "India"
  },
  {
    title: "Luxury Cliffside Villa",
    description: "Premium cliffside villa with infinity pool and panoramic sea view.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 3800,
    location: "North Goa, Goa",
    country: "India"
  },
  {
    title: "Tropical Farmhouse Retreat",
    description: "Experience village life with modern comfort in this tropical farmhouse.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
    price: 950,
    location: "Pune, Maharashtra",
    country: "India"
  },
  {
    title: "Lakefront Bohemian Loft",
    description: "Artistic loft with boho decor and direct access to the lake.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
    price: 2000,
    location: "Bhopal, Madhya Pradesh",
    country: "India"
  },
  {
    title: "Rustic Hillside Cabin",
    description: "Handcrafted cabin with wooden interiors and beautiful hill views.",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff",
    price: 950,
    location: "Darjeeling, West Bengal",
    country: "India"
  },
  {
    title: "Skyline Studio Apartment",
    description: "Minimalist studio apartment with rooftop garden and great connectivity.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    price: 2200,
    location: "Bengaluru, Karnataka",
    country: "India"
  },
  {
    title: "Hill Retreat Cottage",
    description: "Peaceful retreat amidst pine forests and scenic trails.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 1200,
    location: "Mussoorie, Uttarakhand",
    country: "India"
  },
  {
    title: "Sunset Bay Villa",
    description: "Luxury villa with pool and sunset view over the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
    price: 3200,
    location: "Candolim, Goa",
    country: "India"
  },
  {
    title: "Countryside Farm Stay",
    description: "Organic farm stay experience with local food and open fields.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 850,
    location: "Nashik, Maharashtra",
    country: "India"
  },
  {
    title: "Hill River Villa",
    description: "Private villa near the riverbank with mountain views.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    price: 1400,
    location: "Chikmagalur, Karnataka",
    country: "India"
  },
  {
    title: "Tropical Island Hut",
    description: "Bamboo hut surrounded by palm trees and ocean breeze.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: 1100,
    location: "Havelock Island, Andaman",
    country: "India"
  },
  {
    title: "Luxury Mountain Villa",
    description: "Elegant villa with jacuzzi and breathtaking views of the Himalayas.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 3400,
    location: "Shimla, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Beachside Art House",
    description: "Bohemian stay filled with art, colors, and sea breeze.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
    price: 1500,
    location: "Gokarna, Karnataka",
    country: "India"
  },
  {
    title: "Wildlife Safari Lodge",
    description: "Rustic lodge inside national park for wildlife lovers.",
    image: "https://images.unsplash.com/photo-1550510537-7a76b3a63d53",
    price: 1900,
    location: "Kanha, Madhya Pradesh",
    country: "India"
  },
  {
    title: "Luxury Riverside Resort",
    description: "Premium resort beside river with spa, pool, and fine dining.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 4100,
    location: "Haridwar, Uttarakhand",
    country: "India"
  },
  {
    title: "Vintage City Apartment",
    description: "Classic apartment with retro decor near old city market.",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
    price: 1700,
    location: "Lucknow, Uttar Pradesh",
    country: "India"
  },
  {
    title: "Himalayan Zen Retreat",
    description: "Meditation retreat with yoga sessions and mountain silence.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    price: 1800,
    location: "Dharamshala, Himachal Pradesh",
    country: "India"
  },
  {
    title: "Rural Village Homestay",
    description: "Authentic rural life experience with traditional food.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    price: 650,
    location: "Pushkar, Rajasthan",
    country: "India"
  },
  {
    title: "Green Valley Resort",
    description: "Resort surrounded by rolling hills and coffee plantations.",
    image: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    price: 2100,
    location: "Madikeri, Karnataka",
    country: "India"
  },
  {
    title: "Private Pool Villa",
    description: "Luxury villa with private pool, BBQ, and tropical garden.",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
    price: 3600,
    location: "South Goa, Goa",
    country: "India"
  },
  {
    title: "Lakeside Heritage Villa",
    description: "Elegant villa with vintage architecture beside a tranquil lake.",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed",
    price: 2300,
    location: "Udaipur, Rajasthan",
    country: "India"
  },
];

module.exports = {data : sampleListings};