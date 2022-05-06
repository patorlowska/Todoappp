export interface TaskDTO {
  readonly created: number;
  readonly taskDescription: string;
  readonly id: string;
  readonly done: boolean;
  readonly taskEdit: boolean;
}
