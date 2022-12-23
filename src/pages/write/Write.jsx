import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import { ToastContainer, toast } from 'react-toastify';
import Header from "../../components/header/Header";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [link, setLink] = useState();
  const { user } = useContext(Context);

  const notify = () => {
    toast.success('Edit Successful', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    /*if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = link;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    } */

    const linkPhoto = document.getElementById("fileInput");
    if (linkPhoto.value){
      newPost.photo = linkPhoto.value;
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };
  return (
    <>
    <Header/>
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="TITLE"
            className="writeInput"
            autoFocus={true}
            onChange={e => setTitle(e.target.value)}
          />
          <input
            placeholder="Add your picture"
            type="text"
            id="fileInput"
            value={link}
            className="writeImg"
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button onClick={notify} className="writeSubmit" type="submit">
          POST
        </button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </form>
    </div>
    </>
  );
}