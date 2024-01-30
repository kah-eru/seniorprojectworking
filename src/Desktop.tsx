import React, { useState } from "react";
import Workout from "./Components/Cards";
import NavBar from "./Components/NavBar";
import WorkoutDetails from "./Components/WorkoutDetails";
import WorkoutPlan from "./Components/WorkoutPlans"; // Updated import
import Loginbutton from "./Components/LoginButton";
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

const Desktop: React.FC = () => {
  const [showWorkoutPlan, setShowWorkoutPlan] = useState(true); // Set to true initially
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const workoutData = [
    { id: 1, title: 'Workout 1', description: 'This is workout 1 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 2, title: 'Workout 2', description: 'This is workout 2 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 3, title: 'Workout 3', description: 'This is workout 3 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 4, title: 'Workout 4', description: 'This is workout 4 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 5, title: 'Workout 5', description: 'This is workout 5 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 6, title: 'Workout 6', description: 'This is workout 6 consisting of Workouts', image: './images/Workout1.jpg' },
    // Add more workout data as needed
  ];

  const workoutPlanData = {
    workoutImage: '/path/to/workout-image.jpg', // Replace with the actual path
    workouts: [
      { name: 'Workout', reps: 10, sets: 3 },
      { name: 'Workout', reps: 12, sets: 4 },
      { name: 'Workout', reps: 8, sets: 4 },
      // Add more workout data as needed
    ],
    startButtonColor: 'primary', // Change the color as needed
  };


  const navigateBackToDesktop = () => {
    setShowWorkoutPlan(false);
    setSelectedWorkout(null);
  };

  const navigateToWorkoutPlan = () => {
    setShowWorkoutPlan(true);
    setSelectedWorkout(null);
  };

  const navigateToWorkoutDetails = (workoutName: string) => {
    setSelectedWorkout(workoutName);
    setShowWorkoutPlan(false);
  };

  const handleStartWorkout = (workoutName: string) => {
    // Handle any specific actions before showing WorkoutDetails
    console.log(`Starting workout: ${workoutName}`);
    navigateToWorkoutDetails(workoutName);
  };

  return (
    
    <div>
      
    

      <NavBar onNavigateBack={navigateBackToDesktop} />
      {showWorkoutPlan ? (
        <WorkoutPlan workouts={workoutPlanData.workouts} onStartWorkout={handleStartWorkout} />
      ) : selectedWorkout ? (
        <WorkoutDetails workoutName={selectedWorkout} onBackToWorkouts={navigateBackToDesktop} />
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flexWrap: 'wrap' }}>
          {workoutData.map((workout) => (
            <Workout key={workout.id} {...workout} onClickPlan={() => navigateToWorkoutPlan()} />
          ))}
          
        </div>
      )}
      
    </div>
  );
};

export default Desktop;

import React, { useEffect, useState } from "react";
import Workout from "./Components/Cards";
import NavBar from "./Components/NavBar";
import WorkoutDetails from "./Components/WorkoutDetails";
import WorkoutPlan from "./Components/WorkoutPlans";

const Desktop: React.FC = () => {
  const [showWorkoutPlan, setShowWorkoutPlan] = useState(true);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [currentWorkoutIndex, setCurrentWorkoutIndex] = useState<number>(0);
  const [completedFirstWorkout, setCompletedFirstWorkout] = useState<boolean>(false);
  const [selectedWorkoutDetails, setSelectedWorkoutDetails] = useState<{ reps: number; sets: number } | null>(null);

  const workoutData = [
    { id: 1, title: 'Workout 1', description: 'This is workout 1 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 2, title: 'Workout 2', description: 'This is workout 2 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 3, title: 'Workout 3', description: 'This is workout 3 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 4, title: 'Workout 4', description: 'This is workout 4 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 5, title: 'Workout 5', description: 'This is workout 5 consisting of Workouts', image: './images/Workout1.jpg' },
    { id: 6, title: 'Workout 6', description: 'This is workout 6 consisting of Workouts', image: './images/Workout1.jpg' },
  ];

  const workoutPlanData = {
    workoutImage: '/path/to/workout-image.jpg',
    workouts: [
      { name: 'Exercise 1', reps: 10, sets: 3 },
      { name: 'Exercise 2', reps: 12, sets: 4 },
      { name: 'Exercise 3', reps: 8, sets: 4 },
    ],
    startButtonColor: 'primary',
  };

  const navigateBackToDesktop = () => {
    setShowWorkoutPlan(false);
    setSelectedWorkout(null);
    setCurrentWorkoutIndex(0);
    setCompletedFirstWorkout(false);
  };

  const navigateToWorkoutPlan = () => {
    setShowWorkoutPlan(true);
    setSelectedWorkout(null);
    setCompletedFirstWorkout(false);
  };

  const navigateToWorkoutDetails = (workoutName: string) => {
    setSelectedWorkout(workoutName);
    setShowWorkoutPlan(false);
  };

  const handleStartWorkout = (workoutName: string) => {
    const index = workoutPlanData.workouts.findIndex((workout) => workout.name === workoutName);
    setCurrentWorkoutIndex(index >= 0 ? index : 0);
    setSelectedWorkout(workoutName);
    setShowWorkoutPlan(false);
  };

  const handleNextWorkout = () => {
    if (currentWorkoutIndex < workoutPlanData.workouts.length - 1) {
      setCurrentWorkoutIndex((prevIndex) => prevIndex + 1);
      if (currentWorkoutIndex === 0) {
        setCompletedFirstWorkout(true);
      }
    } else {
      setCurrentWorkoutIndex(0);
      setSelectedWorkout(null);
      setCompletedFirstWorkout(false);
    }
  };

  const handlePreviousWorkout = () => {
    if (currentWorkoutIndex > 0) {
      setCurrentWorkoutIndex((prevIndex) => prevIndex - 1);
      if (currentWorkoutIndex === 1) {
        setCompletedFirstWorkout(false);
      }
    }
  };

  useEffect(() => {
    const workoutDetails = workoutPlanData.workouts[currentWorkoutIndex];
    setSelectedWorkoutDetails(workoutDetails || null);
  }, [currentWorkoutIndex, workoutPlanData.workouts]);

  return (
    <div>
      <NavBar onNavigateBack={navigateBackToDesktop} />
      {showWorkoutPlan ? (
        <WorkoutPlan workouts={workoutPlanData.workouts} onStartWorkout={handleStartWorkout} />
      ) : selectedWorkout ? (
        <WorkoutDetails
          workoutName={selectedWorkout}
          workoutReps={selectedWorkoutDetails?.reps || 0}
          workoutSets={selectedWorkoutDetails?.sets || 0}
          workoutIndex={currentWorkoutIndex}
          totalWorkouts={workoutPlanData.workouts.length}
          onNextWorkout={handleNextWorkout}
          onPreviousWorkout={handlePreviousWorkout}
          onBackToWorkouts={navigateBackToDesktop}
          completedFirstWorkout={completedFirstWorkout}
          workoutPlanData={workoutPlanData} // Pass the workout plan data
        />

      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px', flexWrap: 'wrap' }}>
          {workoutData.map((workout) => (
            <Workout key={workout.id} {...workout} onClickPlan={() => navigateToWorkoutPlan()} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Desktop;