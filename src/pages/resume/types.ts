export type RsumeItemDescription = {
  summary: string;
  stack: string[];
};

export type ResumeItem = {
  title: string;
  description: RsumeItemDescription;
};
