import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import NoteContext from "../context/NoteContext";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Typography } from "@mui/material";

const breakpointColumnsObj = {
  default: 3,
  1100: 2,
  700: 1,
};

function Dashboard() {
  const { state } = useContext(NoteContext);
  const { user } = state;
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "100vw",
      transition: {
        staggerChildren: 0.5,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 8,
        staggerChildren: 0.4,
        when: "beforeChildren",
      },
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <Layout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Typography variant="h2">
          Welcome To Your Dashboard {user?.displayName || user?.email}
        </Typography>
      </motion.div>
    </Layout>
  );
}

export default Dashboard;
