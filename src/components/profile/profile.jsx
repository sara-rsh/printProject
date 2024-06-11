import styles from "./profile.module.css";
import { Link } from "react-router-dom";
import { FlagContext } from "../../context/flagContext";
import { useContext } from "react";
import { LuUserCog2 } from "react-icons/lu";
import { useEffect, useState } from "react";

function Profile() {
  const { isLogedIn, setIsLogedIn } = useContext(FlagContext);
  // setIsLogedIn(isLogedIn);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((response) => response.json())
      .then((data) => {
        setIsLogedIn(data.message);
        setUserInfo(data.userinfo);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {isLogedIn && (
        <div>
          {userInfo.map((info) => (
            <div id="profile" className={styles.profile}>
              <div>
                <p>نام کاربری:</p>
                <p>{info[0]}</p>
              </div>
              <div>
                <p>تلفن همراه:</p>
                <p>{info[1]}</p>
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
                <LuUserCog2 className={styles.infoLinkIcon} />
                اطلاعات کاربری
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Profile;
