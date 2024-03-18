import Link from "next/link";
import styles from "./styles.module.css";
export default function Header() {
	return (
		<header>
			<nav className={styles.navbar}>
				<section className={styles.linkSection}>
					<Link href="/home" className={styles.link}>
						Home
					</Link>
					<Link href="/collection" className={styles.link}>
						Collection
					</Link>
				</section>
				<Link className={styles.profile} href={"/profile"}>
					<p className={styles.profileName}>user</p>
					<img src="" alt="" className={styles.profilePicture} />
				</Link>
			</nav>
		</header>
	);
}
