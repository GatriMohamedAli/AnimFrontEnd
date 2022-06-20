import React, { useState } from "react";
import profile from "./assets/prof.jpg";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedEmployees } from "../redux/actions/actions";

const SingleEmp = () => {
  const param = useParams();
  /* var { age, dob, email, name } = props.location.state.emp; */
  const all = useSelector((state) => state.allEmployees.employees);
  const dispatch = useDispatch();
  const [loading, Setloading] = useState(false);
  var emp = {};
  useEffect(() => {
    all.map((st) => {
      if (st.id == param.id) {
        emp = Object.assign({}, st);
        dispatch(selectedEmployees(emp));
      }
    });

    Setloading(true);
    return () => {};
  }, [param.id]);
  const empp = useSelector((state) => state.selectedEmp.selected);
  var { age, dob, email, name, division, rank } = empp;
  console.log("name cleanup return emp", name);
  const fn = () => {
    alert("hello");
  };
  if (!loading) {
    return <Loading />;
  } else
    return (
      <div class='container adjust ' style={{ width: "77%" }}>
        <div class='row gutters'>
          <div
            class='col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12'
            style={{ marginTop: "10%" }}
          >
            <div class='card h-50'>
              <div
                class='card-body'
                style={{ boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.2)" }}
              >
                <div class='account-settings'>
                  <div class='card-body'>
                    <div class='d-flex flex-column align-items-center text-center'>
                      <img
                        src={profile}
                        width='200'
                        style={{ borderRadius: 30 + "px" }}
                      />

                      {/* <img src="https://img.icons8.com/officel/100/000000/user.png"/> */}
                      <div class='mt-3'>
                        <h4 style={{ textTransform: "capitalize" }}>{name}</h4>
                        <p class='text-secondary mb-1'>{rank} Chief</p>
                        <p class='text-secondary mb-1'>{division}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12'
            style={{ width: "70%" }}
          >
            <div class='card h-100'>
              <div
                class='card-body'
                style={{
                  boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.2)",
                  width: "90%",
                }}
              >
                <div class='row '>
                  <div class='card-body'>
                    <form
                      method='POST'
                      noValidate
                      encType='multipart/form-data'
                    >
                      <div class='row '>
                        <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                          <h7 class='mb-3 text-primary'>
                            Personal informations
                          </h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <p style={{ marginLeft: "10px" }}>
                            Manage your personal information and those relating
                            to your contacts and your account in general.
                          </p>
                        </div>
                        <div class='row'>
                          <div class='col-sm-3'>
                            <h7 class='mb-0'>Image:</h7>
                          </div>
                          <div class='col-sm-9 text-secondary'>
                            <input
                              className='form-control'
                              type='file'
                              name=''
                              id=''
                              style={{ width: "70%" }}
                            />
                          </div>
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Name:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            value={name}
                            onChange={() => fn()}
                            style={{ width: "70%" }}
                          ></input>
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Family name:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Age:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            value={age}
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Date of birth :</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            value={dob}
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Adress:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Email:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            value={email}
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Phone number:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            className='form-control'
                            type='text'
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Rank:</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <div class='control'>
                            <select
                              class='form-control'
                              name='role'
                              id='form.role'
                              style={{ width: "70%" }}
                            >
                              <option value=''></option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-sm-3'>
                          <h7 class='mb-0'>Mot de passe</h7>
                        </div>
                        <div class='col-sm-9 text-secondary'>
                          <input
                            type='password'
                            class='form-control'
                            name='motDePasse'
                            value=''
                            readonly
                            style={{ width: "70%" }}
                          />
                        </div>
                      </div>

                      <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                        <h7 class='mb-3 text-primary'>Security :</h7>
                      </div>
                      <div class='row'>
                        <div class='col-sm-9 text-secondary'>
                          <p>Tip: Update your password once in a while.</p>
                        </div>
                        <div>
                          <a class='nav-link text-dark font-italic'>
                            {" "}
                            <i class='fa fa-key' aria-hidden='true'></i>Changer
                            le mot de passe
                          </a>
                        </div>
                      </div>

                      <div class='row'>
                        <div class='col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                          <div className='d-flex justify-content-around'>
                            <button
                              class='btn btn-primary'
                              type='submit'
                              name='Valider'
                              // style='margin-left:40%'
                            >
                              Update
                            </button>
                            <Link to='/'>
                              <button
                                type='button'
                                name='Annuler'
                                class='btn btn-secondary'
                              >
                                Cancel
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default SingleEmp;
