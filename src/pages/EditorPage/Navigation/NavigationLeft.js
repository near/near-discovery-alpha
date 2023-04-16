import React from "react";
import { Nav } from "react-bootstrap";
import OpenCreateButton from "../buttons/OpenCreateButton";
import RenameButton from "../buttons/RenameButton";
import FileTab from "./FileTab";

export default function NavigationLeft({
  files,
  jpath,
  changeFile,
  filesOpened,
  setShowModal,
  closeFile,
}) {
  return (
    <Nav
      variant="pills mb-2 mt-2"
      activeKey={jpath}
      onSelect={(key) => changeFile(JSON.parse(key))}
    >
      {files?.map((file) => (
        <FileTab file={file} closeFile={closeFile} filesOpened={filesOpened} />
      ))}
      <Nav.Item className="me-1">
        <OpenCreateButton setShowModal={setShowModal} />
        <RenameButton setShowModal={setShowModal} />
      </Nav.Item>
    </Nav>
  );
}
