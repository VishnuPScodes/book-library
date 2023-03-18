
import styles from './home.module.css'
import Fade from "react-reveal/Fade";

export const Home=()=>{
    return (
      <div>
        <div className={styles.heading}>Welcome to Book House</div>
        <div className={styles.description}>
          Book house is a platform where you can find your favourite book easy
          and free from our vast collection of books. Here the books are
          chategorized to romance ,children's,classics,and short stories. Choose
          your chategory and go and explore!
        </div>
        <div className={styles.why_book}>Why read a book?</div>
        <div className={styles.why_book_div}>
          <div>
            <div className={styles.why_book_heading}>
              Enhances Knowledge and Vocabulary
            </div>
            <div className={styles.why_book_des}>
              Reading a book is one of the best ways to enhance your knowledge
              and vocabulary. By reading, you expose yourself to new ideas,
              perspectives, and information that can help you better understand
              the world around you. You can also learn new words and phrases,
              which can help you improve your communication skills.
            </div>
          </div>
          <div>
            <div className={styles.why_book_heading}>
              Improves Mental Health
            </div>
            <div className={styles.why_book_des}>
              Reading can also have a positive impact on your mental health. It
              can help reduce stress and anxiety, improve concentration and
              focus, and even help you sleep better. When you read, you immerse
              yourself in a different world, which can provide a much-needed
              break from the stresses and pressures of everyday life.
            </div>
          </div>
          <div>
            <div className={styles.why_book_heading}>
              Stimulates Imagination and Creativity
            </div>
            <div className={styles.why_book_des}>
              Reading is a great way to stimulate your imagination and
              creativity. When you read, you are transported to a different
              world, and your mind is free to explore new ideas and concepts.
              This can help you think outside the box and come up with new and
              innovative solutions to problems you may be facing in your
              personal or professional life.
            </div>
          </div>
        </div>
        <div className={styles.can_we_read}>Lets Read!</div>
        <Fade bottom>
          <div className={styles.romance_div}>
            <div className={styles.book_section_heading}>Romance</div>
            <div className={styles.book_des}>
              Romance books often explore themes of love, passion, and
              connection, and can evoke strong emotions in readers. Reading a
              well-written romance book can be a fulfilling and cathartic
              experience, leaving you feeling uplifted and emotionally
              fulfilled.
            </div>
            <div className={styles.romance_button}>Read romance books</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.romance_div1}>
            <div className={styles.book_section_heading}>Children's books</div>
            <div className={styles.book_des}>
              Reading children's books can provide a unique perspective on life
              through the innocent and honest outlook of a child. These books
              often offer valuable life lessons that are relevant for both
              children and adults, and can inspire readers to think outside the
              box and tap into their creativity. Whether you're revisiting old
              favorites or discovering new ones, children's books can offer a
              fun, nostalgic, and enriching reading experience
            </div>
            <div className={styles.romance_button}>Read children's books</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.romance_div2}>
            <div className={styles.book_section_heading}>Short stories</div>
            <div className={styles.book_des}>
              Reading short stories offers a diverse range of genres and themes
              in a compact and concentrated form, making it a quick and easy way
              to explore different styles and gain new insights.
            </div>
            <div className={styles.romance_button}>Read short stories</div>
          </div>
        </Fade>
        <Fade bottom>
          <div className={styles.romance_div3}>
            <div className={styles.book_section_heading}>Classics</div>
            <div className={styles.book_des}>
              Classic books often provide timeless insights into the human
              condition and offer a window into the past, allowing readers to
              understand the cultural, social, and historical context of the
              time period in which they were written. Classic books also often
              feature complex characters and intricate plotlines that can
              challenge and engage readers, as well as provide a deeper
              understanding of the human experience. Additionally, reading
              classic books can be a way to gain a deeper appreciation for the
              evolution of literature and language over time.
            </div>
            <div className={styles.romance_button}>Read classics</div>
          </div>
        </Fade>
      </div>
    );
}