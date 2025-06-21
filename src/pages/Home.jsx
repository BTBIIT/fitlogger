// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutListByDate from "../components/WorkoutListByDate";

const STORAGE_KEY = "fitlogger_workouts";

function Home() {
  const today = new Date().toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(today);
  const [workoutsByDate, setWorkoutsByDate] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // localStorage에 반영
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(workoutsByDate));
  }, [workoutsByDate]);

  // 운동 추가 함수
  const addWorkout = (workout) => {
    setWorkoutsByDate((prev) => {
      const existingDateEntry = prev.find((entry) => entry.date === selectedDate);

      if (existingDateEntry) {
        return prev.map((entry) =>
          entry.date === selectedDate
            ? {
                ...entry,
                records: [...entry.records, workout],
              }
            : entry
        );
      } else {
        return [...prev, { date: selectedDate, records: [workout] }];
      }
    });
  };

  // 운동 삭제 함수
  const deleteWorkout = (id) => {
    setWorkoutsByDate((prev) =>
      prev
        .map((entry) => {
          if (entry.date === selectedDate) {
            const newRecords = entry.records.filter((w) => w.id !== id);
            return { ...entry, records: newRecords };
          }
          return entry;
        })
        .filter((entry) => entry.records.length > 0)
    );
  };

  const workoutsForSelectedDate =
    workoutsByDate.find((entry) => entry.date === selectedDate)?.records || [];

  return (
    <div style={{ padding: "1rem" }}>
      <label>
        날짜 선택:{" "}
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          max={today}
        />
      </label>

      <WorkoutForm onAdd={addWorkout} />

      <WorkoutListByDate
        date={selectedDate}
        workouts={workoutsForSelectedDate}
        onDeleteWorkout={deleteWorkout}
      />
    </div>
  );
}

export default Home;
