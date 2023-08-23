import styles from "./page.module.css"
import Link from "next/link"
import Image from "next/image";

async function getData() {
    const res = await fetch("https" + process.env.VERCEL_URL + "/api/posts", {
        cache: "no-store",
    });
    if(!res.ok){
        throw new Error("Faild to fetch data");
    }

    return res.json();
}

const Blog = async () => {
    const data = await getData()
    return (
        <div className={styles.container}>
            {data.map((item) => (
                <Link href={`/blog/${item._id}`} className={styles.linkContainer} key={item._id}>
                    <div className={styles.imageContainer}>
                        <Image 
                            src={item.image}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.desc}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
 
export default Blog;