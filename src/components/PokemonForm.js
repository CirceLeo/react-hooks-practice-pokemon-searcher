import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addNewPokemon}) {

  const [formData, setFormData] = useState({
    name: '',
    hp: 0,
    sprites: {
    }
  }) 

  function handleChange(event){

    setFormData({
      ...formData,
      [event.target.name] : event.target.value,
    })
  }

  function handleImageChange(event){
    setFormData({
      ...formData,
      sprites:{...formData.sprites, [event.target.name] : event.target.value}}
    )
  }

  function handleOnSubmit(e){
    e.preventDefault()
    addNewPokemon(formData)
    
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleOnSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleChange} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleChange} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front"
            onChange={handleImageChange}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back"
            onChange={handleImageChange}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
