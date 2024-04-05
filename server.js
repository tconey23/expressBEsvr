const express = require('express')
const app = express()
app.use(express.json())

app.locals.metalBands = [
    {
        "id": '1',
        "name": "Metallica",
        "current_members": ["James Hetfield", "Lars Ulrich", "Kirk Hammett", "Robert Trujillo"],
        "top_albums": ["Master of Puppets", "Ride the Lightning", "Metallica (The Black Album)", "...And Justice for All", "Kill 'Em All"]
    },
    {
        "id": '2',
        "name": "Pantera",
        "current_members": ["Phil Anselmo", "Vinnie Paul", "Dimebag Darrell", "Rex Brown"],
        "top_albums": ["Vulgar Display of Power", "Far Beyond Driven", "Cowboys from Hell", "The Great Southern Trendkill", "Reinventing the Steel"]
    },
    {
        "id": '3',
        "name": "Slayer",
        "current_members": ["Tom Araya", "Kerry King", "Gary Holt", "Paul Bostaph"],
        "top_albums": ["Reign in Blood", "South of Heaven", "Seasons in the Abyss", "Hell Awaits", "Show No Mercy"]
    },
    {
        "id": '4',
        "name": "Megadeth",
        "current_members": ["Dave Mustaine", "David Ellefson", "Kiko Loureiro", "Dirk Verbeuren"],
        "top_albums": ["Rust in Peace", "Peace Sells... but Who's Buying?", "Countdown to Extinction", "Youthanasia", "So Far, So Good... So What!"]
    },
    {
        "id": '5',
        "name": "Iron Maiden",
        "current_members": ["Steve Harris", "Dave Murray", "Bruce Dickinson", "Adrian Smith", "Janick Gers", "Nicko McBrain"],
        "top_albums": ["The Number of the Beast", "Powerslave", "Seventh Son of a Seventh Son", "Piece of Mind", "Somewhere in Time"]
    },
    {
        "id": '6',
        "name": "Black Sabbath",
        "current_members": ["Tony Iommi", "Geezer Butler", "Ozzy Osbourne", "Bill Ward"],
        "top_albums": ["Paranoid", "Master of Reality", "Black Sabbath", "Heaven and Hell", "Vol. 4"]
    },
    {
        "id": '7',
        "name": "Sepultura",
        "current_members": ["Andreas Kisser", "Paulo Jr.", "Derrick Green", "Eloy Casagrande"],
        "top_albums": ["Chaos A.D.", "Roots", "Arise", "Beneath the Remains", "Schizophrenia"]
    },
    {
        "id": '8',
        "name": "Anthrax",
        "current_members": ["Scott Ian", "Charlie Benante", "Frank Bello", "Joey Belladonna"],
        "top_albums": ["Among the Living", "Spreading the Disease", "Persistence of Time", "State of Euphoria", "Sound of White Noise"]
    },
    {
        "id": '9',
        "name": "Tool",
        "current_members": ["Maynard James Keenan", "Adam Jones", "Danny Carey", "Justin Chancellor"],
        "top_albums": ["Ænima", "Lateralus", "Undertow", "Fear Inoculum", "10,000 Days"]
    },
    {
        "id": '10',
        "name": "Dream Theater",
        "current_members": ["John Petrucci", "James LaBrie", "John Myung", "Jordan Rudess", "Mike Mangini"],
        "top_albums": ["Images and Words", "Metropolis Pt. 2: Scenes from a Memory", "Awake", "Train of Thought", "Six Degrees of Inner Turbulence"]
    },
    {
        "id": '11',
        "name": "Korn",
        "current_members": ["Jonathan Davis", "James Shaffer", "Reginald Arvizu", "Brian Welch", "Ray Luzier"],
        "top_albums": ["Follow the Leader", "Issues", "Korn", "Untouchables", "Life Is Peachy"]
    },
    {
        "id": '12',
        "name": "Slipknot",
        "current_members": ["Corey Taylor", "Jim Root", "Shawn Crahan", "Craig Jones", "Mick Thomson", "Sid Wilson", "Jay Weinberg", "Alessandro Venturella"],
        "top_albums": ["Iowa", "Slipknot", "Vol. 3: (The Subliminal Verses)", "All Hope Is Gone", ".5: The Gray Chapter"]
    },
    {
        "id": '13',
        "name": "Machine Head",
        "current_members": ["Robb Flynn", "Jared MacEachern", "Phil Demmel", "Matt Alston"],
        "top_albums": ["The Blackening", "Burn My Eyes", "Through the Ashes of Empires", "Unto the Locust", "Catharsis"]
    },
    {
        "id": '14',
        "name": "Testament",
        "current_members": ["Chuck Billy", "Eric Peterson", "Alex Skolnick", "Steve Di Giorgio", "Gene Hoglan"],
        "top_albums": ["The New Order", "The Legacy", "Practice What You Preach", "Dark Roots of Earth", "The Gathering"]
    },
    {
        "id": '15',
        "name": "Cannibal Corpse",
        "current_members": ["George Fisher", "Rob Barrett", "Erik Rutan", "Alex Webster", "Paul Mazurkiewicz"],
        "top_albums": ["Tomb of the Mutilated", "The Bleeding", "Kill", "Eaten Back to Life", "Vile"]
    },
    {
        "id": '16',
        "name": "Death",
        "current_members": ["Chuck Schuldiner"],
        "top_albums": ["Symbolic", "Human", "The Sound of Perseverance", "Individual Thought Patterns", "Scream Bloody Gore"]
    },
    {
        "id": '17',
        "name": "Opeth",
        "current_members": ["Mikael Åkerfeldt", "Martin Mendez", "Fredrik Åkesson", "Martin Axenrot", "Joakim Svalberg"],
        "top_albums": ["Blackwater Park", "Ghost Reveries", "Still Life", "Watershed", "My Arms, Your Hearse"]
    },
    {
        "id": '18',
        "name": "Morbid Angel",
        "current_members": ["Steve Tucker", "Trey Azagthoth", "Scott Fuller", "Dan Vadim Von"],
        "top_albums": ["Altars of Madness", "Covenant", "Blessed Are the Sick", "Formulas Fatal to the Flesh", "Gateways to Annihilation"]
    },
    {
        "id": '19',
        "name": "Type O Negative",
        "current_members": ["Peter Steele", "Josh Silver", "Kenny Hickey", "Johnny Kelly"],
        "top_albums": ["Bloody Kisses", "October Rust", "World Coming Down", "Dead Again", "Slow, Deep and Hard"]
    },
    {
        "id": '20',
        "name": "Fear Factory",
        "current_members": ["Burton C. Bell", "Dino Cazares", "Tony Campos", "Mike Heller"],
        "top_albums": ["Demanufacture", "Obsolete", "Soul of a New Machine", "Mechanize", "Obsolete"]
    },
    {
        "id": '21',
        "name": "Deftones",
        "current_members": ["Chino Moreno", "Stephen Carpenter", "Frank Delgado", "Sergio Vega", "Abe Cunningham"],
        "top_albums": ["White Pony", "Around the Fur", "Diamond Eyes", "Koi No Yokan", "Adrenaline"]
    },
    {
        "id": '22',
        "name": "In Flames",
        "current_members": ["Anders Fridén", "Björn Gelotte", "Niclas Engelin", "Tanner Wayne", "Bryce Paul"],
        "top_albums": ["The Jester Race", "Clayman", "Colony", "Whoracle", "Come Clarity"]
    },
    {
        "id": '23',
        "name": "Children of Bodom",
        "current_members": ["Alexi Laiho", "Jaska Raatikainen", "Henkka Seppälä", "Janne Wirman", "Daniel Freyberg"],
        "top_albums": ["Follow the Reaper", "Hatebreeder", "Hate Crew Deathroll", "Are You Dead Yet?", "Something Wild"]
    },
    {
        "id": '24',
        "name": "Morbid Angel",
        "current_members": ["Steve Tucker", "Trey Azagthoth", "Scott Fuller", "Dan Vadim Von"],
        "top_albums": ["Altars of Madness", "Covenant", "Blessed Are the Sick", "Formulas Fatal to the Flesh", "Gateways to Annihilation"]
    },
    {
        "id": '25',
        "name": "Anathema",
        "current_members": ["Vincent Cavanagh", "Daniel Cavanagh", "John Douglas", "Lee Douglas", "Daniel Cardoso"],
        "top_albums": ["Judgement", "Weather Systems", "We're Here Because We're Here", "A Fine Day to Exit", "Alternative 4"]
    },
    {
        "id": '26',
        "name": "At the Gates",
        "current_members": ["Tomas Lindberg", "Adrian Erlandsson", "Jonas Björler", "Martin Larsson", "Jonas Stålhammar"],
        "top_albums": ["Slaughter of the Soul", "The Red in the Sky Is Ours", "Terminal Spirit Disease", "At War with Reality", "Gardens of Grief"]
    },
    {
        "id": '27',
        "name": "In Flames",
        "current_members": ["Anders Fridén", "Björn Gelotte", "Niclas Engelin", "Tanner Wayne", "Bryce Paul"],
        "top_albums": ["The Jester Race", "Clayman", "Colony", "Whoracle", "Come Clarity"]
    },
    {
        "id": '28',
        "name": "In Flames",
        "current_members": ["Anders Fridén", "Björn Gelotte", "Niclas Engelin", "Tanner Wayne", "Bryce Paul"],
        "top_albums": ["The Jester Race", "Clayman", "Colony", "Whoracle", "Come Clarity"]
    },
    {
        "id": '29',
        "name": "At the Gates",
        "current_members": ["Tomas Lindberg", "Adrian Erlandsson", "Jonas Björler", "Martin Larsson", "Jonas Stålhammar"],
        "top_albums": ["Slaughter of the Soul", "The Red in the Sky Is Ours", "Terminal Spirit Disease", "At War with Reality", "Gardens of Grief"]
    },
    {
        "id": '30',
        "name": "Cradle of Filth",
        "current_members": ["Dani Filth", "Richard Shaw", "Daniel Firth", "Lindsay Schoolcraft", "Martin Škaroupka"],
        "top_albums": ["Dusk and Her Embrace", "Cruelty and the Beast", "Midian", "Nymphetamine", "The Principle of Evil Made Flesh"]
    }
]

