import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const {sprites, hp, name} = pokemon
  const [isFront, setIsFront] = useState(true)

  function toggleFront(){
    setIsFront(!isFront)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img alt={name} onClick={toggleFront} src={isFront ? sprites.front : sprites.back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            { hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
