import { PartialType } from '@nestjs/mapped-types';
import { IsPositive } from 'class-validator';

class MinigameParameters {
    @IsPositive({message: "Debe ser un valor positivo"})
    highScoreDDOS: number;
    @IsPositive({message: "Debe ser un valor positivo"})
    highScorePhishing: number;
    @IsPositive({message: "Debe ser un valor positivo"})
    highScoreWorm: number;
}

export class UpdateMinigameDto extends PartialType(MinigameParameters){}
