import React from "react";
import ForkButton from "../buttons/ForkButton";
import NavigationLeft from "./NavigationLeft";
import NavigationRight from "./NavigationRight";

const Navigation = ({
  jpath,
  forkFile,
  filesObject,
  widgetName,
  codeVisible,
  near,
  path,
  metadata,
  closeFile,
  setShowModal,
  isDraft,
  changeFile,
  // boxRef,
  // step1Ref,
  refs,
  onboarding,
  currentStep,
  requestSignIn,
  disable,
}) => (
  <>
    <div className="w-100 d-flex " style={{ flexWrap: "nowrap" }}>
      <div className="d-flex" style={{ flexWrap: "wrap" }}>
        <NavigationLeft
          filesObject={filesObject}
          jpath={jpath}
          changeFile={changeFile}
          setShowModal={setShowModal}
          closeFile={closeFile}
          disable={disable}
          onboarding={onboarding}
        />
      </div>
      <div
        className="d-flex ms-auto"
        style={{ minWidth: "280px", flexWrap: "wrap" }}
      >
        <NavigationRight
          jpath={jpath}
          widgetName={widgetName}
          setShowModal={setShowModal}
          codeVisible={codeVisible}
          forkFile={forkFile}
          near={near}
          path={path}
          metadata={metadata}
          isDraft={isDraft}
          // boxRef={boxRef}
          // step1Ref={step1Ref}
          refs={refs}
          onboarding={onboarding}
          currentStep={currentStep}
          requestSignIn={requestSignIn}
          disable={disable}
        />
      </div>
    </div>
  </>
);

export default Navigation;
