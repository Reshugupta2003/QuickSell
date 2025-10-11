import React, { Fragment, useState, useContext } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { Firebase } from "../../firebase/config";
import { AuthContext } from "../../contextStore/AuthContext";
import { useHistory } from "react-router";
import GoLoading from "../Loading/GoLoading";

const Create = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    // Validation checks
    if (!name || !category || !price || !description || !phone || !image) {
      alert("❌ Please fill in all fields and upload an image.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Phone number must be exactly 10 digits.");
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("❌ Price must be a valid positive number.");
      return;
    }

    setLoading(true);
    const date = new Date().toDateString();

    Firebase.storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          Firebase.firestore()
            .collection("products")
            .add({
              name,
              category,
              price,
              description,
              phone,
              url,
              userId: user.uid,
              createdAt: date,
            })
            .then(() => {
              setLoading(false);
              history.push("/");
            });
        });
      })
      .catch((err) => {
        alert("Upload failed. Try again.");
        setLoading(false);
      });
  };

  return (
    <Fragment>
      <Header />
      {loading && <GoLoading />}
      <div className="centerDiv">
        <label>Name</label>
        <br />
        <input
          className="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Category</label>
        <br />
        <select
          className="input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Cars">Cars</option>
          <option value="Cameras & Lenses">Cameras & Lenses</option>
          <option value="Computers & Laptops">Computers & Laptops</option>
          <option value="Mobile Phones">Mobile Phones</option>
          <option value="Motorcycles">Motorcycles</option>
          <option value="Tablets">Tablets</option>
          <option value="Books">Books</option>
          <option value="Electronics">Electronics Item</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label>Price</label>
        <br />
        <input
          className="input"
          type="text"
          value={price}
          onChange={(e) => {
            if (/^\d*$/.test(e.target.value)) {
              setPrice(e.target.value);
            }
          }}
        />
        <br />

        <label>Description</label>
        <br />
        <input
          className="input"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label>Phone Number</label>
        <br />
        <input
          className="input"
          type="text"
          maxLength="10"
          value={phone}
          placeholder="Enter 10-digit phone number"
          onChange={(e) => {
            const value = e.target.value;
            if (/^\d*$/.test(value)) {
              setPhone(value);
            }
          }}
        />
        <br />

        <img
          alt="Posts"
          width="200px"
          height="200px"
          src={image ? URL.createObjectURL(image) : ""}
        />
        <br />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />

        <button className="uploadBtn" onClick={handleSubmit}>
          Upload and Submit
        </button>
      </div>
    </Fragment>
  );
};

export default Create;
