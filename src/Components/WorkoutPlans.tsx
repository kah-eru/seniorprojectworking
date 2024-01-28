// WorkoutPlan.tsx
import { Button, Container, Typography } from '@mui/material';
import React from 'react';

interface Workout {
  name: string;
  reps: number;
  sets: number;
}

interface WorkoutPlanProps {
  workouts: Workout[];
  onStartWorkout: (workoutName: string) => void;
}

const WorkoutPlan: React.FC<WorkoutPlanProps> = ({ workouts, onStartWorkout }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      {workouts.map((workout) => (
        <div key={workout.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <Typography variant="body1" color="white">
            {workout.name}
          </Typography>
          <Typography variant="body1" color="white">
            {`${workout.reps} reps / ${workout.sets} sets`}
          </Typography>
          <Button
            variant="contained"
            size="large"
            style={{ backgroundColor: 'blue' }}
            onClick={() => onStartWorkout(workout.name)}
          >
            Start Workout
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default WorkoutPlan;
