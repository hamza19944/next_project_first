import Image from "next/image";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>&copy; 2023 Elmansy. All rights reserved.</p>
            <div className={styles.socialIcons}>
                <Image className={styles.icon} src="/1.png" width={20} height={20} alt="Elmansy Dev"/>
                <Image className={styles.icon} src="/2.png" width={20} height={20} alt="Elmansy Dev"/>
                <Image className={styles.icon} src="/3.png" width={20} height={20} alt="Elmansy Dev"/>
                <Image className={styles.icon} src="/4.png" width={20} height={20} alt="Elmansy Dev"/>
            </div>
        </div>
    );
}
 
export default Footer;