import { useState } from "react";
import InputControl from "./InputControl";
import { usePokemonCreateMutation } from "../mutations";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function PokemonForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const navigate = useNavigate();

  const pokemonCreateMutation = usePokemonCreateMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, type, height, weight);
    const payload = {
      name,
      type,
      height: Number(height),
      weight: Number(weight),
    };

    pokemonCreateMutation.mutate(payload, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputControl
        label="Name"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        required
      />
      <InputControl
        label="Type"
        id="type"
        name="type"
        value={type}
        onChange={(e) => setType(e.currentTarget.value)}
        required
      />

      <InputControl
        label="Height"
        id="height"
        name="height"
        value={height}
        onChange={(e) => setHeight(e.currentTarget.value)}
        required
      />

      <InputControl
        label="Weight"
        id="weight"
        name="weight"
        value={weight}
        onChange={(e) => setWeight(e.currentTarget.value)}
        required
      />

      <button type="submit">Add Pokemon</button>
    </form>
  );
}
