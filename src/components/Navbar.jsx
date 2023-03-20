
import styles from '../styles/nav.module.css'
import {AiFillBook} from 'react-icons/ai'
import { useState ,useEffect} from 'react';
export const Navbar=()=>{
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        function handleScroll() {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return <div className={ scrolled==false?styles.cont:styles.scrolled}>
        <AiFillBook className={styles.book_icon}  />
        <span className={styles.heading}>Book House</span>
    </div>
}