var trainingCount = 1;
    
        function updateTrainingOptions(categoryDropdown) {
            var trainingDropdown = categoryDropdown.parentElement.querySelector("select[name^='training']");
            var tierDropdown = categoryDropdown.parentElement.querySelector("select[name^='tier']");
            var selectedCategory = categoryDropdown.value;
            var trainingOptions;
            var tierOptions;
    
            // Clear existing options
            trainingDropdown.innerHTML = '<option value="">-- Select Training --</option>';
            tierDropdown.innerHTML = '<option value="">-- Select Tier --</option>';
    
            // Set training options and tier options based on selected category
            switch (selectedCategory) {
                case 'social':
                    trainingOptions = ['Art of Negotiation', 'Cooking', 'Crafty', 'Eavesdropping', 'Embroidery', 'Enchanting Smile', 'Fabricate Information', 'Fishing', 'Foraging', 'Honorable Etiquette', 'Linguistics', 'Reading Emotions', 'Veil of Disguise', 'Art of Sushi'];
                    tierOptions = ['1', '2'];
                    break;
                case 'combat':
                    trainingOptions = ['Alchemy', 'Ambush Tactics', 'Bursting Fist Style', 'Bushcraft', 'Combat Healing', 'Disarm', 'Four Step Knot', 'Grappler', 'Improvisation', 'Iron Wall Style', 'Long Range Defense', 'Opportunity Attack', 'Safe Fall', 'Scouting', 'Tracking', 'Trapping', 'Way of Double Steel', 'Way of the Fist', 'Way of the Ninja'];
                    tierOptions = ['1'];
                    break;
                case 'weapon':
                    trainingOptions = ['Bo Staff', 'Boken', 'Flail', 'Flintlock Pistol', 'Hankyu', 'Jitte', 'Kama', 'Kanabo', 'Katana', 'Komainu Claws', 'Kusarigama', 'Kyoketsu-shoge', 'Longsword', 'Masakari', 'Naginata', 'Nunchaku', 'Odachi', 'Ono Axe', 'Scimitar', 'Short Spear', 'Shortsword', 'Spear', 'Tanto', 'Tanegashima', 'Teppo', 'Tessen', 'Wakizashi', 'Yari', 'Yumi'];
                    tierOptions = ['1', '2', '3'];
                    break;
                default:
                    trainingOptions = [];
                    tierOptions = [];
                    break;
            }
    
            // Add options to training dropdown
            trainingOptions.forEach(function(option) {
                var newOption = document.createElement('option');
                newOption.value = option.toLowerCase().replace(/\s/g, '-');
                newOption.textContent = option;
                trainingDropdown.appendChild(newOption);
            });
    
            // Add options to tier dropdown
            tierOptions.forEach(function(option) {
                var newOption = document.createElement('option');
                newOption.value = option;
                newOption.textContent = option;
                tierDropdown.appendChild(newOption);
            });
        }
    
        function addTraining() {
            trainingCount++;
            var container = document.getElementById("training-container");
            var newTrainingInput = document.createElement("div");
            newTrainingInput.className = "training-input";
            newTrainingInput.innerHTML = '<label for="category' + trainingCount + '">Category:</label>' +
                '<select id="category' + trainingCount + '" name="category' + trainingCount + '" onchange="updateTrainingOptions(this)">' +
                '<option value="">-- Select Category --</option>' +
                '<option value="social">Social</option>' +
                '<option value="combat">Combat</option>' +
                '<option value="weapon">Weapon</option>' +
                '</select>' +
                '<label for="training' + trainingCount + '">Training:</label>' +
                '<select id="training' + trainingCount + '" name="training' + trainingCount + '">' +
                '<option value="">-- Select Training --</option>' +
                '</select>' +
                '<label for="tier' + trainingCount + '">Tier:</label>' +
                '<select id="tier' + trainingCount + '" name="tier' + trainingCount + '" style="margin-right: 10px;">' +
                '<option value="">-- Select Tier --</option>' +
                '</select>';
            container.appendChild(newTrainingInput);
        }
    
        function deleteTraining() {
            if (trainingCount > 1) {
                var container = document.getElementById("training-container");
                container.removeChild(container.lastElementChild);
                trainingCount--;
            }
        }

