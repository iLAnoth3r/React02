import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
} from "@fortawesome/free-regular-svg-icons";

const Iconos = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
    </div>
  );
};

export default Iconos;
