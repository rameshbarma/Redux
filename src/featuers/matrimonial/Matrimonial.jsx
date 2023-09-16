import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPesrons } from "./matrimonialSlice";

const Matrimonial = () => {
  const [state, setState] = useState(null);
  const [gender, setGender] = useState(null);
  const [marital, setmarital] = useState(null);
  const [job, setJob] = useState(null);
  //console.log(filtredPersons);
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.matrimonial.data);
  console.log(persons);

  const states = [...new Set(persons.map((person) => person.state))];
  console.log(states);
  const genders = [...new Set(persons.map((person) => person.gender))];
  const maritals = [...new Set(persons.map((person) => person.marital))];
  const jobs = [...new Set(persons.map((person) => person.job))];
  const handelState = (e) => {
    setState(e.target.value);
  };
  const handelGender = (e) => {
    setGender(e.target.value);
  };
  const handelmarital = (e) => {
    setmarital(e.target.value);
  };
  const handelJob = (e) => {
    setJob(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchPesrons());
  }, []);
  // const fetchPesrons = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3004/persons");
  //     const data = await response.json();
  //     setPersons(data);
  //     console.log(data);
  //   } catch (error) {}
  // };

  // let filtredPersons = state
  //   ? persons.filter((item) => item.state === state)
  //   : persons;

  // filtredPersons = gender
  //   ? filtredPersons.filter((item) => item.gender === gender)
  //   : filtredPersons;
  // filtredPersons = marital
  //   ? filtredPersons.filter((item) => item.marital === marital)
  //   : filtredPersons;
  // filtredPersons = job
  //   ? filtredPersons.filter((item) => item.job === job)
  //   : filtredPersons;
  let filtredPersons = persons.filter((item) => {
    return (
      (!state || item.state === state) &&
      (!gender || item.gender === gender) &&
      (!marital || item.marital === marital) &&
      (!job || item.job === job)
    );
  });

  console.log(filtredPersons);
  var tableHeadings = persons.length > 0 ? Object.keys(persons[0]) : [];
  return (
    <div>
      <h1>Matrimonial</h1>
      <div className="parent">
        <div>
          <h1>Select The Place</h1>
          <select name="state" id="state" onChange={handelState}>
            <option value="">select</option>
            {states.map((state) => (
              <option value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div>
          <h1>Select The Gender</h1>
          <select name="gender" id="gender" onChange={handelGender}>
            <option value="">select</option>
            {genders.map((gender) => (
              <option value={gender}>{gender}</option>
            ))}
            marital
          </select>
        </div>
        <div>
          <h1>Select The Status</h1>
          <select name="marital" id="marital" onChange={handelmarital}>
            <option value="">select</option>
            {maritals.map((marital) => (
              <option value={marital}>{marital}</option>
            ))}
          </select>
        </div>
        <div>
          <h1>Select The JOB</h1>
          <select name="job" id="job" onChange={handelJob}>
            <option value="">select</option>
            {jobs.map((job) => (
              <option value={job}>{job}</option>
            ))}
          </select>
        </div>
      </div>

      <table>
        <tr>
          {tableHeadings.map((items) => (
            <th>{items}</th>
          ))}
        </tr>
        {filtredPersons.map((person) => (
          <tr>
            {Object.values(person).map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Matrimonial;
