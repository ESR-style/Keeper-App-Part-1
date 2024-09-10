import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Note from "./component/Note";
import notes from "./notes";

const createNotes = (noteItem) => <Note
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
/>



export default function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}
