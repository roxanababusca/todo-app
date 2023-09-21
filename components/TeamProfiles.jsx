import Image from 'next/image';
import { Instagram } from './TeamSocialLinks';
import { Linkedin } from './TeamSocialLinks';
import { Github } from './TeamSocialLinks';


export function TeamProfiles({ headshot, name, role, instagramLink, linkedinLink, githubLink }){
    return(
        <div className="w-full md:w-1/2 lg:w-1/3">
          <div className="px-10 sm:px-6">
            <Image
            alt="headshot of woman"
            src={headshot}
            className="shadow-lg rounded-full mx-auto max-w-[120px] md:max-w-[170px]"
            />
            <div className="pt-6 text-center">
              <h4 className="text-xl font-bold"> {name} </h4>
              <p className="text-sm uppercase text-center"> {role} </p>
              <div className="mt-6">
              <Instagram link={instagramLink}/>
              <Linkedin link={linkedinLink}/>
              <Github link={githubLink}/>
              </div>
            </div>
          </div>
        </div>
    )
}

