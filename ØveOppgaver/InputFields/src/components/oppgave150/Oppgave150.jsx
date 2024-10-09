import { useState } from 'react';

export default function Oppgave150() {
  let number1 = Math.floor(Math.random() * 11);
  let number2 = Math.floor(Math.random() * 11);
  let sum = number1 + number2;

  return (
    <>
      <h1>Oppgave 1.50</h1>

      <p>{number1}</p>
      <p>{number2}</p>
      <p>{sum}</p>
    </>
  );
}
