import React, { useEffect, useState } from 'react';
import styles from './ApiDemo.module.scss';
import { PostService } from "service/PostService";
import { Post } from "model/Post";


const ApiDemo: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        PostService.getAll().then((response) => {
            setPosts(response);
        });

    }, []);

    return <div className={styles.ApiDemo}>

    </div>;
};

export default ApiDemo;
