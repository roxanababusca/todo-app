import { Navigation } from '../components/Navigation';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';


export default function Layout ({children}) {
    return (
        <>
            <Header />
            <Navigation />
            <div>
                {children}
            </div>
            <Footer />
        </>
      );
}
