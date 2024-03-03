export type ResumeItemStack = {
  text: string;
  image?: string;
};

export type RsumeItemDescription = {
  summary: string;
  stack: ResumeItemStack[];
};

export type ResumeItem = {
  title: string;
  description: RsumeItemDescription;
};
