const faction_data = [
    {
        name: "The Billhooks",
        tier: 2,
        hold: "Weak",
        desc: "A tough gang of thugs who prefer hatchets, meat hooks and pole arms.",
        clocks: [
            {
                name: "Terrorize magistrates to pardon members in prison",
                size: 8,
            },
        ],
        turf: "A butcher shop (HQ), stockyard, and slaughterhouse. Animal fighting pits and gambling dens. Several terrified merchants and businesses, which they extort.",
        npcs: [
            "Tarvul (leader, serving life in prison, savage, arrogant, family man)",
            "Erin (captain, Tarvul's sister, confident, deadly, ambitious)",
            "Coran (thug, Tarvul's son, fierce, loyal, quiet)",
        ],
        assets: [
            "A large gang of bloodthirsty butchers",
            "A pack of death-dogs",
        ],
        quirks: "The Billhooks have a bloody reputation, often leaving the butchered corpses of their victims strewn about in a grisly display. Many wonder why the Bluecoats turn a blind eye to their savagery.",
        allies: [
            "The Bluecoats",
            "Ministry of Preservation",
        ],
        enemies: [
            "Ulf Ironborn",
            "The Lost",
            "Citizenry of Crow's Foot and the Docks",
        ],
        situation: "Erin and Coran both want to take control of the Billhooks gang, either when Tarvul gets too old (which will be soon) or by taking the position by force. There is no love lost between Erin and Corran and they’ll have no qualms about fighting a family member for leadership. Meanwhile, the rest of the gang wants to continue their reign of terror to pressure a magistrate to pardon Tarvul and other gang members and release them from Ironhook.",
    },
    {

        name: "The Bluecoats",
        tier: 3,
        hold: "Strong",
        desc: "The City Watch of Duskwall. Known as the meanest gang in the city. Corrupt, violent, and cruel.",
        clocks: [
            {
                name: "Procure bigger budget, military arms & equipment",
                size: 8,
            }
        ],
        turf: "The Bluecoats claim the whole city as their turf, but find their influence severely limited in Whitecrown, where the Imperial Military garrison holds sway under command of the Lord Governor.",
        npcs: [
            "Commander Clelland (chief commissioner of the City Watch, corrupt, cruel, arrogant)",
            "Captain Michter (chief instructor, ambitious, fierce, confident)",
            "Captain Vale (quartermaster, loyal, insightful, quiet)",
        ],
        assets:[
            "Many large gangs of vicious thugs in uniform.",
            "Armored coaches and canal patrol boats.",
            "Public punishment sites (pillories, stocks, hanging cages).",
        ],
        quirks: "The Bluecoats are divided into companies by district, and they have fierce rivalries, encouraged by their superiors—often good-natured, but sometimes violent.",
        allies: [
            "The City Council",
            "The Billhooks",
            "The Crows",
            "Ironhook Prison",
            "Lord Scurlock",
            "The Unseen",
        ],
        enemies: [
            "Imperial Military",
            "many criminal organizations",
        ],
        situation: "The Bluecoats have become jealous of the elite hardware and vehicles used by the Imperial Military. They want to refit their watch-guards in heavy armor and weapons, to better strike fear into those they prey upon.",
    },
    {
        name: "The Church of Ecstasy",
        tier: 4,
        hold: "Strong",
        desc: "The “state religion” honors the life of the body and abhors the corrupted spirit world. Essentially a secret society.",
        clocks: [
            {
                name: "Unlock the secret of ascension",
                size: 12,
            },
            {
                name: "Eliminate the Reconciled",
                size: 12,
            },
        ],

        turf: "The Sanctorium grand cathedral in Brightstone. Many other smaller temples across the city.",

        npcs: [
            "Elder Rowan (leader, devout, resolute, visionary)",
            "Preceptor Dunvil (arcane researcher, unorthodox, obsessive, enigmatic)",
        ],

        assets: [
            "A large treasury of tithes from citizens",
            "Extensive arcane and occult libraries, workspaces, and artifacts",
            "Many cohorts of acolytes and hollows who enforce the will of the Church’s leadership",
        ],

        quirks: "Zealous believers volunteer to be hollowed to “become purified.” This was once common among the ancient cult of the Empty Vessel, which preceded the Church.",

        allies: [
            "City Council", 
            "Leviathan Hunters",
            "Spirit Wardens",
        ],

        enemies: [
            "The Path of Echoes", 
            "The Reconciled",
        ],

        situation: "The purest beings (according to secret teachings of the Church), are those entirely without spirits: the demons. Demons are immortal, but never fade into madness or lustful hungers as rogue human spirits and vampires do. They are perfect; and the most devout of the Church seek to become as they are, to unlock the secret of ascension. Many dark experiments and rituals with hulls, hollows, vampires—and the rare demon—are conducted in the labyrinthine dungeons below the Church’s chief cathedral in Brightstone.",
    }, 
    {
        name: "The Circle of Flame",
        tier: 3,
        hold: "Strong",
        desc: "A refined secret society of antiquarians and scholars; cover for extortion, graft, vice, and murder.",
        clocks: [
            {
                name: "Acquire all the ancient artifacts of Kotar",
                size: 8,
            },

        ],
        
        turf: "The Centuralia club, Six Towers (HQ).",
        npc_detail: "The Seven (leadership)",
        npcs: [
            "Elstera Avrathi (Iruvian diplomat, secretive, gracious)", 
            "Lady Drake (magistrate, cunning, ruthless)", 
            "Raffello (painter, visionary, obsessive)", 
            "Lord Mora (noble, cold, suspicious)",
            "Lady Penderyn (noble, charming­, patient)", 
            "Madame Tesslyn (vice purveyor, sophisticated, subtle)", 
            "Harvale Brogan (vice purveyor, shrewd, quiet)",
        ],

        assets: [
            "Vast treasury provided by wealthy membership", 
            "Impressive collection of ancient artifacts, maps, and ephemera", 
            "Highly trained and discreet private security force",
        ],
        
        quirks: "One of The Seven is actually a demon in disguise.",

        allies: [
            "The Forgotten Gods", 
            "The Path of Echoes", 
            "City Council", 
            "The Foundation",
        ],

        enemies: [
            "The Hive", 
            "The Silver Nails",
        ],

        situation: "The Circle has an extensive library of scholarly works that catalog many of the arcane artifacts and valuable treasures that disappeared when the Lost District was abandoned outside the lightning barrier. Of special interest are the remains of Kotar, a legendary sorcerer, demon, or hero who was mummified before the cataclysm. The Eye, Hand, and Heart of Kotar are said to possess great power for those bold enough to risk their use.",
    },
    {    
        name: "City Council",
        tier: 5,
        hold: "Strong",
        desc: "The elite nobility who run the city government, its treasury, magistrates, and public works.",
        clocks: [
            {
                name: "Strangford is removed from council",
                size: 6,
            },
            {
                name: "Strangford eliminates threats",
                size: 8,
            },

        ],

        turf: "The city council chambers are in Charterhall, along with the attendant government offices and impregnable city treasury vaults. The council also holds ownership of all public spaces in the city, including streets, docks, and waterways.",
        npc_detail: "The scions of the six most powerful noble families in Doskvol",
        npcs: [
            "Bowmore", 
            "Clelland", 
            "Dunvil", 
            "Penderyn", 
            "Rowan", 
            "Strangford",
        ],

        assets: [
            "A massive treasury of coin and valuable goods", 
            "Many officials, barristers, clerks, and officials", 
            "The public coaches operated by the Cabbies",
        ],
        
        quirks: "The members of the Council are all high-ranking adepts in the Church of the Ecstasy of the Flesh. Some of them are also secretly initiates in the Path of Echoes.",
        
        allies: [
            "Bluecoats", 
            "The Church of Ecstasy", 
            "The Circle of Flame", 
            "Lord Scurlock", 
            "The Brigade", 
            "Cabbies", 
            "Sparkwrights", 
            "The Foundation",
        ],
        
        enemies: [
            "Imperial Military", 
            "Inspectors", 
            "Ministry of Preservation", 
            "The Reconciled",
        ],
        
        situation: "Three of the councilors (Bowmore, Clelland, Rowan) have aligned against Strangford and are maneuvering to remove the house from the council. Dunvil and Penderyn have not taken sides so far. Can the conspirators arrange for the necessary scandal, framed crime, or assassinations to remove Strangford? Or can Strangford House stand against them and eliminate the threats?",
    },
    {    
        name: "The Crows",
        tier: 2,
        hold: "Weak",
        desc: "An old gang with new leadership. Known for running illegal games of chance and extortion rackets.",
        clocks: [
            {
                name: "Reestablish control of Crow's Foot",
                size: 6,
            },
            {
                name: "Rise in Tier",
                size: 6,
            },

        ],

        turf: "Claims all of Crow’s Foot as their turf. Everyone in the district pays up the chain to them. HQ in an abandoned City Watch tower. Operates gambling dens in Crow’s Foot and extortion rackets at the Docks.",

        npcs: [
            "Lyssa (leader, brash, killer, noble family)",
            "Bell (second-in-command, loyal)",
        ],

        assets: [
            "A veteran gang of thugs and killers", 
            "A number of small boats",
            "A fortified HQ",
        ],

        quirks: "Roric’s body was lost during his murder (it fell into a canal). His vengeful ghost is now at large in the city.",

        allies: [
            "The Bluecoats", 
            "Sailors", 
            "The Lost", 
            "Citizens of Crow’s Foot",
        ],

        enemies: [
            "The Hive", 
            "Inspectors", 
            "Dockers",
        ],

        situation: "Lyssa murdered the former boss of the Crows, Roric. She is a fearsome killer, and few want to cross her, but her position as leader of the Crows is uncertain. Some were very loyal to Roric. As the power-play continues, the Crows’ hold on the district just might slip away.",
    },
    {    
        name: "Deathlands Scavangers",
        tier: 2,
        hold: "Weak",
        desc: "Convicts from Ironhook and desperate freelancers who roam the wasteland beyond the lightning barriers.",
        clocks: [
            {
                name: "Obtain pardons (repeating)",
                size: 8,
            },

        ],
        
        turf: "A few precious hold-fasts in the deathlands, secured by ancient rites against spirits. Hunting grounds to feed on the few strange animals that survived the cataclysm.",

        npcs: [
            "Lady Thorn (leader, haunted, brave, caring)", 
            "Richter (hunter, patient, quiet, deadly)",
        ],

        assets: [
            "generators", 
            "lightning hooks", 
            "gas-masks", 
            "air tanks", 
            "other essentials of deathlands survival",
            "a secret ancient book of ritual sorcery",
        ],

        quirks: "Possession is a common hazard, and scavengers either learn to deal with it, or go mad and vanish into the darkness of the wastes. Those still in Lady Thorn’s company have adapted well and suffer only minimal ill effects from possession.",

        allies: [
            "Forgotten Gods", 
            "Gondoliers", 
            "Spirit Wardens",
        ],

        enemies: [
            "Ironhook Prison",
        ],

        situation: "Condemned prisoners are sometimes given “mercy” and sent into the deathlands rather than being executed at Ironhook. A few survive, thanks to Lady Thorn and her deathlands scavengers, who take them in and train them in the ways of deathlands hunting and survival. The scavengers hunt for lost artifacts and treasures in the wastes, to sell or trade in the city, sometimes for enough to buy a pardon and return to life within the barriers once again.",
    },
    {    
        name: "The Dimmer Sisters",
        tier: 2,
        hold: "Strong",
        desc: "House-bound recluses with an occult reputation.",
        clocks: [
            {
                name: "Dominate the spirit trade",
                size: 6,
            },
            {
                name: "Obtain arcane secrets (repeating)",
                size: 4,
            },

        ],

        turf: "Fine old manor house and grounds (HQ), as well as the ancient temple ruin and subterranean canal beneath. Apothecaries and witches in their service.",

        npc_detail: "There is no single leader of the Sisters; their true names are not known.",
        npcs: [
            "Roslyn (servant, patient, loyal, arcane, deals with contacts outside the house)",
            "Irelen (spark-craft tinkerer, loyal, enigmatic, obsessive)",
        ],

        assets: [
            "a private electroplasmic generator", 
            "lightning barriers", 
            "spirit containment vessels", 
            "many spirits bound to service",
        ],

        quirks: "The precise number of sisters is unknown. Some say they are an ancient family of possessing spirits. Others say they are vampires. Everyone knows that if you go into their house, you never come out again.",

        allies: [
            "The Forgotten Gods", 
            "The Foundation",
        ],

        enemies: [
            "Spirit Wardens", 
            "The Reconciled",
        ],

        situation: "The Sisters have been slowly and secretly consolidating the trade of captured spirits and spirit essences in Doskvol for several decades. Only a few remaining rivals stand between them and domination of the market. Do they have an ulterior motive for acquiring so many spirits and essences, or is this purely a matter of wealth and power?",
    },
    {    
        name: "The Fog Hounds",
        tier: 1,
        hold: "Weak",
        desc: "A crew of rough smugglers looking for a patron.",
        clocks: [
            {
                name: "Eliminate rival smugglers",
                size: 8,
            },
            {
                name: "Obtain a regular patron",
                size: 6,
            },

        ],
        
        turf: "Underground canal dock (HQ). North and East city canal routes. Northern Void Sea routes. Old North Port supply caches.",

        npcs: [
            "Margette Vale (leader, quiet, cold, fearless)", 
            "Bear (second, fierce, moody, brash)",
            "Goldie (navigator, calculating, patient, confident)",
        ],

        assets: [
            "medium steamship, Fog Hound", 
            "a crew of hard-bitten, tough, expert sailors—all former Void Sea transport haulers (put out of work by the new cargo rail lines), well-worn from years of harrowing work",
            "a wide array of Imperial transport and cargo documents, some forged, some legit",
        ],

        quirks: "As veterans of many cruises on the Void Sea, Vale and her crew can be insular and clannish, and have a low initial opinion of anyone who hasn’t proven themselves in a similar way. Once won, however, their loyalty is rock solid and fierce.",

        allies: [
            "Dockers", 
            "The Lampblacks",

        ],
        enemies: [
            "Bluecoats (canal patrol)", 
            "The Vultures (rival smuggling outfit, tier: 1)",
        ],

        situation: "Vale and her crew have mastered the Northern smuggling routes in and out of Duskwall. They’re currently attempting to absorb or eliminate the few remaining rivals on their territory and then establish reliable, regular work with a patron who needs a steady stream of contraband.",
    },
    {   
        name: "Gondoliers",
        tier: 3,
        hold: "Strong",
        desc: "The canal boat operators. Venerated by ancient tradition. Said to know occult secrets (many things are submerged in the Dusk).",
        clocks: [
            {
                name: "Investigate desecrated hollows",
                size: 8,
            },
            {
                name: "Destroy spirit wells (repeating)",
                size: 4,
            },

        ],

        turf: "The canals of Doskvol. Even the Bluecoats’ canal patrol pays respect to them.",

        npcs: [
            "Eisele (leader, serene, knowledgeable, fearless)", 
            "Griggs (chief Whisper, strange, ruthless, haunted)",
        ],

        assets: [
            "fleet of gondolas and other water-craft", 
            "map of known spirit wells and arcane sites across the city", 
            "a dedicated cohort of Adepts",
        ],

        quirks: "Initiation into the Gondoliers grants the Whisper’s Compel special ability.",

        allies: [
            "The Lampblacks", 
            "Citizenry of all districts",
        ],

        enemies: [
            "The Red Sashes", 
            "Spirit Wardens",
        ],

        situation: "Killers have disposed of bodies in the canals of Doskvol for centuries. The vengeful ghosts that rise from the corpses are a serious threat—a threat dealt with by the Gondoliers since ancient times. Before the Spirit Wardens were created by the Emperor, the Gondoliers protected citizens from rogue spirits and supernatural dangers of all kinds. The Gondoliers are beloved by most citizens, who prefer to go to them with “weird problems” rather that relying on the ruthless and indiscriminate judgment of the Spirit Wardens. A sudden influx of ritually disfigured hollows dumped in the canals has sparked investigation by the Gondoliers (the Spirit Wardens are pointedly ignoring the situation).",
    },
    {   
        name: "The Gray Cloaks",
        tier: 2,
        hold: "Strong",
        desc: "A crew of former Bluecoats turned to crime after being framed and expelled from the City Watch.",
        clocks: [
            {
                name: "Secure Six Towers as their turf",
                size: 8,
            },
            {
                name: "Avenge their expulsion",
                size: 8,
            },

        ],

        turf: "The basement of a burned-down City Watch station (HQ). Several apartments above a tobacconist in Six Towers. A pit-fighting arena and gambling den.",

        npcs: [
            "Nessa (leader, scrupulous, daring)", 
            "Hutch (second, brash, fierce)",
        ],

        assets: [
            "The Gray Cloaks have attracted other former Bluecoats to their crew, amassing a sizeable gang of trained enforcers",
            "They have their old uniforms and badges and often use them to pass as the City Watch",
        ],

        allies: [
            "The Inspectors",
        ],

        enemies: [
            "Bluecoats", 
            "Lord Strangford (Leviathan Hunters)",
        ],

        situation: "The Gray Cloaks are all former Bluecoats who were framed for a crime committed by their Watch station commander. Sure, they were skimming from the city coffers and taking bribes like everyone else, but they didn’t burn down the Watch station and destroy the evidence in the case against Lord Strangford (of the Leviathan Hunters). Several inspectors who were working the case know the truth but can’t prove anything—yet. Lord Strangford would pay well to have these loose ends removed permanently.",
    },
    {    
        name: "The Grinders",
        tier: 2,
        hold: "Weak",
        desc: "A vicious gang of former dockers and leviathan blood refinery workers.",
        clocks: [
            {
                name: "Raise a crew, steal a war ship",
                size: 12,
            },
            {
                name: "Fill a war treasury",
                size: 12,
            },

        ],
        turf: "Abandoned dock warehouse (HQ) and underground canal dock.",

        npcs: [
            "Hutton (leader, confident, volatile)",
            "Sercy (second, crippled, defiant)",
            "Derret (toughest gang member, huge, shrewd)",
        ],

        assets: [
            "A few small canal boats", 
            "Wrecking tools and explosives",
        ],

        quirks: "Many Grinders have been mutated by the toxic rain that plagues Lockport.",

        allies: [
            "Ulf Ironborn", 
            "Dockers",
        ],

        enemies: [
            "Bluecoats", 
            "Imperial Military", 
            "Leviathan Hunters", 
            "Sailors", 
            "The Silver Nails",
        ],

        situation: "The city of Lockport, to the North in Skovlan, processes 90% of the demon blood siphoned by the leviathan hunter ships of Doskvol (the hunters drop their raw cargo at Lockport before filling their holds with refined blood and returning to Doskvol for repairs and replacement crew for those lost to the Void Sea). The huge, churning refineries in Lockport have poisoned the city under a stinking cloud of toxic fumes and acid rain. A group of dockers and refinery workers from Lockport have come to Doskvol to raise an army and secure a warship with which to seize control of Lockport and destroy the Empire’s refineries. They call themselves “the Grinders.” To raise funds for their mission, the Grinders have turned to criminal endeavors, especially smash & grab looting and hijacking of cargo barges across the city.",
    },{    
        name: "The Hive",
        tier: 4,
        hold: "Strong",
        desc: "A guild of legitimate merchants who secretly trade in contraband. Named for their symbol, a golden bee.",
        clocks: [
            {
                name: "Dominate contraband market",
                size: 8,
            },
            {
                name: "Avenge Roric's murder",
                size: 6,
            },

        ],

        turf: "Many shops, taverns, cafes, warehouses, and other mercantile establishments all across the city. No centralized HQ.",

        npcs: [
            "Djera Maha (leader, bold, strategic, confident)",
            "Karth Orris (mercenary commander, ruthless, insightful, jealous)",
        ],

        assets: [
            "A massive treasury", 
            "Elite mercenaries on retainer", 
            "A fleet of transport ships, carriages, wagons, and private trains",
        ],

        quirks: "The Hive is known to avoid doing business with any occult or arcane groups. The Church of Ecstasy is popular among Hive members, who reject the superstitions and weird practices of the past.",

        allies: [
            "Ministry of Preservation", 
            "Dagger Isles Consulate",
        ],

        enemies: [
            "The Circle of Flame", 
            "The Unseen", 
            "The Crows", 
            "The Wraiths",
        ],

        situation: "Djera Maha grew up as an urchin in the Dagger Isles. She learned all the secrets of vice and smuggling as she worked her way up the ranks of every gang along the trade routes to Doskvol. Having built up her acquisition and distribution network in the city (as well as within the Ministry of Preservation) she is poised to take over all of the contraband markets. Maha had a close relationship (some say romantic) with the leader of the Crows, Roric, who was recently murdered by his second-in-command.",
    },{    
        name: "The Lampblacks",
        tier: 2,
        hold: "Weak",
        desc: "The former lamp-lighter guild, turned to crime when their services were replaced by electric lights.",
        clocks: [
            {
                name: "Destroy the Red Sashes",
                size: 8,
            },
            {
                name: "Become ward boss of Crow's Foot",
                size: 8,
            },

        ],

        turf: "HQ in the office of a coal warehouse. Operates a handful of brothels and cheap drug dens across Crow’s Foot.",

        npcs: [
            "Bazso Baz (leader, charming, open, ruthless, whiskey connoisseur)", 
            "Pickett (second, shrewd, conniving, suspicious)",
            "Henner (thug, loyal, reckless)",
        ],

        assets: [
            "A fearsome gang of leg-breakers and mayhem-makers", 
            "A number of smugglers on the payroll who run their drugs",
        ],

        quirks: "Bazso Baz is a member of a secret society (forgotten gods cult, “The Empty Vessel”) and sometimes puts the needs of that group ahead of the well-being of his gang.",

        allies: [
            "The Fog Hounds", 
            "Gondoliers", 
            "Ironhook Prison",
        ],

        enemies: [
            "The Red Sashes", 
            "The Bluecoats", 
            "Cabbies",
        ],

        situation: "The Lampblacks and the Red Sashes are at war over turf and vengeance for deaths on both sides. Bazso Baz is recruiting every free blade in the district for extra muscle and doesn’t take no for an answer. You’re either with them or against them. The Lampblacks are not particularly well-connected politically, but are akin to folk-heroes among the working class, who see them as “lovable rogues” standing up to the powers-that-be.",
    },{    
        name: "Leviathan Hunters",
        tier: 5,
        hold: "Strong",
        desc: "The captains and crews that grapple with titanic demons of the Void Sea to drain their blood for processing into electroplasm.",
        clocks: [
            {
                name: "Discover new hunting grounds",
                size: 12,
            },
            {
                name: "Surplus runs dry",
                size: 12,
            },

        ],

        turf: "The massive metal docks for the huge hunter ships and the associated construction and repair facilities. Several small private leviathan blood processing facilities for the captains’ personal shares.",

        npcs: [
            "Lord Strangford (captain, ruthless, arrogant, tainted)", 
            "Lady Clave (captain, daring, cruel, accomplished)",
            "Lady Ankhayat (Iruvian captain, confident, charming, scoundrel)",
        ],

        assets: [
            "The leviathan hunter fleet (each vessel is owned by the noble house who built and commands it)", 
            "Many cohorts of expert sailors, as well as spark-craft technicians, demonologist Whispers, and void-touched navigators",
            "Companies of marines to protect the vessels and their valuable cargo at sea and in port",
        ],

        allies: [
            "City Council", 
            "The Church of Ecstasy", 
            "Sailors", 
            "Dockers", 
            "Sparkwrights",
        ],

        enemies: [
            "The Grinders", 
            "Ministry of Preservation", 
            "The Path of Echoes",
        ],

        situation: "The captains have a horrible secret: the known hunting grounds for leviathans are coming up barren. The immortal creatures, once so reliable in their movements in the Void Sea, have begun to migrate elsewhere. New hunting grounds must be found before the surplus of leviathan blood disappears, and with it, the lightning barriers and the survival of the human race.",
    },{    
        name: "The Lost",
        tier: 1,
        hold: "Weak",
        desc: "A group of street-toughs and ex-soldiers dedicated to protecting the downtrodden and the hopeless.",
        clocks: [
            {
                name: "Destroy cruel workhouses (repeating)",
                size: 4,
            },

        ],
        
        turf: "Converted rail car (HQ). The poverty-stricken streets of Coalridge and Dunslough.",

        npcs: [
            "Cortland (leader, idealist, candid, cavalier)",
        ],

        assets: [
            "A very experienced gang of formerly vicious thugs, killers, and Imperial soldiers",
        ],
            
        quirks: "The Lost have all done horrible things in their former lives and they believe they must atone for these “sins.” Each member keeps a pile of stones under their bed—one for each sin they balance with a just deed.",

        allies: [
            "Workhouse Laborers", 
            "Citizens of Coalridge and Dunslough", 
            "The Crows",
        ],

        enemies: [
            "Workhouse Foremen", 
            "Bluecoats", 
            "The Billhooks",
        ],

        situation: "The Lost are currently focusing their efforts in Coalridge, running a campaign of sabotage, terror, and savage beatings against the most notoriously cruel workhouse foremen. The already-brewing union organizing efforts in that district are emboldened by the Lost’s attacks, and the local Bluecoat patrols are starting to complain to their commanders for support of extra Watch guards from other districts. Meanwhile, the Coalridge foremen are making it known that they’ll pay top dollar to anyone who will take the Lost out of the picture.",
    },{    
        name: "Ministry of Preservation",
        tier: 5,
        hold: "Strong",
        desc: "Oversees transportation between cities and the disbursement of food and other vital resources.",
        clocks: [
            {
                name: "Seize control of Leviathan Hunters",
                size: 12,
            },

        ],

        turf: "The electro-rail train lines of the Imperium. Radiant energy farms, eeleries, and other food-growing enterprises throughout the city.",

        npcs: [
            "Lord Dalmore (executive officer in Doskvol, commanding, intelligent)",
            "Lady Slane (chief of operations, insightful, subtle, effective)", 
            "Captain Lannock (mercenary commander, shrewd, ruthless)",
        ],

        assets: [
            "A fleet of cargo ships and their armed escorts",
            "A significant treasury from taxation and transportation licensing", 
            "The Rail Jacks who work the train lines", 
            "A private mercenary company that answers only to the ministry itself",
        ],

        allies: [
            "The Billhooks", 
            "Imperial Military", 
            "Rail Jacks", 
            "Sparkwrights",
        ],

        enemies: [
            "Leviathan Hunters",
        ],


        situation: "The Ministry leadership believes that the leviathan hunters are too vital to the public well-being to be controlled by the bickering noble houses, vulnerable to their petty rivalries and vendettas. Agents within the ministry have been tasked with a variety of espionage, sabotage, and political actions to ultimately seize control of the hunters and bring them into Ministry control.",
    },{    
        name: "The Reconciled",
        tier: 3,
        hold: "Strong",
        desc: "An association of ancient spirits who have not gone feral with the passage of time.",
        clocks: [
            {
                name: "Infiltrate the City Council",
                size: 8,
            },
            {
                name: "Infiltrate the Church of Ecstasy",
                size: 8,
            },

        ],

        turf: "None.",

        npcs: [
            "The Reconciled have possessed several important citizens in Doskvol. Their exact membership is not known."
        ],

        assets: [
            "Several secret and hidden spirit wells across the city and in the deathlands, which give the Reconciled the arcane energy they need to survive",

        ],
        quirks: "The spirits of the Reconciled do not lose their minds or become obsessed with vengeance as other spirits do. They can possess a victim indefinitely without any adverse effects.",

        allies: [
            "City Council", 
            "Gondoliers",
        ],

        enemies:[
            "The Church of Ecstasy", 
            "Spirit Wardens", 
            "Sparkwrights",
        ],
        situation: "The Reconciled are very ancient and wise; they see themselves as the rightful and just rulers that Duskwall needs. A few of the City Council members have become initiates in the Path of Echoes and will soon be vulnerable to possession by the Reconciled. These councilors are also high-ranking members of the Church of the Ecstasy of the Flesh, which will give the Reconciled an opportunity for infiltration into that organization as well.",
    },{    
        name: "The Red Sashes",
        tier: 2,
        hold: "Weak",
        desc: "Originally a school of ancient Iruvian sword arts, since expanded into criminal endeavors.",
        clocks: [
            {
                name: "Destroy the Lampblacks",
                size: 8,
            },
            {
                name: "Become ward boss of Crow's Foot",
                size: 8,
            },

        ],

        turf: "HQ in their sword-fighting school/temple. Operates a handful of high-end drug dens across Crow’s Foot and the Docks.",

        npcs: [
            "Mylera Klev (leader, shrewd, ruthless, educated, art collector)",
        ],

        assets: [
            "Small contingent of master sword-fighters", 
            "Master alchemist",
            "many potent potions and essences",
        ],

        quirks: "Several members of the Red Sashes are the sons and daughters of Iruvian nobility and diplomats in Doskvol. They train in swordplay at the school and sometimes participate in gang activities. Their families are powerful and will commit significant resources to punishing anyone who harms their children.",

        allies: [
            "Iruvian Consulate", 
            "The Path of Echoes", 
            "Dockers", 
            "Cabbies", 
            "Inspectors",
        ],

        enemies: [
            "The Lampblacks", 
            "Bluecoats", 
            "Gondoliers",
        ],

        situation: "The Red Sashes and the Lampblacks are at war over turf and vengeance for deaths on both sides. Mylera is recruiting every free blade in the district for extra muscle and doesn’t take no for an answer. You’re either with them or against them. The Red Sashes are very well-connected, with former sword students placed at the Iruvian Consulate, in the Path of Echoes, and among the Inspectors.",
    },{    
        name: "Lord Scurlock",
        tier: 3,
        hold: "Strong",
        desc: "An ancient noble, said to be immortal, like the Emperor. Possibly a vampire or sorcerer. Obsessed with the occult.",
        clocks: [
            {
                name: "Fulfill debt to Setarra",
                size: 12,
            },
            {
                name: "Obtain arcane secrets (repeating)",
                size: 6,
            },

        ],

        turf: "A secret lair outside the city. A dilapidated manor house in Six Towers and the catacombs beneath. An array of business holdings and cult shrines across the city, collected for some united purpose known only to Scurlock.",

        npcs: [
            "Lord Scurlock (enigmatic, cold, arcane, old-fashioned) is an individual, but is so powerful that he’s considered a faction. His personal scale is tier: 3,—in conflicts he counts as a large gang (20 people)",
        ],

        assets: [
            "An impressive collection of occult and arcane curios, books, and ephemera", 
            "An ancient demonic temple",
        ],

        quirks: "Scurlock is immune to spirits. Ghosts can’t see, hear, or harm him. He makes no sound when he moves and is sometimes difficult to look at directly.",

        allies: [
            "City Council", 
            "Bluecoats", 
            "Inspectors", 
            "The Forgotten Gods",
        ],

        enemies: [
            "Spirit Wardens", 
            "The Immortal Emperor",
        ],

        situation: "Lord Scurlock is bound by ancient magic to the demon Setarra. Who is the master and who is the servant? Their roles have changed many times over the centuries. Now, Lord Scurlock must fulfill a debt. Setarra has found a nest of sea demons in the harbor, encased in stone, chained by magic from the cataclysm. She seeks to free them to see their wrath loosed on the world of men. Scurlock will aid her in this or suffer a dark doom.",
    },{    
        name: "The Silver Nails",
        tier: 3,
        hold: "Strong",
        desc: "A company of Severosi mercenaries who fought for the Empire in the Unity War. Renowned ghost killers.",
        clocks: [
            {
                name: "Destroy spirits in the Lost District",
                size: 8,
            },
            {
                name: "Control the Lost District",
                size: 8,
            },

        ],

        turf: "A large inn (The Mustang) and its fine stables (HQ).",

        npcs: [
            "Seresh (leader, bold, brash, defiant)",
            "Tuhan (lead scout, bold, cunning, charming)",
        ],

        assets: [
            "A contingent of exquisite Severosian cavalry horses—fearless, swift, and trained to hunt and battle spirits",
            "Arcane lances",
        ],

        quirks: "Each member wears a ring fashioned from a silver nail, which protects against possession. They’re trained in the Ghost Fighter special ability (Cutter).",

        allies: [
            "Imperial Military", 
            "Sailors", 
            "Severosan Consulate",
        ],

        enemies: [
            "The Circle of Flame", 
            "The Grinders", 
            "Skovlan Consulate", 
            "Skovlander Refugees",
            "Spirit Wardens",
        ],

        situation: "Thanks to their expertise from riding in the deathlands of Severos, the Silver Nails are perfectly suited to explore the forbidden Lost District outside the lightning barrier of the city. Once the fiercest ghosts are driven out or destroyed, the Silver Nails can seize control and plunder the forgotten treasures and artifact hidden within. (The Spirit Wardens currently control access to the Lost District and do everything in their power to keep the Silver Nails—and everyone else—out.)",
    },{    
        name: "Sparkwrights",
        tier: 4,
        hold: "Strong",
        desc: "The engineers who maintain the lightning barriers. Also pioneers of spark-craft technology, indulging in dangerous research.",
        clocks: [
            {
                name: "Develop alternative fuel",
                size: 12,
            },

        ],

        turf: "Massive workshop, factory, and design facility in Coalridge.",

        npcs: [
            "Una Farros (instructor at Charterhall University, curious, vain, famous)",
        ],

        assets: [
            "The electroplasmic generators, city lights, lightning barriers and associated facilities and systems across the city",
        ],

        allies: [
            "City Council", 
            "Leviathan Hunters", 
            "Ministry of Preservation",
        ],

        enemies: [
            "The Path of Echoes", 
            "The Reconciled", 
            "The Foundation",
        ],

        situation: "For centuries, the Sparkwrights have worked in secret to develop an alternative fuel that could replace the leviathan blood that powers the lightning barriers of the Imperium. A few researchers have gotten close, but “accidents” have inevitably killed them and destroyed their work (certainly arranged by the nobility who rule because of their stranglehold on leviathan hunting). But there is always a daring visionary willing to try to pick up the pieces and complete the work—even at the risk of their own life. Will one of them manage it this time, or will they, too, fall victim to the deadly agents of the elite?",
    },{    
        name: "Spirit Wardens",
        tier: 4,
        hold: "Strong",
        desc: "The bronze-masked hunters who destroy rogue spirits. Also run Bellweather Crematorium to properly dispose of corpses.",
        clocks: [
            {
                name: "Uncover the infiltrators",
                size: 8,
            },

        ],

        turf: "Bellweather Crematorium. The Master Warden’s estate in Whitecrown.",
        npc_detail:  "There are no known Spirit Wardens—they maintain an anonymous membership of people not native to Duskwall, using code-names.",
        npcs: [
            "A Warden known as “Bakoros” (who may be several different individuals) sometimes lectures at the College of Immortal studies at Doskvol Academy",
        ],

        assets: [
            "The death bells that ring whenever someone dies in the city, and the deathseeker crows that fly to find the body (ancient, arcane)",
            "Many cohorts of expert Whispers",
            "The most advanced spectrological and spark-craft equipment, including several spirit-hunter hulls",
        ],

        quirks: "Membership in the Wardens is secret and utterly anonymous. They cut all ties and have no families or close relationships, save their fellow Wardens.",

        allies: [
            "The Church of Ecstasy", 
            "Deathlands Scavengers",
        ],

        enemies: [
            "The Dimmer Sisters", 
            "Gondoliers", 
            "Lord Scurlock", 
            "The Silver Nails", 
            "The Unseen", 
            "Path of Echoes", 
            "The Reconciled",
        ],

        situation: "The Spirit Wardens know that an enemy is attempting to infiltrate their ranks (they don’t yet know that it’s the Unseen). The Wardens are laying a trap for this enemy, to uncover their identity and eliminate them.",
    },{    
        name: "Ulf Ironborn",
        tier: 1,
        hold: "Strong",
        desc: "A brutal Skovlander, newly arrived in the Dusk, fighting everyone for turf.",
        clocks: [
            {
                name: "Carve out gang territory",
                size: 6,
            },
            {
                name: "Rise in Tier",
                size: 4,
            },

        ],

        turf: "Rooms, workshop, and stable at The Old Forge tavern (HQ). A gambling den.",

        npcs: [
            "Ulf Ironborn (leader, ruthless, savage, bold)",
            "Havid (second, ruthless, volatile, shrewd)",
        ],

        assets: [
            "A small but powerfully savage gang of thugs",
        ],

        quirks: "As a refugee of the Unity War, Ulf does not trust the local Akorosi, or anyone who proclaims a strong allegiance to the Imperial government. Those of Skovlander blood find it easy to win his trust, however.",

        allies: [
            "The Grinders",
        ],

        enemies: [
            "Citizens of Coalridge",
            "The Billhooks",
        ],

        situation: "Ulf is newly arrived in Doskvol, seeking his fortune on the streets. His gang has had recent success with savage smash & grab operations, leading into a potential “protection” racket. As more Skovlander war refugees swell the city population, the bigotry of some locals is starting to surface, with “NO SKOVS” signs appearing at public houses and shops. Ulf ’s blind rage will be sparked off when he encounters this, surely leading his gang into war with any “true Duskers” brave enough to stand up to him.",
    },{    
        name: "The Unseen",
        tier: 4,
        hold: "Strong",
        desc: "An insidious criminal enterprise with secret membership. Thought to pull the strings of the entire underworld.",
        clocks: [
            {
                name: "Infiltrate the Spirit Wardens",
                size: 8,
            },
            {
                name: "Expand into other cities",
                size: 8,
            },

        ],

        turf: "A multitude of vice dens and extortion rackets across the city—virtually none realize that they pay up to the Unseen. Several opulent townhouses used as safe houses.",

        npcs: [
            "The Tower (leader)", 
            "The Star (captain)",
            "Grull (mid-level thug with big ambitions, undercover as a coach driver)",
        ],

        assets: [
            "A legion of thugs, thieves, and killers on-call to their secret masters",

        ],

        quirks: "The perfect secrecy of the Unseen is the result of arcane rituals. Core members can recognize each other with attuned second sight. Any non-member who learns the identity of a member falls victim to a ritual that removes that memory from their mind after a few moments.",

        allies: [
            "The Bluecoats", 
            "Ironhook Prison", 
            "The Forgotten Gods", 
            "Cyphers",
        ],

        enemies: [
            "Ink Rakes", 
            "The Hive", 
            "Spirit Wardens",
        ],

        situation: "The Unseen crave the power and authority of the Spirit Wardens, whose own secret membership has so far resisted infiltration. The Tower and The Star plot to place their own spies and operatives among the Wardens and seize it from within.",
    },{    
        name: "The Wraiths",
        tier: 2,
        hold: "Weak",
        desc: "A mysterious crew of masked thieves and spies.",
        clocks: [
            {
                name: "Recruit expert thieves",
                size: 8,
            },
            {
                name: "Secure an arcane ally",
                size: 6,
            },

        ],
        
        turf: "Silkshore and Nightmarket are their primary hunting grounds. They specialize in the theft of luxury items and intelligence gathering for clients to use as blackmail.",
        
        npcs: [
            "Slate (leader, sophisticated, daring, secretive)",
            "Loop (appraisal expert, obsessive, moody, secretive)",
        ],

        assets: [
            "A scattered collection of secret rooftop shelters", 
            "A secret lair in a tower in Silkshore", 
            "All manner of thieves’ gear for burglary",
        ],

        quirks: "Each member wears a mask and conceals their true identity with an alias. They communicate with a private sign language.",

        allies: [
            "Cabbies",
        ],

        enemies: [
            "Bluecoats", 
            "Inspectors", 
            "The Hive",
        ],

        situation: "The Wraiths recently completed a heist at a luxury brothel in Nightmarket and happened to grab the private map book of a leviathan hunter in the process. The map book shows the secret hunting grounds of augured leviathan sites that will be used by the ship Storm Palace during the next season. Such a map is useless to the Wraiths, but is worth a small fortune to another leviathan hunter. The Wraiths are currently reaching out to contacts in the underworld to quietly arrange a sale.",
    },
];

export default faction_data;