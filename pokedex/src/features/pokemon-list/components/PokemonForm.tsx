import { useState } from "react";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, type, height, weight);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <input
          id="type"
          type="text"
          value={type}
          onChange={(e) => setType(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="height">Height</label>
        <input
          id="height"
          type="text"
          value={height}
          onChange={(e) => setHeight(e.currentTarget.value)}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.currentTarget.value)}
        />
      </div>

      <button type="submit">Add Pokemon</button>
    </form>
  );
}
