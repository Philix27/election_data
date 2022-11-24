import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useRouter } from "next/router";
import { Modal } from "../global/Modal";
import AgentModalContent from "./modalContent";
import Link from "next/link";
import { list } from "firebase/storage";

export default function AgentsComp({ agentsList, totalCount, length }) {
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [agts, setAgents] = useState(agentsList);
  const [showModal, setShowModal] = useState(false);
  const [clickedAgent, setClickedAgent] = useState({});
  const router = useRouter();

  var buttonCount = totalCount / length;
  buttonCount = Math.trunc(buttonCount);
  buttonCount++;

  const onSearch = (e) => {
    const searchTerm = e.target.value;
    const tempList = [];
    tempList = agentsList.filter((agent) => {
      const names = `${agent.firstName} ${agent.lastName} ${agent.name}`;
      if (agent.name) {
        return agent.name.toLowerCase().includes(searchTerm.toLowerCase());
      } else {
        return names.toLowerCase().includes(searchTerm.toLowerCase());
      }
    });
    setAgents(tempList);
  };

  const onDelete = (agent) => {
    Axios.delete(`https://rxedu-api.vercel.app/api/v1/agent/${agent._id}`)
      .then((response) => {
        setIsSuccessful(true);
        alert("Deleted Successfully");

        // console.log("Successfully Deleted ");
        router.reload(window.location.pathname);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 5000);
      })
      .catch((e) => {
        console.log(e);
        console.log("Opps an error ocured");
      });
  };

  function _showModal(agent) {
    console.log("agent");
    console.log(agent);
    setClickedAgent(agent);
    setShowModal(true);
  }

  var listWidget = [];

  for (let i = 0; i < buttonCount; i++) {
    listWidget.push(<div>{i}</div>);
  }

  return (
    <div className=" agentsList">
      <div className="tableSection">
        <div className="input">
          <input
            type="search"
            placeholder="Search for an agent"
            onChange={onSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Img</th>
              <th>Name</th>
              <th>Agent Type</th>
              <th>Election Type</th>
            </tr>
          </thead>
          <tbody>
            {agts.map((agent, index) => {
              const namer = `${agent.lastName} ${agent.firstName}`;
              return (
                <tr key={index}>
                  <td>{index + 1}.</td>
                  <td>
                    <img src={agent.image} alt={agent.name}></img>
                  </td>
                  <td>{namer.toUpperCase()}</td>
                  <td>{agent.agentType}</td>
                  <td>{agent.electionType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>{listWidget.map((wid, index) => wid)}</div>
      </div>
    </div>
  );
}
