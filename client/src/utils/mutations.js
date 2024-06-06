import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const CREATE_WORKOUT = gql`
  mutation AddWorkout($workoutName: String!, $sets: String!, $reps: String!, $complete: Boolean!, $user: ID!) }
  addWorkout(workoutName: $workoutName, Sets: $sets, Reps: $reps, Complete: $complete, user: $user) {
    Complete
    Reps
    Sets
    _id
    user
    workoutName
  }
}`