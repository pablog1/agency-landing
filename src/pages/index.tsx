import { AccordionTemp } from '../templates/AccordionTemp';
import { BannerWithBK } from '../templates/BannerWithBK';
import { Base } from '../templates/Base';
import { Benefits } from '../templates/Benefits';
import { Carousel } from '../templates/Carousel';
import { Carouselx3 } from '../templates/Carouselx3';
import { Hero } from '../templates/Hero';
import { LogoGrid } from '../templates/LogoGrid';
import { Numbers } from '../templates/Numbers';
import { Team } from '../templates/Team';
import { VideoWithText } from '../templates/VideoWithText';

const stories = [
  {
    title: 'Candymen',
    content:
      'Matthew and <b>his sister</b> throw Junior Mints at the movies. Itâs their childhood ritual, a ritual recently reclaimed. Each calculates their target. With a careful flick of the arm, huddled in their seats, they let loose the weight of their lives. Mattâs high school tests. Nancyâs jobs, constantly shifting. Bartender. Video store clerk. Itâs absurd. They need to laugh and throw candy through the kaleidoscope of movies. The Hangover. The Hangover, Part II.Movies where people try to reclaim their inner children and lose.Matthew and Nancy need to laugh and respect their loss, throwing candy into that vast expanse.',
  },
  {
    title: 'Full Cold Moon',
    content:
      'They bear witness, the girl and the supermoon, pinned to different worlds. She studies the ocean, chin on knees, toes buried in cooling sand while the luminous orb above gathers stars from the sky, sprinkles them across the sea. In the water, surfboard beneath him, her lover waits for the perfect swell. He came for the power of gravity, a wild moment of joy. She came for him. He whoops, riding high inside the tunnel of a giant wave, its crest moon-silvered. She cheers. But then heâs gone, board tumbling to shore. She splashes into the water. Shouting. Waiting. Shouting.',
  },
  {
    title: 'Stained Lips',
    content:
      'She dabs her lips with Faithful Fawn. He hovers behind, runs his fingers through his graying hair, eyes fixed on his reflection. How do I look? Her mouth forms a perfect âO,â presses shut. Handsome. He points. When you move your mouth that way, you look like a fish. Her mind recedes to their rehearsal dinner. The baby photos her mother had blown up. Adorable, sheâd said when she saw his. Your foreheadâs so high, heâd responded. She drops her stained tissue in the toilet. Flushes. Whatâs that lip color? he asks. Fawn, she answers, and flashes her broad smile.',
  },
  {
    title: 'Teeth on the Nightstand',
    content:
      'Friday is Mrs. Judsons, her marble-topped table that refuses to give up its smudges no matter how hard I polish. I used to sing along to my Walkman until someone on the 23 bus made off with my purse. Now I make up my own songs. I sing them on my knees to the walnut baseboards until their shine sings back to me. I sing through lunch, a shot of whiskey I cadge from the liquor Mrs. Judson will never miss. When I clean the bedroom, Mr. Judson smiles up at me from the glass where heâs drowning. He approves.',
  },
];

const team = [
  {
    name: 'Pablo',
    src: '/assets/images/team_member.jpg',
    role: 'CEO',
  },
  {
    name: 'Oscar',
    src: '/assets/images/team_member.jpg',
    role: 'CTO',
  },
  {
    name: 'Juana',
    src: '/assets/images/team_member.jpg',
    role: 'DEV',
  },
  {
    name: 'Pablo',
    src: '/assets/images/team_member.jpg',
    role: 'CEO',
  },
  {
    name: 'Oscar',
    src: '/assets/images/team_member.jpg',
    role: 'CTO',
  },
  {
    name: 'Juana',
    src: '/assets/images/team_member.jpg',
    role: 'DEV',
  },
  {
    name: 'Pablo',
    src: '/assets/images/team_member.jpg',
    role: 'CEO',
  },
  {
    name: 'Oscar',
    src: '/assets/images/team_member.jpg',
    role: 'CTO',
  },
  {
    name: 'Juana',
    src: '/assets/images/team_member.jpg',
    role: 'DEV',
  },
];

const Index = () => (
  <>
    <Hero />
    <Numbers />

    <Base />

    <Benefits />
    <VideoWithText />
    <LogoGrid />
    <Carousel />
    <Carouselx3 />
    <BannerWithBK
      title="Reach out now and Get a FREE Sample Website Design"
      align="right" // left or right
      tailwindColor="!text-primary-400" // needs !important
      inlineContainer={true}
    />
    <AccordionTemp stories={stories} />
    <Team team={team} />
  </>
);

export default Index;
