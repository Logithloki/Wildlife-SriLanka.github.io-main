// Sample data containing ID-value pairs and their content
const home = [
    { id: "Wildlife", content: "WILDLIFE SRILANKA" },
    { id: "WildLife_Content", content: "Sri Lanka is renowned for its rich and diverse wildlife, offering a unique and vibrant ecosystem. The island nation, located in South Asia, is home to a wide range of flora and fauna, making it a biodiversity hotspot. Sri Lanka can make your all vacation dreams come true from adventures, The wildlife in Sri Lanka includes various species of mammals, birds, reptiles, amphibians, and insects. Yala National Park boasts one of the world's highest leopard densities,while Wilpattu is home to the elusive sloth bear. Avian wonders, including the vibrant Sri Lanka junglefowl and the camouflaged Ceylon frogmouth, add to the island's allure. Sri Lanka's reptilian diversity features the venomous cobra and crocodile species." },
    { id: "Mammals", content: "Mammals" },
    { id: "Mammals_Content_1", content: "Sri Lanka boasts an impressive diversity of mammals, including iconic species like the Sri Lankan elephant, leopard, and sloth bear. The island is also home to lively primates such as the toque macaque and purple-faced langur, adding to the richness of its wildlife." },
    { id: "Mammals_Content_2", content: "In the heart of lush landscapes, unique mammalian wonders thrive. The shaggy-coated Sri Lankan Sloth Bear, native to the island, exemplifies conservation efforts. The Purple-faced Langur, an endemic monkey species, swings through treetops in Sri Lanka's rich forests, highlighting the importance of preserving these habitats." },
    { id: "Birds", content: "Birds" },
    { id: "Birds_Content_1", content: "With its varied landscapes, Sri Lanka is a paradise for bird enthusiasts. The country hosts a diverse avian population, including endemic species like the Sri Lankan junglefowl, Sri Lanka wood pigeon, and the rare Ceylon spurfowl. Wetlands and national parks provide habitats for a multitude of migratory birds." },
    { id: "Birds_Content_2", content: "Sri Lanka serves as a crucial stopover for migratory birds, with Bundala National Park attracting waterfowl like the Greater Flamingo (Phoenicopterus roseus) and Eurasian Spoonbill (Platalea leucorodia). Coastal areas host seabirds such as the Brown Booby (Sula leucogaster) and the Sri Lanka Swallow (Hirundo hyperythra), enriching the island's diverse birdwatching experience." },
    { id: "Reptiles", content: "Reptiles" },
    { id: "Reptiles_Content_1", content: "Sri Lanka's diverse reptilian kingdom features enchanting snakes, like the vibrant Green Pit Viper (Trimeresurus trigonocephalus), and the diminutive marvel, the Pygmy Lizard (Cophotis ceylanica), found in the rocky central highlands." },
    { id: "Reptiles_Content_2", content: "In addition to these terrestrial wonders, Sri Lanka's coastal waters house captivating marine reptiles. Crocodile species, such as the Mugger Crocodile (Crocodylus palustris), navigate waterways.Sri Lanka's commitment to preserving both terrestrial and marine reptiles underscores its dedication to maintaining the delicate balance of its ecosystems." },
    { id: "Marine", content: "Marine Life" },
    { id: "Marine_Content_1", content: "Sri Lanka's marine life is diverse and thriving, featuring vibrant coral reefs in places like Hikkaduwa and Pigeon Island. The region is a hotspot for marine mammals, including frequent sightings of blue whales and dolphins." },
    { id: "Marine_Content_2", content: "These iconic species underscore the nation's commitment to marine conservation. The reefs, adorned with colorful Clownfish and Parrotfish, not only enhance the visual appeal but also contribute significantly to the overall health of the marine environment." },
    { id: "Explore", content: "Explore Sri Lanka's Wild Wonders" },
    { id: "Safaris", content: "Diverse Wildlife Safaris" },
    { id: "Safaris_point_1", content: "Explore Sri Lanka's national parks, such as Yala, Udawalawe, and Wilpattu, on diverse wildlife safaris." },
    { id: "Safaris_point_2", content: "Encounter a plethora of species, including elephants, deer, wild boars, and a rich variety of birdlife." },
    { id: "Leopard", content: "Leopard Spotting" },
    { id: "Leopard_point_1", content: "Experience the thrill of leopard spotting on dedicated safaris, particularly in Yala National Park." },
    { id: "Leopard_point_2", content: "Witness the elegance and power of these elusive big cats in their natural habitat." },
    { id: "Elephant", content: "Elephant Gatherings" },
    { id: "Elephant_point_1", content: "Visit Minneriya or Kaudulla National Park to witness the incredible phenomenon of elephant gatherings." },
    { id: "Elephant_point_2", content: "Large herds congregate during the dry season, creating a unique and awe-inspiring spectacle." },
    { id: "Bird", content: "Bird Watching" },
    { id: "Bird_point_1", content: "Sri Lanka is a paradise for bird watchers, with over 430 bird species." },
    { id: "Bird_point_2", content: "Head to Bundala National Park or Sinharaja Rainforest to spot colorful and exotic birds." },
    { id: "Bird_point_3", content: "Includes endemic species like the Sri Lanka Junglefowl and the Ceylon Hanging Parrot." },
    { id: "Bear", content: "Sloth Bear Encounters" },
    { id: "Bear_point_1", content: "In Yala and Wilpattu, you may have the opportunity to encounter the elusive sloth bear." },
    { id: "Bear_point_2", content: "These unique creatures add to the diversity of Sri Lanka's wildlife and offer a fascinating sight during safaris." },
    { id: "footer_head", content: "Enchanting Sri Lanka" },
    { id: "footer_link", content: "Navigation Links" },
    { id: "footer_contact", content: "Contact Us" },
    { id: "footer_news", content: "Join our Newsletter" }
];

