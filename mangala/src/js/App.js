import React, { useState } from "react";
import Board from "./Board";
import { Button, Modal, Form } from "react-bootstrap";

function App() {
  const initialPitsGems = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const [pitsGems, setPitsGems] = useState(initialPitsGems);
  const [gameStatus, setGameStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState({user1:'',user2:''});

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const startGame = () => {
    changePitGems(4);
    setGameStatus(true);
    handleModalClose();
  };

  const resetGame = () => {
    changePitGems(0);
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
    const { id, value } = event.target
		setPlayers({...players, [id]: value })
	}

  const onPitClick = param => {
    setPitsGems(pitsGems => {
      let tmpPitsGems = [...pitsGems];
      let nextPits = tmpPitsGems[param] - 1;
      tmpPitsGems[param]=1;
      let i = 1;
      for (i; i <= nextPits; i++) {
        tmpPitsGems[param + i]++;
      }
      return tmpPitsGems;
    });
  };

  return (
    <div>
      <Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} />
      <Button className="startReset" type="button" onClick={gameStatus ? resetGame : handleModalShow}>
        {gameStatus ? "Baştan Başla" : "Başla"}
      </Button>
      {console.log(players)}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oyuncu İsimleri</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lütfen oyuncu isimlerini giriniz.
          <br />
          <br />
          <Form>
            <Form.Group controlId="user1">
              <Form.Control type="text" placeholder="1. Oyuncu" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group controlId="user2">
              <Form.Control type="text" placeholder="2. Oyuncu" onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            İptal
          </Button>
          <Button variant="primary" onClick={startGame}>
            Başla
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
