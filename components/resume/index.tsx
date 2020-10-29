import Data from "../../data/resume.json";
import Link from "next/link";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import styles from "./style.module.scss";

export const Resume = () => {
  return (
    <>
      {Data.resume.map(({ text, links }, i) => (
        <section className={styles.section} key={i}>
          {text ? text : null}
          {(links as [])?.map(({ text, href }, i) => (
            <div key={i}>
              <Link href={href}>
                <a target="_blank">
                  <span>{text}</span>
                  <div className={styles.icons}>
                    <KeyboardArrowRightIcon />
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </section>
      ))}
    </>
  );
};
