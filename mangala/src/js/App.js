import React, { useState } from "react";
import Board from "./Board";
import { Button, Modal, Form } from "react-bootstrap";
import arrowPng from "../img/arrow.png";

const PlayerName = props => {
  return (
    <div className="headingDiv">
      <span className="wrapper">
        <img
          src={arrowPng}
          alt=""
          className={
            props.playersTurn.length > 0
              ? props.playersTurn === props.playersName
                ? "show"
                : "hide"
              : "hide"
          }
        />
        <span className="heading">{props.playersName}</span>
      </span>
    </div>
  );
};

function App() {
  const initialPlayers = { user1: "", user2: "" };
  const initialGems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const initialGemsStart = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0];
  const [pitsGems, setPitsGems] = useState(initialGems);
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
      setPitsGems(initialGemsStart);
      setGameStatus(true);
      setPlayersTurn(players.user1);
      handleModalClose();
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const resetGame = () => {
    setPitsGems(initialGems);
    setPlayers(initialPlayers);
    setPlayersTurn("");
    setGameStatus(false);
  };

  const handleInputChange = event => {
    const { id, value } = event.target;
    setPlayers({ ...players, [id]: value });
  };

  const onPitClick = param => {
    let nextIndex;
    setPitsGems(pitsGems => {
      let tmpPitsGems = [...pitsGems];
      let nextPits;
      let currentPitGems = tmpPitsGems[param];

      if (currentPitGems > 1) {
        nextPits = currentPitGems - 1;
        currentPitGems = 1;
      } else {
        nextPits = 1;
        currentPitGems = 0;
      }

      tmpPitsGems[param] = currentPitGems;

      if (playersTurn === players.user1) {
        let i = 1;
        for (i; i <= nextPits; i++) {
          nextIndex = param + i;
          if (param > 5 && param < 12) {
            if (nextIndex > 12) {
              nextIndex = 18 - nextIndex;
              if (nextIndex < 0) {
                nextIndex = nextIndex + 7;
              }
            }
            tmpPitsGems[nextIndex]++;
          }
        }
        return tmpPitsGems;
      } else {
        let i = 1;
        for (i; i <= nextPits; i++) {
          nextIndex = param - i;
          if (param > -1 && param < 6) {
            if (nextIndex < 0) {
              if (nextIndex === -1) {
                nextIndex = 13;
              } else {
                nextIndex = 4 - nextIndex;
              }
            }
            tmpPitsGems[nextIndex]++;
          }
        }
        return tmpPitsGems;
      }
    });

    console.log(nextIndex);
    setPlayersTurn(playersTurn => {
      if (
        !(nextIndex === 12 && playersTurn === players.user1) ||
        !(nextIndex === 13 && playersTurn === players.user2)
      ) {
        return playersTurn = players.user1 ? players.user2 : players.user1;
      }
    });
  };

  return (
    <div>
      <PlayerName playersTurn={playersTurn} playersName={players.user2} />
      <Board
        pitsGems={pitsGems}
        onPitClick={index => onPitClick(index)}
        playersTurn={playersTurn}
        players={players}
      />
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
