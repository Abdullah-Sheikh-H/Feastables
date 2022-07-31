import styles from "./Header.module.css"
import { Fragment } from "react"
import mealsImage from "../../assets/meals.jpg"
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <div>
                    <h1>Feastables</h1>
                </div>
                <div>
                    <HeaderCartButton onClick={props.onShowCart} />
                </div>
            </header>
            <div className={styles["main-image"]}>
                <img src={mealsImage} alt="A table full of Delicious Meals" />
            </div>
        </Fragment>
    )
}

export default Header
