import React, { useState, useEffect } from "react";
import axios from "axios";
import profile from "./assets/prof.jpg";
import "./css/Bar.css";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import {
  setEmployees,
  deleteEmpError,
  deleteEmpSucc,
} from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const ListEmp = () => {
  /*const [text, setText] = useState([]);
  const [Search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080").then((response) => {
      setText(response.data);
      console.log(response);
    });
  }, []);

  const filter = (e) => {
    if (e == "") {
      axios.get("http://localhost:8080").then((response) => {
        setText(response.data);
        console.log(response);
      });
    }
    let newText = text.filter(
      (t) => t.name.toLowerCase().indexOf(e.toLowerCase()) > 0
    );
    console.log("new text", newText);
    setText(newText);
  };
  const handle = (e) => {
    filter(e);
    setSearch(e);
  };*/
  const handleAll = (e) => {
    console.log(e.target.value);
    /* e = "da";
    let newText = text.filter(
      (t) => t.name.toLowerCase().indexOf(e.toLowerCase()) > 0
    );
    console.log("new text", newText);
    setText(newText); */
  };

  const employees = useSelector((state) => state.allEmployees.employees);
  const [test, setTest] = useState(false);
  const dispatch = useDispatch();
  const fetchEmp = async () => {
    const response = await axios
      .get("http://localhost:8080")
      .catch((err) => console.log(err));
      console.log(response)
    dispatch(setEmployees(response.data));
  };
  useEffect(() => {
    fetchEmp();
  }, []);

  const Del = async (id) => {
    console.log("id ", id);
    const response = await axios
      .delete("http://localhost:8080/delete/" + id)
      .then(() => dispatch(deleteEmpSucc(id)))
      .catch((err) => dispatch(deleteEmpError(err)));
  };
  const handleDel = (idd) => {
    /*setTest(employees);
    test.map((t) => console.log(t.id));
    let newText = test.filter((t) => t.id != idd);
    console.log(newText);
    dispatch(deleteEmp(idd));
    fetchEmp();*/
    Del(idd);
  };
  const filtred = (e) => {
    console.log(employees);
    console.log(test);
    if (!test) {
      const newEmp = employees.filter(
        (emp) => emp.division.toLowerCase() === e.target.value.toLowerCase()
      );
      console.log("newEmp", newEmp);

      dispatch(setEmployees(newEmp));
      setTest(true);
    } else {
      fetchEmp();
      setTest(false);
    }
  };
  const filtredByName = (name) => {
    if (name !== "") {
      const newEmp = employees.filter(
        (emp) => emp.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      );

      dispatch(setEmployees(newEmp));
    } else {
      fetchEmp();
    }
  };

  if (employees.length < 1) {
    return <Loading />;
  } else
    return (
      <>
        <div className='adjust d-flex justify-content-between'>
          <div className='d-flex justify-content-around'>
            <button
              className='rounds cont'
              value='RH'
              onClick={(e) => filtred(e)}
            >
              RH
            </button>
            <button
              className='rounds cont'
              value='Finance'
              onClick={(e) => filtred(e)}
            >
              Finance
            </button>
            <button
              className='rounds cont'
              value='Marketing'
              onClick={(e) => filtred(e)}
            >
              Marketing
            </button>
            <button
              className='rounds cont'
              value='Sponsoring'
              onClick={(e) => filtred(e)}
            >
              Sponsoring
            </button>
          </div>
          <div className='container h-100'>
            <div className='d-flex justify-content-end h-100'>
              <div className='searchbar'>
                <input
                  id='Search'
                  className='search_input'
                  type='text'
                  name='Search'
                  placeholder='Search by name...'
                  autocomplete='off'
                  /* value={Search} */
                  onChange={(e) => filtredByName(e.target.value)}
                  /* onKeyUp={() => filter()} */
                />
                <a href='#' className='search_icon'>
                  <i style={{ fontSize: 1.5 + "rem" }} class='bx bx-search'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-wrap justify-content-around adjust'>
          {employees.map((t) => {
            const { id, dob, name, email, division } = t;
            return (
              <div key={id} className='card' style={{ width: 19 + "rem" }}>
                <img src={profile} class='card-img-top' alt='...' />
                <div className='card-body'>
                  <h5 className='card-title'>{name}</h5>
                  <div class='container'>
                    <div class='row row-cols-2'>
                      <div class='col'>Phone</div>
                      <div class='col'>26456321</div>
                      <div class='col' style={{ width: 63 + "px" }}>
                        Email
                      </div>
                      <div class='col' style={{ width: 73 + "%" }}>
                        {email}
                      </div>
                      <div class='col'>Divison</div>
                      <div class='col'>{division}</div>
                    </div>
                  </div>
                  <div className='d-flex justify-content-between'>
                    <button
                      onClick={() => {
                        handleDel(id);
                      }}
                      className='btn btn-dark'
                    >
                      Delete
                    </button>
                    <Link to={{ pathname: `/single/${id}`, state: { emp: t } }}>
                      <button className='btn btn-dark'>Update</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
};

export default ListEmp;
