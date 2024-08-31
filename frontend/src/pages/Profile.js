import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/Authcontext';
import api from '../services/api';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    education: '',
    experience: '',
    skills: [],
    careerGoals: '',
  });

  useEffect(() => {
    if (user) {
      api.get('/profile').then(res => setProfile(res.data.profile));
    }
  }, [user]);

  const onChange = e => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    api.post('/profile', profile);
  };

  return user ? (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Education"
        name="education"
        value={profile.education}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Experience"
        name="experience"
        value={profile.experience}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="Skills"
        name="skills"
        value={profile.skills.join(', ')}
        onChange={e => setProfile({ ...profile, skills: e.target.value.split(', ') })}
      />
      <input
        type="text"
        placeholder="Career Goals"
        name="careerGoals"
        value={profile.careerGoals}
        onChange={onChange}
      />
      <button type="submit">Update Profile</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
