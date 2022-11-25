data = {
  characters: {
    class: [
      {
        name: "Cutter",
        tag_line: "A dangerous and intimidating fighter",
        description:
          "Cutters are good at winning fights, with violence and with intimidation. Play a Cutter if you want to get your way.",
        long_description: [
          "In the underworld of the Dusk, there are scoundrels who take what they want at the bloody edge of a blade or with a threatening presence that can stop a man cold. They are the enforcers, the debt collectors, the killers, the leg-breakers, and the thugs, commonly known as Cutters.",
          "Where subtlety fails, swift brutality—and the threat of worse to come—can solve the problem. Or at least turn it into a different kind of problem.",
          "<b>When you play a Cutter, you earn xp when you address a challenge with violence or coercion.</b> Go ahead and get up in everyone’s smug faces and tell them who’s boss, then let your blades do the talking if they don’t get the message.",
          "Do you have a personal code or a line you won’t cross? Do you want to be the boss or do you want to be the enforcer for the boss? How did you acquire your taste for violence and coercion?",
        ],
        dots: {
          Skirmish: 2,
          Command: 1,
        },
        starting_build: [
          {
            name: "Captain",
            flavor: "Leader",
            dots: {
              Command: 1,
              Study: 1,
              Survey: 2,
            },
          },
          {
            name: "Thug",
            role: "Not to be Trifled With",
            dots: {
              Command: 1,
              Consort: 2,
              Sway: 1,
            },
          },
          {
            name: "Terror",
            flavor: "Savage",
            dots: {
              Prowl: 2,
              Wreck: 2,
            },
          },
          {
            name: "Devil Hunter",
            flavor: "Ghost Fighter",
            dots: {
              Attune: 2,
              Hunt: 1,
              Study: 1,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Marlane",
            description:
              "Marlane, a pugilist.  Perhaps a pit fighter down at the docks, or a boxing coach who trained you?",
          },
          {
            name: "Chael",
            description:
              "Chael, a vicious thug.  Perhaps a member of a gang that you were in before the current crew, or an independent operator who’s been in your way before?",
          },
          {
            name: "Mercy",
            description:
              "Mercy, a cold killer.  Perhaps an assassin for hire, or a particularly deadly underworld scoundrel?",
          },
          {
            name: "Grace",
            description:
              "Grace, an extortionist.  Perhaps a former partner in thuggery, or a competitor on the scene?",
          },
          {
            name: "Sawtooth",
            description:
              "Sawtooth, a physicker.  Perhaps a buddy from the war, or perhaps a butcher who botched your treatment?",
          },
        ],
        friends_or_rivals_type: "Dangerous",
        special_abilities: [
          {
            name: "Battleborn",
            ability:
              "You may expend your special armor to reduce harm from an attack in combat or to push yourself during a fight.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you “reduce harm” that means the level of harm you’re facing right now is reduced by one. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
          {
            name: "Bodyguard",
            ability:
              "When you protect a teammate, take +1d to your resistance roll. When you gather info to anticipate possible threats in the current situation, you get +1 effect.",
            description:
              "The protect teamwork maneuver lets you face a consequence for a teammate. If you choose to resist that consequence, this ability gives you +1d to your resistance roll. Also, when you read a situation to gather information about hidden dangers or potential attackers, you get +1 effect—which means more detailed information.",
          },
          {
            name: "Ghost fighter",
            ability:
              "You may imbue your hands, melee weapons, or tools with spirit energy. You gain potency in combat vs. the supernatural. You may grapple with spirits to restrain and capture them.",
            description:
              "When you imbue yourself with spirit energy, how do you do it? What does it look like when the energy manifests? When you’re imbued, you can strongly interact with ghosts and spirit-stuff, rather than weakly interact.",
          },
          {
            name: "Leader",
            ability:
              "When you Command a cohort in combat, they continue to fight when they would otherwise break (they’re not taken out when they suffer level 3 harm). They gain +1 effect and 1 armor.",
            description:
              "This ability makes your cohorts more effective in battle and also allows them to resist harm by using armor. While you lead your cohorts, they won’t stop fighting until they take fatal harm (level 4) or you order them to cease. What do you do to inspire such bravery in battle? For details about cohorts, see page 96.",
          },
          {
            name: "Mule",
            ability:
              "Your load limits are higher. Light: 5. Normal: 7. Heavy: 8.",
            description:
              "This ability is great if you want to wear heavy armor and pack a heavy weapon without attracting lots of attention. Since your exact gear is determined onthe-fly during an operation, having more load also gives you more options to get creative with when dealing with problems during a score.",
          },
          {
            name: "Not to be trifled with",
            ability:
              "You can push yourself to do one of the following: perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat.",
            description:
              "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability. If you perform a feat that verges on the superhuman, you might break a metal weapon with your bare hands, tackle a galloping horse, lift a huge weight, etc. If you engage a small gang on equal footing, you don’t suffer reduced effect due to scale against a small gang (up to six people).",
          },
          {
            name: "Savage",
            ability:
              "When you unleash physical violence, it’s especially frightening. When you Command a frightened target, take +1d.",
            description:
              "You instill fear in those around you when you get violent. How they react depends on the person. Some people will flee from you, some will be impressed, some will get violent in return. The GM judges the response of a given NPC. In addition, when you Command someone who’s affected by fear (from this ability or otherwise), take +1d to your roll.",
          },
          {
            name: "Vigorous",
            ability:
              "You recover from harm faster. Permanently fill in one of your healing clock segments. Take +1d to healing treatment rolls.",
            description:
              "Your healing clock becomes a 3-clock, and you get a bonus die when you recover.",
          },
        ],
        items: [
          {
            name: "Fine hand weapon",
            description:
              "A finely crafted one-handed melee weapon of your choice. Is this a well-crafted standard weapon, like a perfectly-balanced dagger, or something exotic, like an Iruvian dueling saber or a metal-banded war-club?",
            load: 1,
          },
          {
            name: "Fine heavy weapon",
            description:
              "A finely crafted two-handed melee weapon of your choice. A warhammer, a greatsword, a military pike, a battleaxe, etc. A heavy weapon has more reach and hits harder than a standard weapon. This might give you potency when the power or reach of the weapon is a factor.",
            load: 2,
          },
          {
            name: "Scary weapon or tool",
            description:
              "A scary-looking hand weapon or tool. This item grants increased effect when you intimidate, not increased harm in combat.",
            load: 1,
          },
          {
            name: "Manacles & chain",
            description:
              "A set of heavy manacles and chain, suitable for restraining a prisoner. A souvenir from a stay with the Bluecoats, perhaps?",
            load: 0,
          },
          {
            name: "Rage essence vial",
            description:
              "A single dose, which greatly enhances the user’s strength, resistance to pain, and irrational aggression for the span of several minutes. The GM will modify your position and effect accordingly when you fight on rage essence. Also, you suffer two consequences: “Can’t Tell Friend From Foe” and “Can’t Stop Until They’re All Broken.” You may resist these as usual.",
            load: 0,
          },
        ],
      },
      {
        name: "Hound",
        tag_line: "A deadly sharpshooter and tracker",
        description:
          "Hounds are good at tracking things down and also long-distance combat. Play a Hound if you want to choose your battles.",
        long_description: [
          "There’s always a need for scoundrels who can find what others want to keep hidden. Whether that’s a deadbeat gambler trying to skip out on their debts, a treacherous informant or witness who’s going to squeal to the Bluecoats, or the trail to a treasure squirreled away in a secret vault—it’s the Hounds that ferret them out.",
          "Why have a fair fight, when you can stalk and ambush your prey on your terms?  The underworld is your hunting ground. ",
          "<b>When you play a Hound, you earn xp when you address a challenge with tracking or violence.</b> Take the initiative to hunt down opportunities and targets for a score and be willing to hurt whoever stands in your way",
          "Do you see the whole world as potential prey, or do you still care about people? Which target in the past gave you the most trouble? Why?",
        ],
        dots: { Hunt: 2, Survey: 1 },
        starting_build: [
          {
            name: "Bounty Hunter",
            flavor: "Scout",
            dots: {
              Consort: 1,
              Prowl: 1,
              Skirmish: 2,
            },
          },
          {
            name: "Deathlands Ranger",
            flavor: "Survivor",
            dots: {
              Attune: 2,
              Prowl: 1,
              Survey: 2,
            },
          },
          {
            name: "Sniper",
            flavor: "Sharpshooter",
            dots: {
              Survey: 1,
              Study: 1,
              Prowl: 2,
            },
          },
          {
            name: "Veteran",
            flavor: "Tough As Nails",
            dots: {
              Command: 1,
              Skirmish: 2,
              Wreck: 1,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Steiner",
            description:
              "Steiner, an assassin. Perhaps one of your competitors, or a former partner from before you joined the crew?",
          },
          {
            name: "Celene",
            description:
              "Celene, a sentinel.  Celene is a guardian; a protector. Who does she watch over?",
          },
          {
            name: "Melvir",
            description:
              "Melvir, a physicker. Perhaps an old friend who’s patched you up many times, or someone to whom you’ve sent too many victims?",
          },
          {
            name: "Veleris",
            description:
              "Veleris, a spy. Who does Veleris give their intelligence to?",
          },
          {
            name: "Casta",
            description:
              "Casta, a bounty hunter. Perhaps a mentor who trained you in the deadly arts, or vice versa?",
          },
        ],
        friends_or_rivals_type: "Deadly",
        special_abilities: [
          {
            name: "Sharpshooter",
            ability:
              "You can push yourself to do one of the following: make a ranged attack at extreme distance beyond what’s normal for the weapon—unleash a barrage of rapid fire to suppress the enemy.",
            description:
              "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) in addition to the special ability.The first use of this ability allows you to attempt long-range sniper shots that would otherwise be impossible with the rudimentary firearms of Duskwall.The second use allows you to keep up a steady rate of fire in a battle (enough to“suppress” a small gang up to six people), rather than stopping for a slow reload or discarding a gun after each shot. When an enemy is suppressed, they’re reluctant to maneuver or attack (usually calling for a fortune roll to see if they can manage it).",
          },
          {
            name: "Focused",
            ability:
              "You may expend your special armor to resist a consequence of surprise or mental harm (fear, confusion, losing track of someone) or to push yourself for ranged combat or tracking.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet.If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect,act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
          {
            name: "Ghost hunter",
            ability:
              "Your hunting pet is imbued with spirit energy. It gains potency when tracking or fighting the supernatural, and gains an arcane ability: ghost-form, mind-link, or arrow-swift. Take this ability again to choose an additional arcane ability for your pet.",
            description:
              "Your pet functions as a cohort (Expert: Hunter). This ability gives them potency against supernatural targets and an arcane ability of your choice. Ghost-form allows the pet to transform into electroplasmic vapor as if it were a spirit. Mindlink allows the pet and hunter to share their senses and thoughts telepathically.Arrow-swift allows the pet to move extremely quickly, out-pacing any other creature or vehicle. For more details about cohorts, see page 96.",
          },
          {
            name: "Scout",
            ability:
              "When you gather information to discover the location of a target, you get +1 effect. When you hide in a prepared position or use camouflage you get +1dto rolls to avoid detection.",
            description:
              "A “target” can be a person, a destination, a good ambush spot, an item, etc.",
          },
          {
            name: "Survivor",
            ability:
              "From hard-won experience or occult ritual, you are immune to the poisonous miasma of the deathlands and are able to subsist on the strange flora and fauna there. You get +1 stress box.",
            description:
              "This ability gives you an additional stress box, so you have 10 instead of 9.The maximum number of stress boxes a PC can have (from any number of additional special abilities or upgrades) is 12.",
          },
          {
            name: "Tough as nails",
            ability:
              "Penalties from harm are one level less severe (though level 4 harm is still fatal).",
            description:
              "With this ability, level 3 harm doesn’t incapacitate you; instead you take -1d to your rolls (as if it were level 2 harm). Level 2 harm affects you as if it were level 1 (less effect). Level 1 harm has no effect on you (but you still write it on your sheet, and must recover to heal it). Record the harm at its original level—for healing purposes, the original harm level applies.",
          },
          {
            name: "Vengeful",
            ability:
              "You gain an additional xp trigger: You got payback against someone who harmed you or someone you care about. If your crew helped you get payback, also mark crew xp.",
            description: "",
          },
        ],
        items: [
          {
            name: "Fine pair of pistols",
            description:
              "A matched pair of handguns, made for greater accuracy,  with double barrels that allow for two shots before reloading. Were your pistols made by Kardera’s Daughters, Templeton & Slane, the Imperial Forge, or some other gunsmith? How do they stand out from the average handgun?",
            load: 1,
          },
          {
            name: "Fine long rifle",
            description:
              "A finely crafted hunting rifle, deadly at long range, unwieldy in close quarters. Long rifles are usually illegal for private citizens in Doskvol, but you have (real or forged) military paperwork for this one.",
            load: 2,
          },
          {
            name: "Electroplasmic ammunition",
            description:
              "A bandolier of electroplasmic ammo, especially potent against spirits, but less effective against physical targets. The electrical charge is enough to stun a person, but does very little real harm. Several hits might incapacitate a human target. This ammunition is especially reactive in the ghost field—make a 4-clock called “Attention from the Spirit Wardens” and tick it for every operation in which this ammo was used.",
            load: 1,
          },
          {
            name: "A trained hunting pet",
            description:
              "Your animal companion obeys your commands and anticipates your actions. Cohort (Expert: Hunter).",
            load: 0,
          },
          {
            name: "Spyglass",
            description:
              "A brass tube with lenses that allow long-distance vision. Collapsible.  May attach to a rifle.",
            load: 1,
          },
        ],
      },
      {
        name: "Leech",
        tag_line: "A saboteur and technician",
        description:
          "Leeches are good at using alchemy and wrecking stuff with sabotage. Play a Leech if you want to be creative with weird tools.",
        long_description: [
          "The world is built on industry, and the underworld is no different. Leeches are the scoundrels who distill the drugs, refine the arcane essences, build the bombs,  bandage the wounds, and forge the tools of the criminal trades—and knowing how to make things also means knowing how to break them.",
          "<b>When you play a Leech, you earn xp when you address a challenge with technical skill or mayhem.</b> Duskwall is a city full of industrial machinery,  spark-crafts, plumbing, and electrical systems for you to bend to your purposes or sabotage. Get out your tools and get your hands dirty.",
          "The extensive training that makes a Leech is rare and strange among the disenfranchised underworld class—how did you learn your arts? Which side of the coin do you prefer, the side of creation and restoration, or the side of mayhem and destruction?",
        ],
        dots: { Tinker: 2, Wreck: 1 },
        starting_build: [
          {
            name: "Doctor",
            flavor: "Physicker",
            dots: {
              Consort: 1,
              Finesse: 1,
              Study: 2,
            },
          },
          {
            name: "Sapper",
            flavor: "Saboteur",
            dots: {
              Study: 1,
              Survey: 2,
              Wreck: 1,
            },
          },
          {
            name: "Viper",
            flavor: "Venomous",
            dots: {
              Prowl: 2,
              Sway: 2,
            },
          },
          {
            name: "Witch",
            flavor: "Alchemist",
            dots: {
              Attune: 2,
              Study: 2,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Stazia",
            description:
              "Stazia, an apothecary.  Perhaps a former scoundrel turned to legitimate alchemical business, or perhaps the other way around?",
          },
          {
            name: "Veldren",
            description:
              "Veldren, a psychonaut. Perhaps an addict too poisoned to ever return to lucid thought, or perhaps an explorer of psychedelic realms beyond mere mortal experience?",
          },
          {
            name: "Eckerd",
            description:
              "Eckerd, a corpse thief.  Perhaps a good source of “raw materials”?",
          },
          {
            name: "Jul",
            description:
              "Jul, a blood dealer.  What other strange clients do they have?",
          },
          {
            name: "Malista",
            description:
              "Malista, a priestess. To what forgotten god does Malista give her service?",
          },
        ],
        friends_or_rivals_type: "Clever",
        special_abilities: [
          {
            name: "Alchemist",
            ability:
              "When you invent or craft a creation with alchemical features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special formula already known.",
            description:
              "Follow the Inventing procedure with the GM (page 224) to define your first special alchemical formula.",
          },
          {
            name: "Analyst",
            ability:
              "During downtime, you get two ticks to distribute among any long term project clocks that involve investigation or learning a new formula or design plan.",
            description: "",
          },
          {
            name: "Artificer",
            ability:
              "When you invent or craft a creation with spark-craft features, you get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one special design already known.",
            description:
              "Follow the Inventing procedure with the GM (page 224) to define your first spark-craft design.",
          },
          {
            name: "Fortitude",
            ability:
              "You may expend your special armor to resist a consequence of fatigue, weakness,  or chemical effects, or to push yourself when working with technical skill or handling alchemicals.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
          {
            name: "Ghost ward",
            ability:
              "When you Wreck an area with arcane substances, ruining it for any other use,  it becomes anathema or enticing to spirits (your choice).",
            description:
              "If you make an area anathema to spirits, they will do everything they can to avoid it, and will suffer torment if forced inside the area. If you make an area enticing to spirits, they will seek it out and linger in the area, and will suffer torment if forced to leave. This effect lasts for several days over an area the size of a small room. Particularly powerful or prepared spirits may roll their quality or arcane magnitude to see how well they’re able to resist the effect.",
          },
          {
            name: "Physicker",
            ability:
              "You can Tinker with bones, blood, and bodily humours to treat wounds or stabilize the dying. You may Study a malady or corpse. Everyone in your crew  (including you) gets +1d to their healing treatment rolls.",
            description:
              "Knowledge of anatomy and healing is a rare and esoteric thing in Duskwall. Without this ability, any attempts at treatment are likely to fail or make things worse. You can use this ability to give first aid (rolling Tinker) to allow your patient to ignore a harm penalty for an hour or two.",
          },
          {
            name: "Saboteur",
            ability:
              "When you Wreck, your work is much quieter than it should be and the damage is very well-hidden from casual inspection. ",
            description:
              "You can drill holes in things, melt stuff with acid, even use a muffled explosive, and it will all be very quiet and extremely hard to notice.",
          },
          {
            name: "Venomous",
            ability:
              "Choose a drug or poison (from your bandolier stock) to which you have become immune. You can push yourself to secrete it through your skin or saliva or exhale it as a vapor.",
            description:
              "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability. You choose the type of drug or poison when you get this ability. You may change the drug or poison by completing a long-term project. Only a single drug or poison may be chosen—you can’t become immune to any essences, oils, or other alchemical substances",
          },
        ],
        items: [
          {
            name: "Fine tinkering tools",
            description:
              "A finely crafted set of tools for detailed mechanist work.  A jeweler’s loupe. Measuring devices.",
            load: 1,
          },
          {
            name: "Fine wrecking tools",
            description:
              "A specialized set of tools for sabotage and destruction.  A small, powerful drill. A mallet and steel spikes. A prybar. An electroplasmic battery, clamps, wire. Vials of acid. A spark-torch cutter and fuel tank.",
            load: 2,
          },
          {
            name: "Blowgun & darts, syringes",
            description:
              "A small tube and darts that can be filled from alchemy flasks. Empty syringes.",
            load: 0,
          },
          {
            name: "Bandolier",
            description:
              "A strap worn across the body, fitted with specially-padded pouches to hold three alchemical agents or spark-craft bombs. When you employ an alchemical or bomb from a bandolier, choose one from the list at right (or one of your custom-made formulas). See page 226 for more on alchemicals and bombs. During downtime, you automatically refill your bandoliers, so long as you have reasonable access to a supplier or workshop.",
            load: 1,
          },
          {
            name: "Gadgets",
            description:
              "You may create gadgets during downtime by Tinkering with tools and materials. See Gadgets, page 227. Track the load for each gadget you deploy during an operation. Alcahest, Binding Oil, Drift Oil, Drown Powder, Eyeblind Poison, Fire Oil, Grenade, Quicksilver, Skullfire Poison, Smoke Bomb, Spark (drug), Standstill Poison, Trance Powder",
            load: 1,
          },
        ],
      },
      {
        name: "Lurk",
        tag_line: "A stealthy infiltrator and burglar",
        description:
          "Lurks are good at sneaking around and breaking into places. Play a Lurk if you want to slink around in the shadows.",
        long_description: [
          "There is no longer any sunlight—the world is plunged into eternal night. There are scoundrels who live in the darkness, who prowl the underworld unseen,  trespassing where they will. They are the burglars, the spies, the infiltrators, the cut-throats—commonly called Lurks.",
          "<b>When you play a Lurk, you earn xp when you address a challenge with stealth or evasion.</b> Stay out of sight, sneak past your enemies, and strike from the shadows. If things go wrong, there’s no shame in disappearing into the darkness...  for now. Your greatest ally is the dark and twisting city, its ink-dark streets, its rooftop pathways.",
          "How did you learn the stealthy arts of the Lurk? Which aspect are you drawn to most? The invisible watcher, spying on the unwary? The adroit acrobat, racing across rooftops? The deadly ambush predator, waiting for a victim in the darkness?",
        ],
        dots: { Finesse: 1, Prowl: 2 },
        starting_build: [
          {
            name: "Acrobat",
            flavor: "The Devil’s Footsteps",
            dots: {
              Consort: 2,
              Finesse: 1,
              Sway: 1,
            },
          },
          {
            name: "Assassin",
            flavor: "Ambush",
            dots: {
              Hunt: 2,
              Skirmish: 2,
            },
          },
          {
            name: "Burglar",
            flavor: "Infiltrator",
            dots: {
              Survey: 2,
              Finesse: 1,
              Tinker: 1,
            },
          },
          {
            name: "Daring Rogue",
            flavor: "Daredevil",
            dots: {
              Skirmish: 2,
              Consort: 2,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Telda",
            description:
              "Telda, a beggar. Perhaps a mentor who taught you your skills, or perhaps a rival sneak-thief",
          },
          {
            name: "Darmot",
            description:
              "Darmot, a Bluecoat. Perhaps a savvy officer that’s busted you many times, or perhaps an old friend who turned to the law instead of crime?",
          },
          {
            name: "Frake",
            description:
              "Frake, a locksmith. Perhaps an expert that you go to for consultations, or perhaps a master who creates locks to defeat you?",
          },
          {
            name: "Roslyn Kellis",
            description:
              "Roslyn Kellis, a noble. Perhaps an old friend and confidant, or perhaps one of the victims of your espionage, bent on revenge?",
          },
          {
            name: "Petra",
            description:
              "Petra, a city clerk. Perhaps a good source of information?",
          },
        ],
        friends_or_rivals_type: "Shady",
        special_abilities: [
          {
            name: "Infiltrator",
            ability:
              "You are not affected by quality or Tier when you bypass security measures.",
            description:
              "This ability lets you contend with higher-Tier enemies on equal footing. When you’re cracking a safe, picking a lock, or sneaking past elite guards, your effect level is never reduced due to superior Tier or quality level of your opposition. Are you a renowned safe cracker? Do people tell stories of how you slipped under the noses of two Chief Inspectors, or are your exceptional talents yet to be discovered?",
          },
          {
            name: "Ambush",
            ability:
              "When you attack from hiding or spring a trap, you get +1d to your roll.",
            description:
              "This ability benefits from preparation— so don’t forget you can do that in a flashback.",
          },
          {
            name: "Daredevil",
            ability:
              "When you roll a desperate action, you get +1d to your roll if you also take -1d to any resistance rolls against consequences from your action.",
            description:
              "This special ability is a bit of a gamble. The bonus die helps you, but if you suffer consequences, they’ll probably be more costly to resist. But hey, you’re a daredevil, so no big deal, right?",
          },
          {
            name: "The Devil’s Footsteps",
            ability:
              "You can push yourself to do one of the following: perform a feat of athletics that verges on the superhuman—maneuver to confuse your enemies so they mistakenly attack each other.",
            description:
              "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability. If you perform an athletic feat (running, tumbling, balance, climbing, etc.) that verges on the superhuman, you might climb a sheer surface that lacks good hand-holds, tumble safely out of a three-story fall, leap a shocking distance, etc. If you maneuver to confuse your enemies, they attack each other for a moment before they realize their mistake. The GM might make a fortune roll to see how badly they harm or interfere with each other.",
          },
          {
            name: "Expertise",
            ability:
              "Choose one of your action ratings. When you lead a group action using that action, you can suffer only 1 stress at most, regardless of the number of failed rolls.",
            description:
              "This special ability is good for covering for your team. If they’re all terrible at your favored action, you don’t have to worry about suffering a lot of stress when you lead their group action.",
          },
          {
            name: "Ghost veil",
            ability:
              "You may shift partially into the ghost field, becoming shadowy and insubstantial for a few moments. Take 2 stress when you shift, plus 1 stress for each extra feature: it lasts for a few minutes rather than moments—you are invisible rather than shadowy—you may float through the air like a ghost.",
            description:
              "This ability transforms you into an intangible shadow for a few moments. If you spend additional stress, you can extend the effect for additional benefits, which may improve your position or effect for action rolls, depending on the circumstances, as usual.",
          },
          {
            name: "Reflexes",
            ability:
              "When there’s a question about who acts first, the answer is you.",
            description:
              "This ability gives you the initiative in most situations. Some specially trained NPCs (and some demons and spirits) might also have reflexes, but otherwise, you’re always the first to act, and can interrupt anyone else who tries to beat you to the punch. This ability usually doesn’t negate the need to make an action roll that you would otherwise have to make, but it may improve your position or effect.",
          },
          {
            name: "Shadow",
            ability:
              "You may expend your special armor to resist a consequence from detection or security measures, or to push yourself for a feat of athletics or stealth.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
        ],
        items: [
          {
            name: "Fine lockpicks",
            description:
              "A finely crafted set of tools to disable and circumvent locks. ",
            load: 0,
          },
          {
            name: "Fine shadow cloak",
            description:
              "A hooded cloak made of rare Iruvian shadow-silk that blends into the darkness around it. This item improves your effect level when you sneak around.",
            load: 1,
          },
          {
            name: "Light climbing gear",
            description:
              "A well-crafted set of climbing gear that is less bulky and heavy than a standard set. Standard climbing gear is 2 load.",
            load: 1,
          },
          {
            name: "Silence potion vial",
            description:
              "A vial of golden liquid that negates all sound within 10 paces of the drinker for a span of several moments.",
            load: 0,
          },
          {
            name: "Dark-sight goggles",
            description:
              "An arcane device that allows the wearer to see in pitch darkness as if it were well-lit.",
            load: 1,
          },
        ],
      },
      {
        name: "Slide",
        tag_line: "A subtle manipulator and spy",
        description:
          "Slides are good at social situations and subterfuge. Play a Slide if you want to manipulate and deceive people.",
        long_description: [
          "It’s said that the primal substance of the world is not mere matter or strange plasms, it’s lies. Everything we do, everything we care about, everything we value—all lies we tell each other and ourselves. The world is a fabrication, a convenient fiction, a story—and the storytellers are Slides.",
          "<b>When you play a Slide, you earn xp when you address a challenge with deception or influence.</b> Talk your way into trouble, then talk your way out again. Pretend to be someone you’re not. Bluff, lie, and manipulate to get your way. Every problem is ultimately a problem because of people—and people are the instrument upon which you play your music.",
          "Is there anything true about you, at your core? Or are you whatever you need to be, day to day? Are all of your relationships merely gambits that you play for your advantage?",
        ],
        dots: { Consort: 1, Sway: 2 },
        starting_build: [
          {
            name: "The Siren",
            flavor: "Trust in Me",
            dots: {
              Attune: 2,
              Consort: 1,
              Prowl: 1,
            },
          },
          {
            name: "The Prestige",
            flavor: "Mesmerism",
            dots: {
              Finesse: 2,
              Prowl: 2,
            },
          },
          {
            name: "The Grifter",
            flavor: "A Little Something on the Side",
            dots: {
              Consort: 1,
              Finesse: 2,
              Study: 1,
            },
          },
          {
            name: "The Spy",
            flavor: "Cloak & Dagger",
            dots: {
              Prowl: 2,
              Finesse: 1,
              Skirmish: 1,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Bryl",
            description:
              "Bryl, a drug dealer. Perhaps a reliable underworld contact, or perhaps an old partner with a grudge?",
          },
          {
            name: "Bazso Baz",
            description:
              "Bazso Baz, a gang leader. Perhaps a paramour pursuing your affections, or perhaps a former lover, now scorned?",
          },
          {
            name: "Klyra",
            description:
              "Klyra, a tavern owner.  Perhaps a good source for gossip?",
          },
          {
            name: "Nyryx",
            description:
              "Nyryx, a prostitute.  Perhaps an informant to spark potential marks, or perhaps a rival manipulator?",
          },
          {
            name: "Harker",
            description:
              "Harker, a jail bird. Perhaps a friend who you helped when you were in prison, or perhaps an enemy who hurt you when you served your time?",
          },
        ],
        friends_or_rivals_type: "Sly",
        special_abilities: [
          {
            name: "Rook’s gambit",
            ability:
              "Take 2 stress to roll your best action rating while performing a different action.  Say how you adapt your skill to this use.",
            description:
              "This is the “jack-of-all-trades” ability. If you want to attempt lots of different sorts of actions and still have a good dice pool to roll, this is the special ability for you.",
          },
          {
            name: "Cloak & Dagger",
            ability:
              "When you use a disguise or other form of covert misdirection, you get +1d to rolls to confuse or deflect suspicion. When you throw off your disguise, the resulting surprise gives you the initiative in the situation.",
            description:
              "This ability gives you the chance to more easily get out of trouble if a covert operation goes haywire. Also, don’t forget your fine disguise kit item, which boosts the effect of your covert deception methods.",
          },
          {
            name: "Ghost voice",
            ability:
              "You know the secret method to interact with a ghost or demon as if it were a normal human, regardless of how wild or feral it appears. You gain potency when communicating with the supernatural.",
            description:
              "The first part of this ability gives you permission to do something that is normally impossible: when you speak to a spirit, it always listens and understands you, even if it would otherwise be too bestial or insane to do so. The second part of the ability increases your effect when you use social actions with the supernatural.",
          },
          {
            name: "Like looking into a mirror",
            ability: "You can always tell when someone is lying to you.",
            description:
              "This ability works in all situations without restriction. It is very powerful, but also a bit of a curse. You see though every lie, even the kind ones.",
          },
          {
            name: "A little something on the side",
            ability: "At the end of each downtime phase, you earn +2 stash.",
            description:
              "Since this money comes at the end of downtime, after all downtime actions are resolved, you can’t remove it from your stash and spend it on extra activities until your next downtime phase.",
          },
          {
            name: "Mesmerism",
            ability:
              "When you Sway someone, you may cause them to forget that it’s happened until they next interact with you.",
            description:
              "The victim’s memory “glosses over” the missing time, so it’s not suspicious that they’ve forgotten something. When you next interact with the victim, they remember everything clearly, including the strange effect of this ability.",
          },
          {
            name: "Subterfuge",
            ability:
              "You may expend your special armor to resist a consequence from suspicion or persuasion, or to push yourself for subterfuge.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you “resist a consequence” of the appropriate type, you avoid it completely. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
          {
            name: "Trust in me",
            ability:
              "You get +1d vs. a target with whom you have an intimate relationship.",
            description:
              "This ability isn’t just for social interactions. Any action can get the bonus. “Intimate” is for you and the group to define, it need not exclusively mean romantic intimacy.",
          },
        ],
        items: [
          {
            name: "Fine clothes & jewelry",
            description:
              "An outfit that appears to be of such fine make as to pass you off as a wealthy noble. If you’re carrying this item as a second outfit to change into, it counts as 2 load.",
            load: 0,
          },
          {
            name: " Fine disguise kit",
            description:
              "A theatrical make-up kit equipped with an impressive array of expert appliances to fool the eye. The fine quality of this kit may increase the effect of your deceptive actions when you use it.",
            load: 1,
          },
          {
            name: "Fine loaded dice, trick cards",
            description:
              "Gambling accouterments subtly altered to favor particular outcomes. The fine quality of this kit may increase the effect of your deceptive actions when you use it.",
            load: 0,
          },
          {
            name: "Trance powder",
            description:
              "A dose of the popular drug, which induces an altered mental state. The victim of this powder is not fully unconscious, but rather retreats into a calm, suggestible mental state, similar to hypnotism.",
            load: 0,
          },
          {
            name: "A cane-sword",
            description:
              "A slim sword and its sheath, disguised as a noble’s cane. The disguise will fool a cursory inspection.",
            load: 1,
          },
        ],
      },
      {
        name: "Spider",
        tag_line: "A devious mastermind",
        description:
          "Spiders are good at masterminding maneuvers. Play a Spider if you want to assist teammates and deal with other factions.",
        long_description: [
          "The underworld may appear on the surface to be a chaotic array of warring factions and bloody deeds, but it has a beautiful order to those who are able to see it. This pattern is the web of connections, favors, vendettas, and secrets that bind the criminal world together. The scoundrels who pluck the strands of this web are known as Spiders.",
          "<b>When you play a Spider, you earn xp when you address a challenge with calculation or conspiracy.</b> Reach out to your contacts, friends, and associates to set your crew up for success. Use your downtime activities and flashbacks wisely to prepare for trouble and to calculate the angles of success. When things go wrong, don’t panic, and remember: you planned for this.",
          "Are you enmeshed in the network of favors and debts that you exploit as a Spider, or do you scrupulously hold yourself apart, as a cold predator upon the web?",
        ],
        dots: { Study: 1, Consort: 2 },
        starting_build: [
          {
            name: "The Arbiter",
            flavor: "Ghost Contract",
            dots: {
              Attune: 2,
              Study: 1,
              Sway: 2,
            },
          },
          {
            name: "The Conductor",
            flavor: "Foresight",
            dots: {
              Command: 2,
              Survey: 2,
            },
          },
          {
            name: "The Convict",
            flavor: "Jail Bird",
            dots: {
              Command: 1,
              Skirmish: 2,
              Sway: 1,
            },
          },
          {
            name: "The Operator",
            flavor: "Mastermind",
            dots: {
              Prowl: 2,
              Tinker: 2,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Salia",
            description:
              "Salia, an information broker. Perhaps a reliable contact for underworld jobs, or perhaps a former partner who sold you out?",
          },
          {
            name: "Augus",
            description:
              "Augus, a master architect. Perhaps a good source for building schematics and historical details, or perhaps a rival who designs security measures?",
          },
          {
            name: "Jennah",
            description:
              "Jennah, a servant.  Perhaps a good source for gossip among the upper class?",
          },
          {
            name: "Riven",
            description:
              "Riven, a chemist.  Perhaps a good source of medicines for recovery?",
          },
          {
            name: "Jeren",
            description:
              "Jeren, a Bluecoat archivist. Perhaps a double-agent within the City Watch, or perhaps an overly curious officer, interested in your crimes?",
          },
        ],
        friends_or_rivals_type: "Shrewd",
        special_abilities: [
          {
            name: "Foresight",
            ability:
              "Two times per score you can assist a teammate without paying stress. Describe how you prepared for this.",
            description:
              "You can narrate an event in the past that helps your teammate now, or you might explain how you expected this situation and planned a helpful contingency that you reveal now.",
          },
          {
            name: "Calculating",
            ability:
              "Due to your careful planning, during downtime, you may give yourself or another crew member +1 downtime activity.",
            description:
              "If you forget to use this ability during downtime, you can still activate it during the score and flashback to the previous downtime when the extra activity happened.",
          },
          {
            name: "Connected",
            ability:
              "During downtime, you get +1 result level when you acquire an asset or reduce heat.",
            description:
              "Your array of underworld connections can be leveraged to loan assets, pressure a vendor to give you a better deal, intimidate witnesses, etc.",
          },
          {
            name: "Functioning vice",
            ability:
              "When you indulge your vice, you may adjust the dice outcome by 1 or 2 (up or down). An ally who joins you may do the same.",
            description:
              "If you indulged your vice and rolled a 4, you could increase the result to 5 or 6, or you could reduce the result to 3 or 2 (perhaps to avoid overindulgence). Allies that join you don’t need to have the same vice as you, just one that could be indulged alongside yours somehow.",
          },
          {
            name: "Ghost contract",
            ability:
              "When you shake on a deal or draft one in writing, you and your partner—human or otherwise—both bear a mark of your oath. If either breaks the contract, they take level 3 harm, “Cursed.”",
            description:
              "The mark of the oath is obvious to anyone who sees it (perhaps a magical rune appears on the skin). When you suffer “Cursed” harm, you’re incapacitated by withering: enfeebled muscles, hair falling out, bleeding from the eyes and ears, etc., until you either fulfill the deal or discover a way to heal the curse.",
          },
          {
            name: "Jail bird",
            ability:
              "When incarcerated, your wanted level counts as 1 less, your Tier as 1 more,  and you gain +1 faction status with a faction that you help while you’re inside,  in addition to whatever you get from the incarceration roll.",
            description:
              "Zero is the minimum wanted level; this ability can’t make your wanted level negative. See the Incarceration roll, page 148.",
          },
          {
            name: "Mastermind",
            ability:
              "You may expend your special armor to protect a teammate, or to push yourself when you gather information or work on a long-term project.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you protect a teammate, this ability negates or reduces the severity of a consequence or harm that your teammate is facing. You don’t have to be present to use this ability—say how you prepared for this situation in the past. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
          {
            name: "Weaving the web",
            ability:
              "You gain +1d to Consort when you gather information on a target for a score.  You get +1d to the engagement roll for that operation.",
            description:
              "Your network of underworld connections can always be leveraged to gain insight for a job—even when your contacts aren’t aware that they’re helping you.",
          },
        ],
        items: [
          {
            name: "Fine cover identity",
            description:
              "Paperwork, planted stories and rumors, and false relationships sufficient to pass as a different person.",
            load: 0,
          },
          {
            name: "Fine bottle of whiskey",
            description:
              "A rare distillation from your personal collection,  potent both in its alcohol and its ability to impress.",
            load: 1,
          },
          {
            name: "Blueprints",
            description:
              "A folio of useful architectural drawings and city plans. Feel free to specify which plans you’re carrying when you choose this item.",
            load: 1,
          },
          {
            name: "Vial of slumber essence",
            description:
              "A dose of slumber essence sufficient to put someone to sleep for an hour. The victim’s sleep isn’t supernatural, but it is deep—they can be roused with some effort. ",
            load: 0,
          },
          {
            name: "Concealed palm pistol",
            description:
              "A small firearm with a weak charge, easily concealed in a sleeve or waistcoat. This pistol has extremely limited range; only a few feet. It’s very difficult to detect on your person, even if you’re searched.",
            load: 0,
          },
        ],
      },
      {
        name: "Whisper",
        tag_line: "An arcane adept and channeler",
        description:
          "Whispers are good at magical stuff and dealing with ghosts. Play a Whisper if you want to meddle with arcane powers.",
        long_description: [
          "Duskwall is a haunted place—plagued by rogue spirits consumed by vengeance,  by cunning demons manipulating humans for their own inscrutable purposes,  and by even stranger horrors lurking in the space just beyond sight and reason.  To go into this shadowy world without knowledge of the arcane and the occult is to walk unarmed into the lair of the enemy. The Whispers are the sentinels who watch the greater darkness—staring into the void so others don’t have to.",
          "<b>When you play a Whisper, you earn xp when you address a challenge with knowledge or arcane power.</b> Seek out the strange and dark forces and bend them to your will. By being willing to face the trauma from the stress-intensive abilities of the arcane, you’ll slowly remove parts of yourself, and replace them with power.",
          "Why did you pursue the path of the Whisper? How did you develop your abilities? Are you a natural, did you study and practice on your own, or did you have a mentor?",
        ],
        dots: { Study: 1, Attune: 2 },
        starting_build: [
          {
            name: "The Summoner",
            flavor: "Compel",
            dots: {
              Command: 1,
              Study: 1,
              Survey: 2,
            },
          },
          {
            name: "The Cultist",
            flavor: "Occultist",
            dots: {
              Command: 2,
              Consort: 2,
            },
          },
          {
            name: "The Channeler",
            flavor: "Tempest",
            dots: {
              Skirmish: 2,
              Wreck: 2,
            },
          },
          {
            name: "The Dark Scholar",
            flavor: "Ritual",
            dots: {
              Consort: 1,
              Study: 1,
              Tinker: 2,
            },
          },
        ],
        friends_or_rivals: [
          {
            name: "Nyryx",
            description:
              "Nyryx, a possessor ghost. Perhaps a good source for targets, or perhaps a spirit that escaped from your service?",
          },
          {
            name: "Scurlock, a vampire.  Perhaps a mentor, or perhaps a deadly rival?",
            description: "Scurlock",
          },
          {
            name: "Setarra",
            description:
              "Setarra, a demon.  Perhaps your partner in a dark endeavor, or perhaps an entity you once controlled, seeking vengeance?",
          },
          {
            name: "Quellyn",
            description:
              "Quellyn, a witch.  Perhaps a knowledgeable healer and seer, or perhaps a student of yours who left over bad blood?",
          },
          {
            name: "Flint",
            description:
              "Flint, a spirit trafficker.  Perhaps a good source for unusual arcane supplies, or perhaps a rival in the occult world of Duskwall?",
          },
        ],
        friends_or_rivals_type: "Strange",
        special_abilities: [
          {
            name: "Compel",
            ability:
              "You can Attune to the ghost field to force a nearby ghost to appear before you and obey an order you give it. You are not supernaturally terrified by a ghost you summon or attempt to compel (though your allies may be).",
            description:
              "The GM will tell you if you sense any ghosts nearby. If you don’t, you can gather information (maybe Attune, Survey, or Study) to attempt to locate one. By default, a ghost wants to satisfy its need for life essence and to exact vengeance. When you compel it, you can give it a general or specific command, but the more general it is (like “Protect me”) the more the ghost will interpret it according to its own desires. Your control over the ghost lasts until the command is fulfilled, or until a day has passed, whichever comes first.",
          },
          {
            name: "Ghost mind",
            ability:
              "You’re always aware of supernatural entities in your presence. Take +1d whenever you gather information about the supernatural by any means.",
            description: "",
          },
          {
            name: "Iron will",
            ability:
              "You are immune to the terror that some supernatural entities inflict on sight.  When you make a resistance roll with Resolve, take +1d.",
            description:
              "With this ability, you do not freeze up or flee when confronted by any kind of supernatural entity or strange occult event.",
          },
          {
            name: "Occultist",
            ability:
              "You know the secret ways to Consort with ancient powers, forgotten gods, or demons. Once you’ve consorted with one, you get +1d to Command cultists who worship it.",
            description:
              "Consorting with a given entity may require special preparations or travel to a specific place. The GM will tell you about any requirements. You get the bonus die to your Command rolls because you can demonstrate a secret knowledge of or influence over the entity when you interact with cultists.",
          },
          {
            name: "Ritual",
            ability:
              "You know the arcane methods to perform ritual sorcery. You can Study an occult ritual (or create a new one) to summon a supernatural effect or being.  You begin with one ritual already learned.",
            description:
              "Without this special ability, the study and practice of rituals leaves you utterly vulnerable to the powers you supplicate. Such endeavors are not recommended. For more details, see Rituals, page 222.",
          },
          {
            name: "Strange methods",
            ability:
              "When you invent or craft a creation with arcane features, get +1 result level to your roll (a 1-3 becomes a 4/5, etc.). You begin with one arcane design already known.",
            description:
              "Follow the Inventing procedure with the GM (page 224) to define your first arcane design.",
          },
          {
            name: "Tempest",
            ability:
              "You can push yourself to do one of the following: unleash a stroke of lightning as a weapon—summon a storm in your immediate vicinity (torrential rain, roaring winds, heavy fog, chilling frost and snow, etc.).",
            description:
              "When you push yourself to activate this ability, you still get one of the normal benefits of pushing yourself (+1d, +1 effect, etc.) if you’re making a roll, in addition to the special ability. When you unleash lightning as a weapon, the GM will describe its effect level and significant collateral damage. If you unleash it in combat against an enemy who’s threatening you, you’ll still make an action roll in the fight (usually with Attune). When you summon a storm, the GM will describe its effect level. If you’re using this power as cover or distraction, it’s probably a setup teamwork maneuver, using Attune.",
          },
          {
            name: "Warded",
            ability:
              "You may expend your special armor to resist a supernatural consequence, or to push yourself when you contend with or employ arcane forces.",
            description:
              "When you use this ability, tick the special armor box on your playbook sheet. If you resist a consequence, this ability negates or reduces its severity. If you use this ability to push yourself, you get one of the benefits (+1d, +1 effect, act despite severe harm) but you don’t take 2 stress. Your special armor is restored at the beginning of downtime.",
          },
        ],
        items: [
          {
            name: "Fine lightning hook",
            description:
              "A long, two-handed pole with a loop of heavy wire at the end, connected to an electroplasmic capacitor. Suitable for grappling a spirit and dragging it into a spirit bottle. This custom-made hook collapses into a compact form, thus reducing its load to 1, even though it’s two-handed.",
            load: 1,
          },
          {
            name: "Fine spirit mask",
            description:
              "An arcane item that allows the trained user to see supernatural energies in great detail. Also affords some measure of protection against ghostly possession. Each spirit mask is unique. What does yours look like? What makes it strange and disturbing to see?",
            load: 1,
          },
          {
            name: "Spirit bottles (2)",
            description:
              "An arcane device used to trap a spirit. A metal and crystalline cylinder, the size of a loaf of bread.",
            load: 1,
          },
          {
            name: "Ghost key",
            description:
              "An arcane device that can open ghost doors. There’s an echo of the entire city, across the ages, trapped in the ghost field. Sometimes a door to that place can be found. ",
            load: 0,
          },
          {
            name: "Demonbane charm",
            description: "An arcane trinket that demons prefer to avoid.",
            load: 0,
          },
        ],
      },
    ],
    heritages: [
      {
        name: "Akoros",
        description:
          "Akoros is the largest and most industrialized land in the Imperium, and is home to the capitol city as well as Duskwall itself. They’re known as a diverse conglomeration of cultures that have grown together in close proximity for centuries, somewhat like Europe.",
      },
      {
        name: "Dagger Isles",
        description:
          "If you want to be a rootless wanderer you could be from the Dagger Isles. People there often grow up on ships and travel a lot before settling down. They’re known as corsairs and merchants who live without lightning barriers—dealing with spirits in other ways.",
      },
      {
        name: "Iruvia",
        description:
          "If you want to be from a culture considered “foreign” by the locals, you could be from Iruvia, a rich and powerful desert kingdom far to the south. It’s another diverse land of varying cultures similar to old Persia, Egypt, and India.",
      },
      {
        name: "Severos",
        description:
          "If you want to be from a place considered “wild” by the rest of the empire, you could be from Severos. Outside the few Imperial settlements, most Severosi live in nomadic horse-tribes scattered across the blasted deathlands, surviving within the ruins of ancient arcane fortresses which still repel spirits.",
      },
      {
        name: "Skovlan",
        description:
          "If you want to be from a marginalized people, you could be from Skovlan, the island kingdom just across the sea from Doskvol. Skovlan was last to be brought under Imperial rule, over the course of the 36-year Unity War(which ended only a few years ago).Many Skovlander refugees who lost their homes and jobs in the destruction of the war have come to Doskvol seeking new opportunities.",
      },
      {
        name: "Tycheros",
        description:
          "If you want to be weird, you can be from Tycheros. It’s a semi-mythical place, far away beyond the northern Void Sea. Everyone says that the people there are part-demon. If you choose Tycherosi heritage, also create a demonic telltale (like black shark eyes, feathers instead of hair, etc.) that marks your character.",
      },
    ],
    backgrounds: [
      {
        name: "Academic",
        description:
          "A scholar, a professor or student from Doskvol Academy, a philosopher or journalist, etc.",
      },
      {
        name: "Labor",
        description:
          "A servant, a factory worker, a coach driver, a docker, a sailor, a Rail Jack, etc. A stevedore for the North Hook Company.",
      },
      {
        name: "Law",
        description:
          "An advocate or barrister, a Bluecoat or inspector (or even Spirit Warden), a prison guard from Ironhook, etc.",
      },
      {
        name: "Trade",
        description:
          "A shopkeeper, a merchant, a skilled crafts-person, a shipping agent, etc. A liaison to the Ministry of Preservation.",
      },
      {
        name: "Military",
        description:
          "An Imperial or Skovlander soldier, a mercenary, an intelligence operative, a strategist, a training instructor, etc.",
      },
      {
        name: "Noble",
        description:
          "A dilettante, a courtier, the scion of a fallen house, etc.",
      },
      {
        name: "Underworld",
        description:
          "A street urchin, gang member, young thug, or other outcast who grew up on the streets.",
      },
    ],
    vices: [
      {
        name: "Faith",
        description:
          "You’re dedicated to an unseen power, forgotten god, ancestor, etc.",
      },
      {
        name: "Gambling",
        description:
          "You crave games of chance, betting on sporting events, etc.",
      },
      {
        name: "Luxury",
        description: "Expensive or ostentatious displays of opulence.",
      },
      {
        name: "Obligation",
        description:
          "You’re devoted to a family, a cause, an organization, a charity, etc.",
      },
      {
        name: "Pleasure",
        description:
          "Gratification from lovers, food, drink, drugs, art, theater, etc.",
      },
      {
        name: "Stupor",
        description:
          "You seek oblivion in the abuse of drugs, drinking to excess, getting beaten to a pulp in the fighting pits, etc.",
      },
      {
        name: "Weird",
        description:
          "You experiment with strange essences, consort with rogue spirits, observe bizarre rituals or taboos, etc.",
      },
    ],
    actions: [
      {
        name: "Attune",
        description:
          "When you Attune, you open your mind to the ghost field or other arcane power.",
        tips: "You might communicate with a ghost or understand aspects of spectrology. You could try to perceive beyond sight in order to better understand your situation (but Surveying might be better).",
      },
      {
        name: "Command",
        description: "When you Command, you compel swift obedience.",
        tips: "You might intimidate or threaten to get what you want. You might lead a gang in a group action. You could try to order people around to persuade them (but Consorting might be better).",
      },
      {
        name: "Consort",
        description:
          "When you Consort, you socialize with friends and contacts.",
        tips: "You might gain access to resources, information, people, or places. You might make a good impression or win someone over with your charm and style. You might make new friends or connect with your heritage or background. You could try to manipulate your friends with social pressure (but Sway might be better).",
      },
      {
        name: "Finesse",
        description:
          "When you Finesse, you employ dextrous manipulation or subtle misdirection.",
        tips: "You might pick someone’s pocket. You might handle the controls of a vehicle or direct a mount. You might formally duel an opponent with graceful fighting arts. You could try to employ those arts in a chaotic melee (but Skirmishing might be better). You could try to pick a lock (but Tinkering might be better).",
      },
      {
        name: "Hunt",
        description: "When you Hunt, you carefully track a target.",
        tips: "You might follow a target or discover their location. You might arrange an ambush. You might attack with precision shooting from a distance. You could try to bring your guns to bear in a melee (but Skirmishing might be better).",
      },
      {
        name: "Prowl",
        description: "When you Prowl, you traverse skillfully and quietly.",
        tips: "You might sneak past a guard or hide in the shadows. You might run and leap across the rooftops. You might attack someone from hiding with a backstab or blackjack. You could try to waylay a victim in the midst of battle (but Skirmishing might be better).",
      },
      {
        name: "Skirmish",
        description:
          "When you Skirmish, you entangle a target in close combat so they can’t easily escape.",
        tips: "You might brawl or wrestle with them. You might hack and slash. You might seize or hold a position in battle. You could try to fight in a formal duel (but Finessing might be better).",
      },
      {
        name: "Study",
        description:
          "When you Study, you scrutinize details and interpret evidence.",
        tips: "You might gather information from documents, newspapers, and books. You might do research on an esoteric topic. You might closely analyze a person to detect lies or true feelings. You could try to examine events to understand a pressing situation (but Surveying might be better).",
      },
      {
        name: "Survey",
        description:
          "When you Survey, you observe the situation and anticipate outcomes.",
        tips: "You might spot telltale signs of trouble before it happens. You might uncover opportunities or weaknesses. You might detect a person’s motivations or intentions. You could try to spot a good ambush point (but Hunting might be better).",
      },
      {
        name: "Sway",
        description:
          "When you Sway, you influence with guile, charm, or argument.",
        tips: "You might lie convincingly. You might persuade someone to do what you want. You might argue a compelling case that leaves no clear rebuttal. You could try to trick people into affection or obedience (but Consorting or Commanding might be better).",
      },
      {
        name: "Tinker",
        description: "When you Tinker, you fiddle with devices and mechanisms.",
        tips: "You might create a new gadget or alter an existing item. You might pick a lock or crack a safe. You might disable an alarm or trap. You might turn the clockwork and electroplasmic devices around the city to your advantage. You could try to use your technical expertise to control a vehicle (but Finessing might be better).",
      },
      {
        name: "Wreck",
        description: "When you Wreck, you unleash savage force.",
        tips: "You might smash down a door or wall with a sledgehammer, or use an explosive to do the same. You might employ chaos or sabotage to create a distraction or overcome an obstacle. You could try to overwhelm an enemy with sheer force in battle (but Skirmishing might be better).",
      },
    ],
    standard_items: [
      {
        name: "A Blade or Two",
        description:
          "A Blade or Two: Perhaps you carry a simple fighting knife. Or two curved swords. Or a rapier and stiletto. Or a heavy butcher’s cleaver.",
        load: 1,
      },
      {
        name: "Throwing Knives",
        description: " Six small, light blades.",
        load: 1,
      },
      {
        name: "A Pistol",
        description:
          "A heavy, single-shot, breechloading firearm. Devastating at 20 paces, slow to reload.",
        load: 1,
      },
      {
        name: "A Large Weapon",
        description:
          "A weapon meant for two hands. A battle-axe, greatsword,  warhammer, or pole-arm. A hunting rifle. A blunderbuss. A bow or crossbow.",
        load: 2,
      },
      {
        name: "An Unusual Weapon",
        description:
          "A curiosity or tool turned into a weapon. A whip, a flail,  a hatchet, a shovel, a length of chain,  a razor-edged fan, steel-toed boots.",
        load: 1,
      },
      {
        name: "Armor",
        description: "A thick leather tunic plus reinforced gloves and boots.",
        load: 2,
      },
      {
        name: "Heavy Armor",
        description:
          "The addition of chain mail,  metal plates, a metal helm. The load for heavy armor is in addition to normal armor—5 load total.",
        load: 3,
      },
      {
        name: "Burglary Gear",
        description:
          "A set of lockpicks. A small pry-bar. Vials of oil to silence squeaky hinges. A coil of wire and fishing hooks. A small pouch of fine sand.",
        load: 1,
      },
      {
        name: "Climbing Gear",
        description:
          "A large coil of rope. A small coil of rope. Grappling hooks. A small pouch of chalk dust. A climbing harness with loops and metal rings. A set of iron pitons and a small mallet. ",
        load: 2,
      },
      {
        name: "Documents",
        description:
          "A collection of slim volumes on a variety of topics, including a registry of the nobility, City Watch commanders,  and other notable citizens. Blank pages, a vial of ink, a pen. A number of interesting maps.",
        load: 1,
      },
      {
        name: "Arcane Implements",
        description:
          "A vial of quicksilver.  A pouch of black salt. A spirit anchor in the form of a small stone. A spirit bottle.  A vial of electroplasm, designed to break and splatter on impact.",
        load: 1,
      },
      {
        name: "Subterfuge supplies",
        description:
          "A theatrical makeup kit. A selection of blank documents,  ready for the forger’s hand. Costume jewelry. A reversible cloak and distinctive hat. A forged badge of office.",
        load: 1,
      },
      {
        name: "Demolition tools",
        description: "A sledgehammer and iron spikes. Heavy drill. Crowbar. ",
        load: 2,
      },
      {
        name: "Tinkering Tools",
        description:
          "An assortment for detailed mechanist work: jeweler’s loupe, tweezers, a small hammer, pliers,  screwdriver, etc.",
        load: 1,
      },
      {
        name: "Lantern",
        description:
          "A simple oil lantern, a fancy electroplasmic lamp, or other light source.",
        load: 1,
      },
      {
        name: "Spiritbane Charm",
        description: "A small arcane trinket that ghosts prefer to avoid.",
        load: 0,
      },
    ],
  },
};
