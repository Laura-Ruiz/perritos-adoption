import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "../../firebase";
import { toast } from "react-toastify";
import { deleteObject, ref } from "firebase/storage";

export default function DeleteArticle({ id, imageUrl }) {
    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this article?")) {
            try {
                await deleteDoc(doc(db, "Posts", id));
                toast("Posts deleted successfully", { type: "success" });
                const storageRef = ref(storage, imageUrl);
                await deleteObject(storageRef);
            } catch (error) {
                toast("Error deleting article", { type: "error" });
                console.log(error);
            }
        }
    };
    return (
        <div>
            <button onClick={handleDelete}
               classname='btn' style={{ cursor: "pointer" }}>Delete</button>

        </div>
    );
}