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
          "When you play Assassins, you earn xp when you execute a successful accident,  disappearance, murder, or ransom operation.",
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
              "Each PC gets +1 trauma box. This costs three upgrades to unlock,  not just one. This may bring a PC with 4 trauma back into play if you wish.",
          },
        ],
        claims: [
          {
            name: "City Records",
            description:
              "You get  +1d to the engagement roll for stealth plans. You can use blueprints and other documents to determine a good approach for infiltrations.",
          },
          {
            name: "Cover Identities",
            description:
              "You get -2 heat per score.  The cover of a legitimate operation helps deflect some of the heataYou get  +1d to the engagement roll for deception and social plans. False identities help confuse the opposition. from law enforcement.",
          },
          {
            name: "Cover Operation",
            description:
              "You get -2 heat per score.  The cover of a legitimate operation helps deflect some of the heat from law enforcement.",
          },
          {
            name: "Envoy",
            description:
              "You get +2 coin in payoff for scores that involve high-class clients. This well-connected liaison will help arrange for a better payoff from rich clients.",
          },
          {
            name: "Fixer",
            description:
              "You get +2 coin in payoff for scores that involve lower-class clients.  This well-respected agent will help arrange for a better payoff from poorer clients.",
          },
          {
            name: "Hagfish Farm",
            description:
              "When you use the reduce heat downtime activity after a score that involves killing, you get +1d to the roll and quiet, convenient disposal of any corpses you left on the job.",
          },
          {
            name: "Infirmary",
            description:
              "You get  +1d to healing treatment rolls. The infirmary also has beds for long-term convalescence.",
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
              "Any time during downtime,  roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat.",
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
          "When you play Bravos, you earn xp when you execute a successful battle,  extortion, sabotage, or smash & grab operation.",
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
              "Conway, a Bluecoat.  Perhaps an informant within the City Watch?",
          },
          {
            name: "Keller",
            description:
              "Keller, a blacksmith.  Perhaps a source for armaments?",
          },
          {
            name: "Tomas",
            description:
              "Tomas, a physicker. Perhaps a former thug turned doctor?",
          },
          {
            name: "Walker",
            description:
              "Walker, a ward boss.  Perhaps an employer who often needs violent work?",
          },
          {
            name: "Lutes",
            description:
              "Lutes, a tavern owner. Perhaps a good source of news and gossip?",
          },
        ],
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
              "Each PC gets +1 trauma box. This costs three upgrades to unlock,  not just one. This may bring a PC with 4 trauma back into play if you wish.",
          },
        ],
        claims: [
          {
            name: "Barracks",
            description:
              "Your Thug cohorts get  +1 scale. Extra room means more gang members.",
          },
          {
            name: "Bluecoat Confederates",
            description:
              "You get +1d to the engagement roll for assault plans. The street patrol around here helps you out now.",
          },
          {
            name: "Bluecoat Intimidation",
            description:
              "You get  -2 heat per score.  The law doesn’t want any trouble from you; they look the other way.",
          },
          {
            name: "Fighting Pits",
            description:
              "During downtime,  roll dice equal to your Tier. You earn coin equal to the highest result, minus your heat. The locals love to gamble away their hard-won coin on the bloodsports you host.",
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
              "You get  +2 coin in your payoff for scores that involve battle or extortion. The frightened locals offer you tribute whenever you lash out. They don’t want to be next.",
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
              "When you fight alongside your cohorts in combat, they get +1d for teamwork rolls (setup and group actions). All of your cohorts get the Thugs type for free  (if they’re already Thugs, add another type).",
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
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        claims: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        special_abilities: [
          {
            name: "",
            ability: "",
            description: "",
          },
          {
            name: "",
            ability: "",
            description: "",
          },
        ],
      },
      {
        name: "Hawkers",
        tag_line: "",
        description:
          "Vice dealers. They execute product procurement, covert sales, shows of force, and social events.",
        long_description: [],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["", ""],
          Training: ["", ""],
          Cohort: {},
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
        ],
        contacts: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        upgrades: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        claims: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        special_abilities: [
          {
            name: "",
            ability: "",
            description: "",
          },
          {
            name: "",
            ability: "",
            description: "",
          },
        ],
      },
      {
        name: "Shadows",
        tag_line: "",
        description:
          "Thieves and spies. They execute burglaries, espionage, robberies, and sabotage.",
        long_description: [],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["", ""],
          Training: ["", ""],
          Cohort: {},
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
        ],
        contacts: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        upgrades: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        claims: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        special_abilities: [
          {
            name: "",
            ability: "",
            description: "",
          },
          {
            name: "",
            ability: "",
            description: "",
          },
        ],
      },
      {
        name: "Smugglers",
        tag_line: "",
        description:
          "Contraband transporters. They execute clandestine deliveries, territory control, and expeditions outside the city.",
        long_description: [],
        starter_coin: 2,
        tier: 0,
        starting_upgrades: {
          Training: ["", ""],
          Training: ["", ""],
          Cohort: {},
          Lair: [],
          Vehicle: [],
        },
        favored_operation_type: [
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
          {
            name: "",
            description: "",
          },
        ],
        contacts: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        upgrades: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        claims: [
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
          { name: "", description: "" },
        ],
        special_abilities: [
          {
            name: "",
            ability: "",
            description: "",
          },
          {
            name: "",
            ability: "",
            description: "",
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