function finalizeCharacter() {
    // Get all input elements
    var inputElements = document.querySelectorAll("input, select, textarea");

    // Iterate over each input element
    inputElements.forEach(function(inputElement) {
        // Check if the element is a checkbox
        if (inputElement.type === "checkbox") {
            // Check if the checkbox is checked
            if (inputElement.checked) {
                // Replace the checkbox with a checkmark icon
                var checkmarkIcon = document.createElement("span");
                checkmarkIcon.innerHTML = "&#10003;"; // Unicode for checkmark symbol
                inputElement.parentNode.replaceChild(checkmarkIcon, inputElement);
            } else {
                // Remove the parent container if unchecked (this will remove the whole line)
                inputElement.parentElement.remove();
            }
        } else {
            // Create a new text element
            var textElement = document.createElement("span");
            // Set the text content to the value of the input element
            textElement.textContent = inputElement.value;
            // Replace the input element with the text element
            inputElement.parentNode.replaceChild(textElement, inputElement);
        }

        function finalizeCharacter() {
            // Hide the input element (which contains the filename) and show the image
            document.getElementById("file-input").style.display = "none";
            document.getElementById("portrait-image").style.display = "block";
        
            // Call the function to save the character or perform any other finalization steps
            saveCharacter();
        }
        

    });

    // Hide the "Finalize" button
    var finalizeButton = document.querySelector("button");
    finalizeButton.style.display = "none";
}
        // Define descriptions for each option
        var descriptions = {
            // Background Descriptions
            "cartographer": "(commoner): You map out the unexplored world. Wandering to far off lands with your brush and parchment. When visiting a new location, you may make spend 30 minutes to make a map. This map can be sold for tama based on the GMs discretion, with less explored locations granting more tama. Training Points: Combat +1 / Social +2",
            "blacksmith": "(commoner): Your hands are calloused and your face is powdered in coal. You’ve spent years shaping hot iron into fine weapons and sturdy armor. Your iron grip grants a +2 to climbing, and you may roll a Frt check of 6+ to avoid being disarmed. Training Points: Combat +1 / Weapon +2",
            "exile": "(commoner/nobility): You are an outcast. You may choose if you were a noble or a commoner, but must choose what crime you were accused of. Your experience surviving in the criminal underworld grants balance on deception, and sleight of hand. Also on Int-based intimidation checks against those who know of your reputation. Training Points: Combat +1 / Social +1 / Weapon +1",
            "foreigner": "(commoner/nobility): You have recentlytraveled to the island from a far away land. You may choose the reason as to why you came here. Your international experience grants balance on checks involving foreign diplomacy, language, and cross-cultural communication. Training Points: Social +2 / Weapon +1",
            "geisha": "(commoner): Mastering the art of entertainment, you are skilled in dancing, music, conversation, and social grace. Your charming presence grants you balance on Wit-based checks when interacting with individuals of importance or influence. Training Points: Combat +1 / Social +2",
            "healer": "(commoner): Although skilled in combat, your focus shifted to healing wounds and tending to the injured on and off the battlefield. Your knowledge of battlefield medicine provides balance on Int-based medicine, healing items, and diagnosing ailments. You also heal for an additional 1+ your character’s level with healing of any kind. Training Points: Combat +2 / Weapon +1",
            "komuso-monk": "(commoner): Once a member of the Yama clan, you either left the monastery, or were banished. Now you travel, your face hidden from the world you once protected. You start with a basket which you wear over your head, and a bamboo shakuhachi flute which you can play. You have balance on any check to play the flute. When playing for a crowd, you can earn Tama based on the GMs discretion. Training Points: Combat +1 / Social +1 / Weapon +1",
            "knight": "(nobility): You are knighted by the Valorian court. You earned this right either through bloodline or through conquest. When you grant mercy to an enemy, or protect a civilian through combat, you are granted balance on any checks in conversation with that NPC. Training Points: Combat +1 / Social +1 / Weapon +1",
            "merchant": "(commoner): You navigated the intricate world of trade, amassing wealth, connections, and a keen understanding of markets. Your business acumen grants balance on Wit-based checks related to negotiation, appraising goods, and identifying valuable items. Training Points: Social +2 / Combat +1",
            "monk": "(commoner): You dedicated your life to spiritual growth, inner balance, and disciplined martial training in an isolated monestary. Your meditation and clarity provide mental strength, you have balance on Int-based checks to resist trickery and deceit. Training Points: Combat +1 / Weapon +2 ",
            "oniwaban": "(nobility): You appear to others as a commoner, but are part of a network of spies. You are granted unique information based on the GM’s discretion. You may choose the symbol to represent this guild. Wherever the symbol appears, you will find a member nearby with a message. Training Points: Social +2 / Weapon +1",
            "peasant": "(commoner): Born into society with little to no privaleges. The peasants in Sensōji are many, and have power in numbers. +2 to Nmb when hiding or navigating in a town. Training Points: Social +2 / Weapon +1",
            "pirate": "(commoner): Living on the sea, you and your crew would pillage the ships leaving the harbor, only landing to spend what tama you had plundered. When ambushing on, or from the water, you may grant a +3 to the ambush score as long as you are helping with the ambush. (see the encounters for more info). You also have balance on any attacks made while on a boat, and may start with a flintlock pistol. Training Points: Combat +1 / Weapon +2",
            "ronin": "(commoner): A masterless samurai, your wandering spirit grants you a unique perspective on the world. You have no family ties, either by choice, or by the destruction and death of those. You have a natural affinity for traveling, giving you balance on Int checks of survival or finding hidden paths. Training Points: Combat +2 / Weapon +1",
            "sailor": "(commoner): You have studied sailing, and are proficient in navigation, trade on the open seas. Balance on checks to avoid the prone condition. Training Points: Combat +1 / Social +1 / Weapon +1",
            "samurai": "(nobility): You are a revered hero of your clan with a long history in battle. You uphold a strict code of honor and discipline. You have established connections among noble households, gaining access to resources, information, and potential allies via your GM. Training Points: Combat +1 / Social +1 / Weapon +1",
            "shinobi": "(commoner/nobility): A balance of stealth, espionage, and deception make you the perfect assassin. You may add an additional +3 to your first attack roll against any suprised enemy. Training Points: Combat +1 / Social +1 / Weapon +1hinobi are stealthy assassins and spies.",
            "soldier": "(commoner): You are battle-harened warrior. Your time in the military has trained you to be ready for combat at any moment. You have balance on your senkō roll made after a full rest. This does not count for senkō duels. Training Points: Combat +2 / Weapon +1",
            "sumo-wrestler": "(nobility): You are trained in sumo. You may choose how succesful your career was, and how/why/if it ended. Your physical prowess grants balance on checks involving Frt-based, grappling, and strength challenges. Training Points: Combat +2 / Social +1",
            "tea-ceremony-master": "(nobility): You are a revered tea ceremony master, adept in the rituals of chanoyu, subtly weaving philosophy and hospitality into each pot you brew. Once per full rest you make make tea. This tea  grants either balance or unbalance on the next roll within ten minutes for the player or NPC that drinks it. You must choose the tea when making it. Making the tea takes 10 minutes, and requires matcha &hot water. Training Points: Social +3",
            "thief": "(commoner): Surviving on the streets wasn’t easy. You have made your way through life by stealing and pillaging. The question is, does this bring you any pride or satisfaction? Gain a +2 to any Nmb rolls used to steal, pick locks, or to pickpocket. Training Points: Combat +1 / Social +1 / Weapon +1",
            "vassal": "(nobility): Protectors of the Daimyo and other nobility. You serve them not only in ceremonies, but on the battlefield as well. While within 5 feet of an ally you gain +1 armor. This does not effect your speed. Training Points: Combat +1 / Social +1 / Weapon +1",
            // Lineage Descriptions
            "aedoha": "On the opposite side of the world lies Aedoha. It is a vast and unexplored continent. They are the most removed from the rest of the world, and are also the least industrialized. Many people would consider them uncivilized, but any opportunities to conquer them have failed due to the large distance one must cover. Their ways may be the oldest in all the world, and their knowledge of the land is unsurpassed. Their language, Aedohian, is a soft grumbling whisper, and is said to have been passed down to seers by listening to woods of the ancient trees. An Aedohi is one with nature, and feels at peace when traveling the land. Many Aedohi refuse to sleep indoor, and would prefer to sleep under their ancesrty of stars than to an inn. Next time you see a tent pitched outside a major city, stop and pay your respects to nature, and you may just be greated with food over a warm fire, and tales as old as time. Starting Items: Survival Kit & Bo Staff, 50 Tama. Languages: Aedohian, Kofū.",
            "frotheim": "Far to the north are the Nordmun from Frostheim. The land they come from is far too cold to grow plants, or to herd livestock, and so they pillage and raid to stay alive. This war-like culture may have come to pillage the land after so long, but also may have been stuck here after the borders have closed. Many people see the Nordmun as brainless barbarians. The only thing more impressive than their pride is their rich culture of ancestral respect and ancient traditions. Starting Items: Thick Fur Cloak, A Weapon. Languages: Angliach, Kofū.",
            "sensoji": "Natives to the ancient and mystical lands of Sensōji. The Sensō people are very familiar with war. Having not seen peace in over 200 years, the people in this land are weary. Though the people of Sensōji were united under the Nobuyasa Clan, the peace seems to be only the eye of the storm. People from other lands may say that the life of war is the only thing Sensō people understand, but those who know the people are aware of just how valuable and rare peace is in this land. The Sensō people value honor and tradition above all else, and are willing to do anything for it. Starting Items: 1 Piece of Equipment, 100 Tama. Languages: Kofū, Shénmì.",
            "shenmi-isles": "The Xuè people have always been very close to the Sensō people. The East-neighboring Shénmì Isles are a land with rich culture, and even more rich people. Though their culture is closest to that of Sensōji, they pride themsevles of not having seen war in their land for many lifetimes. The culture, and beliefs of their people are close to that of the Sensō, but they do not consider war to be honorable. Moreso they try and find any option possible to avoid war, and instead put their focus on prosperity, both in valuable gems, and in their teachings and way of life. Starting Items: A Small Pack, 300 Tama. Languages: Shénmì, Kofū.",
            "suryadesh": "The people of Suryadesh are Nomads. The land they come from is a harsh landscape of deserts. The people of Suryadesh are known for their ability to traverse long distances and survive off what the land has to offer them. Many people came from Suryadesh to offer trade of distant goods. Though the landscape of Sensōji is much more pleasant to some, the Suryadesh have a deep respect for their harsh homeland. Starting Items: Large Rucksack, Traveling Kit. Languages: Yadeshi, Kofū",
            "valoria": "Valoria is a continent far away to the west. They are a cluster of small countries that all live together prosperously. They have the most advanced weaponry, and were the ones to have first traded rifles to Sensōji. Their weapons and armor are vastly different than those of other cultures. They were large heavy suits of armor with clunky shields. They are much more industrially advanced, and have a very different culture than that of all other lands, but one thing they do have in common is a sense of honor very similar to that of the Sensō people. Their lands have a history of warfare very similar to that of Sensōji. Starting Items: 180 Tama, A shield or armor. Languages: High Valorian, Kofū.",
            "zamundara": "Close to the South of Sensōji  is the large continent of Zamundara. The people of this land are ancient and wise. They still believe shamans can read peoples futures, and speak with their ancestors through rituals. The vast land of Zamundara is always at war, and many tribes within the land fight constantly. Zamundara does not have a concept of leadership, instead they live in a world where every person in their tribe helps one another towards a common goal. And so, though very coarse on the outside, once you befriend a Zamundi, you may have a bloodkin for life. The Zamundi use spears, and are masters when it comes to using them. A Zamundi bonds with their weapon and will never let one leave their side. War is so engrained in their culture, that they often casually refer to dueling simply as dancing. So be very careful if a Zamundi ever asks you to dance. Starting Items: Any Spear, 200 Tama. Languages: Zamu, Kofū.",
            // Clan Descriptions
            "muji": "Anything that is traded in Sensōji goes through the Muji clan at some point. Now that trade has opened to the island of Sensōji, Fairchild’s wealth has catapulted into lordship. Although, many say he was trading with foreigners even though the embargo. ADD ONE FREE TRAINING: Art of Negotiation or Reading Emotions.",
            "nami": "Coming from the Southern border, but then spreading out across the coasts and islands is the Nami clan. The Nami clan is known for their nautical skills as well as many fishing villages scattering the coastlines. he Nami clan are skilled sailors and fishermen, with a deep connection to the sea. ADD 1 FREE TRAINING: Fishing or Art of Sushi.",
            "shinta": "The Midwestern clan responsible for most of the crops grown in Sensōji. Most of the trails created throughout the land were made by this clan. They are one of the oldest clans, and are looked at respectfully by the people but seen as simple but necessary peasants by nobles. The Great Rice Fields Shintamura is renowned for are meticulously cultivated by generations of Shinta farmers. The fields stretch as far as the eye can see, painting the landscape in hues of green and gold during the harvest  season. The Great Canal can be seen from miles away and it an attraction for visitors as well as a source of life-brining water to many Sensō people. ADD 1 FREE TRAINING: Cooking or Foraging.",
            "susu": "A town beneath a dormant volcano in Sensōji. The sun turns blood red from the ash raining constantly from the mountain. These villages are the most poor in Sensōji, and are full with greed, criminals, and exiles. The Susu clan is very rarely respected by anyone in the land. ADD ONE FREE TRAINING: Veil of Disguise or Eavesdroping.",
            "tani": "The clans covering the vast valleys beneath the mountains. The Tani clan are known for being Nomads, traveling and stealing as they go. Thieves and brigands living for themselves as barbarians. ADD ONE FREE TRAINING: Trapping or Bushcraft.",
            "tetsu": "Master swordsmith’s and iron workers of all kind. Known for their smithing villages. Most of what they make now is industrial by nature, and no longer focus on weapons. All of the master weapon smiths have either been taken by the Shōgun, or are in hiding. It is said that the Shōgun is using the Tani swordmiths to create rifles and other guns for his army. ADD ONE FREE TRAINING: Crafty or Alchemy.",
            "yama": "Keepers of the shrines across Sensōji. The Yama clan is known for their sacred monasteries, and all monks live here during their training. Many spiritual pilgrimages end in Yama territory. The monks train vigorously with all types of weapons, and are bound by honor to feed, house, and protect any that come into their territory. ADD ONE FREE TRAINING: Unarmed Combat or Honorable Etiquette.",
            // Birth Sign Descriptions
            "foxsquirrel": "The foxsquirrel represents courage and cleverness. Mutsuki is the month of the Foxsquirrel. Those born in this month are known for being agile and quick. Though the foxsquirrel is small in nature, their courage in the face of danger is astounding.",
            "hawk": "The hawk represents skill and swiftness. Kisaragi is the month of the hawk. The spirit of the hawk is speed and agility. The hawk strikes quickly upon their unsuspecting prey.",
            "moth": "The moth represents focus and thoughtfulness. As winter changes into spring, so does the caterpillar to the moth. Those born in the month of Yayoi are said to be kniving, waiting for the right opportunity to strike, and using their wits rather than brute force.",
            "snake": "The snake represents skill and patience. The spirit of Uzuki is the blind white snake. The snake need not rely on it’s sight to know when to strike. Those born in April are known for their patience; using their keen intuition, and knowing exactly where they need to be.",
            "spider": "The spider represents skill and trickery. She dances around in her fine silk, taunting her prey that fall into her traps. Those born in the month of Satsuki are known for laying traps, both on the battlefield, and in conversation, and are always playing with their food.",
            "boar": "The boar represents courage and ferocity. He runs into battle without a thought for his own safety. Those who are born in the month of Minazuki know no fear. You will never find one waiting for their turn. They take what they need and let none stand in their way.",
            "crane": "The crane represents focus and an uplifting presence. She is graceful, yet not blisfully so. Those born in the month of Fumizuki will find themselves wandering like driftwood, letting the currents of life take them where know they belong. They do not fight change, they welcome it gracefully adapting to each situation.",
            "turtle": "The turtle represents courage and toughness. He floats through the storm, his shell protecting himself and any others who have earned his trust. Those born in Hazuki are proud of who they are. They may take time to warm up to you, but when they do, they will be the truest of friends, protecting you with their lives.",
            "twin-owls": "The twin owls represent focus and balance. Thewhite and black owl are in balance, as are the yin and yang. Those who are born in Nagatsuki will bond quickly with friends, No matter where they are in life, they will create a home, and a family.",
            "koi-fish": "The koi fish represents courage and love. He isresplendant and astute. Those born in Kannazuki are unfaltering in grace. They would do everything theycould to help others, and to do what needs to be done. They know that something as simple as a smile can brighten ones day. Though loving and kind, they are astute enough to knoe that some weeds must be pulled in order for the garden to stay healthy.",
            "tanuki": "The tanuki represents skill and trickery. He is sly, and loves to play tricks on creatures, often disguising himself as a human. Those born in Shimotsuki take delight in playing tricks, and are not afraid of the spotlight. But don’t blink, or they may get away.",
            "monkey": "The monkey represents focus and single-mindedness. He is meditative, but always aware. Those born in Shiwasu find themselves drawn to peculiar things. Once captivated, they will never withdrawl. They will spend their whole life looking for perfection in what they most desire.",
        };

        // Function to show description based on selected option
        function showDescription(selectElement) {
            // Get the selected option
            var selectedOption = selectElement.value;
            // Get the description div associated with this dropdown
            var descriptionDiv = selectElement.parentElement.querySelector(".description");
            // Set the description text based on the selected option
            descriptionDiv.textContent = descriptions[selectedOption];
        }


                
document.getElementById("file-input").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const portraitImage = document.getElementById("portrait-image");
            portraitImage.src = e.target.result;
            portraitImage.style.display = "block";
            document.getElementById("upload-instruction").style.display = "none";
            
            // Hide the filename display
            var filenameDisplay = document.getElementById("file-name-display");
            filenameDisplay.style.display = "none";
        }
        reader.readAsDataURL(file);
    }
});
function uploadImage() {
    // Placeholder function for uploading image
    // For demonstration purposes, let's assume the image is uploaded successfully
    var imageUrl = "example.jpg"; // URL of the uploaded image
    var portraitImage = document.getElementById("portrait-image");
    portraitImage.src = imageUrl;
    
    // Constrain the image to the original circle size
    portraitImage.style.maxWidth = "100px"; // Adjust as needed
    portraitImage.style.maxHeight = "100px"; // Adjust as needed
    portraitImage.style.borderRadius = "50%"; // Set the border radius to 50% to maintain circular shape
    
     