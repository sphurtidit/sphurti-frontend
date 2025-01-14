import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    team_name: '',
    captain_name: '',
    phone: '',
    alternate_phone: '',
    name_vc: '',
    name_so: '',
    clg_name: '',
    clg_mail: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirect to the second page or perform another action
    window.location.href = '/second-page';
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Sphurti'25</h1>
      <h2 style={styles.subHeader}>Welcome</h2>
      <p style={styles.text}>Sign up to continue</p>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Team Name', name: 'team_name', type: 'text', placeholder: 'Enter Team Name' },
          { label: 'Captain Name', name: 'captain_name', type: 'text', placeholder: 'Enter Captain Name' },
          { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter Phone Number' },
          { label: 'Alternate Phone Number', name: 'alternate_phone', type: 'tel', placeholder: 'Enter Alternate Phone Number' },
          { label: 'Vice Chancellor Name', name: 'name_vc', type: 'text', placeholder: 'Enter Vice Chancellor Name' },
          { label: 'Sports Officer Name', name: 'name_so', type: 'text', placeholder: 'Enter Sports Officer Name' },
          { label: 'College Name', name: 'clg_name', type: 'text', placeholder: 'Enter College Name' },
          { label: 'College Email', name: 'clg_mail', type: 'email', placeholder: 'Enter College Email' }
        ].map(({ label, name, type, placeholder }) => (
          <div key={name} style={styles.inputField}>
            <label htmlFor={name} style={styles.label}>{label}</label>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required
              style={styles.input}
            />
          </div>
        ))}
        <button type="submit" style={styles.btn}>Next</button>
      </form>
    </div>
  );
};

export default RegistrationForm;