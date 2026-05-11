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
        "Who currently coordinates stall bookings and what data do they already collect?",
        "Would existing stallholders want twilight trading, and how would it sit beside their current pattern?",
        "What is the latest practical pack-down time for families, staff and transport?",
        "Is there a wall, screen, lawn edge or temporary surface suitable for low-impact projection?",
        "Which school holiday dates already have strong market demand?"
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
        "Which trading days can realistically support a twilight add-on?",
        "Would a projection need to be indoors, on a temporary screen, or kept as small ambient light?",
        "Can ferry-arrival visitors reach the site while keeping closing time calm?",
        "Would the club prefer a single stall, a maker strip, or a music-linked pop-up?",
        "What would be the quietest, safest pack-down route after dark?"
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
        "Where could a stall sit while keeping staff, diners, accessibility and emergency paths clear?",
        "Would projection support live music, a wall feature, a small screen, or a no-projection market night?",
        "What times already have enough foot traffic while keeping crowd levels comfortable?",
        "Could a noticeboard QR capture visitor origin, boat choice and stay length?",
        "Which local makers or food stalls would complement the venue's existing offer?"
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
        "Which existing Amity music nights could carry a small market layer?",
        "How would visitors get back to accommodation or ferries safely after dark?",
        "Would locals prefer a regular small pattern or occasional stronger events?",
        "What should stay Amity-local and resident-first?",
        "Where can projection be placed while protecting neighbours and the bayfront feel?"
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
        "Is the event mainly for residents, visitors, artists, or a mixed room?",
        "Which projection content needs cultural review before display?",
        "Can artists add stalls while preserving the event's purpose?",
        "What is the wet-weather capacity and accessible entry route?",
        "Could the noticeboard network collect artist availability and stall needs?"
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
        "Which sports dates already bring families together with room for a light stall layer?",
        "Could youth media teams help make projection loops or noticeboard posts?",
        "What is the club's preferred approach to stalls, food, fundraising and sponsorship?",
        "How does the courtesy-bus pattern affect safe arrival and departure?",
        "Can the market collect useful data in a friendly, opt-in way?"
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
        "Who has cultural authority for this event and what process do they want?",
        "Is a market layer welcome, useful, or completely inappropriate?",
        "What should never be projected, photographed, recorded or commercialised?",
        "How are visitor numbers capped or guided away from sensitive places?",
        "Which data can be public, which stays private, and which is left uncollected?"
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
        "Which stops want evening visitors and which should stay daytime only?",
        "Could projection be a wayfinding layer with a gentle visual presence?",
        "How can visitors move between stops with less car dependence?",
        "What data helps artists while keeping admin light?",
        "Could noticeboard feeds show open studios, last updated times and sold-out notices?"
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
        "What questions could ferry partners ask while keeping boarding smooth?",
        "Can QR scans distinguish day-trippers, overnight visitors and locals with privacy kept intact?",
        "Which boat choices reduce pressure on roads and late returns?",
        "What can the noticeboard show at terminals, clubs and venues?",
        "Who owns the final public message when data changes quickly?"
      ]
    }
  ],
  seasons: [
    {
      name: "Summer school holidays",
      note: "Peak visitor flow. Strong market demand, but highest transport and crowd-management pressure.",
      questions: ["Do boats, buses and venues have enough capacity?", "Can the event spread arrivals across calmer windows?", "Is shade, hydration and pack-down planned?"]
    },
    {
      name: "Easter and autumn holidays",
      note: "Family, sport and community events can make a softer test window.",
      questions: ["Which existing events already have permission and audiences?", "Could a stall layer support the event's purpose?", "What happens if weather turns?"]
    },
    {
      name: "Winter whale season",
      note: "Earlier sunsets support projection, and visitors may stay for evening meals.",
      questions: ["Can the event work with cooler weather and wind?", "Does projection interfere with wildlife, neighbours or coastal darkness?", "Which venues already trade late enough?"]
    },
    {
      name: "Spring shoulder season",
      note: "Useful for testing before summer, especially with arts, surf and community calendars.",
      questions: ["Can a small pilot gather data before peak pressure?", "Which residents and makers want shoulder-season income?", "What should be measured and published?"]
    },
    {
      name: "Festival and arts windows",
      note: "Only by invitation and with cultural or organiser authority. Strong fit for projection if content is cared for.",
      questions: ["Who leads the event?", "What can be shown publicly?", "Does a market add value or just noise?"]
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
    "events-on-straddie": {
      label: "North Stradbroke Island - Events on Straddie",
      url: "https://stradbrokeisland.com/events/whats-on/"
    }
  },
  universalQuestions: {
    venue: [
      "Who can say yes, who must be consulted, and who could be affected?",
      "Is the event indoor, outdoor, waterfront, roadside, oval, hall, deck or mixed?",
      "What is already happening there, and would a market layer help or interfere?",
      "What is the maximum crowd that feels good before it feels extractive?"
    ],
    market: [
      "How many stalls can fit while keeping flow, access and staff work clear?",
      "Are stalls local makers, food, information, music, projection, repairs, tech help or mixed?",
      "Does the host want stall fees, revenue share, fundraising, in-kind value or a free community layer?",
      "What data should be collected from stallholders before anyone is invited publicly?"
    ],
    projection: [
      "What surface is available, and who owns it?",
      "How bright can the projection be while respecting neighbours, wildlife and drivers?",
      "Does any content need cultural, artist or venue approval before display?",
      "Is power reliable, weather protected and safely cabled?"
    ],
    transport: [
      "Which ferries, buses, courtesy buses and walking routes match the proposed time?",
      "What is the last safe return option for day visitors?",
      "Would a different boat choice spread arrivals or reduce road pressure?",
      "What visitor-flow data can be gathered with private personal details left out?"
    ],
    noticeboard: [
      "What should appear on public screens, and what must stay private?",
      "Who verifies times, venue approval, stall contacts and cancellation notices?",
      "When should a notice expire automatically?",
      "What is the simplest QR question that helps the next decision?"
    ],
    sharedTable: [
      "Is this a snack stall, shared meal, food rescue, produce swap or no-food event?",
      "Where are tables, bins, water, prep zones, paths and power?",
      "What can be published as public-safe learning after the trial?",
      "What should stay private, culturally restricted or outside the collection scope?"
    ]
  }
};

