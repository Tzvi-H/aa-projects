import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("");
  const [bio, setBio] = useState("");
  const [notifications, setNotificatinos] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name,
      email,
      phone,
      phoneType,
      staff,
      bio,
      notifications,
    };

    setName("");
    setEmail("");
    setPhone("");
    setPhoneType("");
    setStaff("");
    setBio("");
    setNotificatinos(false);

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        email <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        phone <input value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <select
          value={phoneType}
          onChange={(e) => setPhoneType(e.target.value)}
        >
          <option disabled value="">
            Phone type
          </option>
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>
      </div>
      <div>
        Instructor
        <input
          type="radio"
          value={staff}
          onChange={(e) => setStaff("instructor")}
          name="staff-type"
        />
        Student
        <input
          type="radio"
          value={staff}
          onChange={(e) => setStaff("student")}
          name="staff-type"
        />
      </div>
      <div>
        <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
      </div>
      <div>
        Sign up for notifications
        <input
          type="checkbox"
          value={notifications}
          onChange={(e) => setNotificatinos(!notifications)}
        />
      </div>
      <input type="submit" value="submit form" />
    </form>
  );
};

export default RegisterForm;
