window.MARKET_DATA = {
  locations: [
    {
      id: "point-lookout-bowls",
      name: "Point Lookout Bowls Club",
      village: "Point Lookout",
      currentSignal: "Established market anchor. Public listings describe Sunday or school-holiday style daytime markets with local artisans, food, gifts and community stalls.",
      conceptUse: "Use the existing market knowledge as the baseline. A night-market version would need to ask whether a twilight extension, projection corner or music-linked evening is wanted by the club and existing market holders.",
      bestWindows: ["School holidays", "Long weekends", "Spring shoulder season"],
      projectionFit: "Possible only after checking projection surfaces, light spill, neighbours, wildlife, power and club operating hours.",
      transportFit: "Good visitor recognition, but peak periods need last-boat and bus-flow questions.",
      sourceIds: ["plbc-markets", "straddie-pl-markets", "sealink-pl-markets"],
      tags: ["existing-market", "school-holidays", "family", "daytime-baseline"],
      questions: [
        "Who manages bookings, fees and cancellation notices for the current markets?",
        "Which dates and times already have venue approval and strong audience demand?",
        "How many extra twilight stalls can fit without blocking access, staff paths or bowls operations?",
        "What setup, power, lighting and pack-down rules would stallholders need?",
        "What visitor FAQ is needed: parking, toilets, bus stop, last ferry, wet weather or cash/card?"
      ]
    },
    {
      id: "little-ship-club",
      name: "Little Ship Club",
      village: "Dunwich",
      currentSignal: "Waterfront club at One Mile with bistro, social events and live music listings. Some published hours finish before full night-time, especially outside holiday periods.",
      conceptUse: "Treat as a sunset-to-early-evening host-led test. Its ferry-adjacent location could suit a small light-projection and community-stall trial if the club wants it.",
      bestWindows: ["Easter holidays", "Winter sunset sessions", "Summer early evenings"],
      projectionFit: "Strong sunset atmosphere, but needs strict checks on closing time, waterfront glare, wind, power and marine safety.",
      transportFit: "Close to Stradbroke Flyer One Mile Jetty, useful for arrival/departure mapping.",
      sourceIds: ["little-ship-hours", "little-ship-event", "visit-by-boat"],
      tags: ["sunset", "waterfront", "dunwich", "ferry-adjacent"],
      questions: [
        "Which exact opening hours, setup window and pack-down deadline are possible?",
        "Which approved area could hold a stall table without interrupting dining, bar or marina access?",
        "Which ferry and bus arrivals match a sunset session and last return?",
        "What power, screen and low-light options are approved by the club?",
        "What visitor FAQ is needed: bookings, meals, weather, parking and return travel?"
      ]
    },
    {
      id: "straddie-hotel",
      name: "The Straddie Hotel",
      village: "Point Lookout",
      currentSignal: "Public venue page describes late public bar hours, live music nights, Sunday sessions and function spaces at Point Lookout.",
      conceptUse: "A natural candidate for a hosted projection-and-stall corner connected to live music, sunset drinks, visitor stays and low-friction browsing.",
      bestWindows: ["Summer evenings", "Music nights", "New Year's Eve lead-up", "Whale season weekends"],
      projectionFit: "High potential if surfaces, crowd paths, sound, neighbours and brand fit are agreed.",
      transportFit: "Strong visitor destination, but late movement home needs buses, courtesy options, taxis and last-boat clarity.",
      sourceIds: ["straddie-hotel", "events-on-straddie"],
      tags: ["late-trade", "music", "visitor", "point-lookout"],
      questions: [
        "Which event nights or spaces already allow external stallholders or makers?",
        "Where can stalls fit without blocking staff, diners, accommodation access or emergency paths?",
        "What setup time, pack-down time, power, lighting and sound limits apply?",
        "Which opt-in attendee fields are useful: visitor type, accommodation area, arrival mode or departure time?",
        "What public FAQ is needed: entry cost, booking, food availability, accessibility and transport?"
      ]
    },
    {
      id: "straddie-brewing-co",
      name: "Straddie Brewing Co",
      village: "Dunwich",
      currentSignal: "Island brewery, taproom and food venue near the Dunwich / Gumpi gateway, with public brewery, food, tour and ocean-view visitor signals.",
      conceptUse: "A pub-and-brewery host candidate for ferry-side visitor flow, tasting events, music, tours, food, small maker tables or projection-linked evening tests if the venue wants it.",
      bestWindows: ["Ferry-side arrival windows", "Weekend afternoons", "Brewery tours", "Shoulder-season evenings"],
      projectionFit: "Possible only after checking venue approval, sightlines, light spill, brand fit, dining flow and neighbouring uses.",
      transportFit: "Strong Dunwich gateway fit. Needs last ferry, water taxi, bus, taxi and walking-route checks before any public event wording.",
      sourceIds: ["straddie-brewing", "straddie-brewing-island-listing", "events-on-straddie"],
      tags: ["dunwich", "brewery", "pub", "food", "visitor"],
      questions: [
        "Which brewery, food, tour or music windows could support a small market add-on?",
        "Where could a stall, QR notice, projection or display fit without blocking staff, diners, tours or access?",
        "What alcohol, food, licensing, age, responsible-service and safety rules shape the event?",
        "Which ferry, bus, taxi and walking details should appear before visitors plan around it?",
        "What public FAQ is needed: booking, meals, accessibility, tour times, weather, toilets and return travel?"
      ]
    },
    {
      id: "amity-community-club",
      name: "Amity Point Community Club",
      village: "Amity",
      currentSignal: "Public listing describes a family-friendly licensed club with food, entertainment, live music, lawn or garden amenities, carpark and function suitability.",
      conceptUse: "A community-first option for music-event add-ons, a small projection surface, local maker tables and Amity-specific visitor questions.",
      bestWindows: ["Local music nights", "School holidays", "Fishing and family weekends"],
      projectionFit: "Potentially good for low-impact community projection if site lines, lighting and neighbours work.",
      transportFit: "Needs extra care because Amity is further from the ferry terminals and late transport options are thinner.",
      sourceIds: ["amity-club", "straddie-events-transport"],
      tags: ["amity", "music", "community-club", "family"],
      questions: [
        "Which music or community dates have host approval for an add-on market?",
        "How many stallholders or local groups can fit in the available area?",
        "What return options exist after the event for Amity locals and visitors?",
        "What stallholder needs can the venue support: table, power, lighting, food compliance or EFTPOS?",
        "What public FAQ is needed: parking, courtesy bus, meals, accessibility and wet weather?"
      ]
    },
    {
      id: "point-lookout-community-hall",
      name: "Point Lookout Community Hall and arts nights",
      village: "Point Lookout",
      currentSignal: "Ubuntu Expo and arts-trail examples show Point Lookout community spaces can carry arts, music, cultural expression and artist participation.",
      conceptUse: "Use as the indoor or semi-indoor arts-market model: maker tables, projection loops, talks, small performances and question gathering.",
      bestWindows: ["December arts gatherings", "Arts trail periods", "Wet-weather backup nights"],
      projectionFit: "Likely stronger indoors, subject to venue approval, cultural care and content review.",
      transportFit: "Works best when paired with clear bus, accommodation and last-boat guidance.",
      sourceIds: ["ubuntu-expo", "arts-trail"],
      tags: ["arts", "community-hall", "indoor", "projection"],
      questions: [
        "Who is the event organiser and booking contact?",
        "Which rooms or outdoor areas are available, and what capacity and access limits apply?",
        "What stall, projection or content approvals are needed before setup?",
        "Which artist fields are needed: medium, table size, power, install time and sales method?",
        "What attendee FAQ is needed: times, ticketing, parking, accessibility and wet weather?"
      ]
    },
    {
      id: "straddie-sharks",
      name: "Straddie Sharks and Ron Stark Oval",
      village: "Dunwich",
      currentSignal: "Dunwich sports club with dining, community events, regular events and a courtesy-bus pattern on some nights.",
      conceptUse: "A sports-community market add-on around carnivals, family evenings, youth activities or post-game food and projection.",
      bestWindows: ["Easter carnival", "Friday evenings", "Sports finals and community days"],
      projectionFit: "Possible for scoreboard-style visuals, team reels or youth media, but field lighting and club rules matter.",
      transportFit: "Dunwich location and some courtesy-bus signals make it a transport-mapping candidate.",
      sourceIds: ["straddie-sharks", "events-on-straddie"],
      tags: ["sport", "dunwich", "family", "youth"],
      questions: [
        "Which sports or community dates have family foot traffic and host approval?",
        "Which area can hold stalls without blocking the club, field, carpark or emergency access?",
        "What fundraising, fee, sponsorship or food rules apply?",
        "Which courtesy-bus, bus and parking details must be confirmed for public notices?",
        "What youth media or projection content approvals are needed?"
      ]
    },
    {
      id: "straddie-salute-triathlon",
      name: "Straddie Salute Triathlon Festival",
      village: "Point Lookout and island-wide",
      currentSignal: "Official 2026 pages list a multisport weekend across 16-17 May 2026, with trail run, ocean swim, triathlon, youth events and shuttle details around Dunwich and Point Lookout.",
      conceptUse: "Use as a visitor-flow and road-pressure source. Any market add-on should support the race organiser, volunteers, safety crews, venues and transport plan rather than adding clutter.",
      bestWindows: ["Race weekend", "Registration periods", "Volunteer call-outs", "Post-event recaps"],
      projectionFit: "Possible for results, sponsor thanks or event recaps only with organiser approval and athlete-image permissions.",
      transportFit: "High value for ferry, bus, shuttle, bike, road and early-morning movement checks.",
      sourceIds: ["straddie-salute-official", "straddie-salute-nxsports", "straddie-salute-redlands"],
      tags: ["sport", "triathlon", "visitor-flow", "road-pressure", "point-lookout"],
      questions: [
        "Who controls course, road, shuttle and public update wording?",
        "Which dates and locations create pressure around Point Lookout Oval, Home Beach, ferries and buses?",
        "Could a stall or notice table support registration, volunteers, recovery food or sponsor thanks without disrupting the event?",
        "Which public details change late: wave starts, shuttles, weather, road impacts or results?",
        "What image, sponsor, safety and athlete-permission rules apply before any recap is published?"
      ]
    },
    {
      id: "gage-roads-straddie-invitational",
      name: "Gage Roads Straddie Invitational",
      village: "Point Lookout",
      currentSignal: "Public listings describe the long-running Straddie Invitational team surfing competition at Point Lookout / Minjerribah, with strong club, sponsor and spectator signals.",
      conceptUse: "Use as a surf-community and visitor-pressure calendar signal. A market layer would need Point Lookout Boardriders, sponsor, beach-access, weather and parking checks first.",
      bestWindows: ["Surf competition weekend", "Boardriders updates", "Sponsor and club recaps"],
      projectionFit: "Possible for approved heat schedules, surf-club history or recap screens away from beach-safety and crowd paths.",
      transportFit: "Needs ferry, bus, parking, beach access, weather and spectator-flow notes.",
      sourceIds: ["gage-roads-straddie-invitational", "events-on-straddie"],
      tags: ["surf", "boardriders", "sponsor", "point-lookout", "visitor-flow"],
      questions: [
        "Who is the current organiser and who approves public notices?",
        "Which beach, carpark, club and sponsor rules shape any side activity?",
        "Where can spectator information sit without interfering with surf safety or event operations?",
        "Which transport and weather details matter most for spectators?",
        "What recap permissions are needed for photos, heats, sponsors and club results?"
      ]
    },
    {
      id: "straddie-oyster-festival",
      name: "Straddie Oyster and Seafood Festival",
      village: "Dunwich",
      currentSignal: "Public event listings describe local oysters, prawns, live entertainment, market stalls, family activities and the Straddie Sharks / Ballow Road context.",
      conceptUse: "Use as a food, family and stallholder calendar signal. Any market or projection add-on must follow food-safety, crowd, club and sponsor rules.",
      bestWindows: ["Seafood festival dates", "Family activity windows", "Food-stall call-outs"],
      projectionFit: "Possible for menus, sponsor thanks, family activity notices or event recaps if the organiser wants it.",
      transportFit: "Dunwich fit is useful for ferry-side movement, parking, bus, taxi and club-access checks.",
      sourceIds: ["straddie-oyster-festival", "straddie-sharks", "events-on-straddie"],
      tags: ["food", "family", "festival", "market-stalls", "dunwich"],
      questions: [
        "Who manages food stalls, market stalls, live entertainment and public notices?",
        "What food licence, allergen, waste, water and queue information needs publishing?",
        "Which areas can hold stalls without blocking the club, oval, carpark or emergency access?",
        "What family activity, weather, ticketing and sold-out details need fast updates?",
        "Which transport notes help visitors arrive and leave without overloading Dunwich?"
      ]
    },
    {
      id: "stradbroke-chamber-music-festival",
      name: "Stradbroke Chamber Music Festival",
      village: "Point Lookout",
      currentSignal: "Public listings for 2026 describe a three-day chamber music festival at Point Lookout Community Hall, with intimate concerts and island visitor movement.",
      conceptUse: "Use as a winter cultural-calendar signal. A small maker, sponsor, program or transport notice layer would need festival approval and quiet event etiquette.",
      bestWindows: ["July festival weekend", "Concert arrival windows", "Artist talks", "Sponsor thanks"],
      projectionFit: "Low-key only: approved program notices, sponsor slides, wayfinding or post-concert recaps that respect the music setting.",
      transportFit: "Needs ferry, bus, parking, hall access and post-concert movement checks.",
      sourceIds: ["stradbroke-chamber-music", "stradbroke-chamber-music-official", "sealink-chamber-music"],
      tags: ["music", "winter", "community-hall", "point-lookout", "culture"],
      questions: [
        "Who approves festival, artist, venue and ticketing wording?",
        "Which hall, concert, queue and parking details can be published?",
        "Could a very small notice or sponsor layer help without breaking the atmosphere?",
        "Which transport and accessibility notes matter for concertgoers?",
        "What photography, recording and artist-permission rules apply?"
      ]
    },
    {
      id: "straddie-chamber-business-network",
      name: "Straddie Chamber of Commerce and business events",
      village: "Island-wide",
      currentSignal: "The Straddie Chamber of Commerce is a business-community source with past-event and member-network signals for island businesses.",
      conceptUse: "Use as a partner-mapping and business-notice source rather than a market host by default. It can help identify sponsors, local operators and business communication pathways.",
      bestWindows: ["Business events", "Member updates", "Sponsor calls", "Local economy briefings"],
      projectionFit: "Possible for approved business directory, sponsor or member-opportunity screens.",
      transportFit: "Useful across all villages when visitor flow, trading windows and local workforce movement matter.",
      sourceIds: ["straddie-chamber", "noticeboard-straddie-chamber"],
      tags: ["business", "chamber", "sponsors", "partner-map", "island-wide"],
      questions: [
        "Which business or chamber contact can approve partnership wording?",
        "Which members, venues or services might want notices, sponsorship or stall involvement?",
        "What public information is member-approved rather than guessed?",
        "Which local economy, staffing, freight or visitor-flow concerns should shape event planning?",
        "What should remain private until a business opts in?"
      ]
    },
    {
      id: "goompi-naidoc",
      name: "Goompi Community NAIDOC Celebration",
      village: "Dunwich / Goompi",
      currentSignal: "Public 2025 listings describe a free Goompi Community NAIDOC celebration at Dunwich State School Oval with culture, connection, performances, workshops and community organisations.",
      conceptUse: "Use as a cultural-authority-led calendar source only. Any stall, notice, projection or recap must be invited, reviewed and approved by the right organisers.",
      bestWindows: ["NAIDOC period", "Community celebration", "Approved cultural program dates"],
      projectionFit: "Only with organiser and cultural approval. Some material may be unsuitable for projection, capture or public replay.",
      transportFit: "Needs family, school-oval, parking, bus, ferry and accessibility notes checked with organisers.",
      sourceIds: ["goompi-naidoc", "quandamooka-festival"],
      tags: ["naidoc", "cultural-care", "dunwich", "community", "permission-first"],
      questions: [
        "Who is the lead organiser and cultural authority for this year's NAIDOC event?",
        "Which activities, images, stories or names are approved for public notice?",
        "Is a market, stall, food or helper layer invited by organisers?",
        "What visitor guidance is needed for respect, access, transport, weather and children?",
        "Which data should not be collected, photographed or published?"
      ]
    },
    {
      id: "amity-cricket-tutu-carnival",
      name: "Amity Point Cricket Club Tutu Carnival",
      village: "Amity Point",
      currentSignal: "Public island listings describe Amity Point Cricket Club matches and events, with Tutu Carnival, Putt Putt day and Amber Grail as annual highlights.",
      conceptUse: "Use as an Amity family-sport and community-fundraising signal. Any market add-on must fit the club's game-day, family, food and transport realities.",
      bestWindows: ["Tutu Carnival", "Cricket matches", "Putt Putt day", "Amber Grail"],
      projectionFit: "Possible for family notices, fixtures, sponsor thanks or club recaps if the club approves.",
      transportFit: "Amity needs extra late-return, parking, courtesy, taxi and bus checks.",
      sourceIds: ["amity-cricket", "noticeboard-amity-cricket"],
      tags: ["amity", "cricket", "family", "fundraising", "sport"],
      questions: [
        "Who manages Tutu Carnival dates, bookings, sponsorship and public notices?",
        "Which stall, food, family activity or helper roles are actually wanted?",
        "How can the event support Amity locals without overloading roads, parking or volunteers?",
        "Which transport and late-return notes matter for visitors?",
        "What club-photo, children, sponsor and fundraising permissions apply?"
      ]
    },
    {
      id: "island-vibe-legacy",
      name: "Island Vibe Festival legacy and accommodation lesson",
      village: "Point Lookout / Home Beach",
      currentSignal: "Island Vibe is a major legacy festival source for music, stalls, workshops and island culture, but public reporting in December 2024 said organisers would not hold it again on Straddie under then-current constraints.",
      conceptUse: "Use as a cautionary planning source, not as an active Straddie event listing. It shows why accommodation, camping, Council, cultural authority, transport and organiser sustainability must be checked before any festival-scale idea.",
      bestWindows: ["Historical learning", "Accommodation planning", "Festival-scale feasibility checks"],
      projectionFit: "Use only for approved legacy storytelling or lessons learned; do not imply a current Island Vibe program without organiser confirmation.",
      transportFit: "High caution value: accommodation capacity, camping availability, shuttles, ferries and visitor expectations can make or break the event.",
      sourceIds: ["island-vibe-about", "island-vibe-accommodation", "island-vibe-ends"],
      tags: ["legacy", "festival", "accommodation", "camping", "point-lookout", "caution"],
      questions: [
        "What has the organiser publicly confirmed for the current year?",
        "Which accommodation, camping and shuttle options are actually open during the proposed dates?",
        "Which Council, venue, cultural authority and camping constraints must be solved before public promotion?",
        "What public wording avoids implying an active Straddie festival if it is no longer hosted there?",
        "What lessons should inform smaller, host-led, lower-pressure market ideas?"
      ]
    },
    {
      id: "quandamooka-festival",
      name: "Quandamooka Festival style cultural market layer",
      village: "Island-wide",
      currentSignal: "Council information describes an annual Minjerribah festival with art, music, dance, artisan markets, food stalls, storytelling, cultural heritage and caring for Country.",
      conceptUse: "Use as a cultural-authority-led reference. Artisan and food stall patterns can exist inside cultural events when led by the right people.",
      bestWindows: ["Festival periods", "Cultural-program dates", "By invitation only"],
      projectionFit: "Only with cultural authority and content approval.",
      transportFit: "High visitor-flow importance, especially ferries, buses and sacred-site protection.",
      sourceIds: ["quandamooka-festival"],
      tags: ["cultural-care", "artisan", "food-stalls", "country"],
      questions: [
        "Who is the cultural or event authority, and what contact pathway should be used?",
        "Is a stall or market layer invited by organisers, and under what rules?",
        "Which content, places, images or stories are approved for public notice, photo or projection?",
        "What visitor capacity, transport and site-protection rules apply?",
        "Which data can be collected, published, kept private or left uncollected?"
      ]
    },
    {
      id: "arts-trail",
      name: "Distributed Straddie Arts Trail pattern",
      village: "Island-wide",
      currentSignal: "Past public arts trail coverage described more than 50 artists, six community groups and 34 stops across Dunwich, Amity and Point Lookout.",
      conceptUse: "A distributed micro-market model where the market travels as a trail across several host stops.",
      bestWindows: ["Arts trail windows", "Winter and spring weekends", "Gallery evenings"],
      projectionFit: "Good for small projected maps, artist loops and pop-up screen moments if each host agrees.",
      transportFit: "Needs route planning that keeps pressure off roads, parking and ferry timing.",
      sourceIds: ["arts-trail"],
      tags: ["distributed", "artists", "makers", "trail"],
      questions: [
        "Which stops are open at night and which stay daytime only?",
        "What opening times, capacity, access and parking details can each stop publish?",
        "Which artist fields are needed: medium, availability, EFTPOS, power and table size?",
        "How should route notices show bus, drive and walk options without creating pressure?",
        "Who updates open, closed, sold-out or changed-time notices?"
      ]
    },
    {
      id: "dunwich-gateway",
      name: "Dunwich ferry gateway and noticeboard node",
      village: "Dunwich",
      currentSignal: "Local strategy docs and transport pages identify Dunwich as the ferry gateway and the place where visitor-flow information can be gathered early.",
      conceptUse: "A data-first doorway: QR signs, visitor mapping, boat-choice questions and small daytime or twilight market tests near approved public or partner spaces.",
      bestWindows: ["Peak arrival days", "Event weekends", "Grant or consultation pilots"],
      projectionFit: "Projection is secondary here. Wayfinding, notices and gentle light cues matter more.",
      transportFit: "Highest value for SeaLink, Gold Cats, buses and noticeboard data partnerships.",
      sourceIds: ["visit-by-boat", "straddie-events-transport", "flyer"],
      tags: ["ferry", "data", "dunwich", "gateway"],
      questions: [
        "Which approved sites can host QR information, visitor notices or tiny market tests?",
        "Which arrival windows should be mapped with SeaLink, Gold Cats / Stradbroke Flyer and buses?",
        "Which opt-in visitor fields are useful: local/day trip/overnight, arrival mode, next destination and return time?",
        "Which public notices are useful at terminals: last bus, venue directions, event status and wet weather?",
        "Who verifies terminal, venue and transport messages before publication?"
      ]
    }
  ],
  seasons: [
    {
      name: "Summer school holidays",
      note: "Peak visitor flow. Strong market demand, but highest transport and crowd-management pressure.",
      questions: ["Which dates clash with existing markets, ferries or major events?", "Which travel windows and car parks are highest pressure?", "What shade, water, toilet and wet-weather information must appear in the FAQ?"]
    },
    {
      name: "Easter and autumn holidays",
      note: "Family, sport and community events can make a softer test window.",
      questions: ["Which existing events already have approval and an audience?", "Which stall categories fit the event without adding clutter?", "What wet-weather, cancellation and pack-down notice is needed?"]
    },
    {
      name: "Winter whale season",
      note: "Earlier sunsets support projection, and visitors may stay for evening meals.",
      questions: ["Which venues trade late enough for a twilight market?", "What wind, rain, lighting and wildlife limits apply?", "What last-return or overnight-stay guidance should visitors receive?"]
    },
    {
      name: "Spring shoulder season",
      note: "Useful for testing before summer, especially with arts, surf and community calendars.",
      questions: ["Which small pilot dates avoid peak-season pressure?", "Which makers, clubs or groups want a shoulder-season trial?", "Which three metrics should be collected: visitor count, stall interest, transport mode or spend range?"]
    },
    {
      name: "Festival and arts windows",
      note: "Only by invitation and with cultural or organiser authority. Strong fit for projection if content is cared for.",
      questions: ["Who is the lead organiser and approval contact?", "Which stalls, content or projection material are approved?", "What public wording and data collection are allowed?"]
    }
  ],
  sourceLinks: {
    "plbc-markets": {
      label: "Point Lookout Bowls Club - Sunday Markets",
      url: "https://www.pointlookoutbowlsclub.com.au/whats-on/event-five-287nl-ygb9c-8rnf3"
    },
    "straddie-pl-markets": {
      label: "North Stradbroke Island - Point Lookout Markets",
      url: "https://stradbrokeisland.com/point-lookout-markets/"
    },
    "sealink-pl-markets": {
      label: "SeaLink - Point Lookout Markets listing",
      url: "https://www.sealink.com.au/north-stradbroke-island/events/point-lookout-markets/"
    },
    "amity-club": {
      label: "North Stradbroke Island - Amity Point Community Club",
      url: "https://stradbrokeisland.com/amity-point-community-club/"
    },
    "little-ship-hours": {
      label: "Ray White Visit Stradbroke - Little Ship Club",
      url: "https://www.visitstradbroke.com.au/little-ships-club"
    },
    "little-ship-event": {
      label: "Little Ship Club - current events page",
      url: "https://littleshipclub.com.au/eventon/"
    },
    "straddie-hotel": {
      label: "The Straddie Hotel",
      url: "https://moretonhospitality.com.au/venue/the-straddie-hotel/"
    },
    "straddie-brewing": {
      label: "Straddie Brewing Co - The Brewery",
      url: "https://straddiebrewing.com.au/the-brewery/"
    },
    "straddie-brewing-island-listing": {
      label: "North Stradbroke Island - Straddie Brewing Co",
      url: "https://stradbrokeisland.com/straddie-brewing-co-beer-n-bed/"
    },
    "flyer": {
      label: "Stradbroke Flyer Gold Cat",
      url: "https://www.flyer.com.au/"
    },
    "visit-by-boat": {
      label: "Visit Straddie - by boat",
      url: "https://stradbrokeisland.com/getting-here/by-boat/"
    },
    "straddie-events-transport": {
      label: "Stradbroke Island Events - getting here",
      url: "https://stradbrokeislandevents.com.au/getting-here/"
    },
    "quandamooka-festival": {
      label: "Redland City Council - Quandamooka Festival",
      url: "https://www.redland.qld.gov.au/info/20243/events_and_whats_on/840/quandamooka_festival"
    },
    "arts-trail": {
      label: "Concrete Playground - Island Artists and Makers Straddie Arts Trail",
      url: "https://concreteplayground.com/brisbane/event/island-artists-and-makers-straddie-arts-trail"
    },
    "ubuntu-expo": {
      label: "Ubuntu Expo",
      url: "https://ubuntu-expo.com/"
    },
    "straddie-sharks": {
      label: "Straddie Sharks",
      url: "https://straddiesharks.com/"
    },
    "straddie-salute-official": {
      label: "Straddie Salute - event information",
      url: "https://straddiesalute.com.au/event-information/"
    },
    "straddie-salute-nxsports": {
      label: "NXsports - Straddie Salute entries",
      url: "https://www.nxsports.org/nxevent/straddie-salute/"
    },
    "straddie-salute-redlands": {
      label: "Visit Redlands Coast - Straddie Salute Triathlon Festival",
      url: "https://www.visitredlandscoast.com.au/whats-on/event/6543-straddie-salute-triathlon-festival"
    },
    "gage-roads-straddie-invitational": {
      label: "North Stradbroke Island - Gage Roads Straddie Invitational",
      url: "https://stradbrokeisland.com/gage-roads-straddie-invitational-2025-surfing-competition/"
    },
    "straddie-oyster-festival": {
      label: "North Stradbroke Island - Straddie Oyster and Seafood Festival",
      url: "https://stradbrokeisland.com/straddie-oyster-festival/"
    },
    "stradbroke-chamber-music": {
      label: "North Stradbroke Island - Stradbroke Chamber Music Festival",
      url: "https://stradbrokeisland.com/stradbroke-chamber-music-festival/"
    },
    "stradbroke-chamber-music-official": {
      label: "Stradbroke Chamber Music Festival",
      url: "https://www.stradmusic.org.au/home"
    },
    "sealink-chamber-music": {
      label: "SeaLink - Stradbroke Chamber Music Festival",
      url: "https://www.sealink.com.au/north-stradbroke-island/events/stradbroke-chamber-music-festival/"
    },
    "straddie-chamber": {
      label: "Straddie Chamber of Commerce",
      url: "https://straddiechamber.org/"
    },
    "noticeboard-straddie-chamber": {
      label: "Noticeboard entity - Straddie Chamber of Commerce",
      url: "https://auraofintelligence.github.io/straddie-noticeboard-network/entities/straddie-chamber-of-commerce.html"
    },
    "goompi-naidoc": {
      label: "Visit Redlands Coast - Goompi Community NAIDOC Celebration",
      url: "https://www.visitredlandscoast.com.au/redlandscoastadventurefest/redlands-coast-adventurefest-program/event/6473-goompi-community-naidoc-celebration-the-next-generation-strength-vision-and-legacy"
    },
    "amity-cricket": {
      label: "North Stradbroke Island - Amity Point Cricket Club",
      url: "https://stradbrokeisland.com/amity-point-cricket-club/"
    },
    "noticeboard-amity-cricket": {
      label: "Noticeboard entity - Amity Point Cricket Club",
      url: "https://auraofintelligence.github.io/straddie-noticeboard-network/entities/amity-point-cricket-club.html"
    },
    "island-vibe-about": {
      label: "Island Vibe Festival - about",
      url: "https://www.islandvibe.com.au/about"
    },
    "island-vibe-accommodation": {
      label: "Island Vibe Festival - accommodation",
      url: "https://www.islandvibe.com.au/accommodation"
    },
    "island-vibe-ends": {
      label: "Redland Bayside News - Island Vibe Festival ends on Stradbroke",
      url: "https://redlandbaysidenews.com.au/island-vibe-festival-ends/"
    },
    "events-on-straddie": {
      label: "North Stradbroke Island - Events on Straddie",
      url: "https://stradbrokeisland.com/events/whats-on/"
    }
  },
  questionBatches: {
    venue: [
      "Who can approve the idea, dates, times and public wording?",
      "Which area could be used without blocking staff, customers, emergency paths or neighbours?",
      "What setup, pack-down, power, lighting, toilets, waste and wet-weather rules apply?",
      "What fees, insurance, permits, cleaning or venue conditions would participants need to know?",
      "Which details are safe to publish once the host has reviewed them?"
    ],
    organiser: [
      "Is this a new market, an extension of an existing market, or an add-on to another event?",
      "Who manages stall bookings, fees, bump-in, cancellations and public updates?",
      "Which stall categories are welcome, full, duplicated or unsuitable for this event?",
      "What is the maximum stall count before the event feels crowded or hard to manage?",
      "What does the organiser need from the venue, stallholders, food providers, artists and transport partners?"
    ],
    stallholder: [
      "What is being sold, displayed or demonstrated, and does it fit the event audience?",
      "How much space is needed: table size, shelter, racks, stock boxes, queue space or vehicle access?",
      "What support is needed: power, light, EFTPOS reception, water, storage, seating or waste bins?",
      "What are the setup, pack-down, fee, insurance and cancellation requirements?",
      "What visitor FAQ would help sales: price range, card/cash, custom orders, accessibility or weather plan?"
    ],
    artist: [
      "Is the contribution a stall, performance, workshop, display, screen work or light projection?",
      "What space, timing, sound, lighting, power, hanging points or weather cover is needed?",
      "Which images, music, stories, brands or cultural material need approval before public use?",
      "Who owns the work, and what photos or recordings are allowed for notices or recaps?",
      "What fee, sales method, tech check, pack-down and backup plan is required?"
    ],
    foodProvider: [
      "What food format is proposed: venue menu, food truck, stall, snack table, barbecue or tasting?",
      "Who holds the food licence or approval, and what documents does the host need?",
      "What is required for water, handwashing, cold storage, power, gas, serving space, bins and cleanup?",
      "What dietary, allergen, price range, queue and sold-out information should visitors see?",
      "Who manages leftovers, waste, weather cancellation and end-of-night pack-down?"
    ],
    visitorInfo: [
      "Who is the event for: locals, day visitors, overnight visitors, families, workers, artists or mixed groups?",
      "Which ferries, buses, courtesy buses, walking routes, parking areas and last-return options should be checked?",
      "What public details matter most: date, time, cost, host, toilets, meals, accessibility, wet weather and contact?",
      "What should visitors know before travelling so they do not overload the venue, roads or ferry terminals?",
      "Who updates changed times, sold-out notices, cancellations and transport advice?"
    ],
    noticeboard: [
      "What exact public details are confirmed: date, time, place, host, cost and contact?",
      "Who can update cancellations, weather changes and sold-out notices?",
      "When does the notice expire or need review?",
      "Which single QR question improves planning most?"
    ]
  }
};

