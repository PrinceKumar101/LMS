import React, { useState } from 'react';
import { IoFilterSharp } from "react-icons/io5";
import { BiFilterAlt } from "react-icons/bi";
import NotesDrawer from './Notesdrawer'; // Import your NotesDrawer or modal component

type Note = {
  id: string;
  title: string;
  content: string;
};

const Notes: React.FC = () => {
  // State to hold the notes
  const [notes, setNotes] = useState<Note[]>([]);

  // State for selected note to show in a drawer/modal
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  // Function to delete a note
  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Handle opening a note (this would be used to open the note in the drawer)
  const openNote = (note: Note) => {
    setSelectedNote(note);
  };

  // Handle closing the note view (reset to null)
  const closeNote = () => {
    setSelectedNote(null);
  };

  return (
    <>
  <div className="px-4 sm:px-6 md:px-8 lg:px-11 mt-2">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-orange-500">
        Notes
      </h1>
      <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
        {/* Sort Button */}
        <div className="flex items-center gap-2 sm:text-sm md:text-base lg:text-sm rounded-lg px-2 py-1.5 pb-2 text-orange-600 border border-orange-600">
          <IoFilterSharp />
          <button className="text-sm sm:text-sm md:text-base">Sort by</button>
        </div>

        {/* Filter Button */}
        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 pb-2 text-orange-600 border border-orange-600">
          <BiFilterAlt />
          <button className="text-sm sm:text-sm md:text-base">Filter</button>
        </div>

        {/* Notes Drawer Button */}
        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5 pb-2 text-white border bg-orange-600">
          <NotesDrawer setNotes={setNotes} />
        </div>
      </div>
    </div>
  </div>


      {/* Display Notes in Grid Layout (only showing the titles) */}
      <div className="px-11 mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.length === 0 ? (
          <p>No notes available.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="flex flex-col rounded-md bg-white justify-between items-start border-2 border-gray-200 py-4 px-3 cursor-pointer hover:shadow-md transition-all relative"
              onClick={() => openNote(note)} // Open the full note on click
            >
              <h3 className="text-lg font-semibold">{note.title}</h3>
              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click event from opening the note
                  deleteNote(note.id); // Delete the note
                }}
                className="absolute items-center right-2  text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Display the selected note in a larger view */}
      {selectedNote && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-md w-3/4 max-w-4xl">
            <h3 className="text-2xl font-semibold">{selectedNote.title}</h3>
            <p className="mt-4">{selectedNote.content}</p>
            <button
              className="mt-4 text-red-500"
              onClick={() => closeNote()}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Notes;