const Intro = [
    { id: "Udawalawe_main", content: "Udawalawe National Park" },
    { id: "Udawalawe", content: "Udawalawe National Park" },
    { id: "description", content: "Udawalawe National Park in southern Sri Lanka spans 30,821 hectares and is renowned for its diverse wildlife, notably a large population of wild elephants. The park features grasslands, marshes, and forests, providing habitats for various species. It was established to protect the Udawalawe Reservoir, serving as a crucial water source for the region. Udawalawe is popular for safaris, offering opportunities to witness elephants, water buffaloes, deer, and a variety of bird species in their natural environment." },
    { id: "Title_1", content: "Name" },
    { id: "Title_2", content: "Fun Fact" },
    { id: "Title_3", content: "Image" },
    { id: "Elephant", content: "Elephant" },
    { id: "Elephant_Fact", content: "Elephants have the largest brains among land animals, with an average weight of around 5 kg (11 pounds) for an adult elephant brain. They are known for their intelligence and complex social structures." },
    { id: "Leopard", content: "Leopard" },
    { id: "Leopard_Fact", content: "Leopards stash their kills in trees to protect them. Their adaptability and agility make them highly successful big cats." },
    { id: "Jackals", content: "Jackals" },
    { id: "Jackals_Fact", content: "Jackals are recognized for their eerie howls and yelps, serving as communication within the pack and marking territory." },
    { id: "Crocodile", content: "Crocodile" },
    { id: "Crocodile_Fact", content: "Crocodiles are remarkable survivors, having remained virtually unchanged for over 200 million years. They are the apex predators in aquatic ecosystems." },
    { id: "Sloth", content: "Sloth Bear" },
    { id: "Sloth_Fact", content: "Sloth bears use a unique vacuum-like technique to suck up insects, aiding efficient foraging in their natural habitat." },
    { id: "footer", content: "Explore the wildlife sanctuary for thrilling wildlife experiences!" },
    { id: "Gallery", content: "Udawalawe National Park Gallery" },
    { id: "Bundala_main", content: "Bundala National Park" },
    { id: "Bundala", content: "Bundala National Park" },
    { id: "description_Bundala", content: "Bundala National Park in southeastern Sri Lanka is a diverse wildlife sanctuary known for its significant birdlife, especially during the winter migration. The park features lagoons, coastal areas, and various ecosystems, making it a haven for migratory birds like flamingos and pelicans. With an area of around 6216 hectares, Bundala is also home to elephants, crocodiles, and diverse reptiles, offering a unique and compact destination for nature lovers." },
    { id: "Title_1_bun", content: "Name" },
    { id: "Title_2_bun", content: "Fun Fact" },
    { id: "Title_3_bun", content: "Image" },
    { id: "Monkey", content: "Monkey" },
    { id: "Monkey_Fact", content: "Monkeys exhibit social intelligence and some use tools, showcasing complex behaviors in grooming, communication, and hierarchy." },
    { id: "Buffalo", content: "Water Buffalo" },
    { id: "Buffalo_Fact", content: "Water buffaloes are adept swimmers, using water to cool down and protect themselves from insects, showcasing surprising agility despite their large size." },
    { id: "Jackals_bun", content: "Jackals" },
    { id: "Jackals_bun_Fact", content: "Civet cats contribute to coffee production by producing kopi luwak, a rare coffee made from beans eaten and excreted by them." },
    { id: "Sambar", content: "Sambar Deer" },
    { id: "Sambar_Fact", content: "The Sambar deer, one of the largest deer species, communicates through distinctive vocalizations, including barks and alarm calls." },
    { id: "Mouse", content: "Mouse Deer" },
    { id: "Mouse_Fact", content: "Despite its small size, the mouse deer is remarkably agile and speedy, adept at navigating dense vegetation and evading predators." },
    { id: "footer_bun", content: "Explore the wildlife sanctuary for thrilling wildlife experiences!" },
    { id: "Gallery_bun", content: "Bundala National Park Gallery" },
    { id: "footer_head", content: "Enchanting Sri Lanka" },
    { id: "footer_link", content: "Navigation Links" },
    { id: "footer_contact", content: "Contact Us" },
    { id: "footer_news", content: "Join our Newsletter" }
];



function displayPairs() {
    const home_con = document.getElementById('home');
    for (let i = 0; i < home.length; i++) {
        home_con.innerHTML += `<div class="pair">
                                            <p>ID: "${home[i].id}"</p>
                                            <p>Content: "${home[i].content}"</p>
                                       </div>`;    
    }
    const into_con = document.getElementById('intro');
    for (let i = 0; i < Intro.length; i++) {
        into_con.innerHTML += `<div class="pair">
                                            <p>ID: "${Intro[i].id}"</p>
                                            <p>Content: "${Intro[i].content}"</p>
                                       </div>`;    
    }
    
}

displayPairs();
