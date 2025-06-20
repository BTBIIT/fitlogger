import React from "react";
import { calculate1RM } from "../utils/calculate1RM";

function WorkoutListByDate({ date, workouts, onDeleteWorkout }) {
  if (workouts.length === 0) return <p>{date}에 운동 기록이 없습니다.</p>;

  return (
    <div className="workout-date-section">
      <h3>{date} 운동 기록</h3>
      <ul className="workout-list">
        {workouts.map((w) => (
          <li key={w.id} className="workout-card">
            <div className="workout-info">
              <strong>{w.exercise}</strong>
              <div className="details">
                {w.weight}kg × {w.reps}회
              </div>
              <div className="one-rm">
                1RM: {calculate1RM(w.weight, w.reps)}kg
              </div>
            </div>
            <button className="deleteBtn" onClick={() => onDeleteWorkout(w.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutListByDate;