app.set('port', process.env.PORT || 3000)
app.locals.title = '90sMetalBands'

app.get('/api/v1/90sMetalBands/', (request, response) => {
   const metalBands = app.locals.metalBands
  response.json({metalBands})
});

app.get('/api/v1/90sMetalBands/:id', (request, response) => {
    const bandId = request.params.id
    const bandIndex = app.locals.metalBands.findIndex(band => band.id === bandId)
    
    if (!bandId) {
      return response.sendStatus(404)
    }
  
    response.status(200).send(app.locals.metalBands[bandIndex])
  });

app.post('/api/v1/90sMetalBands', (request, response) => {
    const {name, current_members, top_albums} = request.body

    const newBand = {
        id: JSON.stringify(Date.now()),
        name: name,
        current_members: current_members,
        top_albums: top_albums,
    }

    app.locals.metalBands.push(newBand)

    response.status(201).send(`${newBand.name} has been added`)
})

app.patch('/api/v1/90sMetalBands/:id', (request, response) => {
    const id = request.params.id
    const updates = request.body
    const band = app.locals.metalBands.find(band => band.id === id)

    band ? (
        Object.keys(updates).forEach(key => band[key] = updates [key]),
        response.status(200).json(band)
    ) : response.status(404).send(`Cannot find a band with ID ${request.params.id}`)
})

app.put('/api/v1/90sMetalBands/:id', (request, response) => {
    const bandId = request.params.id
    const bandIndex = app.locals.metalBands.findIndex(band => band.id === bandId)

    const { name, current_members, top_albums } = request.body

    if (bandIndex !== -1) {

        app.locals.metalBands[bandIndex] = {
            id: bandId,
            name: name,
            current_members: current_members,
            top_albums: top_albums
        }

        response.status(200).json(`${app.locals.metalBands[bandIndex]} has been updated`)
    } else {
        response.status(404).send(`Cannot find a band with ID ${request.params.id}`)
    }
}) 

app.delete('/api/v1/90sMetalBands/:id', (request, response) => {
    const bandId = request.params.id;
    const bandIndex = app.locals.metalBands.findIndex(band => band.id === bandId)
    
    if (bandIndex !== -1) {
      const delBand = app.locals.metalBands[bandIndex].name
      app.locals.metalBands.splice(bandIndex, 1)
      response.status(201).send(`${delBand} has been deleted!`)
    } else {
        response.status(404).send(`Cannot find a band with ID ${request.params.id}`)
    }
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`)
})




