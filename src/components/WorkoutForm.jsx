import { useState } from "react";

export default function WorkoutForm({ onAdd }) {
  const [exercise, setExercise] = useState("");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!exercise || !weight || !reps) return;

    onAdd({
      id: Date.now(),
      exercise,
      weight: Number(weight),
      reps: Number(reps),
    });

    setExercise("");
    setWeight("");
    setReps("");
  };

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="운동 이름"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        className="inputField"
      />
      <input
        type="number"
        placeholder="무게 (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="inputField"
      />
      <input
        type="number"
        placeholder="반복 횟수"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className="inputField"
      />
      <button type="submit" className="button">
        추가
      </button>
    </form>
  );
}
