const character_data = {
  crews: {
    types: [
      {
        name: "Assassins",
        tag_line: "Killers for hire",
        description:
          "Killers for hire. They execute “accidents,” disappearances, murders, and ransoms.",
        long_description: [
          "You’re professional murderers—death is your business. In Duskwall, this means extra trouble from the spirit bells and vengeful ghosts. Be prepared!",
          "When you play Assassins, you earn xp when you execute a successful accident, disappearance, murder, or ransom operation.",
          "Do you have any scruples when it comes to who you kill? Is everyone fair game?",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Insight", "Prowess"],
          Cohort: {},
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "Accident",
            description:
              "Accident: A killing with no telltale signs of murder.",
          },
          {
            name: "Disappearance",
            description: "Disappearance: The victim vanishes without a trace.",
          },
          {
            name: "Murder",
            description: "Murder: An obvious killing that sends a message.",
          },
          {
            name: "Ransom",
            description:
              "Ransom: A kidnapping and demand for payment for their return.",
          },
        ],
        contacts: [
          {
            name: "Trev",
            description:
              "Trev, a gang boss. Perhaps a gang that helped your crew get started?",
          },
          {
            name: "Lydra",
            description:
              "Lydra, a deal broker. Perhaps she acts as a liaison with your clients?",
          },
          {
            name: "Irimina",
            description:
              "Irimina, a vicious noble. Perhaps a potential patron for your crew?",
          },
          {
            name: "Karlos",
            description:
              "Karlos, a bounty hunter. Perhaps a source for off-book government “wet work?”",
          },
          {
            name: "Exeter",
            description:
              "Exeter, a Spirit Warden. Perhaps a double-agent informant for you?",
          },
          {
            name: "Sevoy",
            description:
              "Sevoy, a merchant lord. Perhaps a connection to clients with deep pockets?",
          },
        ],
        deity_features: [],
        upgrades: [
          {
            name: "Assassin Rigging",
            description:
              "You get 2 free load worth of weapon or gear items. For example, you could carry a pistol (a weapon) and burglary tools (gear) for zero load.",
          },
          {
            name: "Ironhook Contacts",
            description:
              "Your Tier is effectively +1 higher in prison. This counts for any Tier-related element in prison, including the incarceration roll (see page 148).",
          },
          {
            name: "Elite Skulks",
            description:
              "All of your cohorts with the Skulks type get +1d to quality rolls for Skulk-related actions.",
          },
          {
            name: "Elite Thugs",
            description:
              "All of your cohorts with the Thugs type get +1d to quality rolls for Thug-related actions.",
          },
          {
            name: "Hardened",
            description:
              "Each PC gets +1 trauma box. This costs three upgrades to unlock, not just one. This may bring a PC with 4 trauma back into play if you wish.",
          },
        ],
        claims: [
          {
            name: "City Records",
            description:
              "You get +1d to the engagement roll for stealth plans. You can use blueprints and other documents to determine a good approach for infiltrations.",
          },
          {
            name: "Cover Identities",
            description:
              "You get -2 heat per score. The cover of a legitimate operation helps deflect some of the heataYou get +1d to the engagement roll for deception and social plans. False identities help confuse the opposition. from law enforcement.",
          },
          {
            name: "Cover Operation",
            description:
              "You get -2 heat per score. The cover of a legitimate operation helps deflect some of the heat from law enforcement.",
          },
          {
            name: "Envoy",
            description:
              "You get +2 coin in payoff for scores that involve high-class clients. This well-connected liaison will help arrange for a better payoff from rich clients.",
          },
          {
            name: "Fixer",
            description:
              "You get +2 coin in payoff for scores that involve lower-class clients. This well-respected agent will help arrange for a better payoff from poorer clients.",
          },
          {
            name: "Hagfish Farm",
            description:
              "When you use the reduce heat downtime activity after a score that involves killing, you get +1d to the roll and quiet, convenient disposal of any corpses you left on the job.",
          },
          {
            name: "Infirmary",
            description:
              "You get +1d to healing treatment rolls. The infirmary also has beds for long-term convalescence.",
          },
          {
            name: "Informants",
            description:
              "You get +1d to gather information for a score. Your eyes and ears on the streets are always on the lookout for new targets.",
          },
          {
            name: "Protection Racket",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Some of the locals are terrified of you and will gladly pay for “protection.”",
          },
          {
            name: "Training Rooms",
            description:
              "Your Skulks cohorts get +1 scale. Extra training enables them to fight like a larger gang.",
          },
          {
            name: "Vice Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat.",
          },
          {
            name: "Victim Trophies",
            description:
              "You get +1 rep per score. Word of your grisly “collection” gets around, and your boldness boosts your rep in the underworld.",
          },
        ],
        special_abilities: [
          {
            name: "Deadly",
            ability:
              "Each PC may add +1 action rating to Hunt, Prowl, or Skirmish (up to a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
          {
            name: "Crow’s veil",
            ability:
              "Due to hard-won experience or occult ritual, your activities are hidden from the notice of the deathseeker crows. You don’t take extra heat when killing is involved on a score.",
            description:
              "The bells don’t ring at the crematorium when a member of your crew kills someone. Do you have a “membership ritual” now that conveys this talent?",
          },
          {
            name: "Emberdeath",
            ability:
              "Due to hard-won experience or occult ritual, you know the arcane method to destroy a living victim’s spirit at the moment you kill them. Take 3 stress to channel electroplasmic energy from the ghost field to disintegrate the spirit and body in a shower of sparking embers.",
            description:
              "This ability activates at the moment of the target’s death (spend 3 stress then or lose the opportunity to use it). It can only be triggered by a killing blow. Some particularly powerful supernatural entities or specially protected targets may be resistant or immune to this ability.",
          },
          {
            name: "No traces",
            ability:
              "When you keep an operation quiet or make it look like an accident, you get half the rep value of the target (round up) instead of zero. When you end downtime with zero heat, take +1 rep.",
            description:
              "There are many clients who value quiet operations. This ability rewards you for keeping a low-profile.",
          },
          {
            name: "Patron",
            ability:
              "When you advance your Tier, it costs half the coin it normally would.",
            description: "Who is your patron? Why do they help you?",
          },
          {
            name: "Predators",
            ability:
              "When you use a stealth or deception plan to commit murder, take +1d to the engagement roll.",
            description:
              "This ability applies when the goal is murder. It doesn’t apply to other stealth or deception operations you attempt that happen to involve killing.",
          },
          {
            name: "Vipers",
            ability:
              "When you acquire or craft poisons, you get +1 result level to your roll. When you employ a poison, you are specially prepared to be immune to its effects.",
            description:
              "The poison immunity lasts for the entire score, until you next have downtime.",
          },
        ],
      },
      {
        name: "Bravos",
        tag_line: "Mercenaries and thugs",
        description:
          "Mercenaries and thugs. They execute battles, extortion, sabotage, and smash & grabs.",
        long_description: [
          "Some crews plot and scheme, some crews sneak around, some crews get entangled with the occult—you fight. The fist and the blade are all you need.",
          "When you play Bravos, you earn xp when you execute a successful battle, extortion, sabotage, or smash & grab operation.",
          "Are you brutal thugs, savvy sell-swords, or ruthless gangsters?",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Prowess"],
          Cohort: { Gang: "Thugs" },
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "Battle",
            description: "Defeat an enemy with overwhelming force.",
          },
          {
            name: "Extortion",
            description: "Threaten violence unless you’re paid off.",
          },
          {
            name: "Sabotage",
            description: "Hurt an opponent by destroying something.",
          },
          {
            name: "Smash & Grab",
            description: "A fast and violent armed robbery.",
          },
        ],
        contacts: [
          {
            name: "Meg",
            description:
              "Meg, a pit-fighter. Perhaps a trainer, or perhaps a fellow extortion artist?",
          },
          {
            name: "Conway",
            description:
              "Conway, a Bluecoat. Perhaps an informant within the City Watch?",
          },
          {
            name: "Keller",
            description:
              "Keller, a blacksmith. Perhaps a source for armaments?",
          },
          {
            name: "Tomas",
            description:
              "Tomas, a physicker. Perhaps a former thug turned doctor?",
          },
          {
            name: "Walker",
            description:
              "Walker, a ward boss. Perhaps an employer who often needs violent work?",
          },
          {
            name: "Lutes",
            description:
              "Lutes, a tavern owner. Perhaps a good source of news and gossip?",
          },
        ],
        deity_features: [],
        upgrades: [
          {
            name: "Bravos Rigging",
            description:
              "You get 2 free load worth of weapon or armor items. For example, you could carry a sword & pistol or wear normal armor for zero load.",
          },
          {
            name: "Ironhook Contacts",
            description:
              "Your Tier is effectively +1 higher in prison. This counts for any Tier-related element in prison, including the incarceration roll (see page 148).",
          },
          {
            name: "Elite Rovers",
            description:
              "All of your cohorts with the Rovers type get +1d to quality rolls for Rover-related actions.",
          },
          {
            name: "Elite Thugs",
            description:
              "All of your cohorts with the Thugs type get +1d to quality rolls for Thug-related actions.",
          },
          {
            name: "Hardened",
            description:
              "Each PC gets +1 trauma box. This costs three upgrades to unlock, not just one. This may bring a PC with 4 trauma back into play if you wish.",
          },
        ],
        claims: [
          {
            name: "Barracks",
            description:
              "Your Thug cohorts get +1 scale. Extra room means more gang members.",
          },
          {
            name: "Bluecoat Confederates",
            description:
              "You get +1d to the engagement roll for assault plans. The street patrol around here helps you out now.",
          },
          {
            name: "Bluecoat Intimidation",
            description:
              "You get -2 heat per score. The law doesn’t want any trouble from you; they look the other way.",
          },
          {
            name: "Fighting Pits",
            description:
              "During downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. The locals love to gamble away their hard-won coin on the bloodsports you host.",
          },
          {
            name: "Infirmary",
            description:
              "You get +1d to healing treatment rolls. The infirmary also has beds for long-term convalescence.",
          },
          {
            name: "Informants",
            description:
              "You get +1d to gather information for a score. Your eyes and ears on the streets are always on the lookout for new targets.",
          },
          {
            name: "Protection Racket",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Some of the locals are terrified of you and will gladly pay for “protection.”",
          },
          {
            name: "Street Fence",
            description:
              "You get +2 coin in your payoff for scores that involve lower-class targets. An expert can find the treasure amid the trash you loot from your poorer victims.",
          },
          {
            name: "Terrorized Citizens",
            description:
              "You get +2 coin in your payoff for scores that involve battle or extortion. The frightened locals offer you tribute whenever you lash out. They don’t want to be next.",
          },
          {
            name: "Warehouses",
            description:
              "You get +1d to acquire asset rolls. You have space to hold all the various spoils you end up with after your battles. It can be useful on its own or for barter when you need it.",
          },
        ],
        special_abilities: [
          {
            name: "Dangerous",
            ability:
              "Each PC may add +1 action rating to Hunt, Skirmish, or Wreck (up to a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
          {
            name: "Blood Brothers",
            ability:
              "When you fight alongside your cohorts in combat, they get +1d for teamwork rolls (setup and group actions). All of your cohorts get the Thugs type for free (if they’re already Thugs, add another type).",
            description:
              "If you have the Elite Thugs upgrade, it stacks with this ability. So, if you had an Adepts gang cohort, and the Elite Thugs upgrade, and then took Blood Brothers, your Adepts would add the Thugs type and also get +1d to rolls when they did Thug-type actions. This ability may result in a gang with three types, surpassing the normal limit of two.",
          },
          {
            name: "Door Kickers",
            ability:
              "When you execute an assault plan, take +1d to the engagement roll.",
            description:
              "This ability applies when the goal is to attack an enemy. It doesn’t apply to other operations you attempt that happen to involve fighting.",
          },
          {
            name: "Fiends",
            ability:
              "Fear is as good as respect. You may count each wanted level as if it were turf.",
            description:
              "The maximum wanted level is 4. Regardless of how much turf you hold (from this ability or otherwise) the minimum rep cost to advance your Tier is always 6.",
          },
          {
            name: "Forged in the Fire",
            ability:
              "Each PC has been toughened by cruel experience. You get +1d to resistance rolls.",
            description:
              "This ability applies to PCs in the crew. It doesn’t confer any special toughness to your cohorts.",
          },
          {
            name: "Patron",
            ability:
              "When you advance your Tier, it costs half the coin it normally would.",
            description: "Who is your patron? Why do they help you?",
          },
          {
            name: "War Dogs",
            ability:
              "When you’re at war (-3 faction status), your crew does not suffer -1 hold and PCs still get two downtime activities, instead of just one.",
            description: "",
          },
        ],
      },
      {
        name: "Cult",
        tag_line: "Acolytes of a forgotten god",
        description:
          "Acolytes of a forgotten god. They execute artifact acquisitions, auguries, consecration, and sacrifices.",
        long_description: [
          "You heard the secret voice calling in the darkness. You obeyed. You are its instrument—and the world shall bow before its glory, or burn.",
          "When you play a Cult, you earn xp when you advance the agenda of your deity or embody its precepts in action. Instead of hunting grounds, you have sacred sites that you use for your operations.",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Resolve"],
          Cohort: { Gang: "Adepts" },
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "Acquisition",
            description:
              "Procure an arcane artifact and attune it to your god.",
          },
          {
            name: "Augury",
            description:
              "Do what you must to attract the god’s attention and counsel.",
          },
          {
            name: "Consecration",
            description: "Anoint a place for your deity.",
          },
          {
            name: "Sacrifice",
            description:
              "Destroy what is valuable or good in honor of your god.",
          },
        ],
        contacts: [
          { name: "Gagan", description: "Gagan, an academic." },
          { name: "Adikin", description: "Adikin, an occultist." },
          { name: "Hutchins", description: "Hutchins, an antiquarian." },
          { name: "Moriya", description: "Moriya, a spirit trafficker." },
          { name: "Mateas Kline", description: "Mateas Kline, a noble." },
          { name: "Bennett", description: "Bennett, an astronomer." },
        ],
        deity_features: [
          "Alluring",
          "Cruel",
          "Ferocious",
          "Monstrous",
          "Radiant",
          "Sinister",
          "Serene",
          "Transcendent",
        ],
        upgrades: [
          {
            name: "Cult Rigging",
            description:
              "You get 2 free load worth of document or implement items. For example, you could carry a profane book of curses and a demon’s hand for zero load.",
          },
          {
            name: "Ritual Sanctum in Lair",
            description:
              "This counts as a sacred and arcane workshop for occult practices and rituals.",
          },
          {
            name: "Elite Adepts",
            description:
              "All of your cohorts with the Adepts type get +1d to quality rolls for Adept-related actions.",
          },
          {
            name: "Elite Thugs",
            description:
              "All of your cohorts with the Thugs type get +1d to quality rolls for Thug-related actions.",
          },
          {
            name: "Ordained",
            description:
              "Each PC gets +1 trauma box. This costs three upgrades to unlock, not just one. This may bring a PC with 4 trauma back into play if you wish.",
          },
        ],
        claims: [
          {
            name: "Ancient Altar",
            description:
              "You get +1d to the engagement roll for occult plans. Its blessing is with you.",
          },
          {
            name: "Ancient Gate",
            description:
              "Safe passage in the deathlands. When you leave the city through this gate, the spirits of the deathlands will not molest you unless directly provoked.",
          },
          {
            name: "Ancient Obelisk",
            description:
              "-1 stress cost for all arcane powers and rituals. This effect applies to all cultists, everywhere—so long as the deity is well-pleased. You don’t have to be on-site at the obelisk to benefit from its power.",
          },
          {
            name: "Ancient Tower",
            description:
              "You get +1d to Consort with arcane entities on-site. This tower was prepared by sorcery from the pre-cataclysm and acts as an arcane lens to focus eldritch energy across the black mirror into the void.",
          },
          {
            name: "Cloister",
            description:
              "Your Adept cohorts get +1 scale. More room for hopeful novices desperate to pledge their service.",
          },
          {
            name: "Offertory",
            description:
              "You get +2 coin in your payoff for scores that involve occult operations. The frightened locals offer you tribute when you perform your dark practices. They don’t want to be next.",
          },
          {
            name: "Sanctuary",
            description:
              "+1d to Command and Sway rolls on-site. Your sanctuary maintains its effect as long as your deity is well-pleased with your service.",
          },
          {
            name: "Spirit Well",
            description:
              "You get +1d to Attune rolls on-site. A spirit well draws ghosts and other things to its power, which you harness to aid your arts.",
          },
          {
            name: "Sacred Nexus",
            description:
              "You get +1d to healing treatment rolls. Ancient arcane energy seeps into the wounded here, speeding their recovery, and marking them consecrated by its power.",
          },
          {
            name: "Vice Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat.",
          },
        ],
        special_abilities: [
          {
            name: "Chosen",
            ability:
              "Each PC may add +1 action rating to Attune, Study, or Sway (up to a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
          {
            name: "Anointed",
            ability:
              "You gain +1d to resistance rolls against supernatural threats. You get +1d to healing rolls when you have supernatural harm.",
            description: "",
          },
          {
            name: "Bound in Darkness",
            ability:
              "You may use teamwork maneuvers with any cult member, regardless of the distance separating you. By taking 1 stress, your whispered message is heard by every cultist.",
            description:
              "By what occult means does your teamwork manifest over distance? How is it strange or disturbing? By what ritualistic method are cult members initiated into this ability?",
          },
          {
            name: "Conviction",
            ability:
              "Each PC gains an additional vice: Worship. When you indulge this vice and bring a pleasing sacrifice, you don’t overindulge if you clear excess stress. In addition, your deity will assist any one action roll you make—from now until you indulge this vice again.",
            description:
              "What sort of sacrifice does your deity find pleasing?",
          },
          {
            name: "Glory incarnate",
            ability:
              "Your deity sometimes manifests in the physical world. This can be a great boon, but the priorities and values of a god are not those of mortals. You have been warned.",
            description: "",
          },
          {
            name: "Sealed in Blood",
            ability:
              "Each human sacrifice yields -3 stress cost for any ritual you perform.",
            description: "For details on Rituals, see page 222.",
          },
          {
            name: "Zealotry",
            ability:
              "Your cohorts have abandoned their reason to devote themselves to the cult. They will undertake any service, no matter how dangerous or strange. They gain +1d to rolls when they act against enemies of the faith.",
            description: "",
          },
        ],
      },
      {
        name: "Hawkers",
        tag_line: "Vice dealers",
        description:
          "Vice dealers. They execute product procurement, covert sales, shows of force, and social events.",
        long_description: [
          "All of Doskvol craves escape. They can’t go outside... but they can turn to you.",
          "When you play Hawkers, you earn xp when you acquire new product supply, execute clandestine or covert sales, or secure new sales territory. Instead of hunting grounds, you have a sales territory where you sell your product.",
          "What’s your product? Who’s your supplier? Where and how do you sell it?",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Resolve"],
          Cohort: {},
          Lair: ["Secure"],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "Sale",
            description:
              "A significant transaction with a special buyer of illicit product.",
          },
          {
            name: "Supply",
            description:
              "A transaction to acquire new product or establish a new supplier.",
          },
          {
            name: "Show of Force",
            description: "Make an example of an enemy to dominate territory.",
          },
          {
            name: "Socialize",
            description:
              "Improve customer and/or supplier relations with a social event.",
          },
        ],
        contacts: [
          {
            name: "Rolan Wott",
            description:
              "Rolan Wott, a magistrate. Perhaps with a feckless son in Doskvol Academy, always in need of rescuing?",
          },
          {
            name: "Laroze",
            description:
              "Laroze, a Bluecoat. Perhaps an informant within the City Watch?",
          },
          {
            name: "Lydra",
            description:
              "Lydra, a deal broker. Perhaps known for her vicious retribution on those who don’t hold up their end?",
          },
          {
            name: "Hoxley",
            description:
              "Hoxley, a smuggler. Perhaps a friend of powerful ship captains?",
          },
          {
            name: "Anya",
            description:
              "Anya, a dilettante. Perhaps a wellconnected socialite?",
          },
          {
            name: "Marlo",
            description:
              "Marlo, a gang boss. Perhaps a good partner with a gang of tough thugs?",
          },
        ],
        deity_features: [],
        upgrades: [
          {
            name: "Hawker Rigging",
            description:
              "One carried item is concealed and has no load. For example, you could carry a load of drugs or a weapon, perfectly concealed, for zero load.",
          },
          {
            name: "Ironhook Contacts",
            description:
              "Your Tier is effectively +1 higher in prison. This counts for any Tier-related element in prison, including the incarceration roll (see page 148).",
          },
          {
            name: "Elite Rooks",
            description:
              "All of your cohorts with the Rooks type get +1d to quality rolls for Rook-related actions.",
          },
          {
            name: "Elite Thugs",
            description:
              "All of your cohorts with the Thugs type get +1d to quality rolls for Thug-related actions.",
          },
          {
            name: "Composed",
            description:
              "Each PC gets +1 stress box. This costs three upgrades to unlock, not just one.",
          },
        ],
        claims: [
          {
            name: "Cover Identities",
            description:
              "You get +1d to the engagement roll for deception and social plans. False identities help confuse the opposition.",
          },
          {
            name: "Cover Operation",
            description:
              "You get -2 heat per score. The cover of a legitimate operation helps deflect some of the heat from law enforcement.",
          },
          {
            name: "Foreign Market",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Some of your product makes its way out of the city.",
          },
          {
            name: "Informants",
            description:
              "You get +1d to gather information for a score. Your eyes and ears on the streets are always on the lookout for new clients.",
          },
          {
            name: "Local Graft",
            description:
              "You get +2 coin in payoff for scores that involve a show of force or socializing. A few city officials share bribe money with those who show that they’re players on the scene.",
          },
          {
            name: "Lookouts",
            description: "You get +1d to Hunt or Survey on your turf.",
          },
          {
            name: "Luxury Venue",
            description:
              "+1d to Consort and Sway rolls on-site. Silks, paintings, and crystal impress the clientele.",
          },
          {
            name: "Personal Clothier",
            description:
              "You get +1d to the engagement roll for social plans. You always arrive on the scene in the most current and alluring fashion.",
          },
          {
            name: "Surplus Cache",
            description:
              "You get +2 coin in payoff for scores that involve product sale or supply. You have an abundance of product, which pads your pockets every now and then.",
          },
          {
            name: "Vice Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Is this claim a den you’ve overtaken from another purveyor, or a new establishment replacing something else?",
          },
        ],
        special_abilities: [
          {
            name: "Silver Tongues",
            ability:
              "Each PC may add +1 action rating to Command, Consort, or Sway (up to a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
          {
            name: "Accord",
            ability:
              "Sometimes friends are as good as territory. You may treat up to three +3 faction statuses you hold as if they are turf.",
            description:
              "If your status changes, you lose the turf until it becomes +3 again. Regardless of how much turf you hold (from this ability or otherwise) the minimum rep cost to advance your Tier is always 6.",
          },
          {
            name: "Ghost Market",
            ability:
              "Through arcane ritual or hard-won experience, you have discovered how to prepare your product for sale to ghosts and/or demons. They do not pay in coin. What do they pay with?",
            description:
              "The GM will certainly have an idea about how your strange new clients pay, but jump in with your own ideas, too! This ability is usually a big shift in the game, so talk it out and come up with something that everyone is excited about. If it’s a bit mysterious and uncertain, that’s good. You have more to explore that way.",
          },
          {
            name: "The Food Stuff",
            ability:
              "Your merchandise is exquisite. The product quality is equal to your Tier +2. When you deal with a crew or faction, the GM will tell you who among them is hooked on your product (one, a few, many, or all).",
            description:
              "The quality of your product might be used for a fortune roll to find out how impressed a potential client is, to find out how enthralled or incapacitated a user is in their indulgence of it, to discover if a strange variation has side-effects, etc.",
          },
          {
            name: "High Society",
            ability:
              "It’s all about who you know. Take -1 heat during downtime and +1d to gather information about the city’s elite.",
            description: "",
          },
          {
            name: "Hooked",
            ability:
              "Your gang members use your product. Add the savage, unreliable, or wild flaw to your gangs to give them +1 quality (max rating of 4).",
            description: "",
          },
          {
            name: "Patron",
            ability:
              "When you advance your Tier, it costs half the coin it normally would.",
            description: "Who is your patron? Why do they help you?",
          },
        ],
      },
      {
        name: "Shadows",
        tag_line: "Thieves and spies",
        description:
          "Thieves and spies. They execute burglaries, espionage, robberies, and sabotage.",
        long_description: [
          "Everyone wants something that they can’t have. That’s where you come in.",
          "When you play Shadows, you earn xp when you execute a burglary, espionage, robbery, or sabotage operation.",
          "Do you spy and steal primarily to serve your own interests, or do you sell your services to whoever will pay?",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Prowess"],
          Cohort: {},
          Lair: ["Hidden"],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "Burglary",
            description: "Theft by breaking and entering.",
          },
          {
            name: "Espionage",
            description:
              "Obtain secret information by covert or clandestine means.",
          },
          {
            name: "Robbery",
            description: "Theft by force or threats.",
          },
          {
            name: "Sabotage",
            description: "Hurt an opponent by destroying something.",
          },
        ],
        contacts: [
          {
            name: "Dowler",
            description:
              "Dowler, an explorer. Perhaps one of the rare deathlands scavengers that survived his sentence?",
          },
          {
            name: "Laroze",
            description:
              "Laroze, a Bluecoat. Perhaps an informant within the City Watch?",
          },
          {
            name: "Amancio",
            description:
              "Amancio, a deal broker. Perhaps a well-connected underworld figure, famous for their neutrality?",
          },
          {
            name: "Fitz",
            description:
              "Fitz, a collector. Perhaps an aficionado of strange artifacts?",
          },
          {
            name: "Adelaide Phroaig",
            description:
              "Adelaide Phroaig, a noble. Perhaps a source for scores among the elite?",
          },
          {
            name: "Rigney",
            description:
              "Rigney, a tavern owner. Perhaps a good source of news and gossip?",
          },
        ],
        deity_features: [],
        upgrades: [
          {
            name: "Thief Rigging",
            description:
              "You get 2 free load worth of tool or gear items. For example, you could carry burglary gear and tinkering tools for zero load.",
          },
          {
            name: "Underground Maps and Passkeys",
            description:
              "You have easy passage through the underground canals, tunnels, and basements of the city.",
          },
          {
            name: "Elite Rooks",
            description:
              "All of your cohorts with the Rooks type get +1d to quality rolls for Rook-related actions.",
          },
          {
            name: "Elite Skulks",
            description:
              "All of your cohorts with the Skulks type get +1d to quality rolls for Skulk-related actions.",
          },
          {
            name: "Steady",
            description:
              "Each PC gets +1 stress box. This costs three upgrades to unlock, not just one.",
          },
        ],
        claims: [
          {
            name: "Covert Drop",
            description:
              "You get +2 coin in payoff for scores that involve espionage or sabotage. The perfect hidden exchange point is worth the extra coin to discerning clientele.",
          },
          {
            name: "Drug Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. What’s the drug of choice?",
          },
          {
            name: "Gambling Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Cards, dice, or something more unusual on offer?",
          },
          {
            name: "Hagfish Farm",
            description:
              "When you use the reduce heat downtime activity after a score that involves killing, you get +1d to the roll and quiet, convenient disposal of any corpses you left on the job.",
          },
          {
            name: "Infirmary",
            description:
              "You get +1d to healing treatment rolls. The infirmary also has beds for long-term convalescence.",
          },
          {
            name: "Informants",
            description:
              "You get +1d to gather information for a score. Your eyes and ears on the streets are always on the lookout for new targets.",
          },
          {
            name: "Interrogation Chamber",
            description:
              "You get +1d to Command and Sway on-site. Grisly business, but effective.",
          },
          {
            name: "Lookouts",
            description: "You get +1d to Hunt or Survey on your turf.",
          },
          {
            name: "Loyal Fence",
            description:
              "You get +2 coin in payoff for scores that involve burglary or robbery. It requires a skilled eye and good contacts to move stolen goods.",
          },
          {
            name: "Secret Pathways",
            description:
              "You get +1d to the engagement roll for stealth plans. You might have access to long-forgotten underground canals, rooftop walkways, or some other route of your choosing.",
          },
          {
            name: "Tavern",
            description:
              "You get +1d to Consort and Sway rolls on-site. Some booze and friendly conversation can go a long way.",
          },
        ],
        special_abilities: [
          {
            name: "Everyone Steals",
            ability:
              "Each PC may add +1 action rating to Prowl, Finesse, or Tinker (up to a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
          {
            name: "Ghost Echoes",
            ability:
              "From weird experience or occult ritual, all crew members gain the ability to see and interact with the ghostly structures, streets, and objects within the echo of Doskvol that exists in the ghost field.",
            description:
              "You might explore the echo of an ancient building, crumbled to dust in the real world, but still present in the ghost field; or discern the electroplasmic glow of treasures lost in the depths of the canals; or use a sorcerous ghost door from the pre-cataclysm to infiltrate an otherwise secure location; etc. The GM will tell you what echoes persist nearby when you gather information about them. You might also undertake investigations to discover particular echoes you hope to find.",
          },
          {
            name: "Pack Rats",
            ability:
              "Your lair is a jumble of stolen items. When you roll to acquire an asset, take +1d.",
            description:
              "This ability might mean that you actually have the item you need in your pile of stuff, or it could mean you have extra odds and ends to barter with.",
          },
          {
            name: "Patron",
            ability:
              "When you advance your Tier, it costs half the coin it normally would.",
            description: "Who is your patron? Why do they help you?",
          },
          {
            name: "Second Story",
            ability:
              "When you execute a clandestine infiltration, you get +1d to the engagement roll.",
            description: "",
          },
          {
            name: "Slippery",
            ability:
              "When you roll entanglements, roll twice and keep the one you want. When you reduce heat on the crew, take +1d.",
            description:
              "The GM might sometimes want to choose an entanglement instead of rolling. In that case, they’ll choose two and you can pick between them.",
          },
          {
            name: "Synchronized",
            ability:
              "When you perform a group action, you may count multiple 6s from different rolls as a critical success.",
            description:
              "For example, Lyric leads a group action to Attune to the ghost field to overcome a magical ward on the Dimmer Sisters’ door. Emily, Lyric’s player, rolls and gets a 6, and so does Matt! Because the crew has Synchronized, their two separate 6s count as a critical success on the roll.",
          },
        ],
      },
      {
        name: "Smugglers",
        tag_line: "Contraband transporters",
        description:
          "Contraband transporters. They execute clandestine deliveries, territory control, and expeditions outside the city.",
        long_description: [
          "Illicit goods are the life-blood of Duskwall—both for those who consume them and those who profit from their taxation and criminalization. Smugglers keep the city alive.",
          "When you play Smugglers, you earn xp when you execute a smuggling operation or acquire new clients or contraband sources. Instead of hunting grounds, you have cargo types that you use for your operations.",
          "What kind of contraband do you transport? Do you have any rules about what you will or won’t carry?",
        ],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["Prowess"],
          Cohort: {},
          Lair: [],
          Vehicle: ["A boat or carriage."],
        },
        favored_operation_type: [
          {
            name: "Arcane/Weird",
            description: "Spirit essences, ghosts, cult materials.",
          },
          {
            name: "Arms",
            description:
              "Restricted military weapons, heavy ordnance, explosives.",
          },
          {
            name: "Contraband",
            description: "High-tax luxuries, drugs, banned art, etc.",
          },
          {
            name: "Passengers",
            description: "People or livestock traveling in secret.",
          },
        ],
        contacts: [
          {
            name: "Elynn",
            description:
              "Elynn, a dock worker. Perhaps a friend who can help with the infernal paperwork of the Empire?",
          },
          {
            name: "Rolan",
            description:
              "Rolan, a drug dealer. Perhaps a client with strong underworld ties?",
          },
          {
            name: "Sera",
            description:
              "Sera, an arms dealer. Perhaps a supplier with military access?",
          },
          {
            name: "Nyelle",
            description:
              "Nyelle, a spirit trafficker. Perhaps a supplier for the strangest of cargo?",
          },
          {
            name: "Decker",
            description:
              "Decker, an anarchist. Perhaps a client in need of the illegal tools of revolution?",
          },
          {
            name: "Esme",
            description:
              "Esme, a tavern owner. Perhaps a good source of news and gossip?",
          },
        ],
        deity_features: [],
        upgrades: [
          {
            name: "Smuggler Rigging",
            description:
              "Two of your carried items are perfectly concealed. You could carry 1 load of contraband and a pistol, perfectly concealed, even against a pat down.",
          },
          {
            name: "Camouflage",
            description:
              "Your vehicles are perfectly concealed when at rest. They blend in as part of the environment, or as an uninteresting civilian vehicle (your choice).",
          },
          {
            name: "Elite Rovers",
            description:
              "All of your cohorts with the Rovers type get +1d to quality rolls for Rover-related actions.",
          },
          {
            name: "Barge",
            description:
              "Add mobility to your lair. You can move it to a new location as a downtime activity.",
          },
          {
            name: "Steady",
            description:
              "Each PC gets +1 stress box. This costs three upgrades to unlock, not just one.",
          },
          {
            name: "Vehicle",
            description:
              "All smugglers start with a vehicle. When the vehicle is upgraded (two boxes), it also gets armor.",
          },
        ],
        claims: [
          {
            name: "Ancient Gate",
            description:
              "Safe passage in the deathlands. When you leave the city through this gate, spirits in the deathlands will not molest you unless directly provoked.",
          },
          {
            name: "Cover Operation",
            description:
              "You get -2 heat per score. What’s your cover? Who did you seize it from?",
          },
          {
            name: "Fleet",
            description:
              "Your cohorts have their own vehicles. Each cohort has a common vehicle, with quality equal to your Tier.",
          },
          {
            name: "Informants",
            description:
              "You get +1d to gather information for a score. Your eyes and ears on the streets are always on the lookout for new clients.",
          },
          {
            name: "Luxury Fence",
            description:
              "You get +2 coin in payoff for scores that involve highclass targets. It requires a skilled eye and good contacts to move hot luxury goods.",
          },
          {
            name: "Secret Routes",
            description:
              "You get +1d to the engagement roll for transport plans. You might have access to longforgotten underground canals, dark streets normally hidden behind debris, or some other route of your choosing.",
          },
          {
            name: "Side Business",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. What kind of legitimate business is this? How do you get paid in secret?",
          },
          {
            name: "Tavern",
            description:
              "You get +1d to Consort and Sway rolls on-site. Some booze and friendly conversation can go a long way.",
          },
          {
            name: "Vice Den",
            description:
              "Any time during downtime, roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. Perhaps you sell some of the contraband you smuggle here? Or do you not mix your operations?",
          },
          {
            name: "Warehouses",
            description:
              "You get +1d to acquire asset rolls. You have space to hold all the various items and supplies you end up with from your smuggling runs. They can be useful on their own or for barter when you need it.",
          },
        ],
        special_abilities: [
          {
            name: "Like part of the Family",
            ability:
              "Create one of your vehicles as a cohort (use the vehicle edges and flaws, below). Its quality is equal to your Tier +1. The vehicle can use teamwork actions (using quality for rolls). A vehicle can’t lead a group action, but may participate.",
            description:
              "Vehicle Edges:<br>Nimble: The vehicle handles easily. Consider this an assist for tricky maneuvers.<br>Simple: The vehicle is easy to repair. Remove all of its harm during downtime.<br>Sturdy: The vehicle keeps operating even when broken.<br>Vehicle Flaws:<br>Costly: The vehicle costs 1 coin per downtime to keep in operation.<br>Distinct: The vehicle has memorable features. Take +1 heat when you use it on a score.<br>Finicky: The vehicle has quirks that only one person understands. When operated without them, it has -1 quality.",
          },
          {
            name: "All hands",
            ability:
              "During downtime, one of your cohorts may perform a downtime activity for  the crew to acquire an asset, reduce heat, or work on a long-term project.",
            description: "",
          },
          {
            name: "Ghost passage",
            ability:
              "From harsh experience or occult ritual, all crew members are immune to  possession by spirits, but may choose to “carry” a ghost as a passenger within  their body.",
            description:
              "What do you do to “carry” a spirit? Must the spirit consent, or can you use this ability to trap an unwilling spirit within?",
          },
          {
            name: "Just passing through",
            ability:
              "During downtime, take -1 heat. When your heat is 4 or less, you get +1d to  deceive people when you pass yourselves off as ordinary citizens.",
            description: "",
          },
          {
            name: "Leverage",
            ability:
              "Your crew supplies illicit goods for other factions. Your success is good for them.  Whenever you gain rep, gain +1 rep.",
            description: "",
          },
          {
            name: "Reavers",
            ability:
              "When you go into conflict aboard a vehicle, you gain +1 effect for vehicle damage  and speed. Your vehicle gains armor.",
            description:
              "If your vehicle already has armor, this ability gives an additional armor box.",
          },
          {
            name: "Renegades",
            ability:
              "Each PC may add +1 action rating to Finesse, Prowl, or Skirmish (up to  a max rating of 3).",
            description:
              "Each player may choose the action they prefer (you don’t all have to choose the same one). If you take this ability during initial character and crew creation, it supersedes the normal starting limit for action ratings.",
          },
        ],
      },
    ],
    initial_reputations: [
      "Ambitious",
      "Brutal",
      "Daring",
      "Honorable",
      "Professional",
      "Savvy",
      "Subtle",
      "Strange",
    ],
    lairs: [
      {
        name: "Half-sunken grotto",
        description:
          "A half-sunken grotto in the city’s maze-like underground canals.",
      },
      {
        name: "Abandoned watch tower",
        description:
          "An abandoned watch tower atop an ancient, crumbling wall.",
      },
      {
        name: "Unassuming back rooms",
        description: "The unassuming back rooms of a merchant’s shop.",
      },
      {
        name: "Small, abandoned house",
        description: "A small, abandoned house at the end of a dark lane.",
      },
      {
        name: "Rickety, tin-roofed shack",
        description: "A rickety, tin-roofed shack perched on a rooftop.",
      },
      {
        name: "junked rail-car",
        description:
          "A junked rail-car, rusted in place on its old, overgrown tracks.",
      },
    ],
  },
};

export default character_data;
