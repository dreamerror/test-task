import { IsArray, IsHexadecimal, IsNumberString } from 'class-validator';

export class BlockDto {
  @IsHexadecimal()
  difficulty: string;

  @IsHexadecimal()
  extraData: string;

  @IsHexadecimal()
  gasLimit: string;

  @IsHexadecimal()
  gasUsed: string;

  @IsHexadecimal()
  hash: string;

  @IsHexadecimal()
  logsBloom: string;

  @IsHexadecimal()
  miner: string;

  @IsHexadecimal()
  mixHash: string;

  @IsHexadecimal()
  nonce: string;

  @IsNumberString()
  number: string;

  @IsHexadecimal()
  parentHash: string;

  @IsHexadecimal()
  receiptsRoot: string;

  @IsHexadecimal()
  sha3Uncles: string;

  @IsHexadecimal()
  size: string;

  @IsHexadecimal()
  stateRoot: string;

  @IsHexadecimal()
  timestamp: string;

  @IsHexadecimal()
  totalDifficulty: string;

  @IsArray()
  transactions: any[];

  @IsHexadecimal()
  transactionsRoot: string;

  @IsArray()
  uncles: any[];
}