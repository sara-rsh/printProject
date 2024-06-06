import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { FlagContext } from "../../context/flagContext";
import { useContext } from "react";
import { LuUserCog2 } from "react-icons/lu";

function Profile() {
  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  setIsLogedIn(isLogedIn);
  return (
    <div>
      {isLogedIn && (
        <div id="profile" className={styles.profile}>
          <div>
            <p>نام کاربری:</p>
          </div>
          <div>
            <p>تلفن همراه:</p>
          </div>
          <div>
            <p>موجودی کیف پول:</p>
          </div>
          <Link
          className={styles.infoLink}
            onClick={() =>
              (document.getElementById("profile").style.display = "none")
            }
            to="/information"
          >
           <LuUserCog2 className={styles.infoLinkIcon}/>
            اطلاعات کاربری
          </Link>
        </div>
      )}
    </div>
  );
}
export default Profile;
