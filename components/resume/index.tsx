import Data from "../../data/resume.json";
import Link from "next/link";
import styles from "./style.module.scss";
import Icon from "@material-ui/core/Icon";
import { format } from "date-fns";

export const Resume = () => {
  console.log(Data);
  return (
    <>
      {Data.resume.map(({ text, links, footer }, i) => (
        <section className={styles.section} key={i}>
          {text ? text : null}

          {(links as [])?.map(({ text, href }, i) => (
            <div key={i}>
              <Link href={href}>
                <a target="_blank">
                  <span>{text}</span>
                  <Icon className={styles.icons}>keyboard_arrow_right</Icon>
                </a>
              </Link>
            </div>
          ))}

          {footer ? `, ${format(new Date(), "yyyy")}` : null}
        </section>
      ))}
    </>
  );
};
