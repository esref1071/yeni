
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-gray-800 text-white flex gap-4">
    <Link to="/">Home</Link>
    <Link to="/learning">Learning</Link>
    <Link to="/mentorship">Mentorship</Link>
    <Link to="/progress">Progress</Link>
    <Link to="/ai">AI Companion</Link>
    <Link to="/feedback">Feedback</Link>
    <Link to="/certifications">Certifications</Link>
    <Link to="/employees">Employees</Link>
    <Link to="/mentorship-management">Mentorship Mgmt</Link>
    <Link to="/ai-monitoring">AI Monitoring</Link>
    <Link to="/insights">Insights</Link>
    <Link to="/recommendations">Recommendations</Link>
  </nav>
);

export default Navbar;
