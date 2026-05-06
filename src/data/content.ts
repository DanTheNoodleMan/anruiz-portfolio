export interface Essay {
	format: string;
	title: string;
	description: string;
	year: string;
	url?: string;
}

export interface Book {
	id: number;
	title: string;
	author: string;
	role: string;
	coverVariant: "navy" | "rose" | "amber" | "forest";
	publisher?: string;
	year?: string;
	quote?: string;
	url?: string;
}

export interface PerformancePiece {
	id: number;
	caption: string;
	variant: "wide-motion" | "tall-still" | "tall-resonance" | "wide-stage";
}

export const essays: Essay[] = [
	{
		format: "Research Paper",
		title: "Gender and the Reframing of Politeness",
		description:
			"This thesis investigates how gender identity influences the perception and performance of politeness strategies among Spanish speakers acquiring the Japanese language",
		year: "2024",
		url: "/writings/Gender and the reframing of politeness.pdf",
	},
	{
		format: "Essay",
		title: "The Idealized Family and Hegemonic Gender",
		description:
			"This thesis investigates how gender identity influences the perception and performance of politeness strategies among Spanish speakers acquiring the Japanese language",
		year: "2023",
		url: "/writings/The Idealized Family and Hegemonic Gender.pdf",
	},
	{
		format: "Essay",
		title: "Women In War",
		description:
			"This thesis investigates how gender identity influences the perception and performance of politeness strategies among Spanish speakers acquiring the Japanese language",
		year: "2023",
		url: "/writings/Women In War.pdf",
	},
	{
		format: "Essay",
		title: "Manga as a Literary Work Of Art",
		description:
			"By analyzing works like Death Note and Given, this essays stresses how literary devices (such as symbolism and usage of onomatopoeia) function within manga in order to create a literary work of art",
		year: "2022",
		url: "/writings/Manga as a Literary Work Of Art.pdf",
	},
	{
		format: "Essay",
		title: "Beyond the Blood. Can Ultra-Violence in Media Be Constructive?",
		description: "This essay is centered on an increasingly pressing debate: does violent content in media serve as a constructive psychological tool or does it cause harm through desensitization and increased aggression?",
		year: "2021",
		url: "/writings/Beyond the Blood.pdf",
	},
];

export const books: Book[] = [
	{
		id: 1,
		title: "L'Origine des Larmes",
		author: "Jean-Paul Dubois",
		role: "Translator · FR → EN",
		coverVariant: "navy",
		publisher: "Farrar, Straus and Giroux",
		year: "2024",
		quote: "A masterpiece of melancholy, brilliantly translated to preserve its fragile heartbeat.",
		url: "/pdfs/origine.pdf",
	},
	{
		id: 2,
		title: "A Noite dos Cem Dias",
		author: "Agustina Bessa-Luís",
		role: "Translator · PT → ES",
		coverVariant: "rose",
		publisher: "Editorial Anagrama",
		year: "2023",
		quote: "An uncompromising voice, captured here with devastating clarity.",
		url: "/pdfs/noite.pdf",
	},
	{
		id: 3,
		title: "Archive of Small Fires",
		author: "Various Authors",
		role: "Editor · Anthology",
		coverVariant: "amber",
		publisher: "Independent Press",
		year: "2022",
		quote: "A curation of voices that speak softly but burn long after reading.",
		url: "/pdfs/archive.pdf",
	},
	{
		id: 4,
		title: "Cartas desde el Silencio",
		author: "Marta Aponte Alsina",
		role: "Editor & Translator",
		coverVariant: "forest",
		publisher: "University Press",
		year: "2021",
		quote: "Essential dispatches from the edge of language and history.",
		url: "/pdfs/cartas.pdf",
	},
];

export const performancePieces: PerformancePiece[] = [
	{ id: 1, caption: "Contemporary dance performance, Barcelona 2024", variant: "wide-motion" },
	{ id: 2, caption: "Editorial shoot, 2023", variant: "tall-still" },
	{ id: 3, caption: "Movement study, 2023", variant: "tall-resonance" },
	{ id: 4, caption: "Sala Beckett, Barcelona 2022", variant: "wide-stage" },
];

export const aboutPills = [
	"Literary essays",
	"Cultural criticism",
	"French → English",
	"Portuguese → Spanish",
	"Book editing",
	"Contemporary dance",
	"Modeling",
];

export const credentials = {
	education: [
		{ degree: "Asian Studies Program", school: "Kansai Gaidai University", year: "2025" },
		{ degree: "BA in Modern Languages", school: "Nebrija University", year: "2025" },
	],
	residencies: [
		{ name: "MacDowell Colony", year: "2023" },
		{ name: "Banff Centre for Arts and Creativity", year: "2022" },
	],
	awards: [
		{ name: "Sexuality: Psychology & Sociology ", year: "2021" },
		{ name: "Sworn Translator Degree", year: "2020" },
	],
};

export interface Poem {
	id: number;
	title: string;
	year: string;
	quote: string;
	image?: string;
	content: string;
}

