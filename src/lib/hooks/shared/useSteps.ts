import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

interface Helpers {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  hasNextStep: boolean;
  hasPrevStep: boolean;
  activeStep: Step;
}

export interface Step {
  id: number;
  path: string;
  element: JSX.Element;
}

function useSteps(steps: Step[]): Helpers {
  const { pathname } = useLocation();

  const [activeStep, setActiveStep] = useState<Step>(() => {
    let step = steps.find((s: Step) => pathname.includes(s.path));

    if (!step) return steps[0];

    return step;
  });

  const activeStepIndex = useMemo(() => {
    return steps.findIndex((s) => s.id === activeStep.id);
  }, [activeStep]);

  const goToNextStep = () => {
    if (activeStepIndex >= steps.length - 1) return;

    setActiveStep(steps[activeStepIndex + 1]);
  };

  const goToPrevStep = () => {
    if (activeStepIndex <= 0) return;

    setActiveStep(steps[activeStepIndex - 1]);
  };

  return {
    goToNextStep,
    goToPrevStep,
    hasNextStep: activeStepIndex < steps.length - 1,
    hasPrevStep: activeStepIndex > 0,
    activeStep,
  };
}

export default useSteps;
