import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../styleSheets/Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from "emailjs-com";
import Modal from "./Modal";
import Astronaut from "../images/astronaut.png";
import SadCloud from "../images/sad-cloud.svg";
import DismissSVG from "../images/dismiss.svg";

const Form = () => {
  const [modalState, setModalState] = useState("d-none");
  const [modalContent, setModalContent] = useState();
  /* eslint-disable */
  // * Functions that allow to show and hide modal by using submit button
  const ShowModal = () => {
    setModalState("d-flex");
  };
  const HideModal = () => {
    setModalState("d-none");
  };
  // * Constants that contain the different content of the modal
  const LoadingModal = (
    <div>
      <div className="row d-flex">
        <div className="col-12 d-flex justify-content-end dismiss-column"></div>
      </div>
      <div className="row d-block">
        <div className="col-12 d-flex justify-content-center">
          <p className="text-fluid">Submitting...</p>
        </div>
        <div className="col-12 loader-column d-flex justify-content-center align-items-center">
          <div className="modal-loader"></div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <p className="text-fluid">
            This process can take a few seconds. Please wait.
          </p>
        </div>
      </div>
    </div>
  );

  const DoneModal = (
    <div>
      <div className="row d-flex">
        <div className="col-12 d-flex justify-content-end dismiss-column">
          <button
            onClick={HideModal}
            className="dismiss-button"
            style={{ background: "none", border: "none" }}
          >
            <img src={DismissSVG} alt="x" width="23px" height="23px" />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img className="modal-image img-fluid" src={Astronaut} alt="" />
        </div>
      </div>
      <div className="row d-block">
        <div className="col-12 d-flex justify-content-center">
          <p className="text-fluid">Done!</p>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <p className="text-fluid text-center">
            Thank you for filling out the contact form. <br /> We appreciate
            your time and will be in touch soon.
          </p>
        </div>
      </div>
    </div>
  );
  const ErrorModal = (
    <div>
      <div className="row d-flex">
        <div className="col-12 d-flex justify-content-end dismiss-column">
          <button
            onClick={HideModal}
            className="dismiss-button"
            style={{ background: "none", border: "none" }}
          >
            <img src={DismissSVG} alt="x" width="23px" height="23px" />
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <img
            className="modal-image2 img-fluid"
            src={SadCloud}
            alt="sadCloud"
          />
        </div>
      </div>
      <div className="row d-block">
        <div className="col-12 d-flex justify-content-center">
          <p className="text-fluid text-center">
            Sorry, the process could not be completed. <br /> Please try again
            later.
          </p>
        </div>
      </div>
    </div>
  );

  // * Necesary constant to work with react-hook-forms
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();

  /* Submit function: emailjs it's a library that allows to send forms directly to determinated emails. 
(IMPORTANT: Never forgett to include event.preventdefault)*/

  function onSubmit(form, e) {
    e.preventDefault();

    ShowModal();

    setModalContent(LoadingModal);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          emailjs
            .sendForm(
              "service_jm3hlpu",
              "template_nmfusqe",
              e.target,
              "lzH4se0ka7oew4ato"
            )
            .then(function (res) {
              e.target.reset();
              setModalContent(DoneModal);
            })
            .catch(function (error) {
              console.log("Ops the form couldn't been sent");
              setModalContent(ErrorModal);
            })
        );
      }, 3000);
    });
  }

  return (
    <div className="form-container">
      <div className="row d-flex card-title">
        <h3>Contact me</h3>
      </div>
      <div className="container-fluid form-container">
        <div
          id="modal"
          className={`${modalState} whole-modal justify-content-center`}
        >
          <Modal id="modal-tag">{modalContent}</Modal>
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="row input-name">
                <label>Name</label>
              </div>
              <div className="row input-container">
                <input
                  className="inputs"
                  type="text"
                  {...register("name", { required: true, maxLength: 40 })}
                />
                {errors.name?.type === "required" && (
                  <p className="input-warning">This field is required</p>
                )}
                {errors.name?.type === "maxLength" && (
                  <p className="input-warning">
                    You have exceeded the maximum number of characters.
                  </p>
                )}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row input-name">
                <label>Lastname</label>
              </div>
              <div className="row input-container">
                <input
                  className="inputs"
                  type="text"
                  {...register("lastname", { required: true, maxLength: 40 })}
                />
                {errors.lastname?.type === "required" && (
                  <p className="input-warning">This field is required</p>
                )}

                {errors.lastname?.type === "maxLength" && (
                  <p className="input-warning">
                    You have exceeded the maximum number of characters.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row input-name">
                <label>E-mail</label>
              </div>
              <div className="row input-container">
                <input
                  className="inputs"
                  type="text"
                  {...register("email", {
                    required: true,
                    maxLength: 30,
                    pattern:
                      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                  })}
                />
                {errors.email?.type === "pattern" && (
                  <p className="input-warning">Please enter a valid email</p>
                )}
                {errors.email?.type === "required" && (
                  <p className="input-warning">This field is required</p>
                )}
                {errors.email?.type === "maxLength" && (
                  <p className="input-warning">
                    You have exceeded the maximum number of characters.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row input-name">
                <label>Message</label>
              </div>
              <div className="row input-container">
                <input
                  className="inputs"
                  type="text"
                  {...register("message", { maxLength: 700 })}
                />
                {errors.message?.type === "maxLength" && (
                  <p className="input-warning">
                    You have exceeded the maximum number of characters.
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="row submit-button d-flex justify-content-center">
            <input
              id="submit-button"
              disabled={!isDirty}
              className={`submit ${!isDirty ? "disabled-button" : null}`}
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
