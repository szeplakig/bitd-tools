const score_generator_data = {
  client_target: [
    {
      type: "Civilian",
      list: [
        "Academic or Scholar",
        "Laborer or Tradesman",
        "Courier or Sailor",
        "Merchant or Shopkeeper",
        "Artist or Writer",
        "Doctor or Alchemist",
      ],
    },
    {
      type: "Criminal",
      list: [
        "Drug Dealer or Supplier",
        "Mercenary or Thug",
        "Fence or Gambler",
        "Spy or Informant",
        "Smuggler or Thief",
        "Crime Boss",
      ],
    },
    {
      type: "Political",
      list: [
        "Noble or Official",
        "Banker or Captain",
        "Revolutionary or Refugee",
        "Clergy or Cultist",
        "Constable or Inspector",
        "Magistrate or Ward Boss",
      ],
    },
    {
      type: "Strange",
      list: [
        "Ghost of (roll again)",
        "Occust Collector",
        "Vampire or Other Undead",
        "Demon disguised as (roll again)",
        "Possessed or Hollow",
        "Whisper or Cultist",
      ],
    },
  ],
  work: [
    {
      type: "Skullduggery",
      list: [
        "Stalking or Surveillance",
        "Sabotage or Arson",
        "Lift or Plant",
        "Posion or Arrange Accident",
        "Burglary or Heist",
        "Impersonate or Misdirect",
      ],
    },
    {
      type: "Violence",
      list: [
        "Assassinate",
        "Disappear or Ransom",
        "Terrorize or Extort",
        "Destroy or Deface",
        "Raid or Defend",
        "Rob or Strong-arm",
      ],
    },
    {
      type: "Underworld",
      list: [
        "Escort or Security",
        "Smuggle or Courier",
        "Blackmail or Discredit",
        "Con or Espionage",
        "Locate or Hide",
        "Negotiate or Threaten",
      ],
    },
    {
      type: "Unnatural",
      list: [
        "Curse or Sanctify",
        "Banish or Summon",
        "Extract Essence",
        "Place or Remove Runes",
        "Perform / Stop Ritual",
        "Hollow or Revivify",
      ],
    },
  ],
  twist: [
    "An element is a cover for heretic or occult practices",
    "An occultist has foreseen this job and warned the parties involved",
    "Rogue spirits possess some/most/all of the people involved",
    "Rogue spirits haunt the location",
    "The job furthers a demon's secret agenda",
    "The job furthers a vampire's secret agenda",
    "An element is a front for a criminal enterprise",
    "A dangerous gang uses the location",
    "The job is a trap laid by your enemies",
    "The job is a test for another job",
    "The job furthers a merchant lord's secret agenda",
    "The job furthers a crime boss's secret agenda",
    "The job requires travel by electro-rail",
    "Must visit the deathlands to do the job",
    "The job requires sea travel",
    "The location moves around (site changes, it's on a vehicle, etc.)",
    "The job furthers a revolutionary's secret agenda",
    "The job furthers a city official's secret agenda",
  ],
  connection: [
    "PC: Friend",
    "PC: Rival",
    "PC: Vice purveyor",
    "Crew: Contact",
    "City: Doskvol notable",
    "Weird: Ghost, Demon, God",
  ],
};

export default score_generator_data;
