import React, { useState } from "react";
import Board from "./Board";
import { Button, Modal, Form } from "react-bootstrap";

function App() {
  const [pitsGems, setPitsGems] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [gameStatus, setGameStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [players, setPlayers] = useState({user1:'',user2:''});
  const [playersTurn, setPlayersTurn] = useState('');

  const handleModalClose = () => setShowModal(false);
  const handleModalShow = () => setShowModal(true);

  const startGame = () => {
    changePitGems(4);
    setGameStatus(true);
    setPlayersTurn(`${players.user1}`);
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
    playersTurn===players.user1 ? setPlayersTurn(`${players.user2}`) : setPlayersTurn(`${players.user1}`);
  };

  return (
    <div>
      <h1>{players.user2}</h1>
      <Board pitsGems={pitsGems} onPitClick={index => onPitClick(index)} />
      <h1>{players.user1}</h1>
      <Button className="startReset" type="button" onClick={gameStatus ? resetGame : handleModalShow}>
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
