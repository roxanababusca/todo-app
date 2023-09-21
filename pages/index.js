import { LoginButton } from '../components/LoginButton';
import { ContactForm } from '../components/ContactForm';
import { TeamProfiles } from '../components/TeamProfiles';
import { ProductCards } from '../components/ProductCards';
import Image from 'next/image';
import Lottie from 'lottie-react';
import productivity from '../public/productivity.svg';
import dashboard from '../public/dashboard.webp';
import profile1 from '../public/profile-1.jpg';
import profile2 from '../public/profile-2.jpg';
import profile3 from '../public/profile-3.jpg';
import launch from '../public/launch.svg';
import heroAnimation from '../public/heroAnimation.json';
import HeadingsMotion from '../components/HeadingsMotion';


export default function Home() {

  return (
      <main>
        <section className="flex justify-center items-center">
          <div className="text-center lg:text-left grid place-items-center">
            <h1>
              Boost Your Productivity.
              <span className="block"> 
              Create Dream To-Dos. 
              </span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed">
              Go to your to-do dashboard and start achieving your dream life goals!
            </p>
            <div className="w-3/4 grid place-self-center">
              <LoginButton />
            </div>
          </div>
          <div className="w-[40vw] hidden lg:inline-block">
            <Lottie animationData={heroAnimation} loop={true}></Lottie>
          </div>
        </section> 
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid place-content-center order-last md:order-first">
              <Image src={dashboard} width="500" height="477" className="rounded-lg object-cover inline-block" alt="todo dashboard image" />
            </div>
            <div className="overflow-x-hidden">
              <HeadingsMotion heading="About this app"/>                     
              <p>
                When you have a practical and beautiful do-to list you&apos;ll enjoy checking in with your goals daily.
                Sign in and start creating your dream todo list!
              </p>
              <p>   
                This app also features a blog section where you can find inspiration on how to enhance your productivity✨. 
                For maximum results, get help from your favorite coffee.
              </p>
            </div>
          </div>
        </section>    
        <section className="overflow-x-hidden">
          <HeadingsMotion heading="One product, peak productivity"/> 
          <div className="relative min-h-[80vh] flex items-center justify-center">
            <div className="absolute w-full h-full bg-top bg-cover bg-[url('/winning.svg')]"> </div>
          </div>
          <div className="container flex flex-wrap">
              <ProductCards 
              dot="bg-green-300"
              heading="Cortado Robusta"
              description="Aromatic redeye, eu body aromatic doppio plunger pot at latte. Cream seasonal aromatic white ut cinnamon, acerbic and aged instant steamed."
              />
              <ProductCards 
              dot="bg-blue-500"
              heading="Irish Affogato"
              description="To go galão seasonal espresso eu, aroma body shop cortado robusta. Coffee, mazagran decaffeinated milk to go mocha viennese."
              />
              <ProductCards 
              dot="bg-purple-600"
              heading="Macchiato Con Panna"
              description="And single shot skinny, coffee chicory flavour medium kopi-luwak. Coffee breve, at extraction, steamed extraction sweet cinnamon."
              />
          </div>
        </section>        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid place-content-center order-last ">
              <Image src={productivity} width="500" height="400" className="object-cover inline-block" alt="girl working on laptop" />
            </div>
            <div className="overflow-x-hidden">
              <HeadingsMotion heading="Improve your daily wins"/>    
              <p className="text-left lg:text-justify">
                Strong pumpkin spice strong cinnamon café au lait spoon americano. Saucer, acerbic, aged cortado grounds galão cinnamon. Wings, beans, single shot robust qui blue mountain dripper single origin doppio variety rich. 
              </p>
              <p className="text-left lg:text-justify">       
                To go arabica, single shot saucer french press aftertaste blue mountain kopi-luwak. Cup cappuccino aromatic seasonal latte as filter, black chicory flavour froth to go. Filter flavour, cream viennese aged coffee medium. Coffee, bar , irish chicory milk spoon irish.
              </p>
            </div>
          </div>
        </section>  
        <section>
            <div className="flex justify-center">
              <div className="woverflow-x-hidden">
                <HeadingsMotion heading="Meet our awesome team"/>
                <p className="text-center">
                  As bar  roast shop, milk aged dripper redeye crema crema. 
                  Beans iced cream cinnamon body plunger pot café au lait, fair trade brewed aftertaste cortado extra.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <TeamProfiles 
              headshot={profile1}
              name="Ella Stan"
              role="Frontend Developer"
              instagramLink="/"
              linkedinLink="/"
              githubLink="/"
              />
              <TeamProfiles 
              headshot={profile2}
              name="Karina Smith"
              role="Product Manager"
              instagramLink="/"
              linkedinLink="/"
              githubLink="/"
              />
              <TeamProfiles 
              headshot={profile3}
              name="Alessia Kuno"
              role="Backend Developer"
              instagramLink="/"
              linkedinLink="/"
              githubLink="/"
              />
            </div>
        </section>
        <section id="contact">
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <div className="grid place-content-center order-last md:order-first">
              <Image src={launch} width="500" height="400" className="object-cover inline-block" alt="product launch" />
            </div>
            <div className="w-full md:w-3/4 overflow-x-hidden">
              <HeadingsMotion heading="Contact us"/>
              <ContactForm/>
            </div>
          </div>
        </section>       
      </main>
  );
}