export const poems: Poem[] = [
  {
		id: 1,
		title: "Lines",
		year: "Spring ",
		quote: `Soon, it was more about where on earth could the keys have fallen
Maybe they fell with my jeans?
Were they get pushed down along with my chest?`,
		content: `I am unsure about what was more intense
The weight of our worries or the one of our wants
Soon, it was more about where on earth could the keys have fallen
Maybe they fell with my jeans?
Were they pushed down along with my chest?
Or where they in the back? 
Trying to hide in between the bags

They could not be by the river
Only I had fallen by the river
Well, more like pushed into it
Swinged around in between our push backs and laughs

It's a very thin line, you know?
The one between joking and acting like brats
Crossing from tickles to grabs
Hands to arms
Hugs to chokes
From the air to the ground

From reason to desire

We didn't see it coming
Or maybe we tried not to see it
How every cm we crossed over that line would take any part of rational I had left in me
Any part of pride I could hold,
Ending up holding my breath
He holding my neck

Regardless, we eventually found the keys
Right in between the seats
Plain, easy to see
Is it just that we did not want to see?

In real life we had to play dumb
But here? Maybe we could just not see
Here we had guardians, that we could see
The mountains and rivers promised a safe space
An unreal one, at least

Just as unreal as the reflection of the sun in the painted design of my jeans 
Spread against the window, sometimes on the back seat
Just like his hands, switching places all over my skin
A shitty solution for a fun problem, I thought
Like the problem of driving without pants
Or shoes
But with a soundstrack and a sunset
Truly, they had given me such a view, 
what else could have they gifted?

The version of me with this present could not complain
But real me? I guess they had a different reality to deal with
One with hurt feelings 
With doubts, with problems

I had to ask, though
"If there were none... What would you do?"
Don't expect a real answer
Keep driving

He had to ask, though
"If there were none... How, when?"
Shoud I give a real answer?
Would it be wise? Parking outside of our guardians fantasy land

"I would..."
"If there were none..."
"Now, I mean..."
I mean, what wouldn't I do?
"Yes?"
No, it wouldn't be wise
He grabbing me by my hair was also not wise but...
"Answer when I talk"

Plenty other things weren't wise that day
He taking down the zipper of my shirt to the rhythm of the music surely wasn't
Playing the "who is this harder for?" game wasn't better
Not touching but whispering, growling...
Ye, that wasn't our brightest moment either

In truth, reality did not seemed faced by our actions
Way less by the infinite sea of intentions that activated them
However, one last night we had
And with it no resolution, only frustration
Too much tempting, needed more doing
Actually, could it ever become just doing?
Could we go back to our fantasy?
Could we let it be reality?`,
	},
	{
		id: 2,
		title: "Harder than any rollercoaster",
		year: "winter ",
		quote: `Harder than any rollercoaster
    I'm falling 
    No safety net included with the package I choose, however...`,
		content: `Harder than any rollercoaster
I'm falling
No safety net included with the package I choose, however
Air is leaving, rushing out without any return time
But you seem fine, protected, well adjusted

Part of me is glad you won't share my doom
Part of me is sad cause I knew you wouldn't choose to try and hold onto the harnesses together
Part of me is mad cause your reasons not to can be so easily solved
Simpler than any movie's reasons for the main couple not to be together

But this is real life, innit?
In real life I pay with my heart so you don't fall
Assure you it will be fine
And feel the tears brushing away from my face since they won't even allow those to stay

What will? The broken pieces of my heart? 
They seem to shatter my lungs, as cooperative as always
Helping gravity and other hearts, while leaving me with just enough not to shut down

Maybe my stubborness?
It seems to only want to figure out any way to grab onto the seat 
Not too concerned for what life would be if I survived the fall
Maybe it's because nothing else feels relevant,                                                       
not when the stone cold floor seems so close

And then, for a moment, right before crushing, I see you going up
I see a handle I could grab onto
Reach to it and realize it'd drag you down too
So while the last breath mixes with my tears in the air
I force myself to smile
While the rest of me is crushed to pieces along with my heart`,
	},
	{
		id: 3,
		title: "Bolas, arterias y hebras",
		year: "summer",
		quote: `Sí, ya lo sabía desde el principio
Hace falta que diga en voz alta todo los que mis ojos te han dicho?`,
		content: `No quiero evitar sentir
Pero a veces es tanto
Termina siendo una bola en mi garganta
Siento como el aire apenas pasa aunque tome todo el oxígeno a mi alrededor

No quiero evitar experimentarte
Vivirte hasta el último momento
Aunque nuestra vida conjunta no dure más que una ronda en el patio de juegos del sol y la luna
Dando su luz mientras mis arterias decaen lentamente
Los latidos cada vez más espaciados
Como los momentos entre mis manos y las tuyas
Cada vez más cortos... y, bueno, cada vez menos

Sí, ya lo sabía desde el principio
Hace falta que diga en voz alta todo los que mis ojos te han dicho?
Que pensé que no dolería
Que acepté que me mataría
Que no pude contenerme y alejar tus labios de los míos
Tus palabras de mi mente
Que ya sabía que en algún momento te irías
Y que yo me quedaría sola en la sala de espera de mi corazón
Sin cita para repararlo
Sin competencias para arreglarlo
Cada vez con más cicatrices y más peso que tienta con romper las finas fibras de mis venas
Estiradas tanto que los hilos tienen sus propios hijos
Dejándolas sin aguante contra mi despecho

Porque lo siento
Acaso no lo sabes?
Que no sean los tuyos los únicos brazos
No significa que sean menos importantes
Que su calor sea menos necesario cuando hay frío
Que sea menos querido cuando mi sonrisa calienta el ambiente
Ya, que no es lo tuyo
Pero, y lo mío?
Mi bola en la garganta, mis corazón sin latidos, mis venas quebradas?
Las cicatrices que dejas no las va a curar nadie
Pero de ser alguien, sólo podrías curarlas tú

Aunque ya lo sabía
Que nadie las curaría
Aunque ya lo había aceptado
No hacen más dulces las lágrimas deslizándose por mi cuello
Aunque yo decidí quedarme
No hace el proceso de quitarme los clavos menos sangrientos
Aunque sólo lo vean los brazos que lo saben
Aunque no me creas
Aunque más no pueda
Aunque al final del día, yo sola tenga que cortar la bola, arterias y hebras`,
	},
	{
		id: 4,
		title: "A View Far Away from my Jazz",
		year: "Summer",
		quote: `An unbothered vals our steps make through the city
Sliding through the smell of blues and sound of wine...`,
		content: `An unbothered valse our steps make through the city
Sliding through the smell of blues and sound of wine
A smell made of petricor and leather
Smokyness embellishing the eco of the glass during our delicate cheers
Soft, personal, almost even secretive
To all but the moon, goddess gifting us her light
Making our turns ethereal against a background of concrete
That only we can use to fly

All of it, continous, endless even
If only while peeking through such window
Some others changing the tune
If ever so slightly daring to play such an up beat rhythm

The stress of the sax taking over my lungs
Energy pulling my feet forward
In my seat swinging, my mind leaving
Conversation and cocktails
Art and words of poetry
Reverberant screams of piano entering my veins
Soon to become one with me
Falling into you having become undomable
As free as the moans of the microphone that my throath became while with you

All of it, again continous, endless even
If only while peeking through such window
Feeling so far even when at reach
If only to leave me mourning like a widow

Even more than a poet trying to explain existence
Lost and tortured ever so sweetly
Forever concerned
Equally punished and rewarded by the weight of the words on the paper
Even more by the ones that refuse to leave the chambers their head restricted 
Stronger, tighter than their suffered hearts

All of it, eternal longing in its acceptance
No more than mere windows to possible existance
Tell me, baby, are you also part of the lifes I won't be living?
Only with me when not slipping through my fingers?
Your mouth only against mine when making my lips bleed with your goodbyes?
Hardly breathing only at the sight of your vals
Parting into the night far, far away from my jazz?`,
	},
  {
		id: 5,
		title: "Sleep in your Arms",
		year: "Autumn",
		quote: `I've never liked sleep
It takes too much time
It brings too many nightmares...`,
		content: `I've never liked sleep
It takes too much time
It brings too many nightmares
It makes me feel unsure as if I'll wake up on time
On time for breakfast, class or a date
I've missed all of them, repeatedly, to Morpheous' vanity

With me ex, I started to feel like Morpheous had the advantage
Fell asleep during movies, got sleepy instead of turned on, restful instead of alert
He didn't appreaciate it
In all honesty, back then I didn't either
I was about to put a complain directly in Morpheous' face 
If only to allow me more time with my love while awake
But he was unreachable and so we continued
Wanting to rest and not go out everytime I was in his arms

Eventually it lead to fights
Was he boring? Did I not love him? Didn't I want to be with him?
So I stopped feeling calm and did my best to keep myself alert
Not realizing the scars I was causing
So much so, eventually I didn't feel at ease anymore
But also didn't wanna be with him as much as felt like I should

Should is not the same want just as much as ease is closer to love than to boredom
My nervous system was calm for a second and it took what it needed
Not Morpheous or the shadows of uninterest
But simple tiredness that had nowhere to lay until he brought me to his arms
Only to shove me out of them when tiredness never stopped

I understand, back then I would have done the same
I didn't understand how much I needed a break, a space so safe I wouldn't fall while laying down
But my boyfriend now did
When I found in his arms what I had in the past 
my body let go 
"I love how you fall asleep instantly in my arms"
My mind let go
"I didn't want to wake you up, you seemed so peaceful in your sleep"
My heart kept him in

And I finally understood the gift we used to have
And just how we ruined it step by step
Thankfully though, leading me to my bae
After months, years of unrest I want to play again
Go out, watch movies and take his shirt off
Sometimes still tired but now
Those arms are not only there despite of but open and waiting
Waiting for mine too
For both of us to go talk to Morpheous, as the friend he is
In calm, in peace, in love`,
	},
];
