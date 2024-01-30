import { Button, Container, Typography } from '@mui/material';
import React from 'react';

interface WorkoutDetailsProps {
  workoutName: string;
  workoutReps: number;
  workoutSets: number;
  workoutIndex: number;
  totalWorkouts: number;
  onNextWorkout?: () => void;
  onPreviousWorkout?: () => void;
  onBackToWorkouts?: () => void;
  completedFirstWorkout: boolean;
  workoutPlanData: { workouts: { name: string; reps: number; sets: number }[] }; // Add this prop
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({
  workoutName,
  workoutReps,
  workoutSets,
  workoutIndex,
  totalWorkouts,
  onNextWorkout,
  onPreviousWorkout,
  onBackToWorkouts,
  completedFirstWorkout,
  workoutPlanData,
}) => {

  const handleNextWorkout = () => {
    onNextWorkout && onNextWorkout();
  };

  const handlePreviousWorkout = () => {
    onPreviousWorkout && onPreviousWorkout();
  };

  const getWorkoutName = () => {
    if (workoutIndex >= 0 && workoutIndex < totalWorkouts) {
      return workoutPlanData.workouts[workoutIndex].name;
    }
    return workoutName;
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Workout Details
      </Typography>

      <Typography variant="h5" color="white" paragraph>
        {/* Display the workout name dynamically */}
        Details for {getWorkoutName()}
      </Typography>

      <Typography variant="body1" color="white" paragraph>
        {`${workoutReps} reps / ${workoutSets} sets`}
      </Typography>

      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={completedFirstWorkout ? handlePreviousWorkout : onBackToWorkouts}
        sx={{ marginRight: 2 }}
      >
        {completedFirstWorkout ? 'Previous Exercise' : 'Back to Workouts'}
      </Button>

      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={workoutIndex < totalWorkouts - 1 ? handleNextWorkout : onBackToWorkouts}
      >
        {workoutIndex < totalWorkouts - 1 ? 'Next Exercise' : 'Back to Workouts'}
      </Button>
    </Container>
  );
};

export default WorkoutDetails;
