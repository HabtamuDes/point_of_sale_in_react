import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
function HomePage() {
  return (
    <MainLayout>
      <div className="bg-light p-5 mt-4 rounded-3">
        <h1>Welcome to simple pos system</h1>
        <p>asgsdgsd fsgsdgsdg ssdgsgsdgsdg gsdghsdgsdg</p>
        <p>asgasdgs </p>
        <Link to="/pos" className="btn btn-primary">
          click here to sell Porduct
        </Link>
      </div>
    </MainLayout>
  );
}

export default HomePage;
