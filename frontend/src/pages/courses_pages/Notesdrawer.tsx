import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

type NotesDrawerProps = {
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>; // Passing setNotes as a prop
};

type Note = {
  id: string;
  title: string;
  content: string;
};

const NotesDrawer: React.FC<NotesDrawerProps> = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  // Function to update content
  const handleChange = (value: string) => {
    setContent(value);
  };

  // Function to add a note
  const addNote = () => {
    if (title && content) {
      const newNote: Note = {
        id: Math.random().toString(36).substring(7), // Random ID for new note
        title,
        content,
      };
      setNotes((prevNotes) => [...prevNotes, newNote]); // Add the new note to the state
      setTitle('');
      setContent('');
    } else {
      alert('Please fill in both title and content');
    }
  };

  return (
    <Drawer>
      <DrawerTrigger>+ Add Note</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Add New Note</DrawerTitle>
          <DrawerDescription>Fill in the details for your note.</DrawerDescription>
        </DrawerHeader>

        {/* Title Input */}
        <div className="grid gap-2 p-4">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
            className="w-full p-2 border border-gray-200 rounded-lg"
          />
        </div>

        {/* Content Input */}
        <div className="grid gap-2 p-4">
          <label htmlFor="content">Content</label>
          <ReactQuill
            value={content}
            onChange={handleChange}
            className="h-80 w-full p-2 border border-gray-200 rounded-lg"
            theme="snow"
            placeholder="Write your content here"
          />
        </div>

        {/* Footer */}
        <DrawerFooter>
          <Button onClick={addNote}>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default NotesDrawer;
