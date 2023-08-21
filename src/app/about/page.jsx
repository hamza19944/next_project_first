import Image from "next/image";
import styles from "./page.module.css"
import Button from "@/components/button/Button"
import aboutImg from "public/about.jpg"

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src={aboutImg}
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>
                        Digital Storytellers
                    </h1>
                    <h2 className={styles.imgDesc}>
                        Handcrafting award winning digital experiences
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        Who Are We?
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor qui saepe quas.
                        <br />
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque modi reprehenderit minus cumque delectus rem dolore optio quae reiciendis laborum voluptatem corrupti odio, voluptatum eum. Omnis aliquid qui excepturi quisquam?
                        <br />
                        <br />
                        <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis assumenda ratione corporis rerum, magnam obcaecati deserunt atque molestias dolorem, cumque nisi eos voluptates itaque totam velit! Error sequi nulla dolor.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>
                        What We Do?
                    </h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem placeat reprehenderit illo voluptatum quisquam in officia ea ipsum iusto, dolorem alias aliquam nostrum, vel architecto officiis asperiores ratione amet!
                        <br />
                        <br />
                        - Creative Illustations
                        <br />
                        <br />
                        - Dynamic Websites
                        <br />
                        <br />
                        - Fast and Handy Mobile Apps
                    </p>
                    <br />
                    <br />
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
}
 
export default About;