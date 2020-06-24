/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 18%)" strokeLinecap="round" {...props} />
);

const MenuToggle = ({ toggle }) => {
  return (
    <button
      role="button"
      aria-label="Menu Toggle"
      sx={{
        outline: "none",
        border: "none",
        cursor: "pointer",
        position: "absolute",
        top: "16px",
        left: "15px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "transparent"
      }}
      onClick={toggle}
    >
      <svg width="20" height="20" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
