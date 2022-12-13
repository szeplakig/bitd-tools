const devils_bargains_data = [
  {
    name: "What's our take?",
    type: "Downtime",
    desc: "The gang wants a bigger piece of the action. -1 Coin to Payoff for each Cohort used in the Score.",
  },
  {
    name: "The Walls Have Ears",
    type: "Faction Relationship",
    desc: "A friendly faction hears you did a Score against their ally. -1 to that faction's relationship rating.",
  },
  {
    name: "Hunter Becomes Hunter",
    type: "Immediate",
    desc: "You've been so preoccupied with the obstacles in front of you that you didn't notice the rival lining up a shot behind you.",
  },
  {
    name: "Quelle Horreur!",
    type: "Downtime",
    desc: "You suffer nightmares for a week. -1d to all Downtime Actions after this Score.",
  },
  {
    name: "All or Nothing",
    type: "Immediate",
    desc: "If you fail this roll, you cannot resist the effects of that failure.",
  },
  {
    name: "Now or Never",
    type: "Immediate",
    desc: "If you fail this roll, you lose this opportunity and cannot retry it for this Score.",
  },
  {
    name: "Gimcrack Gear",
    type: "Immediate",
    desc: "Whatever weapon or tool you are using is cheaply made and breaks whether the roll succeeds or not.",
  },
  {
    name: "Unsure Footing",
    type: "Immediate",
    desc: "Whether you succeed in this roll or not, you loose your footing and fall prone after this Actin.",
  },
  {
    name: "Ghostly Attention",
    type: "Immediate",
    desc: "Whether you succeed in this roll or not, a ghost in the area notices you and begins stalking you.",
  },
  {
    name: "Devil's Exchange",
    type: "Immediate",
    desc: "You gain the normal +1d to this roll, but suffer -1d to your next Action, and cannot take a Devil's Bargain to offset it.",
  },
  {
    name: "High Profile",
    type: "Downtime",
    desc: "This score gains +2 Heat.",
  },
  {
    name: "Shortchanged",
    type: "Downtime",
    desc: "This Score's payoff is -2 Coin.",
  },
  {
    name: "Most Wanted",
    type: "Downtime",
    desc: "After the normal Entanglement roll and result, you are the target of an additional Arrest result.",
  },
  {
    name: "Gone Rogue",
    type: "Immediate",
    desc: "You cannot accept an Assist for the rest of this Score.",
  },
  {
    name: "Just a Little Spark",
    type: "Immediate",
    desc: "A lamp or candle gets knocked over, catching a curtain or rug on fire. Start a Clock: 'Building is on Fire'",
  },
  {
    name: "Accelerating Plans",
    type: "Faction Relationship",
    desc: "A rival faction advances one of its Clocks by two before your next Score.",
  },
  {
    name: "Project Setback",
    type: "Downtime",
    desc: "Mark one less Clock segment the first time you work on a Long-Term Project.",
  },
  {
    name: "Thrice-Named",
    type: "Downtime",
    desc: "After the normal Entanglement roll and result, your Crew takes an additional Demonic Notice result.",
  },
  {
    name: "Tastes Like Ashes",
    type: "Downtime",
    desc: "The next time you indulge your Vice, only clear half as much Stress (rounded down) as normal.",
  },
  {
    name: "Knuckle Buster",
    type: "Immediate",
    desc: "Whether this Action succeeds or not, you accidentally inflict level 1 Harm on your hand, 'Busted Knuckles'",
  },
  {
    name: "Weekend Getaway",
    type: "Downtime",
    desc: "If you indulge your Vice after this Score, you automatically Over Indulge.",
  },
  {
    name: "Overextended",
    type: "Immediate",
    desc: "Your next Action automatically has reduced Effect.",
  },
  {
    name: "Hot Headed Cohort",
    type: "Faction Relationship",
    desc: "During the Score, one of your Cohorts picked a fight with an allied Cohort. Pay 2 Coin, lose 2 Rep, or -1 faction relationship.",
  },
  {
    name: "Turned Around",
    type: "Immediate",
    desc: "You lose track of your position. Start a 4-Clock, 'Where Am I?'. You must use Actions looking for your Crew to rejoin them.",
  },
  {
    name: "Forgiveness or Vengence?",
    type: "Faction Relationship",
    desc: "During the Score, one of your Cohorts got in a fight with a neutral Cohort. Choose -2 Rep and +1 faction relationship, or +2 Rep and -1 faction relationship.",
  },
  {
    name: "A Familiar Face",
    type: "Immediate",
    desc: "You recognize a contact of your choice among the rivals you are running the Score against.",
  },
  {
    name: "Worse than we Thought",
    type: "Immediate",
    desc: "A Clock of your choice that is running for this Score is either advanced or set back by two segments (whichever is worse for the Crew)",
  },
  {
    name: "Plan C...",
    type: "Immediate",
    desc: "Things are not going according to plan. Flashbacks cost +1 Stress for the rest of the Score.",
  },
  {
    name: "Warden's Attention",
    type: "Downtime",
    desc: "+4 Heat (instead of +2 Heat) if there is a death during this Score.",
  },
  {
    name: "Infected Wound",
    type: "Downtime",
    desc: "The next time you Recover from Harm, your Physicker is at -1d.",
  },
  {
    name: "Why'd it have to be...",
    type: "Immediate",
    desc: "The room you're in triggers a phobia that the Crew didn't know about before. Describe the phobia and take 2 Stress.",
  },
  {
    name: "Double-Crossed",
    type: "Downtime",
    desc: "After the normal Entanglement roll and result, your Crew takes an additional Flipped result.",
  },
  {
    name: "We Want a Bigger Take!",
    type: "Downtime",
    desc: "The gang wants a bigger piece of the action. -2 Coin to Payoff for each Cohort used in this Score.",
  },
  {
    name: "The Walls Have Eyes",
    type: "Faction Relationship",
    desc: "A friendly faction hears you did a Score against their ally. -1 to both factions' relationship ratings.",
  },
  {
    name: "Thicker Than Blood",
    type: "Immediate",
    desc: "Your intel missed that one of your family members is associated with the target of the Score. How does that change things for you?",
  },
  {
    name: "Out of the Frying Pan...",
    type: "Immediate",
    desc: "Things are about to go from bad to worse. Start a 4-Clock 'Surprise Reinforcements'",
  },
  {
    name: "Shadow from the Past",
    type: "Immediate",
    desc: "Your intel missed that someone from your past is associated with the target of the Score. Who is it, and how does that change things for you?",
  },
  {
    name: "...And into the Fire",
    type: "Immediate",
    desc: "You are ambushed by an assassin or bounty hunter. Start a 4-Clock, 'Elite Ambusher' to overcome this new foe.",
  },
  {
    name: "Supply Delays",
    type: "Downtime",
    desc: "Suffer -1d to your next Acquire Asset roll.",
  },
  {
    name: "I know I packed it!",
    type: "Immediate",
    desc: "You must immediately check off 1 Load to no effect, representing equipment you misplaced.",
  },
  {
    name: "Easily Identified",
    type: "Downtime",
    desc: "You left something behind that is easily traced to you. Choose +2 Heat, -1 Rep, or +1 Heat and -2 Rep.",
  },
  {
    name: "Accidental Discharge",
    type: "Immediate",
    desc: "A weapon or item you are carrying loudly discharges and needs to be reloaded before it can be used.",
  },
  {
    name: "Pawn's Gambit",
    type: "Immediate",
    desc: "You cannot use Load for Armor during this Score.",
  },
  {
    name: "Mixed Messages",
    type: "Faction Relationship",
    desc: "A faction of your choice that is friendly to your crew moves one step towards Neutral.",
  },
  {
    name: "Rook's Gambit",
    type: "Immediate",
    desc: "You cannot use Load for Unusual or Scary Weapons this Score.",
  },
  {
    name: "Escalating Tensions",
    type: "Faction Relationship",
    desc: "A faction of your choice that is unfriendly to your crew moves one step towards War.",
  },
  {
    name: "Knight's Gambit",
    type: "Immediate",
    desc: "You can roll no more than 1d for your next Action.",
  },
  {
    name: "Mutual Defense",
    type: "Faction Relationship",
    desc: "A friendly Faction goes to War with a Neutral Faction. Either join in the War, or they move to -1 on the relationship chart.",
  },
  {
    name: "Queen's Gambit",
    type: "Immediate",
    desc: "You have a zero rating to your next Action.",
  },
  {
    name: "Spectral Guest",
    type: "Crew",
    desc: "A ghostly presence has appeared in your Lair and will need to be dealt with during Free Play.",
  },
  {
    name: "Demonic Guest",
    type: "Crew",
    desc: "A demonic presence has appeard in your Lair and will need to be dealt with during Free Play.",
  },
  {
    name: "Other Worldly Guest",
    type: "Crew",
    desc: "A scrion of the Old Gods has appeared in your Lair and will need to be dealt with during Free Play.",
  },
  {
    name: "Quicksliver Poisoning",
    type: "Immediate",
    desc: "Used in electroplasmic containers and devices, you get a noseful of quicksilver vapor, suffering level 1 Harm, 'Silverlung' which starts a 4-Clock Project to heal.",
  },
  {
    name: "Turn Coat",
    type: "Crew",
    desc: "One of your Cohorts leaves your crew and joins a rival.",
  },
  {
    name: "Jangled Nerves",
    type: "Immediate",
    desc: "For the rest of the Score, all rolls to Resist generate +1 Stress.",
  },
  {
    name: "Fracturing Faction",
    type: "Crew",
    desc: "If your Hold is Strong, reduce it to Weak. If your Hold is Weak, reduce your Rep to zero.",
  },
  {
    name: "Rebellious Faction",
    type: "Crew",
    desc: "A new crew has taken possession of one of your Claims, and will have to be dealt with in Free Play.",
  },
  {
    name: "You'll Pay For This",
    type: "Immediate",
    desc: "Someone hurt by this Score will come back to collect what's owed. Start a 6-Clock, 'Petty Vengence'",
  },
  {
    name: "Death Will Not Stop Me",
    type: "Immediate",
    desc: "The ghost of someone you killed is driven to take you with it. Start a 12-Clock, 'Spectral Vengence'",
  },
  {
    name: "You're all on your own",
    type: "Immediate",
    desc: "After this roll, you cannot offer to Assist on anyone else's roll for the rest of the Score.",
  },
  {
    name: "Lesson not Learned",
    type: "Crew",
    desc: "Choose one of the XP triggers already marked for your crew for this Score. That XP trigger will not grant you XP this Score.",
  },
  {
    name: "They know you by name",
    type: "Immediate",
    desc: "A rival working for the target of the Score spots you and calls you out by name. +1 Heat, +1 Rep.",
  },
  {
    name: "Got your bell rung",
    type: "Immediate",
    desc: "You are stunned by a sudden sound, light, or a blow to the head. Start a 4-Clock to overcome the effect.",
  },
  {
    name: "Permanent Injury",
    type: "Immediate",
    desc: "If you fail this roll, any Harm you suffer is a permanent injury. (lost limb, unhealable scar, etc.) It can be Recovered through sparkcraft prosthetics or alchemy, but not regular Healing.",
  },
  {
    name: "Down and Winded",
    type: "Immediate",
    desc: "You're knocked down, struggling to catch your breath. Start a 4-Clock to overcome the effects.",
  },
  {
    name: "Demonic Telltale",
    type: "Immediate",
    desc: "Long-term exposure to the ghost field has caused a mutation like the Tycherosi have. If you already have one, gain another Telltale.",
  },
  {
    name: "Can't stop the bleeding",
    type: "Immediate",
    desc: "Start a repeating 4-Clock, 'Bleeding'. It advances each time you take an action, and you take a level 1 Harm when it fills until treated.",
  },
  {
    name: "Kicked in the Teeth",
    type: "Immediate",
    desc: "You take a shot to the mouth. It's not enough to count as Harm, but you can't speak louder than a hoarse whisper until the end of the Score.",
  },
  {
    name: "It's a Good Likeness...",
    type: "Downtime",
    desc: "For a few weeks, the district is covered in Wanted posters with your faces on them in connection with this Score. +1 Heat.",
  },
];

export default devils_bargains_data;
