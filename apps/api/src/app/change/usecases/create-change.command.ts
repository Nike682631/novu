import { ChangeEntityTypeEnum } from '@novu/shared';
import { IsDefined, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Document } from 'mongoose';
import { EnvironmentWithUserCommand } from '../../shared/commands/project.command';

export interface IItem extends Pick<Document, '_id'> {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export class CreateChangeCommand extends EnvironmentWithUserCommand {
  @IsDefined()
  item: IItem;

  @IsDefined()
  @IsString()
  type: ChangeEntityTypeEnum;

  @IsMongoId()
  changeId: string;

  @IsMongoId()
  @IsOptional()
  parentChangeId?: string;
}
