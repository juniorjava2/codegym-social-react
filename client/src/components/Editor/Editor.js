import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

function Editor() {
  const [value, setValue] = useState("");
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],

      [{ color: [] }, { background: [] }],
      ["code"],
      ["link", "image"],
      ["clean"],
    ],

    clipboard: {
      //toggle extra line break when pasting HTML:
      matchVisual: false,
    },
  };

  //  Quill editor formats
  //  see https://quilljs.com/docs/formats
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "background",
    "color",
    "code",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "clear",
  ];

  //Inserting images

  return (
    <>
      <ReactQuill
        id="ql-editor"
        placeholder="write a minimum of 30 charachters"
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
        theme="snow"
      />
    </>
  );
}

export default Editor;
