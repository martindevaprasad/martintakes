import { useState } from "react";
import "./style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#000" : "#000",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "left",
//   // paddingLeft: "10vh",
//   // paddingTop: "5vh",
//   color: theme.palette.text.secondary
// }));

export const Request = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email_id: "",
    service: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .post(
        "https://devczerpbackend.anichadigitalifra.com/api/services/email",
        formData,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      .then((response:any) => {
        console.log("Data posted successfully:", response.data);
      })
      .then(() => toast("Wow so easy!"))
      .catch((error:any) => {
        console.error("Error posting data:", error);
      });
  };
  return (
    <>
     <div style={{backgroundImage:'url(${rular})'}} className="text-center mb-4">
        <h4
          style={{
            fontFamily: "Gloock",
            fontSize: "32px",
            fontWeight: "600",
            color: "#C6C1FF"
          }}
        >
          Contact Me
        </h4>
      </div>
      <section className="requestbox d-flex justify-content-center">
        <form onSubmit={handleSubmit} className="p-3 col-md-6">
         
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Enter your fullname"
            />
          </div>
          <div className="form-group">
            <label>Tell me</label>
            <input
              type="text"
              className="form-control"
              name="Tell Me"
              value={formData.service}
              onChange={handleChange}
              placeholder="Tell Me"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email_id"
              value={formData.email_id}
              onChange={handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
         
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">
              I consent to processing of my personal data entered above for
              MARTIN to contact me.
            </label>
          </div>
          <button
            type="submit"
            style={{
              background:
                "linear-gradient(99deg, #FCD1D1 8.35%, #FDA3FF 20.91%, #D1F1FF 40.19%, #C6C1FF 50.55%)",
              color: "#fff",
              border: "none"
            }}
            className="btn mt-3"
          >
            Submit
          </button>
          <ToastContainer />
        </form>
        {/* <div>
          <p>{responseMessage}</p>
        </div> */}
      </section>
    </>
  );
};
