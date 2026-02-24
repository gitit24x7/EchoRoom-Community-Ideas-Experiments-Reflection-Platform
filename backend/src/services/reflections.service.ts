// backend/src/services/reflections.service.ts

export interface Reflection {
  id: number;
  outcomeId: number;
  content: string; // Keep for legacy/fallback
  whatWentWell: string;
  challenges: string;
  surprises: string;
  nextSteps: string;
  createdAt: Date;
}


// in-memory storage
let reflections: Reflection[] = [];
let nextId = 1;


// Create reflection
export const createReflection = (
  outcomeId: number,
  content: string,
  whatWentWell: string,
  challenges: string,
  surprises: string,
  nextSteps: string
): Reflection => {
  const newReflection: Reflection = {
    id: nextId++,
    outcomeId,
    content,
    whatWentWell,
    challenges,
    surprises,
    nextSteps,
    createdAt: new Date(),
  };

  reflections.push(newReflection);

  return newReflection;
};


// Get all reflections
export const getAllReflections = (): Reflection[] => {
  return reflections;
};


// Get reflections by outcome ID
export const getReflectionsByOutcomeId = (
  outcomeId: number
): Reflection[] => {

  return reflections.filter(
    reflection => reflection.outcomeId === outcomeId
  );

};
