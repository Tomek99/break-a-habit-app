import { Link } from "react-router-dom";
import styles from "./NavBarLink.module.scss";

interface INavBarLinkProps {
  item: {
    name: string;
    path: string;
    icon: string;
  };
}

function NavBarLink(props: INavBarLinkProps) {
  const { path, name } = props.item;

  return (
    <li className={styles.NavBarLink}>
      <Link
        to={{
          pathname: path,
        }}
      >
        {name}
      </Link>
    </li>
  );
}

export default NavBarLink;
