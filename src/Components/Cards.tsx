// Workout.tsx
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface WorkoutProps {
  id: number;
  title: string;
  description: string;
  image: string;
  onClickPlan: () => void; // Callback function to handle showing the workout plan
}

const Workout: React.FC<WorkoutProps> = ({ id, title, description, image, onClickPlan }) => {
  return (
    <Card sx={{ borderRadius: 1, height: 340, width: 340, margin: '20px' }}>
      <CardMedia component="img" height="180" image={image} alt={`Workout ${id}`} />
      <CardContent sx={{ height: '100%', backgroundColor: '#1A1A1A', overflow: 'hidden' }}>
        <Typography gutterBottom variant="h5" component="div" color="white">
          {title}
        </Typography>
        <Typography variant="body2" color="white">
          {description}
        </Typography>
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button
            sx={{ borderRadius: 10, marginTop: '10px' }}
            variant="contained"
            size="medium"
            color="primary"
            onClick={onClickPlan} // Call the callback function on button click
          >
            Plan
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Workout;
