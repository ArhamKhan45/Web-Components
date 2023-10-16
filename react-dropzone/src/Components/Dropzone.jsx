import React, { useState } from "react";
import "../Style/Dropzone.scss";
import { useDropzone } from "react-dropzone";
import { BiCloudUpload } from "react-icons/bi";
import { AiFillFileAdd } from "react-icons/ai";

function Dropzone() {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: {
        "image/jpeg": [],
        "image/png": [],
      },
    });

  const acceptedFileItems = acceptedFiles.map((file) => {
    return (
      <>
        <h4>Accepted files</h4>
        <p key={file.path}>
          {file.path} - {file.size} bytes
        </p>
      </>
    );
  });

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <>
      <h4>Rejected files</h4>
      <li key={file.path}>
        {file.path} - {file.size} bytes
        <ul>
          {errors.map((e) => (
            <li key={e.code}>{e.message}</li>
          ))}
        </ul>
      </li>
    </>
  ));

  return (
    <section className="container frame-dropzone ">
      <div {...getRootProps({ className: "dropzone-item-1" })}>
        <input {...getInputProps()} />
        <div>
          <BiCloudUpload size={50} className="custom-icon-spacing" />
        </div>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
      </div>
      <aside className="dropzone-item-2">
        <div>
          <AiFillFileAdd size={30} className=" custom-icon-spacing" />
        </div>
        {Object.keys(acceptedFileItems).length == 1 ? (
          <div>{acceptedFileItems}</div>
        ) : (
          <div>{fileRejectionItems}</div>
        )}
      </aside>
    </section>
  );
}

export default Dropzone;
