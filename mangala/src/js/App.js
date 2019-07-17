import React, { useState } from "react";
import Board from "./Board";
import { Button, Modal, Form } from "react-bootstrap";
import arrowPng from "../img/arrow.png";

const PlayerName = props => {
  return (
    <div className="headingDiv">
      <span class="wrapper">
      <img src={arrowPng} alt="" className={props.playersTurn.length>0?(props.playersTurn === props.playersName ? "show" : "hide"):"hide"} />
      <span className="heading">
        {props.playersName}
      </span>
      </span>
    </div>
  );
};

function App() {
  const initialPlayers = { user1: "", user2: "" };
  const [pitsGems, setPitsGems] = useState([0,0,0,0,0,0,0,0,0,0,0,0]);
  const [gameStatus, setGameStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState(initialPlayers);
  const [playersTurn, setPlayersTurn] = useState("");
  const [validated, setValidated] = useState(false);

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const startGame = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      changePitGems(4);
      setGameStatus(true);
      setPlayersTurn(players.user1);
      handleModalClose();
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const resetGame = () => {
    changePitGems(0);
    setPlayers(initialPlayers);
    setPlayersTurn("");
    setGameStatus(false);
  };

  const changePitGems = gems => {
    setPitsGems(pitsGems =>
      pitsGems.map(pit => {
        pit = gems;
        return pit;
      })
    );
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setPlayers({ ...players, [id]: value });
  };

  const onPitClick = param => {
    setPitsGems(pitsGems => {
      let tmpPitsGems = [...pitsGems];
      let nextPits = tmpPitsGems[param] - 1;
      tmpPitsGems[param] = 1;
      let i = 1;
      for (i; i <= nextPits; i++) {
        tmpPitsGems[param + i]++;
      }
      return tmpPitsGems;
    });

    setPlayersTurn(
      playersTurn === players.user1 ? players.user2 : players.user1
    );
  };

  return (
    <div>
      <PlayerName playersTurn={playersTurn} playersName={players.user2} />
      <Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} />
      <PlayerName playersTurn={playersTurn} playersName={players.user1} />
      <Button
        className="startReset"
        type="button"
        onClick={gameStatus ? resetGame : handleModalShow}
      >
        {gameStatus ? "Baştan Başla" : "Başla"}
      </Button>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oyuncu İsimleri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lütfen oyuncu isimlerini giriniz.
          <br />
          <br />
          <Form
            noValidate
            validated={validated}
            id="playersNames"
            onSubmit={startGame}
          >
            <Form.Group controlId="user1">
              <Form.Control
                type="text"
                placeholder="1. Oyuncu"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="user2">
              <Form.Control
                type="text"
                placeholder="2. Oyuncu"
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            İptal
          </Button>
          <Button variant="primary" type="submit" form="playersNames">
            Başla
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
