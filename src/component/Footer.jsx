import React from "react";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright @{year}</p>
      </footer>
    </div>
  );
}
