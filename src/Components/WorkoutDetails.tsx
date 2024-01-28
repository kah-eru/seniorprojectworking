// WorkoutDetails.tsx
import { Button, Container, Typography } from '@mui/material';
import React from 'react';

interface WorkoutDetailsProps {
  workoutName: string;
  onBackToWorkouts?: () => void; // Make onBackToWorkouts optional
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ workoutName, onBackToWorkouts }) => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 3 }}>
      <Typography variant="h4" color="primary" gutterBottom>
        Workout Details
      </Typography>

      <Typography variant="h5" color="white" paragraph>
        Details for {workoutName}
      </Typography>

      {/* Include additional details or content for the workout as needed */}

      <Button variant="contained" size="large" color="primary" onClick={onBackToWorkouts}>
        Back to Workouts
      </Button>
    </Container>
  );
};

export default WorkoutDetails;
