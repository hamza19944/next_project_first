import styles from "./page.module.css"
import Image from "next/image";
import {notFound} from "next/navigation"

async function getData(id) {
    const res = await fetch(`/api/posts/${id}`,{
        cache: "no-store",
    });

    if(!res.ok){
        return notFound()
    }

    return res.json()
}

export async function generateMetadata({ params }){
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    }
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id)

    return data ? (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        {data.title}
                    </h1>
                    <p className={styles.desc}>
                        {data.body}
                    </p>
                    <div className={styles.author}>
                        <Image 
                            src="https://images.unsplash.com/photo-1491245338813-c6832976196e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image 
                        src="https://images.unsplash.com/photo-1491245338813-c6832976196e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nihil aliquam sed optio exercitationem soluta numquam qui, laborum beatae ducimus odio? Qui eius ipsa dolorem atque deserunt provident tempora possimus!
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nihil aliquam sed optio exercitationem soluta numquam qui.
                    <br />
                    <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat nihil aliquam sed optio exercitationem soluta numquam qui, laborum beatae ducimus odio? Qui eius ipsa dolorem atque deserunt provident tempora possimus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur itaque est nesciunt illum, rerum incidunt eum, dignissimos in atque provident asperiores praesentium modi sequi quis, adipisci quidem ratione laboriosam vero!
                    <br />
                    <br />
                </p>
            </div>
        </div>
    ) : (
        <div>Not Found</div>
    );
}
 
export default BlogPost;