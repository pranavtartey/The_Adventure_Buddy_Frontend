import { Link } from "react-router-dom";
import styles from "./LinkCard.module.css";

const LinkCard = ({ children }) => {
  return <Link>{children}</Link>;
};
export default LinkCard;
