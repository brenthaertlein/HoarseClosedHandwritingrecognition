import React, {useState} from 'react';
import {Button, Image} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


const Birds = () => {

  const [birds, setBirds] = useState([])

  const addBird = () => {
    const bird = {
      src: "https://i.imgur.com/twTpVHk.jpeg",
      id: uuidv4()
    }
    setBirds(it => [...it, bird])
  }

  const removeBird = ({id}) => {
    setBirds(it => it.splice(it.findIndex(item => item.id === id), 1))
  }

  const sunglasses = ({id}) => {
    const bird = birds.find(it => it.id === id)
    bird.src = "https://i.imgur.com/S0JHF5j.jpg"
    setBirds(it => [...it])
  }

  return (
    <>
      <Button variant={"dark"} onClick={addBird} style={{marginBottom: "1em"}}>I'm feeling Plucky</Button>
      <div>
        {
          birds.map(bird =>
            <span key={bird.id}>
              <div style={{marginBottom: "0.5em"}}>
                <Button variant={"dark"} onClick={() => sunglasses(bird)}>I like this bird</Button>
                <Button variant="dark" onClick={() => removeBird(bird)}>Make the bird go away</Button>
              </div>
              <Image src={bird.src} style={{height: "400px", width: "600px"}}/>
            </span>
          )
        }
      </div>
    </>
  )
}

export default Birds